import { siFacebook, siInstagram } from "simple-icons"

import type { SocialNetwork } from "@/lib/site"

const icons = {
  instagram: siInstagram,
  facebook: siFacebook,
} satisfies Record<SocialNetwork, { title: string; path: string }>

export function socialName(network: SocialNetwork) {
  return icons[network].title
}

/** Brand glyph from simple-icons, drawn in currentColor. */
export function SocialIcon({ network, className }: { network: SocialNetwork; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={icons[network].path} />
    </svg>
  )
}
