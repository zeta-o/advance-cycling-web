/** 2027 racing calendar. Dates are ISO (YYYY-MM-DD) and rendered in UTC so they never shift a day. */

export type SeriesKey = "roes" | "jdn" | "vuelta"

export type CalendarEvent = {
  series: SeriesKey
  start: string
  end?: string
  /** Round number within the series, shown as "Round 2/6". */
  round?: number
}

export const SERIES_ROUNDS: Partial<Record<SeriesKey, number>> = { roes: 6, jdn: 3 }

export const CALENDAR_2027: CalendarEvent[] = [
  { series: "roes", start: "2027-01-31", round: 1 },
  { series: "roes", start: "2027-02-21", round: 2 },
  { series: "jdn", start: "2027-04-03", end: "2027-04-04", round: 1 },
  { series: "jdn", start: "2027-04-17", end: "2027-04-18", round: 2 },
  { series: "roes", start: "2027-04-18", round: 3 },
  { series: "jdn", start: "2027-04-24", end: "2027-04-25", round: 3 },
  { series: "roes", start: "2027-05-09", round: 4 },
  { series: "vuelta", start: "2027-05-20", end: "2027-05-23" },
  { series: "roes", start: "2027-06-06", round: 5 },
  { series: "roes", start: "2027-07-04", round: 6 },
]

/** Events still without dates, in the order they are listed. Copy lives in the dictionary. */
export const TBD_2027 = ["nationalRoad", "nationalXco", "nationalXcc", "copaMtb", "international"] as const
export type TbdKey = (typeof TBD_2027)[number]
