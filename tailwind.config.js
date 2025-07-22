/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
	  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		/* ───────────────────────────────── FONTS ─────────────────────────────── */
		fontFamily: {
		  sans: ['var(--font-geist-sans)'],
		  mono: ['var(--font-geist-mono)'],
          handwritten: ['var(--font-caveat)'],
		},
		/* ───────────────────────────────── COLORS ─────────────────────────────── */
		colors: {
		  /* your existing examples (keep) */
		  blue: { 600: '#2563eb', 700: '#1d4ed8' },
  
		  /* system-variable tokens (keep) */
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
		  popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
		  primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
		  secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
		  muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
		  accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
		  destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			1: 'hsl(var(--chart-1))',
			2: 'hsl(var(--chart-2))',
			3: 'hsl(var(--chart-3))',
			4: 'hsl(var(--chart-4))',
			5: 'hsl(var(--chart-5))',
		  },
  
		  /* ────── ▼ NEW BRAND PALETTE ▼ ────── */
  
		  /* neutrals / surfaces */
		  canvas:  '#F9F6F2',   // page background
		  surface: '#FFFFFF',   // cards / hero pills
		  line:    '#E6E4E1',   // subtle borders / dividers
  
		  /* typography – pine-needle green */
		  pine: {
			50:  '#F3F6F5',
			100: '#DDE5E2',  // ← your original
			200: '#C6D4CD',
			300: '#A8BDB4',
			400: '#89A59A',
			500: '#6A8E81',
			600: '#4F7064',
			700: '#33473F',  // ← your original
			800: '#2A3B35',
			900: '#23382F',  // ← your original
			950: '#16241F',
		  },
  
		  /* action blue – indigo (ai-iro) */
		  ai: {
			100: '#D5E1F5',  // pills, focus rings
			500: '#3D6E9D',  // links, icons
			700: '#264A6E',  // primary CTA fill
			900: '#1A2E45',  // hover / darkest
		  },
  
		  /* supporting hues */
		  bamboo: { 500: '#5B836D' }, // success / "good"
		  kincha: { 500: '#B0892F' }, // gold accent
		  akane:  { 500: '#C85745' }, // alert / highlight
		  'lindy-orange': {
			50:  '#FEF7F2',   // very light peachy white
			100: '#FDEEE5',   // light peach
			200: '#FCDCCB',   // soft peach
			300: '#F9C2A1',   // light orange
			400: '#F69357',   // medium light orange
			500: '#FB651F',   // main brand orange
			600: '#E8541A',   // slightly darker
			700: '#C54316',   // darker orange
			800: '#9E3612',   // dark orange
			900: '#7A2C0F',   // very dark orange
			950: '#42180A',   // darkest orange brown
		  },
		  'pure-red': '#FF0000',
		},
  
		/* ───────────────────────────── RADIUS & ANIMATION (unchanged) ────────── */
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		  },
		  dash: { to: { strokeDashoffset: '1000' } },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		},
		backgroundImage: {
		  'grid-pattern': "linear-gradient(to right, theme('colors.neutral.200') 1px, transparent 1px), linear-gradient(to bottom, theme('colors.neutral.200') 1px, transparent 1px)",
		  'grid-pattern-light': '',
		  'book-bind-bg':
			'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent)',
		  'book-pages': 'repeating-linear-gradient(90deg,#fff,#efefef 1px,#fff 3px,#9a9a9a 0)',
		},
		boxShadow: {
		  book:
			'0 1.8px 3.6px rgba(0,0,0,.05),0 10.8px 21.6px rgba(0,0,0,.08),inset 0 -.9px 0 rgba(0,0,0,.1),inset 0 1.8px 1.8px hsla(0,0%,100%,.1),inset 3.6px 0 3.6px rgba(0,0,0,.1)',
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  