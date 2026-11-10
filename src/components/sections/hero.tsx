"use client"

import Image from "next/image"

import { CtaLink } from "@/components/site/cta-link"
import { useDictionary } from "@/hooks/use-dictionary"

const strip = [
  { src: "/images/hero-peloton.jpg", w: 864, h: 1260, offset: "" },
  { src: "/images/hero-podium.jpg", w: 818, h: 871, offset: "mt-10" },
  { src: "/images/hero-rider.jpg", w: 1000, h: 1820, offset: "mb-10" },
]

export function Hero() {
  const t = useDictionary()
  return (
    <section
      className="relative overflow-hidden border-b border-line"
      style={{
        background:
          "radial-gradient(80% 90% at 0% 100%, color-mix(in srgb, var(--lime) 9%, transparent), transparent 60%), radial-gradient(60% 80% at 100% 0%, var(--navy), transparent 70%), var(--ink)",
      }}
    >
      <div className="container-site grid items-center gap-9 py-12 md:py-[72px] min-[901px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] min-[901px]:gap-12 min-[901px]:pb-20">
        <div className="grid min-w-0 gap-6 [&>*]:animate-rise [&>*:nth-child(2)]:[animation-delay:.06s] [&>*:nth-child(3)]:[animation-delay:.12s] [&>*:nth-child(4)]:[animation-delay:.18s] [&>*:nth-child(5)]:[animation-delay:.24s]">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[1.02] font-black tracking-[-0.02em]">
            {t.hero.title}
          </h1>
          <p className="lede">{t.hero.lede}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <CtaLink href="/project#riders" icon="arrow">
              {t.hero.ctaRiders}
            </CtaLink>
            <CtaLink href="/partners" variant="ghost">
              {t.hero.ctaPartner}
            </CtaLink>
          </div>
          <p className="inline-flex items-center gap-2.5 font-mono text-[0.78rem] text-fg-3">
            <span className="text-lime">●</span> {t.hero.tag}
          </p>
        </div>

        <div
          aria-hidden
          className="grid h-[300px] skew-x-[-6deg] grid-cols-3 gap-2.5 min-[901px]:-mr-10 min-[901px]:h-[520px] min-[901px]:skew-x-[-8deg]"
        >
          {strip.map((img) => (
            <figure key={img.src} className={`relative m-0 overflow-hidden rounded-md bg-ink-2 ${img.offset}`}>
              <Image
                src={img.src}
                alt=""
                width={img.w}
                height={img.h}
                priority
                sizes="(min-width: 901px) 20vw, 33vw"
                className="h-full w-[160%] max-w-none translate-x-[-18%] skew-x-[6deg] object-cover min-[901px]:skew-x-[8deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-55% to-ink/55" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
