import type { Metadata } from "next"

import { Method } from "@/components/sections/method"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "Method",
  description: "How Advance Cycling takes a rider to the next level, in four steps.",
}

export default function Page() {
  return (
    <>
      <Method />
      <PageNav current="/method" />
    </>
  )
}
