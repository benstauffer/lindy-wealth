import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Lindy Wealth | Flat-Fee Financial Planning & Tax Strategy",
  description: "CFP® Ben Stauffer provides flat-fee financial planning focused on tax strategy, fee minimization, and diversified investing.",
  metadataBase: new URL('https://lindywealth.com'),
  icons: {
    icon: '/images/Lindy logo.png',
    apple: '/images/Lindy logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="min-h-screen text-black flex flex-col"
        style={{ 
          overscrollBehavior: 'none', 
          position: 'relative',
        }}
      >
        <main className="w-full">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
