'use client'

import Link from 'next/link'

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50">
      {/* Gradient background that fades up */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0165E6] via-[#0165E6]/80 to-transparent h-32"></div>
      
      {/* Footer content */}
      <div className="relative py-4 px-6">
        <div className="w-full mx-auto">
          <div className="mx-auto">
            <div className="flex flex-row justify-start items-center gap-8">
              
              {/* Copyright - Left side */}
              <div className="flex flex-col">
                <p className="text-sm md:text-2xl text-white">&copy; 2025 Lindy Wealth</p>
              </div>

              {/* Legal links */}
              <div className="flex flex-row gap-4 md:gap-8">
                <Link href="/disclosure" className="text-white hover:underline transition-colors text-sm md:text-2xl">
                  Disclosure
                </Link>
                <a 
                  href="/documents/Privacy.pdf"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:underline transition-colors text-sm md:text-2xl"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
