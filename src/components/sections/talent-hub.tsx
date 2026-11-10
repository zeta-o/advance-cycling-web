"use client"

import { BarChart3, Bike, FileText, GraduationCap } from "lucide-react"

import { AdvanceMark } from "@/components/site/advance-mark"
import { CtaLink } from "@/components/site/cta-link"
import { Section } from "@/components/site/section-heading"
import { useDictionary } from "@/hooks/use-dictionary"
import { TALENT_HUB_URL } from "@/lib/site"

const icons = [BarChart3, FileText, GraduationCap, Bike]

export function TalentHub() {
  const t = useDictionary()
  return (
    <Section id="talent-hub" className="bg-glow-navy">
      <div className="mb-16 grid items-center gap-9 min-[861px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] min-[861px]:gap-14">
        <div className="grid min-w-0 justify-items-start gap-[18px]">
          <p className="eyebrow">{t.hub.eyebrow}</p>
          <h1 className="h2">{t.hub.title}</h1>
          <p className="lede">{t.hub.lede}</p>
          <p className="lede">{t.hub.lede2}</p>
          <CtaLink href={TALENT_HUB_URL} variant="ghost" icon="external">
            {t.hub.cta}
          </CtaLink>
        </div>

        <div
          role="img"
          aria-label={t.hub.lockupLabel}
          className="grid min-w-0 justify-items-start gap-[22px] rounded-[14px] border border-line px-[22px] py-7 min-[421px]:px-9 min-[421px]:py-10"
          style={{
            background:
              "radial-gradient(90% 90% at 100% 100%, color-mix(in srgb, var(--lime) 8%, transparent), transparent 70%), var(--ink-2)",
          }}
        >
          <AdvanceMark subtitle="CYCLING TEAM" size="md" />
          <span className="flex items-center gap-3 font-mono text-[0.74rem] tracking-[0.08em] text-fg-3 uppercase before:ml-3 before:h-7 before:w-0.5 before:bg-gradient-to-b before:from-fg-3 before:to-lime before:content-['']">
            {t.hub.join}
          </span>
          <AdvanceMark subtitle="TALENT HUB" size="lg" accent />
        </div>
      </div>

      <p className="mb-[18px] font-heading text-[1.15rem] font-extrabold text-fg">{t.hub.whatTitle}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.hub.what.map((item, i) => {
          const Icon = icons[i]
          return (
            <article key={item.title} className="grid content-start gap-2 border-t-2 border-lime pt-5">
              <Icon className="mb-1 size-6 text-lime" aria-hidden />
              <h3 className="text-[1.05rem] leading-tight font-extrabold">{item.title}</h3>
              <p className="text-[0.95rem] font-light">{item.body}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
