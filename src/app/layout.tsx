import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`${inter.className} min-h-screen bg-#FFFCF4 text-black`}
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
