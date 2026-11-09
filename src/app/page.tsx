import { Closing } from "@/components/sections/closing"
import { Context } from "@/components/sections/context"
import { Growth } from "@/components/sections/growth"
import { Hero } from "@/components/sections/hero"
import { Method } from "@/components/sections/method"
import { Partners } from "@/components/sections/partners"
import { Problem } from "@/components/sections/problem"
import { Project } from "@/components/sections/project"
import { Riders } from "@/components/sections/riders"
import { TalentHub } from "@/components/sections/talent-hub"
import { Team } from "@/components/sections/team"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Context />
        <Problem />
        <Project />
        <TalentHub />
        <Method />
        <Riders />
        <Growth />
        <Partners />
        <Team />
        <Closing />
      </main>
      <SiteFooter />
    </>
  )
}
