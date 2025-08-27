import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Millennium Sourcing Solutions - Global Engineering & Import Solutions",
  description:
    "Leading provider of engineering solutions, global sourcing, import consultancy, and outsourcing services. Your trusted partner for business excellence.",
  keywords: "engineering solutions, global sourcing, import consultancy, outsourcing, millennium sourcing solutions",
  authors: [{ name: "Millennium Sourcing Solutions" }],
  creator: "Millennium Sourcing Solutions",
  publisher: "Millennium Sourcing Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://millenniumsourcingsolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Millennium Sourcing Solutions - Global Engineering & Import Solutions",
    description:
      "Transform your business with innovative engineering solutions. Global sourcing, import consultancy, and outsourcing expertise.",
    url: "https://millenniumsourcingsolutions.com",
    siteName: "Millennium Sourcing Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Millennium Sourcing Solutions - Engineering Solutions Provider",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Millennium Sourcing Solutions - Global Engineering & Import Solutions",
    description:
      "Transform your business with innovative engineering solutions. Global sourcing, import consultancy, and outsourcing expertise.",
    images: ["/twitter-image.jpg"],
    creator: "@millenniumsourcingsolutions",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Millennium Sourcing Solutions",
              description:
                "Leading provider of engineering solutions, global sourcing, import consultancy, and outsourcing services.",
              url: "https://millenniumsourcingsolutions.com",
              logo: "https://millenniumsourcingsolutions.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "info@millenniumsourcingsolutions.com",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Ave",
                addressLocality: "Tech City",
                addressRegion: "TC",
                postalCode: "12345",
                addressCountry: "US",
              },
              foundingDate: "2009",
              numberOfEmployees: "50-100",
              sameAs: [
                "https://www.linkedin.com/company/millennium-sourcing-solutions",
                "https://twitter.com/millenniumsourcingsolutions",
                "https://www.facebook.com/millenniumsourcingsolutions",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Engineering Solutions",
                  description: "Tailored engineering solutions built to meet specific business requirements",
                },
                {
                  "@type": "Service",
                  name: "Global Sourcing",
                  description: "Efficient global sourcing services for your business needs",
                },
                {
                  "@type": "Service",
                  name: "Import Consultancy",
                  description: "Expert import consultancy services for seamless international trade",
                },
                {
                  "@type": "Service",
                  name: "Outsourcing Services",
                  description: "Outsourcing solutions to enhance your business operations",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
