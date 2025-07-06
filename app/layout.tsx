import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "MSS Solutions - Leading Technology Solutions Provider | Custom Software Development",
  description:
    "MSS Solutions delivers innovative technology solutions including custom software development, cloud services, mobile apps, and digital transformation. 15+ years experience serving 500+ clients globally.",
  keywords:
    "technology solutions, custom software development, cloud services, mobile app development, digital transformation, IT consulting, cybersecurity, business intelligence, MSS Solutions",
  authors: [{ name: "MSS Solutions" }],
  creator: "MSS Solutions",
  publisher: "MSS Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://msssolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MSS Solutions - Leading Technology Solutions Provider",
    description:
      "Transform your business with innovative technology solutions. Custom development, cloud services, and digital transformation expertise.",
    url: "https://msssolutions.com",
    siteName: "MSS Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MSS Solutions - Technology Solutions Provider",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSS Solutions - Leading Technology Solutions Provider",
    description:
      "Transform your business with innovative technology solutions. Custom development, cloud services, and digital transformation expertise.",
    images: ["/twitter-image.jpg"],
    creator: "@msssolutions",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
              name: "MSS Solutions",
              description:
                "Leading technology solutions provider specializing in custom software development, cloud services, and digital transformation.",
              url: "https://msssolutions.com",
              logo: "https://msssolutions.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "info@msssolutions.com",
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
                "https://www.linkedin.com/company/mss-solutions",
                "https://twitter.com/msssolutions",
                "https://www.facebook.com/msssolutions",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Custom Software Development",
                  description: "Tailored software solutions built to meet specific business requirements",
                },
                {
                  "@type": "Service",
                  name: "Cloud Solutions",
                  description: "Scalable cloud infrastructure and migration services",
                },
                {
                  "@type": "Service",
                  name: "Mobile App Development",
                  description: "Native and cross-platform mobile applications",
                },
                {
                  "@type": "Service",
                  name: "Cybersecurity Services",
                  description: "Advanced cybersecurity solutions and compliance management",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
