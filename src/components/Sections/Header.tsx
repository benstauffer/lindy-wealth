'use client'

import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useState } from "react";
import Logo from "@/components/ui/Logo";

export function HeaderSection() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Gradient background that fades out */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0165E6] via-[#0165E6]/80 to-transparent h-32"></div>
      
      {/* Header content */}
      <div className="relative py-4 px-6">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="flex items-center text-sm md:text-2xl text-white tracking-tight hover:text-gray-300 transition-colors">
            <Logo />
            Lindy Wealth
          </Link>
          
          <div className="flex gap-4">
            <Link href="/about" className="px-6 py-2 text-white font-medium rounded-full border border-white hover:bg-white hover:text-[#0165E6] transition-all duration-200">
              Learn More
            </Link>
            <button
              onClick={() => window.open('https://form.typeform.com/to/xtuCtft7', '_blank')}
              className="px-6 py-2 bg-white font-medium rounded-full hover:bg-gray-100 transition-all duration-200"
              style={{ color: '#0165E6' }}
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
