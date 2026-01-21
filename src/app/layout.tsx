import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import StructuredData from "@/components/StructuredData"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800"],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://indianrestaurant.com"
const siteName = "Indian Restaurant"
const siteDescription = "Experience authentic Indian cuisine with fresh ingredients and traditional recipes. Open Monday-Thursday 9am-10pm, Friday-Sunday 11am-10pm. Call +91-8866998866 for reservations."

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f97316",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Authentic Indian Cuisine & Fresh Ingredients`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Indian restaurant",
    "authentic Indian cuisine",
    "fresh ingredients",
    "traditional recipes",
    "fine dining",
    "takeout",
    "delivery",
    "vegetarian options",
    "vegan options",
    "spicy food",
    "curry",
    "naan",
    "biryani",
    "tandoori",
    "Mumbai restaurant",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteName} - Authentic Indian Cuisine & Fresh Ingredients`,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/images/main-b.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Delicious Indian Food`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Authentic Indian Cuisine`,
    description: siteDescription,
    images: [`${siteUrl}/images/main-b.jpg`],
    creator: "@indianrestaurant",
    site: "@indianrestaurant",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-orange-500 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
