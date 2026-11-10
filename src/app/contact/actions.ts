"use server"

import { CONTACT_INTERESTS, type ContactField, type ContactState, type ContactValues, DEFAULT_CONTACT_TO } from "@/lib/contact"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function field(formData: FormData, name: string, max: number) {
  const value = formData.get(name)
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

/**
 * Sends the contact form to CONTACT_TO_EMAIL (default alonzo@advancetalenthub.com) through Resend.
 * Requires RESEND_API_KEY; RESEND_FROM must be an address on a domain verified in Resend.
 */
export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (field(formData, "website", 200)) return { status: "success" }

  const name = field(formData, "name", 120)
  const email = field(formData, "email", 200)
  const organization = field(formData, "organization", 160)
  const interestRaw = field(formData, "interest", 40)
  const interest = (CONTACT_INTERESTS as readonly string[]).includes(interestRaw) ? interestRaw : "other"
  const message = field(formData, "message", 5000)
  const values: ContactValues = { name, email, organization, interest, message }

  const invalid: ContactField[] = []
  if (!name) invalid.push("name")
  if (!EMAIL_RE.test(email)) invalid.push("email")
  if (message.length < 10) invalid.push("message")
  if (invalid.length) return { status: "error", reason: "validation", fields: invalid, values }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set")
    return { status: "error", reason: "not_configured", values }
  }

  const to = process.env.CONTACT_TO_EMAIL || DEFAULT_CONTACT_TO
  const from = process.env.RESEND_FROM || "Advance Cycling <onboarding@resend.dev>"

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "-"}`,
    `Interest: ${interest}`,
    "",
    message,
  ].join("\n")

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Advance Cycling · ${interest} · ${name}`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) {
      console.error("Contact form: Resend responded", res.status, await res.text())
      return { status: "error", reason: "send_failed", values }
    }
  } catch (error) {
    console.error("Contact form: request failed", error)
    return { status: "error", reason: "send_failed", values }
  }

  return { status: "success" }
}
