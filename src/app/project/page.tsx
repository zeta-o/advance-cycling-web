import type { Metadata } from "next"

import { Growth } from "@/components/sections/growth"
import { Project } from "@/components/sections/project"
import { Riders } from "@/components/sections/riders"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "The project",
  description:
    "What Advance Cycling is, a Costa Rican youth cycling program that turns racing into an education and a career, and the riders on the team and the plan to grow it.",
}

export default function Page() {
  return (
    <>
      <Project />
      <Riders />
      <Growth />
      <PageNav current="/project" />
    </>
  )
}
