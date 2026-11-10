import type { Metadata } from "next"

import { Project } from "@/components/sections/project"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "The project",
  description: "What Advance Cycling is: a Costa Rican youth cycling program that turns racing into an education and a career.",
}

export default function Page() {
  return (
    <>
      <Project />
      <PageNav current="/project" />
    </>
  )
}
