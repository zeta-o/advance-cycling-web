"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { AdvanceMark } from "@/components/site/advance-mark"
import { CtaLink } from "@/components/site/cta-link"
import { LanguageToggle } from "@/components/site/language-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useDictionary } from "@/hooks/use-dictionary"
import { navItems, PARTNERS_HREF } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const t = useDictionary()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="container-site flex min-h-[68px] items-center gap-6">
        <Link href="/" scroll={false} aria-label="Advance Cycling Team" className="shrink-0">
          <AdvanceMark subtitle="CYCLING TEAM" />
        </Link>

        <nav aria-label="Main" className="ml-auto hidden gap-[22px] lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-[0.86rem] font-semibold no-underline transition-colors hover:text-lime",
                  active ? "text-fg after:absolute after:inset-x-0 after:-bottom-[21px] after:h-0.5 after:bg-lime" : "text-fg-2"
                )}
              >
                {t.nav[item.key]}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 lg:ml-0">
          <LanguageToggle />
          <CtaLink href={PARTNERS_HREF} size="sm" className="max-[420px]:hidden">
            {t.nav.cta}
          </CtaLink>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="text-fg lg:hidden" aria-label={t.nav.menu} />}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="border-line bg-ink-2">
              <SheetHeader className="pt-5 pr-14">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <AdvanceMark subtitle="CYCLING TEAM" />
              </SheetHeader>
              <nav aria-label="Mobile" className="grid gap-1 px-4">
                {[{ href: "/", key: "home" } as const, ...navItems, { href: PARTNERS_HREF, key: "partners" } as const].map(
                  (item) => {
                    const active = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        scroll={false}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-lg px-3 py-2.5 font-heading text-lg font-bold hover:bg-muted hover:text-lime",
                          active ? "bg-muted text-lime" : "text-fg"
                        )}
                      >
                        {t.nav[item.key]}
                      </Link>
                    )
                  }
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
