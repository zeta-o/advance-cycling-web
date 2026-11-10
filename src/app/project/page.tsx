import type { Metadata } from "next"

import { Project } from "@/components/sections/project"
import { Riders } from "@/components/sections/riders"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "The project",
  description:
    "What Advance Cycling is, a Costa Rican youth cycling program that turns racing into an education and a career, and the riders on the team.",
}

export default function Page() {
  return (
    <>
      <Project />
      <Riders />
      <PageNav current="/project" />
    </>
  )
}
