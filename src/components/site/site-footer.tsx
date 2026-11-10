"use client"

import { SocialIcon, socialName } from "@/components/site/social-icon"
import { useDictionary } from "@/hooks/use-dictionary"
import { ATH_SOCIAL, TALENT_HUB_URL } from "@/lib/site"

export function SiteFooter() {
  const t = useDictionary()
  const social = ATH_SOCIAL.filter((s) => s.url)

  return (
    <footer className="border-t border-line text-[0.84rem] text-fg-3">
      {social.length > 0 && (
        <div className="border-b border-line py-10">
          <div className="container-site flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
            <p className="max-w-[46ch] text-[0.95rem] font-light text-fg-2">{t.footer.socialCaption}</p>
            <div className="grid justify-items-center gap-3">
              <ul className="flex flex-wrap gap-2.5">
                {social.map(({ network, url }) => (
                  <li key={network}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Advance Talent Hub · ${socialName(network)}`}
                      title={socialName(network)}
                      className="grid size-11 place-items-center rounded-full border border-line text-fg-2 transition-colors hover:border-lime hover:text-lime"
                    >
                      <SocialIcon network={network} className="size-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="font-heading text-[0.72rem] font-extrabold tracking-[0.2em] text-lime uppercase">ATH Social</p>
            </div>
          </div>
        </div>
      )}
      <div className="container-site flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8">
        <span>© 2026 Advance Cycling · {t.footer.part}</span>
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
