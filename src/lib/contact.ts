export const CONTACT_INTERESTS = ["sponsorship", "rider", "media", "other"] as const
export type ContactInterest = (typeof CONTACT_INTERESTS)[number]

export type ContactField = "name" | "email" | "message"

/** What the visitor typed, echoed back on errors so the form keeps it after React resets it. */
export type ContactValues = { name: string; email: string; organization: string; interest: string; message: string }

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; reason: "validation"; fields: ContactField[]; values: ContactValues }
  | {
      status: "error"
      reason: "not_configured" | "send_failed"
      /** Short diagnostic shown under the error, e.g. "no-api-key" or "resend-403-validation_error". */
      code: string
      values: ContactValues
    }

/** Where contact form messages are delivered. Override with CONTACT_TO_EMAIL. */
export const DEFAULT_CONTACT_TO = "alonzo@advancetalenthub.com"
