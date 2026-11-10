"use client"

import { CheckCircle2, Send } from "lucide-react"
import { useActionState } from "react"

import { sendContact } from "@/app/contact/actions"
import { Section } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useDictionary } from "@/hooks/use-dictionary"
import { CONTACT_INTERESTS, type ContactField, type ContactState, DEFAULT_CONTACT_TO } from "@/lib/contact"
import { cn } from "@/lib/utils"

const initialState: ContactState = { status: "idle" }

const fieldClass =
  "h-11 rounded-lg border-line bg-ink px-3.5 text-[0.95rem] text-fg placeholder:text-fg-3 md:text-[0.95rem] dark:bg-ink"

export function ContactForm() {
  const t = useDictionary()
  const c = t.contact
  const [state, formAction, pending] = useActionState(sendContact, initialState)
  const values = state.status === "error" ? state.values : undefined
  const invalid = (f: ContactField) => state.status === "error" && state.reason === "validation" && state.fields.includes(f)

  return (
    <Section id="contact" className="bg-glow-navy">
      <div className="grid items-start gap-10 min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] min-[861px]:gap-16">
        <div className="grid min-w-0 gap-3.5">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="h2">{c.title}</h1>
          <p className="lede mt-2">{c.lede}</p>
        </div>

        <Card className="min-w-0 gap-0 rounded-[14px] border border-line p-6 ring-0 md:p-8">
          {state.status === "success" ? (
            <div role="status" className="grid justify-items-start gap-3 py-6">
              <CheckCircle2 className="size-8 text-lime" aria-hidden />
              <h2 className="text-[1.4rem] leading-tight font-extrabold">{c.successTitle}</h2>
              <p className="font-light">{c.successBody}</p>
            </div>
          ) : (
            <form action={formAction} noValidate className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name" className="text-fg">{c.fields.name}</Label>
                  <Input id="contact-name" name="name" defaultValue={values?.name} autoComplete="name" required aria-invalid={invalid("name") || undefined} className={fieldClass} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-email" className="text-fg">{c.fields.email}</Label>
                  <Input id="contact-email" name="email" type="email" defaultValue={values?.email} autoComplete="email" required aria-invalid={invalid("email") || undefined} className={fieldClass} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="contact-organization" className="text-fg">
                    {c.fields.organization} <span className="font-normal text-fg-3">{c.optional}</span>
                  </Label>
                  <Input id="contact-organization" name="organization" defaultValue={values?.organization} autoComplete="organization" className={fieldClass} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-interest" className="text-fg">{c.fields.interest}</Label>
                  <select
                    // Remount so the restored choice survives React's post-action form reset.
                    key={values?.interest ?? "initial"}
                    id="contact-interest"
                    name="interest"
                    defaultValue={values?.interest ?? "sponsorship"}
                    className={cn(fieldClass, "w-full border outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50")}
                  >
                    {CONTACT_INTERESTS.map((key) => (
                      <option key={key} value={key}>
                        {c.interests[key]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="contact-message" className="text-fg">{c.fields.message}</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  defaultValue={values?.message}
                  rows={6}
                  required
                  aria-invalid={invalid("message") || undefined}
                  placeholder={c.messagePlaceholder}
                  className={cn(fieldClass, "h-auto min-h-36 py-3")}
                />
              </div>

              {/* Honeypot for bots; hidden from people and assistive tech. */}
              <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {state.status === "error" && (
                <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-[0.92rem] text-fg">
                  {state.reason === "validation" ? c.errors.validation : c.errors.unavailable}{" "}
                  {state.reason !== "validation" && (
                    <>
                      <span className="font-semibold select-all">{DEFAULT_CONTACT_TO}</span>
                      <span className="mt-1.5 block font-mono text-[0.72rem] text-fg-3">Ref: {state.code}</span>
                    </>
                  )}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-[0.85rem] text-fg-3">{c.replyNote}</p>
                <Button
                  type="submit"
                  disabled={pending}
                  className="h-auto gap-2.5 rounded-full px-[22px] py-[13px] font-heading text-[0.92rem] font-extrabold"
                >
                  {pending ? c.sending : c.submit}
                  <Send className="size-4" aria-hidden />
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </Section>
  )
}
