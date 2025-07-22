'use client'

import Link from 'next/link'

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-6 pt-32 max-w-5xl mx-auto">
      <div className="w-full  mx-auto text-black">
      <div className="mx-auto py-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Left Side: Location & Contact */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col space-y-1">
           
            <div className="text-black space-y-1 text-sm">
            <p >
              Based in ☀️ Los Angeles
            </p>
              <p>
                Phone: <a href="tel:9163350755" className="hover:text-black transition-colors text-sm">916 335 0755</a>
              </p>
              <p>
                Email: <a href="mailto:Ben@lindywealth.com" className="hover:text-black transition-colors text-sm">Ben@lindywealth.com</a>
              </p>
            </div>
          </div>

          {/* Right Side Column 1: Legal */}
          <div className="flex flex-col space-y-1">
              <Link href="/disclosure" className="text-black hover:text-black transition-colors text-sm">
                Disclosure
              </Link>
              <a 
                href="/documents/Privacy.pdf"
                target="_blank" 
                rel="noopener noreferrer" 
                  className="text-black hover:text-black transition-colors text-sm"
              >
                Privacy
              </a>
          </div>

          {/* Right Side Column 2: Client Links */}
          <div className="flex flex-col space-y-1">
              <a 
                href="https://client.schwab.com/Areas/Access/Login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-black transition-colors text-sm"
              >
                Schwab
              </a>
              <a 
                href="https://app.rightcapital.com/account/login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-black transition-colors text-sm  "
              >
                RightCapital
              </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex justify-between items-center text-sm text-black">
          <p>&copy; {currentYear} Lindy Wealth</p>
        </div>
      </div>
      </div>
    </footer>
  )
}