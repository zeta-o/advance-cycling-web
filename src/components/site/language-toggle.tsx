"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useDictionary } from "@/hooks/use-dictionary"
import { type Language, useLanguageStore } from "@/store/language-store"

export function LanguageToggle() {
  const language = useLanguageStore((s) => s.language)
  const setLanguage = useLanguageStore((s) => s.setLanguage)
  const t = useDictionary()

  return (
    <ToggleGroup
      aria-label={t.nav.language}
      value={[language]}
      onValueChange={(value) => {
        const next = value[0] as Language | undefined
        if (next) setLanguage(next)
      }}
      spacing={0}
      className="rounded-full border border-line p-[3px]"
    >
      {(["es", "en"] as const).map((lang) => (
        <ToggleGroupItem
          key={lang}
          value={lang}
          size="sm"
          className="h-6 min-w-0 rounded-full! px-2.5 font-mono text-[0.72rem] text-fg-3 hover:bg-transparent hover:text-fg aria-pressed:bg-fg aria-pressed:text-ink data-[pressed]:bg-fg data-[pressed]:text-ink"
        >
          {lang.toUpperCase()}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
