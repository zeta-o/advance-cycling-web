import type { Metadata } from "next"

import { TalentHub } from "@/components/sections/talent-hub"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "Advance Talent Hub",
  description: "Advance Cycling Team is part of Advance Talent Hub, which connects young athletes with universities in the U.S. and elsewhere.",
}

export default function Page() {
  return (
    <>
      <TalentHub />
      <PageNav current="/talent-hub" />
    </>
  )
}
