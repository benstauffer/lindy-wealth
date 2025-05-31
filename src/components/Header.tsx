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
    <header className="w-full pt-8 pb-2 top-0 z-50">
      <div className="w-full h-full px-6 lg:px-12 flex items-center justify-center">
        <div>
          <Link href="/" className={`suisse-font text-2xl md:text-3xl ${darkTheme ? 'text-white' : 'text-neutral-800'}`}>
            {name}
          </Link>
        </div>
      </div>
    </header>
  )
} 