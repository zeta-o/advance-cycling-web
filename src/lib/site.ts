export const TALENT_HUB_URL = "https://advancetalenthub.com"

/** One page per menu option, in reading order. */
export const navItems = [
  { href: "/project", key: "project" },
  { href: "/talent-hub", key: "talentHub" },
  { href: "/method", key: "method" },
  { href: "/growth", key: "growth" },
  { href: "/team", key: "team" },
] as const

export type NavKey = (typeof navItems)[number]["key"]

export const PARTNERS_HREF = "/partners"
