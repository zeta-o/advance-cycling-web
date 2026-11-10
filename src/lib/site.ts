export const TALENT_HUB_URL = "https://advancetalenthub.com"

/** One page per menu option, in reading order. */
export const navItems = [
  { href: "/project", key: "project" },
  { href: "/talent-hub", key: "talentHub" },
  { href: "/method", key: "method" },
  { href: "/calendar", key: "calendar" },
  { href: "/team", key: "team" },
  { href: "/partners", key: "partners" },
] as const

export type NavKey = (typeof navItems)[number]["key"]

export const PARTNERS_HREF = "/partners"

export type SocialNetwork = "instagram" | "facebook"

/**
 * Advance Talent Hub social accounts, shown in the footer under "ATH Social".
 * Only entries with a URL are rendered.
 */
export const ATH_SOCIAL: { network: SocialNetwork; url: string }[] = [
  { network: "instagram", url: "https://www.instagram.com/advancetalenthub/" },
  { network: "facebook", url: "https://www.facebook.com/people/Advance-Talent-Hub/100091633214551/" },
]
