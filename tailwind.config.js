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
    		fontFamily: {
    			sans: [
    				'var(--font-geist-sans)'
    			],
    			mono: [
    				'var(--font-geist-mono)'
    			],
    			handwritten: [
    				'var(--font-caveat)'
    			]
    		},
    		colors: {
    			blue: {
    				'600': '#2563eb',
    				'700': '#1d4ed8'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			canvas: '#F9F6F2',
    			surface: '#FFFFFF',
    			line: '#E6E4E1',
    			pine: {
    				'50': '#F3F6F5',
    				'100': '#DDE5E2',
    				'200': '#C6D4CD',
    				'300': '#A8BDB4',
    				'400': '#89A59A',
    				'500': '#6A8E81',
    				'600': '#4F7064',
    				'700': '#33473F',
    				'800': '#2A3B35',
    				'900': '#23382F',
    				'950': '#16241F'
    			},
    			ai: {
    				'100': '#D5E1F5',
    				'500': '#3D6E9D',
    				'700': '#264A6E',
    				'900': '#1A2E45'
    			},
    			bamboo: {
    				'500': '#5B836D'
    			},
    			kincha: {
    				'500': '#B0892F'
    			},
    			akane: {
    				'500': '#C85745'
    			},
    			'lindy-orange': {
    				'50': '#FEF7F2',
    				'100': '#FDEEE5',
    				'200': '#FCDCCB',
    				'300': '#F9C2A1',
    				'400': '#F69357',
    				'500': '#FB651F',
    				'600': '#E8541A',
    				'700': '#C54316',
    				'800': '#9E3612',
    				'900': '#7A2C0F',
    				'950': '#42180A'
    			},
    			'pure-red': '#FF0000'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			dash: {
    				to: {
    					strokeDashoffset: '1000'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		backgroundImage: {
    			'grid-pattern': 'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)',
    			'grid-pattern-light': '',
    			'book-bind-bg': 'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent)',
    			'book-pages': 'repeating-linear-gradient(90deg,#fff,#efefef 1px,#fff 3px,#9a9a9a 0)',
    			'gradient-button': 'linear-gradient(-90deg,#007cf0,#00dfd8,#ff0080,#007cf0)',
    			trial: 'linear-gradient(135deg,#0070f3,#f81ce5)'
    		},
    		boxShadow: {
    			book: '0 1.8px 3.6px rgba(0,0,0,.05),0 10.8px 21.6px rgba(0,0,0,.08),inset 0 -.9px 0 rgba(0,0,0,.1),inset 0 1.8px 1.8px hsla(0,0%,100%,.1),inset 3.6px 0 3.6px rgba(0,0,0,.1)'
    		}
    	}
    },
	plugins: [require('tailwindcss-animate')],
  };
  