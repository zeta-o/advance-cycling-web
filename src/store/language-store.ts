import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export type Language = "es" | "en"

type LanguageState = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

/**
 * Site language, persisted in localStorage.
 * `skipHydration` keeps the server render and the first client render identical (Spanish);
 * <LanguageSync /> rehydrates the saved choice after mount.
 */
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "es",
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set({ language: get().language === "es" ? "en" : "es" }),
    }),
    {
      name: "ac-lang",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
)
