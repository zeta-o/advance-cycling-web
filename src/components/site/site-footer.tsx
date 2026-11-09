"use client"

import { useDictionary } from "@/hooks/use-dictionary"
import { TALENT_HUB_URL } from "@/lib/site"

export function SiteFooter() {
  const t = useDictionary()
  return (
    <footer className="border-t border-line py-8 text-[0.84rem] text-fg-3">
      <div className="container-site flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <span>
          © 2026 Advance Cycling · {t.footer.part}
        </span>
        <span>
          <a href={TALENT_HUB_URL} target="_blank" rel="noopener noreferrer" className="text-fg-2 underline">
            advancetalenthub.com
          </a>{" "}
          · Costa Rica
        </span>
      </div>
    </footer>
  )
}
