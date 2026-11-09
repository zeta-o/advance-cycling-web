import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Montserrat } from "next/font/google"

import { LanguageSync } from "@/components/language-sync"
import "./globals.css"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Advance Cycling",
  description:
    "Advance Cycling: a Costa Rican youth cycling development program that connects young athletes with universities and international racing.",
  openGraph: {
    title: "Advance Cycling",
    description: "A Costa Rican youth cycling development program. Part of Advance Talent Hub.",
    images: ["/images/hero-podium.jpg"],
    locale: "en_US",
    alternateLocale: ["es_CR"],
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#04070f",
  viewportFit: "cover",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-full">
        <LanguageSync />
        {children}
      </body>
    </html>
  )
}
