"use client"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { useDictionary } from "@/hooks/use-dictionary"

export function Project() {
  const t = useDictionary()
  return (
    <Section id="proyecto">
      <SectionHeading eyebrow={t.project.eyebrow} title={t.project.title} />
      <div className="grid max-w-[64ch] gap-[1.1em] font-light">
        <p>
          {t.project.p1Before}
          <strong className="font-bold text-fg">{t.project.p1Strong}</strong>
          {t.project.p1After}
        </p>
        <p>{t.project.p2}</p>
      </div>
      <p className="mt-9 max-w-[46ch] font-heading text-[clamp(1.1rem,2vw,1.35rem)] leading-[1.35] font-extrabold text-lime">
        {t.project.motto}
      </p>
    </Section>
  )
}
