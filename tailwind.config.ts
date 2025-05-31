import type { Config } from "tailwindcss";

/**
 * Breakpoint Reference Guide
 * -------------------------
 * Default Tailwind Breakpoints used in this project:
 * 
 * Mobile: 0-639px
 * - Example classes: base (no prefix)
 * - Base padding: px-6 (24px)
 * 
 * sm: 640px and up (Small tablets)
 * - Example classes: sm:
 * - Base padding: sm:px-8 (32px)
 * 
 * md: 768px and up (Medium/landscape tablets)
 * - Example classes: md:
 * - Often used for layout shifts
 * 
 * lg: 1024px and up (Desktop)
 * - Example classes: lg:
 * - Base padding: lg:px-12 (48px)
 * 
 * xl: 1280px and up (Large desktop)
 * - Example classes: xl:
 * - Container max-width: max-w-6xl
 * 
 * 2xl: 1536px and up (Extra large screens)
 * - Example classes: 2xl:
 * 
 * Common width patterns used:
 * Mobile: w-[calc(100vw-3rem)] (viewport - 48px)
 * Small tablets: sm:w-[calc(100vw-4rem)] (viewport - 64px)
 * Desktop: lg:w-[specific-width] (fixed width)
 */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lindy-green': '#327E0B',
      },
      // You can customize breakpoints here if needed
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} satisfies Config;
