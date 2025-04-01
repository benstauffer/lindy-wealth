import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderProvider } from '@/components/landing/layout/HeaderContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lindy Wealth",
  description: "Wealth management firm",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
        className={`${inter.className} min-h-screen bg-white text-black`}
        style={{ 
          overscrollBehavior: 'none', 
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        <HeaderProvider>
          {children}
        </HeaderProvider>
      </body>
    </html>
  );
}
