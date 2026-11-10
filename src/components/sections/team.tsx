"use client"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { Card } from "@/components/ui/card"
import { useDictionary } from "@/hooks/use-dictionary"

export function Team() {
  const t = useDictionary()
  const people = [
    { name: "Alonzo Vargas", initials: "AV", copy: t.team.alonzo, color: "bg-lime" },
    { name: "Minor Arroyo", initials: "MA", copy: t.team.minor, color: "bg-sky" },
  ]
  return (
    <Section id="equipo" className="bg-glow-lime">
      <SectionHeading as="h1" eyebrow={t.team.eyebrow} title={t.team.title} lede={t.team.lede} />
      <div className="grid max-w-[860px] gap-4 sm:grid-cols-2">
        {people.map((p) => (
          <Card key={p.name} className="content-start gap-2 rounded-[14px] border border-line p-7 ring-0">
            <span
              aria-hidden
              className={`mb-2 grid size-[52px] place-items-center rounded-full font-heading text-[1.05rem] font-black text-lime-ink ${p.color}`}
            >
              {p.initials}
            </span>
            <h3 className="text-[1.3rem] leading-tight font-extrabold">{p.name}</h3>
            <p className="text-[0.92rem] font-bold text-sky">{p.copy.role}</p>
            <p className="text-[0.97rem] font-light">{p.copy.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
