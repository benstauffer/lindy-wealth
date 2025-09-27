import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { HeaderSection } from "@/components/Sections/Header";

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
    icon: '/favicon.svg',
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
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
        className="min-h-screen text-black dark:text-white flex flex-col bg-white"
        style={{ 
          overscrollBehavior: 'none', 
          position: 'relative'
        }}
      >
        <ThemeProvider>
          <HeaderSection />
          <main className="w-full">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
