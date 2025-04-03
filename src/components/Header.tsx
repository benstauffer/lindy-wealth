'use client'

import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6"

export function Header() {
  return (
    <header className="w-full h-28 fixed top-0 z-50 bg-white/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
      <div className="w-full h-full px-8 lg:px-12 flex items-center justify-between">
        {/* Left Logo */}
        <div>
          <Link href="/">
            <span className="font-['Georgia'] text-2xl md:text-3xl">
              Lindy Wealth
            </span>
          </Link>
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center space-x-8">
          <Link href="/about" className="text-sm hover:text-neutral-900 transition-colors font-medium hover:underline">
            About
          </Link>
          <Link 
            href="/contact"
            className="group inline-flex items-center px-4 py-2 text-sm font-medium shadow-inner text-black bg-neutral-100 border border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400 rounded-lg transition-colors duration-200"
          >
            Book a call
            <FaArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </nav>
      </div>
    </header>
  )
} 