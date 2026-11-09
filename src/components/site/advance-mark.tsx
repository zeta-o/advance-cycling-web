import Image from "next/image"

import { cn } from "@/lib/utils"

type AdvanceMarkProps = {
  /** Text under the wordmark, e.g. "CYCLING TEAM" or "TALENT HUB". */
  subtitle: string
  size?: "sm" | "md" | "lg"
  accent?: boolean
  className?: string
}

// The subtitle starts where the "ADVANCE" letters start (after the chevrons, ~25% of the logo width).
const sizes = {
  sm: { h: 22, sub: "text-[0.58rem] pl-[38px]" },
  md: { h: 26, sub: "text-[0.68rem] pl-[45px]" },
  lg: { h: 40, sub: "text-[0.82rem] pl-[55px] min-[421px]:text-[1.02rem] min-[421px]:pl-[69px]" },
} as const

/** The ADVANCE chevron wordmark with a program name underneath. */
export function AdvanceMark({ subtitle, size = "sm", accent = false, className }: AdvanceMarkProps) {
  const s = sizes[size]
  const w = Math.round((s.h * 713) / 105)
  return (
    <span className={cn("flex flex-col gap-0.5", className)}>
      <Image
        src="/images/advance-logo.png"
        alt="Advance"
        width={w}
        height={s.h}
        priority={size === "sm"}
        className={cn("h-auto w-auto", size === "lg" && "max-[420px]:h-8")}
        style={{ height: s.h }}
      />
      <span
        className={cn(
          "font-heading font-bold tracking-[0.32em]",
          s.sub,
          accent ? "font-extrabold text-lime" : "text-fg-2"
        )}
      >
        {subtitle}
      </span>
    </span>
  )
}
