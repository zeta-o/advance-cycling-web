"use client"

import Image from "next/image"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { useDictionary } from "@/hooks/use-dictionary"

export function Project() {
  const t = useDictionary()
  return (
    <Section id="proyecto">
      <div className="grid items-center gap-12 min-[861px]:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="min-w-0">
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

        {/* Decorative sketch, desktop only. */}
        <div aria-hidden className="hidden min-w-0 justify-self-center min-[861px]:block">
          <Image
            src="/images/cyclist-sketch.webp"
            alt=""
            width={800}
            height={1200}
            sizes="(min-width: 1180px) 420px, 36vw"
            className="h-auto w-full max-w-[420px]"
          />
        </div>
      </div>
    </Section>
  )
}
