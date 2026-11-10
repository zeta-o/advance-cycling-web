import type { Metadata } from "next"

import { Calendar } from "@/components/sections/calendar"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "2027 Calendar",
  description:
    "Advance Cycling's 2027 racing calendar: Copa ROES, National Sports Games qualifiers, the Junior and Pre-junior Tour, and events still to be confirmed.",
}

export default function Page() {
  return (
    <>
      <Calendar />
      <PageNav current="/calendar" />
    </>
  )
}
