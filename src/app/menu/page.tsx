"use client"

import { HeaderSection } from "@/components/Sections/Header";

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <nav className="flex flex-col gap-8 text-center">
          <a href="/about" className="text-2xl text-white hover:text-gray-300 transition-all duration-200">
            About
          </a>
          <a href="/disclosure" className="text-2xl text-white hover:text-gray-300 transition-all duration-200">
            Disclosure
          </a>
          <a href="/documents/Privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-300 transition-all duration-200">
            Privacy
          </a>
          <button 
            onClick={() => window.open('https://form.typeform.com/to/xtuCtft7', '_blank')}
            className="text-2xl text-white hover:text-gray-300 transition-all duration-200"
          >
            Book a Call
          </button>
        </nav>
      </div>
      
      <div className="absolute bottom-6 left-6">
        <div className="text-sm text-white/60 space-y-1">
          <a href="/disclosure" className="block hover:text-white/80">Disclosure</a>
          <a href="/documents/Privacy.pdf" target="_blank" rel="noopener noreferrer" className="block hover:text-white/80">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}