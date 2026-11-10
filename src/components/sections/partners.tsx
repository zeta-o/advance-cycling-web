"use client"

import { Check } from "lucide-react"

import { Section } from "@/components/site/section-heading"
import { Card } from "@/components/ui/card"
import { useDictionary } from "@/hooks/use-dictionary"
import { cn } from "@/lib/utils"

export function Partners() {
  const t = useDictionary()
  return (
    <Section id="aliados">
      <div className="mb-16 grid items-start gap-7 min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] min-[861px]:gap-16">
        <div className="grid min-w-0 gap-3.5">
          <p className="eyebrow">{t.partners.eyebrow}</p>
          <h1 className="h2">{t.partners.title}</h1>
          <p className="mt-5 font-heading text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.15] font-black text-balance text-fg">
            {t.partners.pull} <span className="text-lime">{t.partners.pullAccent}</span>
          </p>
        </div>
        <div className="grid min-w-0 max-w-[64ch] gap-[1.1em] font-light">
          {t.partners.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <p className="mb-[18px] font-heading text-[1.15rem] font-extrabold text-fg">{t.partners.offersTitle}</p>
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

      <Card className="card-lime mt-16 grid gap-8 rounded-[14px] border p-7 ring-0 md:p-10 min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] min-[861px]:gap-16">
        <div className="grid min-w-0 content-start gap-3.5">
          <p className="eyebrow">{t.partners.commitment.eyebrow}</p>
          <h2 className="text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.1] font-black">{t.partners.commitment.title}</h2>
          <ul className="mt-3 grid gap-2.5">
            {t.partners.commitment.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 font-semibold text-fg">
                <Check className="mt-1 size-4 shrink-0 text-lime" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid min-w-0 max-w-[64ch] content-start gap-[1.1em] text-[17px] font-light">
          {t.partners.commitment.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Card>
    </Section>
  )
}
