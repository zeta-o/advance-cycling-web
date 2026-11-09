"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

import { AdvanceMark } from "@/components/site/advance-mark"
import { CtaLink } from "@/components/site/cta-link"
import { LanguageToggle } from "@/components/site/language-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useDictionary } from "@/hooks/use-dictionary"
import { navItems } from "@/lib/site"

export function SiteHeader() {
  const t = useDictionary()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="container-site flex min-h-[68px] items-center gap-6">
        <a href="#top" aria-label="Advance Cycling Team" className="shrink-0">
          <AdvanceMark subtitle="CYCLING TEAM" />
        </a>

        <nav aria-label="Principal" className="ml-auto hidden gap-[22px] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.86rem] font-semibold text-fg-2 no-underline transition-colors hover:text-lime"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 lg:ml-0">
          <LanguageToggle />
          <CtaLink href="#aliados" size="sm" className="max-[420px]:hidden">
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
              <nav aria-label="Móvil" className="grid gap-1 px-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 font-heading text-lg font-bold text-fg hover:bg-muted hover:text-lime"
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
              </nav>
              <div className="px-4">
                <CtaLink href="#aliados" onClick={() => setOpen(false)} className="w-full">
                  {t.nav.cta}
                </CtaLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
