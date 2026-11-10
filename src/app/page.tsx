import { Closing } from "@/components/sections/closing"
import { Context } from "@/components/sections/context"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { ExploreGrid } from "@/components/site/explore-grid"

export default function Home() {
  return (
    <>
      <Hero />
      <Context />
      <Problem />
      <ExploreGrid />
      <Closing />
    </>
  )
}
