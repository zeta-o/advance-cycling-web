import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  lede?: ReactNode
  className?: string
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, lede, className, children }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 grid max-w-[760px] gap-3.5", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </div>
  )
}

export function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn("border-b border-line py-16 md:py-24", className)}>
      <div className="container-site">{children}</div>
    </section>
  )
}
