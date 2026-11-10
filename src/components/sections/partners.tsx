"use client"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { Card } from "@/components/ui/card"
import { useDictionary } from "@/hooks/use-dictionary"
import { cn } from "@/lib/utils"

export function Partners() {
  const t = useDictionary()
  return (
    <Section id="aliados">
      <SectionHeading as="h1" eyebrow={t.partners.eyebrow} title={t.partners.title} lede={t.partners.lede} />
      <div className="mb-14 grid gap-4 md:grid-cols-2">
        {t.partners.offers.map((offer, i) => (
          <Card key={offer.title} className="content-start gap-2.5 rounded-[14px] border border-line p-[30px] ring-0">
            <span
              className={cn(
                "font-heading text-[0.72rem] font-extrabold tracking-[0.18em] uppercase",
                i === 0 ? "text-lime" : "text-sky"
              )}
            >
              {offer.tag}
            </span>
            <h3 className="text-[1.3rem] leading-tight font-extrabold">{offer.title}</h3>
            <p className="text-[17px] font-light">{offer.body}</p>
          </Card>
        ))}
      </div>

      <p className="mb-[18px] font-heading text-[1.15rem] font-extrabold text-fg">{t.partners.returnsTitle}</p>
      <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {t.partners.returns.map((item) => (
          <div key={item.title} className="grid content-start gap-1.5 pt-[22px] pr-[22px]">
            <h3 className="text-[1.02rem] leading-tight font-bold">{item.title}</h3>
            <p className="text-[0.93rem] font-light">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
