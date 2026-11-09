"use client"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { useDictionary } from "@/hooks/use-dictionary"
import { cn } from "@/lib/utils"

export function Method() {
  const t = useDictionary()
  const last = t.method.steps.length - 1
  return (
    <Section id="metodo" className="bg-glow-lime">
      <SectionHeading eyebrow={t.method.eyebrow} title={t.method.title} />
      <ol className="border-t border-line">
        {t.method.steps.map((step, i) => (
          <li
            key={step.title}
            className="grid grid-cols-[56px_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 border-b border-line py-[30px] md:grid-cols-[96px_minmax(0,1fr)_minmax(0,1.4fr)] md:gap-8"
          >
            <span
              className={cn(
                "row-span-2 font-heading text-[1.8rem] leading-none font-black tabular-nums md:row-span-1 md:text-[2.4rem]",
                i === last ? "text-sky" : "text-lime"
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[1.25rem] leading-tight font-extrabold">{step.title}</h3>
            <p className="font-light">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
