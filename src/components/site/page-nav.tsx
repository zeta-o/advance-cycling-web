"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

import { useDictionary } from "@/hooks/use-dictionary"
import { navItems } from "@/lib/site"

const sequence = navItems

/** Previous / next links between the inner pages, in menu order. */
export function PageNav({ current }: { current: string }) {
  const t = useDictionary()
  const i = sequence.findIndex((item) => item.href === current)
  const prev = i > 0 ? sequence[i - 1] : null
  const next = i >= 0 && i < sequence.length - 1 ? sequence[i + 1] : null

  return (
    <nav aria-label={`${t.pageNav.previous} / ${t.pageNav.next}`} className="border-b border-line">
      <div className="container-site grid grid-cols-2 gap-4 py-8">
        {prev ? (
          <Link href={prev.href} scroll={false} className="group grid gap-1 justify-self-start">
            <span className="flex items-center gap-1.5 font-mono text-[0.74rem] tracking-[0.08em] text-fg-3 uppercase">
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden />
              {t.pageNav.previous}
            </span>
            <span className="font-heading text-[1.05rem] font-extrabold text-fg group-hover:text-lime">{t.nav[prev.key]}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={next.href} scroll={false} className="group grid justify-items-end gap-1 justify-self-end text-right">
            <span className="flex items-center gap-1.5 font-mono text-[0.74rem] tracking-[0.08em] text-fg-3 uppercase">
              {t.pageNav.next}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
            <span className="font-heading text-[1.05rem] font-extrabold text-fg group-hover:text-lime">{t.nav[next.key]}</span>
          </Link>
        )}
      </div>
    </nav>
  )
}
