import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import MarketStatus from "@/components/ui/MarketStatus";
import Logo from "@/components/ui/Logo";

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
          <div className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
            <div className="flex items-center justify-center px-6 py-4 pointer-events-auto relative">
              <div className="absolute right-6 hidden sm:block">
                <MarketStatus />
              </div>
            </div>
          </div>
          <main className="w-full">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
