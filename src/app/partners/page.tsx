import type { Metadata } from "next"

import { Closing } from "@/components/sections/closing"
import { Partners } from "@/components/sections/partners"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Advance Cycling is a new project looking for sponsors to take Costa Rican youth cycling to the next level. How to help, and what your brand gets in return.",
}

export default function Page() {
  return (
    <>
      <Partners />
      <PageNav current="/partners" />
      <Closing />
    </>
  )
}
