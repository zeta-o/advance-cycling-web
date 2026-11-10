"use client"

import Image from "next/image"
import { Plus } from "lucide-react"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useDictionary } from "@/hooks/use-dictionary"
import { cn } from "@/lib/utils"

export function Riders() {
  const t = useDictionary()
  const riders = [
    { name: "Jimena Arroyo", img: "/images/rider-jimena.jpg", w: 484, h: 300, copy: t.riders.jimena, badge: t.riders.jimena.badge, champ: true, pos: "50% 50%" },
    { name: "Daniela Arroyo", img: "/images/daniela-arroyo.jpg", w: 1000, h: 557, copy: t.riders.daniela, badge: null, champ: false, pos: "30% 50%" },
    { name: "Saúl Vargas", img: "/images/saul-vargas.jpg", w: 531, h: 282, copy: t.riders.saul, badge: null, champ: false, pos: "50% 50%" },
  ]

  return (
    <Section id="riders" className="bg-glow-navy">
      <SectionHeading eyebrow={t.riders.eyebrow} title={t.riders.title} lede={t.riders.lede} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {riders.map((r) => (
          <Card
            key={r.name}
            className={cn(
              "group gap-0 rounded-[14px] border border-line py-0 ring-0",
              r.champ && "card-lime"
            )}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={r.img}
                alt={r.copy.alt}
                width={r.w}
                height={r.h}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                style={{ objectPosition: r.pos }}
              />
            </div>
            <div className="grid flex-1 content-start gap-1.5 px-[22px] pt-5 pb-6">
              <h3 className="text-[1.3rem] leading-tight font-extrabold">{r.name}</h3>
              <p className={cn("text-[0.88rem] font-bold", r.champ ? "text-lime" : "text-sky")}>{r.copy.role}</p>
              <p className="text-[0.9rem] text-fg-3">{r.copy.category}</p>
              {r.badge && (
                <Badge className="mt-2.5 h-auto px-[11px] py-[5px] font-heading text-[0.7rem] font-extrabold">
                  {r.badge}
                </Badge>
              )}
            </div>
          </Card>
        ))}

        <Card className="gap-0 rounded-[14px] border border-dashed border-line bg-transparent py-0 ring-0">
          <div
            aria-hidden
            className="mx-4 mt-4 grid aspect-[4/3] place-items-center rounded-lg border border-dashed border-line text-fg-3"
          >
            <Plus className="size-7" strokeWidth={1.5} />
          </div>
          <div className="grid flex-1 content-start gap-1.5 px-[22px] pt-5 pb-6">
            <h3 className="text-[1.3rem] leading-tight font-extrabold text-fg-3">{t.riders.open.title}</h3>
            <p className="text-[0.88rem] font-bold text-fg-2">{t.riders.open.role}</p>
            <p className="text-[0.9rem] font-light text-fg-3">{t.riders.open.body}</p>
          </div>
        </Card>
      </div>
    </Section>
  )
}
