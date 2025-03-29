import type React from "react"
import type { Metadata } from "next/metadata"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Load JetBrains Mono font with Next.js font system
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap", // Improve performance by allowing font to swap once loaded
})

export const metadata: Metadata = {
  title: {
    default: "Null Box Ltd | Engineering Clarity from Complexity",
    template: "%s | Null Box Ltd",
  },
  description:
    "Premium consultancy offering software engineering, cloud computing architecture, and technical training services.",
  keywords: ["cloud architecture", "software engineering", "DevOps", "technical training", "consultancy"],
  authors: [{ name: "Ioannis Polyzos" }],
  creator: "Null Box Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nullbox.org",
    title: "Null Box Ltd | Engineering Clarity from Complexity",
    description:
      "Premium consultancy offering software engineering, cloud computing architecture, and technical training services.",
    siteName: "Null Box Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Null Box Ltd | Engineering Clarity from Complexity",
    description:
      "Premium consultancy offering software engineering, cloud computing architecture, and technical training services.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto py-4">
              <div className="border border-border/30 rounded-sm overflow-hidden">{children}</div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
