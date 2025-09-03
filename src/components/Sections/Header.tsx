'use client'

import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

export function HeaderSection() {
  return (
    <div className="w-full py-8 px-4 max-w-lg mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-base text-black tracking-tight">
          Lindy Wealth
        </div>
        
        {/* Action Links */}
        <div className="flex gap-2 md:gap-6">
          <Link 
            href="/about"
            className="text-sm text-black/80 underline hover:text-black/60 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/pricing"
            className="text-sm text-black/80 underline hover:text-black/60 transition-colors"
          >
            Pricing
          </Link>
          <Link 
            href="/faq"
            className="text-sm text-black/80 underline hover:text-black/60 transition-colors"
          >
            FAQ
          </Link>
          <button
            onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
            className="text-sm text-black/80 underline hover:text-black/60 transition-colors flex items-center gap-1"
          >
            Book a call
            <HiOutlineExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="text-base text-black/40 ">
        Financial planning <br />
        that makes sense.
      </div>
    </div>
  )
}
