"use client"

import Image from "next/image"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { Badge } from "@/components/ui/badge"
import { useDictionary } from "@/hooks/use-dictionary"

const gallery = [
  { src: "/images/race-1.jpg", w: 437, h: 234 },
  { src: "/images/race-2.jpg", w: 702, h: 376 },
  { src: "/images/race-3.jpg", w: 877, h: 471 },
  { src: "/images/race-4.jpg", w: 904, h: 485 },
]

export function Context() {
  const t = useDictionary()
  return (
    <Section id="contexto">
      <SectionHeading eyebrow={t.context.eyebrow} title={t.context.title} />
      <div className="grid max-w-[64ch] gap-[1.1em] font-light">
        {t.context.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {t.context.calendar.map((item) => (
          <Badge key={item} variant="outline" className="h-auto rounded-full border-line px-3 py-1.5 font-mono text-[0.76rem] font-normal text-fg-2">
            {item}
          </Badge>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={t.context.gallery[i]}
            width={img.w}
            height={img.h}
            sizes="(min-width: 768px) 25vw, 50vw"
            className="aspect-[16/10] w-full rounded-md border border-line object-cover"
          />
        ))}
      </div>
    </Section>
  )
}
