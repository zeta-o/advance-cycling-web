import type { Metadata } from "next"

import { ContactForm } from "@/components/sections/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Advance Cycling about sponsorship, riders or media.",
}

export default function Page() {
  return <ContactForm />
}
