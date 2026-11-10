import type { Metadata } from "next"

import { Riders } from "@/components/sections/riders"
import { PageNav } from "@/components/site/page-nav"

export const metadata: Metadata = {
  title: "Riders",
  description: "Meet Jimena Arroyo, Daniela Arroyo and Saúl Vargas, the first Advance Cycling riders.",
}

export default function Page() {
  return (
    <>
      <Riders />
      <PageNav current="/riders" />
    </>
  )
}
