"use client"

import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect, useRef } from "react"

/**
 * Starts every new page at the top, or at its #anchor when the link has one.
 * Internal links use `scroll={false}`: with Cache Components, Next keeps previous pages
 * mounted (hidden) and its own scroll handling lands on the wrong spot under our sticky header.
 * Back/forward navigations are left alone so the browser restores the previous position.
 * Jumps are instant: the page-wide smooth scrolling is for in-page anchors only.
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
    if (fromHistory.current) {
      fromHistory.current = false
      return
    }
    window.scrollTo({ top: 0, behavior: "instant" })
    // The browser URL (and its #hash) can update a frame or two after the new page commits.
    // Wait until it matches this route, then scroll to the anchor if it is on the visible page.
    let frame = 0
    let tries = 0
    const scrollToAnchor = () => {
      if (window.location.pathname !== pathname && tries++ < 10) {
        frame = requestAnimationFrame(scrollToAnchor)
        return
      }
      const target = window.location.hash ? document.getElementById(window.location.hash.slice(1)) : null
      if (target && target.getClientRects().length > 0) target.scrollIntoView({ behavior: "instant" })
      else window.scrollTo({ top: 0, behavior: "instant" })
    }
    frame = requestAnimationFrame(scrollToAnchor)
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}
