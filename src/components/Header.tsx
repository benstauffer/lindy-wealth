'use client'

import Link from 'next/link'
import { FiArrowRight } from "react-icons/fi"
import Image from 'next/image';

interface HeaderProps {
  name?: string;
  darkTheme?: boolean;
}

export function Header({ name = "Lindy Wealth", darkTheme = false }: HeaderProps) {
  return (
    <header className="w-full pt-8 sticky top-0 z-50">
      <div className="w-full h-full px-8 lg:px-8 flex items-center justify-between">
        <div>
          <Link href="/" className={`suisse-font text-2xl md:text-3xl ${darkTheme ? 'text-white' : 'text-neutral-800'}`}>
            {name}
          </Link>
        </div>
        <div>
          <Link 
            href="https://cal.com/ben-stauffer-ysbawo/30min" 
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
             Let's Talk
             <FiArrowRight className="ml-1 transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </header>
  )
} 