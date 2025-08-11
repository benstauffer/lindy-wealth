'use client'

import Link from 'next/link'

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-6 pt-32 max-w-4xl mx-auto px-4">
      <div className="w-full mx-auto text-black">
        <div className="mx-auto py-4">
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-8">
            
            {/* Copyright & Location - Left side */}
            <div className="flex flex-col">
              <p className="text-xs md:text-sm text-black font-light">&copy; 2025 Lindy Wealth</p>
              <p className="text-xs md:text-sm text-black font-light">
                Based in ☀️ Los Angeles
              </p>
            </div>

            {/* Right side - Columns */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-16 w-full md:w-auto">
              
              {/* Clients Section */}
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs md:text-sm text-black font-medium mb-2">Clients</h4>
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

              {/* Contact Section */}
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs md:text-sm text-black font-medium mb-2">Contact</h4>
                <p className="text-xs md:text-sm text-black font-light">
                  Phone: <a href="tel:9163350755" className="hover:text-black transition-colors">(916) 335-0755</a>
                </p>
                <p className="text-xs md:text-sm text-black font-light">
                  Email: <a href="mailto:Ben@lindywealth.com" className="hover:text-black transition-colors">Ben@lindywealth.com</a>
                </p>
              </div>

              {/* Navigate Section (helps on mobile when header links collapse) */}
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs md:text-sm text-black font-medium mb-2">Navigate</h4>
                <Link href="/about" className="text-black hover:text-black transition-colors text-xs md:text-sm font-light">
                  About
                </Link>
                <Link href="/pricing" className="text-black hover:text-black transition-colors text-xs md:text-sm font-light">
                  Pricing
                </Link>
              </div>

              {/* Legal Section */}
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs md:text-sm text-black font-medium mb-2">Legal</h4>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}