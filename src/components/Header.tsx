'use client'

import Link from 'next/link'
import { FiArrowRight } from "react-icons/fi"
import Image from 'next/image';

export function Header() {
  return (
    <header className="w-full pt-8 pb-2 fixed top-0 z-50 bg-white/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
      <div className="w-full h-full px-6 lg:px-12 flex items-center justify-between">
        {/* Left Logo */}
        <div>
          <Link href="/">
            {/* Mobile Logo: Use styled 'L' */}
            <span className="md:hidden font-['Georgia'] text-xl md:text-2xl leading-none text-neutral-900">
              Lindy
            </span>
            {/* Desktop Logo: Keep as text */}
            <span className="hidden md:inline font-['Georgia'] text-xl md:text-2xl">
              Lindy Wealth
            </span>
          </Link>
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center space-x-8">
          <Link 
            href="/contact"
            className="group inline-flex items-center px-4 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors duration-200"
            >
            Book a call
            <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </nav>
      </div>
    </header>
  )
} 