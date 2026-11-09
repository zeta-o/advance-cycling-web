"use client"

import { dictionaries } from "@/content/dictionary"
import { useLanguageStore } from "@/store/language-store"

/** Returns the copy for the current language. */
export function useDictionary() {
  const language = useLanguageStore((s) => s.language)
  return dictionaries[language]
}
