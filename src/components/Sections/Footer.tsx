'use client'

import Link from 'next/link'

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-lg mx-auto px-4 py-2">
        <div className="w-full mx-auto">
          <div className="mx-auto py-4">
            <div className="flex flex-row justify-between items-center gap-8">
              
              {/* Copyright - Left side */}
              <div className="flex flex-col">
                <p className="text-xs md:text-sm text-black font-light">&copy; 2025 Lindy Wealth</p>
              </div>

              {/* Right side - Legal links */}
              <div className="flex flex-row gap-4 md:gap-8">
                <Link href="/disclosure" className="text-black/70 hover:text-black transition-colors text-xs md:text-sm font-light">
                  Disclosure
                </Link>
                <a 
                  href="/documents/Privacy.pdf"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black/70 hover:text-black transition-colors text-xs md:text-sm font-light"
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