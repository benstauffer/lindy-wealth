"use client"

import { HeaderSection } from "@/components/Sections/Header";

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <nav className="flex flex-col gap-8 text-center">
          <button className="text-2xl text-white hover:text-gray-300 transition-all duration-200">
            About
          </button>
          <button className="text-2xl text-white hover:text-gray-300 transition-all duration-200">
            Pricing
          </button>
          <button className="text-2xl text-white hover:text-gray-300 transition-all duration-200">
            FAQ
          </button>
          <button 
            onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
            className="text-2xl text-white hover:text-gray-300 transition-all duration-200"
          >
            Book a Call
          </button>
        </nav>
      </div>
      
      <div className="absolute bottom-6 left-6">
        <div className="text-sm text-white/60 space-y-1">
          <div>Disclosure</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  )
}