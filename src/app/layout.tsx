import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Caveat } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/ui/SmoothScroll";

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
  title: "Lindy Wealth",
  description: "An independent wealth management firm",
  icons: {
    icon: '/images/Lindy logo.png',
    apple: '/images/Lindy logo.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Lindy Wealth',
    description: 'An independent wealth management firm',
    url: 'https://lindywealth.com',
    siteName: 'Lindy Wealth',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lindy Wealth',
    description: 'An independent wealth management firm',
    images: ['/og-image.png'],
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
        className={`${inter.variable} ${caveat.variable} min-h-screen text-black font-sans  flex flex-col bg-gray-50`}
        style={{ 
          overscrollBehavior: 'none', 
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        <SmoothScroll />
        <main className="w-full max-w-5xl mx-auto px-6 md:px-12 ">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
