"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { useDictionary } from "@/hooks/use-dictionary"
import { navItems } from "@/lib/site"

/** Home-page directory of the inner pages. */
export function ExploreGrid() {
  const t = useDictionary()
  return (
    <Section className="bg-glow-lime">
      <SectionHeading eyebrow={t.explore.eyebrow} title={t.explore.title} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group grid h-full content-start gap-2 rounded-[14px] border border-line bg-ink-2 p-6 transition-colors hover:border-[color-mix(in_srgb,var(--lime)_45%,var(--line))]"
            >
              <span className="flex items-center justify-between gap-4">
                <span className="font-heading text-[1.2rem] leading-tight font-extrabold text-fg">{t.nav[item.key]}</span>
                <ArrowRight className="size-5 shrink-0 text-lime transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
              <span className="text-[0.95rem] font-light">{t.explore.items[item.key]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
