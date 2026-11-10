"use client"

import Image from "next/image"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { useDictionary } from "@/hooks/use-dictionary"

export function Project() {
  const t = useDictionary()
  return (
    <Section id="proyecto">
      <div className="relative">
        {/* Decorative sketch in the free space right of the copy (which keeps its full 64ch width). Wide screens only. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 left-[790px] hidden items-center justify-center xl:flex"
        >
          <Image
            src="/images/cyclist-line-sketch.webp"
            alt=""
            width={800}
            height={1162}
            sizes="320px"
            className="h-auto max-h-full w-full max-w-[320px] object-contain"
          />
        </div>

        <div className="relative">
          <SectionHeading as="h1" eyebrow={t.project.eyebrow} title={t.project.title} />
          <div className="grid max-w-[64ch] gap-[1.1em] font-light">
            <p>
              {t.project.p1Before}
              <strong className="font-bold text-fg">{t.project.p1Strong}</strong>
              {t.project.p1After}
            </p>
            <p>{t.project.p2}</p>
            <p>{t.project.p3}</p>
          </div>
          <p className="mt-9 max-w-[46ch] font-heading text-[clamp(1.1rem,2vw,1.35rem)] leading-[1.35] font-extrabold text-lime">
            {t.project.motto}
          </p>
        </div>
      </div>
    </Section>
  )
}
