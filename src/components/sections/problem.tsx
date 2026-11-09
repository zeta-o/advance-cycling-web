"use client"

import { Section } from "@/components/site/section-heading"
import { useDictionary } from "@/hooks/use-dictionary"

export function Problem() {
  const t = useDictionary()
  return (
    <Section className="bg-glow-navy">
      <div className="grid items-start gap-7 min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] min-[861px]:gap-16">
        <div className="grid min-w-0 gap-3.5">
          <p className="eyebrow">{t.problem.eyebrow}</p>
          <h2 className="h2">{t.problem.title}</h2>
          <p className="mt-7 font-heading text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.12] font-black text-balance text-fg">
            {t.problem.pull} <span className="text-lime">{t.problem.pullAccent}</span>
          </p>
        </div>
        <div className="grid min-w-0 max-w-[64ch] gap-[1.1em] font-light">
          {t.problem.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-bold text-fg">{t.problem.closing}</p>
        </div>
      </div>
    </Section>
  )
}
