'use client'

import Link from 'next/link'

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 shadow-inner">
      <div className="max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="w-full mx-auto">
          <div className="mx-auto">
            <div className="flex flex-row justify-between items-center gap-8">
              
              {/* Copyright - Left side */}
              <div className="flex flex-col">
                <p className="text-sm text-[#999999]">&copy; 2025 Lindy Wealth</p>
              </div>

              {/* Right side - Legal links */}
              <div className="flex flex-row gap-4 md:gap-8">
                <Link href="/disclosure" className="text-[#999999] transition-colors text-sm">
                  Disclosure
                </Link>
                <a 
                  href="/documents/Privacy.pdf"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#999999] transition-colors text-sm"
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