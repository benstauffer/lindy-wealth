'use client'

import Link from 'next/link'

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-6 pt-32 max-w-xl mx-auto">
      <div className="w-full mx-auto text-black">
        <div className="mx-auto py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Links - First on mobile, Left on desktop */}
            <div className="flex flex-col space-y-1 order-1 md:order-2">
              <p className="text-xs md:text-sm text-black font-light">
                Phone: <a href="tel:9163350755" className="hover:text-black transition-colors">(916) 335-0755</a>
              </p>
              <p className="text-xs md:text-sm text-black font-light">
                Email: <a href="mailto:Ben@lindywealth.com" className="hover:text-black transition-colors">Ben@lindywealth.com</a>
              </p>
              <Link href="/disclosure" className="text-black hover:text-black transition-colors text-xs md:text-sm font-light">
                Disclosure
              </Link>
              <a 
                href="/documents/Privacy.pdf"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-black transition-colors text-xs md:text-sm font-light"
              >
                Privacy
              </a>
              <a 
                href="https://client.schwab.com/Areas/Access/Login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-black transition-colors text-xs md:text-sm font-light"
              >
                Schwab
              </a>
              <a 
                href="https://app.rightcapital.com/account/login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-black transition-colors text-xs md:text-sm font-light"
              >
                RightCapital
              </a>
            </div>

            {/* Copyright & Location - Second on mobile (bottom), Right on desktop */}
            <div className="flex flex-col order-2 md:order-1">
              <p className="text-xs md:text-sm text-black font-light">&copy; 2025 Lindy Wealth</p>
              <p className="text-xs md:text-sm text-black font-light">
                Based in ☀️ Los Angeles
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}