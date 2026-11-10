"use client"

import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect, useRef } from "react"

/**
 * Starts every new page at the top.
 * Internal links use `scroll={false}`: with Cache Components, Next keeps previous pages
 * mounted (hidden) and its own scroll handling lands on the wrong spot under our sticky header.
 * Back/forward navigations are left alone so the browser restores the previous position.
 */
export function ScrollToTop() {
  const pathname = usePathname()
  const fromHistory = useRef(false)
  const first = useRef(true)

  useEffect(() => {
    const onPop = () => {
      fromHistory.current = true
    }
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (!fromHistory.current && !window.location.hash) window.scrollTo(0, 0)
    fromHistory.current = false
  }, [pathname])

  return null
}
