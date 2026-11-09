"use client"

import { CtaLink } from "@/components/site/cta-link"
import { useDictionary } from "@/hooks/use-dictionary"
import { TALENT_HUB_URL } from "@/lib/site"

export function Closing() {
  const t = useDictionary()
  return (
    <section
      id="contacto"
      className="py-20 md:py-28"
      style={{
        background:
          "radial-gradient(60% 90% at 100% 100%, color-mix(in srgb, var(--lime) 10%, transparent), transparent 65%), radial-gradient(60% 80% at 0% 0%, var(--navy), transparent 70%), var(--ink)",
      }}
    >
      <div className="container-site grid gap-7">
        <p className="eyebrow">{t.closing.eyebrow}</p>
        <h2 className="max-w-[18ch] text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.04] font-black tracking-[-0.015em]">
          {t.closing.title}
        </h2>
        <p className="lede max-w-[58ch]">{t.closing.lede}</p>
        <div className="flex flex-wrap gap-3">
          <CtaLink href={TALENT_HUB_URL} icon="external">
            {t.closing.cta}
          </CtaLink>
          <CtaLink href="#atletas" variant="ghost">
            {t.closing.ctaRiders}
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
