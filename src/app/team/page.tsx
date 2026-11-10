import type { Metadata } from "next"

import { Team } from "@/components/sections/team"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "Team",
  description: "The people behind Advance Cycling.",
}

export default function Page() {
  return (
    <>
      <Team />
      <PageNav current="/team" />
    </>
  )
}
