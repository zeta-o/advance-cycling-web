import type { Metadata } from "next"

import { Growth } from "@/components/sections/growth"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "Growth",
  description: "The Advance Cycling growth plan: three riders in 2026, four in 2027 and a squad of six in 2028.",
}

export default function Page() {
  return (
    <>
      <Growth />
      <PageNav current="/growth" />
    </>
  )
}
