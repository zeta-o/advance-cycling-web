"use client"

import { useEffect } from "react"

import { useLanguageStore } from "@/store/language-store"

/** Restores the saved language after mount and keeps <html lang> in sync. */
export function LanguageSync() {
  const language = useLanguageStore((s) => s.language)

  useEffect(() => {
    void useLanguageStore.persist.rehydrate()
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return null
}
