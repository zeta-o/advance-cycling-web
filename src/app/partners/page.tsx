import type { Metadata } from "next"

import { Closing } from "@/components/sections/closing"
import { Partners } from "@/components/sections/partners"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "Partners",
  description: "Support Advance Cycling with equipment or preferential pricing, and what your brand gets in return.",
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
