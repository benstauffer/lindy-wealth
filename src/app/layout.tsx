import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

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
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={`${inter.variable} min-h-screen text-black font-sans`}
        style={{ 
          overscrollBehavior: 'none', 
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  );
}
