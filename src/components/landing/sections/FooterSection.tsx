import Link from 'next/link'

export function FooterSection() {
  return (
    <footer className="min-h-screen flex items-end">
      <div className="mx-auto w-full pb-10 md:pb-20">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <Link 
            href="/" 
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-['Georgia'] hover:text-neutral-800"
          >
            Lindy Wealth
          </Link>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-y-0 sm:gap-x-12 md:gap-x-24 text-neutral-500 text-base md:text-lg px-4 sm:px-0">
            {/* Company Info */}
            <div className="flex flex-col items-center space-y-2">
              <div>Lindy Wealth, LLC</div>
              <div>Los Angeles, CA</div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center space-y-2">
              <a href="mailto:ben@lindywealth.com" className="hover:text-neutral-800">
                ben@lindywealth.com
              </a>
              <a href="tel:+19163350755" className="hover:text-neutral-800">
                (916) 335-0755
              </a>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-center space-y-2">
              <Link href="/adv" className="hover:text-neutral-800">ADV</Link>
              <Link href="/privacy" className="hover:text-neutral-800">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}