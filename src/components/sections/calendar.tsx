"use client"

import { CalendarClock, Globe, Hourglass } from "lucide-react"

import { Section, SectionHeading } from "@/components/site/section-heading"
import { Card } from "@/components/ui/card"
import { CALENDAR_2027, type CalendarEvent, type SeriesKey, SERIES_ROUNDS, TBD_2027 } from "@/content/calendar"
import { useDictionary } from "@/hooks/use-dictionary"
import { cn } from "@/lib/utils"
import { useLanguageStore } from "@/store/language-store"

const seriesColor: Record<SeriesKey, { dot: string; text: string; border: string }> = {
  roes: { dot: "bg-lime", text: "text-lime", border: "border-l-lime" },
  jdn: { dot: "bg-sky", text: "text-sky", border: "border-l-sky" },
  vuelta: { dot: "bg-coral", text: "text-coral", border: "border-l-coral" },
}

const utc = (iso: string) => new Date(`${iso}T00:00:00Z`)

function groupByMonth(events: CalendarEvent[]) {
  const months = new Map<string, CalendarEvent[]>()
  for (const e of events) {
    const key = e.start.slice(0, 7)
    months.set(key, [...(months.get(key) ?? []), e])
  }
  return [...months.entries()]
}

export function Calendar() {
  const t = useDictionary()
  const c = t.calendar
  const lang = useLanguageStore((s) => s.language)
  const fmt = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(lang, { ...opts, timeZone: "UTC" })
  const monthFmt = fmt({ month: "long" })
  const dayFmt = fmt({ day: "numeric" })
  const weekdayFmt = fmt({ weekday: "short" })

  return (
    <>
      <Section id="calendar">
        <SectionHeading as="h1" eyebrow={c.eyebrow} title={c.title} lede={c.lede} />

        <ul className="mb-12 flex flex-wrap gap-x-6 gap-y-3" aria-label="Series">
          {(Object.keys(c.series) as SeriesKey[]).map((key) => (
            <li key={key} className="flex items-center gap-2.5 text-[0.92rem]">
              <span className={cn("size-2.5 rounded-full", seriesColor[key].dot)} aria-hidden />
              <span className="font-bold text-fg">{c.series[key].name}</span>
              <span className="text-fg-3">· {c.series[key].detail}</span>
            </li>
          ))}
        </ul>

        <h2 className="mb-6 font-heading text-[1.15rem] font-extrabold">{c.confirmedTitle}</h2>
        <ol className="border-t border-line">
          {groupByMonth(CALENDAR_2027).map(([month, events]) => (
            <li
              key={month}
              className="grid gap-x-8 gap-y-3 border-b border-line py-6 md:grid-cols-[140px_minmax(0,1fr)]"
            >
              <p className="font-heading text-[1.4rem] leading-none font-black text-fg capitalize md:pt-3">
                {monthFmt.format(utc(month + "-01"))}
              </p>
              <ul className="grid gap-3">
                {events.map((e) => {
                  const s = c.series[e.series]
                  const total = SERIES_ROUNDS[e.series]
                  const roundLabel = e.series === "jdn" ? c.jdnRound : c.round
                  return (
                    <li
                      key={`${e.series}-${e.start}`}
                      className={cn(
                        "grid grid-cols-[80px_minmax(0,1fr)] items-center gap-4 rounded-xl border border-l-[3px] border-line bg-ink-2 px-4 py-3",
                        seriesColor[e.series].border
                      )}
                    >
                      <div className="grid justify-items-center leading-none">
                        <span className="font-mono text-[0.68rem] tracking-[0.08em] text-fg-3 uppercase">
                          {weekdayFmt.format(utc(e.start)).replace(".", "")}
                        </span>
                        <span className="mt-1 font-heading text-[1.7rem] font-black whitespace-nowrap text-fg tabular-nums">
                          {dayFmt.format(utc(e.start))}
                          {e.end && <span className="text-[1rem] text-fg-3">–{dayFmt.format(utc(e.end))}</span>}
                        </span>
                      </div>
                      <div className="grid min-w-0 gap-0.5">
                        <p className="font-heading text-[1.02rem] leading-tight font-extrabold text-fg">{s.name}</p>
                        <p className="text-[0.88rem] text-fg-3">
                          {e.round && total ? (
                            <span className={cn("font-semibold", seriesColor[e.series].text)}>
                              {roundLabel} {e.round}/{total}
                            </span>
                          ) : (
                            <span className={cn("font-semibold", seriesColor[e.series].text)}>{s.detail}</span>
                          )}
                          {e.series === "jdn" && <span> · {s.detail}</span>}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
          <li className="grid gap-x-8 gap-y-3 border-b border-line py-6 md:grid-cols-[140px_minmax(0,1fr)]">
            <p className="font-heading text-[1.4rem] leading-none font-black text-fg-3 capitalize md:pt-3">
              {monthFmt.format(utc("2027-08-01"))} – {monthFmt.format(utc("2027-12-01"))}
            </p>
            <div className="flex items-center gap-4 rounded-xl border border-dashed border-line px-4 py-4">
              <Hourglass className="size-5 shrink-0 text-fg-3" aria-hidden />
              <div className="grid gap-0.5">
                <p className="font-heading text-[1.02rem] leading-tight font-extrabold text-fg">{c.secondHalfTitle}</p>
                <p className="text-[0.88rem] text-fg-3">{c.secondHalfBody}</p>
              </div>
            </div>
          </li>
        </ol>
      </Section>

      <Section id="tbd" className="bg-glow-navy">
        <SectionHeading eyebrow={c.eyebrow} title={c.tbdTitle} lede={c.tbdLede} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TBD_2027.map((key) => {
            const item = c.tbd[key]
            const Icon = key === "international" ? Globe : CalendarClock
            return (
              <li key={key}>
                <Card className="h-full content-start gap-2 rounded-[14px] border border-dashed border-line bg-transparent p-6 ring-0">
                  <Icon className="mb-1 size-5 text-fg-3" aria-hidden />
                  <h3 className="text-[1.1rem] leading-tight font-extrabold">{item.name}</h3>
                  <p className="text-[0.92rem] font-light">{item.detail}</p>
                  <p className="mt-2 font-mono text-[0.72rem] tracking-[0.08em] text-fg-3 uppercase">{c.tbdLabel}</p>
                </Card>
              </li>
            )
          })}
        </ul>
      </Section>
    </>
  )
}
