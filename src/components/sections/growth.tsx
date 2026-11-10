"use client"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { Card } from "@/components/ui/card"
import { useDictionary } from "@/hooks/use-dictionary"
import { cn } from "@/lib/utils"

const plan = [
  { year: 2026, riders: 3, tone: "now" },
  { year: 2027, riders: 4, tone: "next" },
  { year: 2028, riders: 6, tone: "future" },
] as const

const MAX_RIDERS = 6

export function Growth() {
  const t = useDictionary()
  return (
    <Section id="growth" className="bg-glow-lime">
      <SectionHeading eyebrow={t.growth.eyebrow} title={t.growth.title} lede={t.growth.lede} />
      <div className="grid gap-4 md:grid-cols-3">
        {plan.map((season, i) => (
          <Card
            key={season.year}
            className={cn(
              "content-start gap-2.5 rounded-[14px] border border-line p-7 ring-0",
              season.tone === "now" && "card-lime",
              season.tone === "future" && "card-sky"
            )}
          >
            <span
              className={cn(
                "font-mono text-[0.85rem] text-fg-3",
                season.tone === "now" && "text-lime",
                season.tone === "future" && "text-sky"
              )}
            >
              {season.year}
            </span>
            <h3 className="text-[1.3rem] leading-tight font-extrabold">{t.growth.seasons[i].title}</h3>
            <div className="mt-1.5 flex gap-1.5" aria-label={`${season.riders} ${t.growth.ridersLabel}`} role="img">
              {Array.from({ length: MAX_RIDERS }, (_, n) => (
                <i
                  key={n}
                  className={cn(
                    "size-3 rounded-full",
                    n < season.riders
                      ? season.tone === "future"
                        ? "bg-sky"
                        : "bg-lime"
                      : "bg-fg-3/35"
                  )}
                />
              ))}
            </div>
            <p className="text-[0.97rem] font-light">{t.growth.seasons[i].body}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
