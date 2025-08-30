import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Caveat } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Lindy Wealth | Flat-Fee Financial Planning & Tax Strategy",
  description: "CFP® Ben Stauffer provides flat-fee financial planning focused on tax strategy, fee minimization, and diversified investing. No AUM fees, no commissions - just clear, simple financial planning that works.",
  keywords: "financial planning, tax strategy, flat-fee advisor, CFP, investment management, retirement planning, Los Angeles, California",
  authors: [{ name: "Ben Stauffer, CFP®" }],
  creator: "Ben Stauffer",
  publisher: "Lindy Wealth, LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lindywealth.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/Lindy logo.png',
    apple: '/images/Lindy logo.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Lindy Wealth | Flat-Fee Financial Planning & Tax Strategy',
    description: 'CFP® Ben Stauffer provides flat-fee financial planning focused on tax strategy, fee minimization, and diversified investing. No AUM fees, no commissions.',
    url: 'https://lindywealth.com',
    siteName: 'Lindy Wealth',
    images: [
      {
        url: '/images/Lindy logo.png',
        width: 1200,
        height: 630,
        alt: 'Lindy Wealth - Financial Planning that Makes Sense',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lindy Wealth | Flat-Fee Financial Planning',
    description: 'CFP® Ben Stauffer provides flat-fee financial planning focused on tax strategy and fee minimization.',
    images: ['/images/Lindy logo.png'],
    creator: '@lindywealth',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body 
        className={`${inter.variable} ${caveat.variable} min-h-screen text-black font-sans  flex flex-col `}
        style={{ 
          overscrollBehavior: 'none', 
          position: 'relative',
        }}
      >
        <main className="w-full">
          {children}
        </main>
        <Analytics />
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Lindy Wealth",
              "description": "Flat-fee financial planning focused on tax strategy, fee minimization, and diversified investing",
              "url": "https://lindywealth.com",
              "logo": "https://lindywealth.com/images/Lindy logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "ben@lindywealth.com"
              },
              "founder": {
                "@type": "Person",
                "name": "Ben Stauffer",
                "jobTitle": "Certified Financial Planner",
                "description": "CFP® professional providing flat-fee financial planning services"
              },
              "serviceType": "Financial Planning",
              "areaServed": {
                "@type": "State",
                "name": "California"
              },
              "priceRange": "$1,000 - $10,000",
              "paymentAccepted": "Cash, Check, Bank Transfer"
            })
          }}
        />
      </body>
    </html>
  );
}
