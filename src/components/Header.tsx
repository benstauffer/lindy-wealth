'use client'

import Link from 'next/link'
import { FiArrowRight } from "react-icons/fi"
import Image from 'next/image';

interface HeaderProps {
  name?: string;
  buttonText?: string;
}

export function Header({ name = "Lindy Wealth", buttonText = "Start" }: HeaderProps) {
  return (
    <header className="w-full pt-8 pb-2 fixed top-0 z-50">
      <div className="w-full h-full px-6 lg:px-12 flex items-center justify-between">
        {/* Left Logo */}
        <div>
          <Link href="/">
            {/* Mobile Logo: Use styled 'L' */}
            <span className="md:hidden suisse-font  text-xl md:text-2xl leading-none text-neutral-800">
              Lindy
            </span>
            {/* Desktop Logo: Use the name prop */}
            <span className="hidden md:inline suisse-font  text-xl md:text-2xl">
              {name}
            </span>
          </Link>
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center space-x-8">
          <Link 
              href="https://form.typeform.com/to/xtuCtft7"
              className="group inline-flex items-center px-4 py-3 text-sm font-medium border border-neutral-900 text-neutral-900 bg-white hover:bg-neutral-900 hover:text-white rounded-full transition-colors duration-200"
            >
            {buttonText}
            <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </nav>
      </div>
    </header>
  )
} 