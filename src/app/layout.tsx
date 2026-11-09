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
    "Advance Cycling: programa costarricense de desarrollo de ciclismo juvenil que conecta a jóvenes atletas con universidades y competencia internacional.",
  openGraph: {
    title: "Advance Cycling",
    description: "Programa costarricense de desarrollo de ciclismo juvenil. Parte de Advance Talent Hub.",
    images: ["/images/hero-podium.jpg"],
    locale: "es_CR",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#04070f",
  viewportFit: "cover",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-full">
        <LanguageSync />
        {children}
      </body>
    </html>
  )
}
