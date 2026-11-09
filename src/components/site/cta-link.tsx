import type { ComponentProps } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CtaLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "ghost"
  size?: "md" | "sm"
  icon?: "arrow" | "external" | "none"
}

/** Pill-shaped link styled with the shadcn button variants. */
export function CtaLink({ variant = "primary", size = "md", icon = "none", className, children, ...props }: CtaLinkProps) {
  const external = props.href?.startsWith("http")
  return (
    <a
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
      className={cn(
        buttonVariants({ variant: variant === "primary" ? "default" : "outline" }),
        "h-auto gap-2.5 rounded-full font-heading font-extrabold transition-[transform,box-shadow] hover:-translate-y-px",
        size === "md" ? "px-[22px] py-[13px] text-[0.92rem]" : "px-4 py-[9px] text-[0.82rem]",
        variant === "primary"
          ? "hover:bg-lime hover:shadow-[0_8px_24px_-8px_color-mix(in_srgb,var(--lime)_60%,transparent)]"
          : "border-line bg-transparent text-fg hover:border-fg-3 hover:bg-transparent dark:bg-transparent",
        className
      )}
    >
      {children}
      {icon === "arrow" && <ArrowRight className="size-4" aria-hidden />}
      {icon === "external" && <ArrowUpRight className="size-4" aria-hidden />}
    </a>
  )
}
