import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InsightNova Tech | Innovative Tech Agency, AI SaaS Solutions & Digital Consultancy",
    template: "%s | InsightNova Tech",
  },
  description:
    "InsightNova Tech is a leading technology agency and consultancy specializing in innovative AI-powered SaaS products, custom software development, and digital transformation services to accelerate your business growth.",
  keywords: [
    "tech agency",
    "technology consultancy",
    "AI SaaS products",
    "digital transformation services",
    "custom software development",
    "web development agency",
    "mobile app development",
    "AI solutions for business",
    "SaaS development company",
    "IT consulting firm",
  ],
  authors: [{ name: "InsightNova Tech Team" }],
  creator: "InsightNova Tech",
  publisher: "InsightNova Tech",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.insightnovatech.com", // Replace with your actual domain
  },
  openGraph: {
    title: "InsightNova Tech – Premier Tech Agency & AI SaaS Consultancy",
    description:
      "Drive business innovation with our expert tech consultancy, cutting-edge AI SaaS products, and comprehensive digital transformation solutions.",
    url: "https://www.insightnovatech.com",
    siteName: "InsightNova Tech",
    images: [
      {
        url: "/og-image.jpg", // Recommended: Add a 1200x630 branded OG image to /public
        width: 1200,
        height: 630,
        alt: "InsightNova Tech - Innovative AI SaaS and Tech Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InsightNova Tech | Tech Agency, AI SaaS & Digital Consultancy",
    description:
      "Innovative tech solutions and AI-powered SaaS products to transform your business.",
    images: ["/twitter-image.jpg"], // Optional: Add a separate Twitter card image
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}