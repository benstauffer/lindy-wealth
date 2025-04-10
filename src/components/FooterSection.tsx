import Link from 'next/link'

export function FooterSection() {
  return (
    <section id="contact" className="w-full mt-24 pb-36">
      <h2 className="text-lg text-neutral-700 font-['Georgia']">
        Contact & more links
      </h2>
      
      <div className="mt-4">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-6 flex-wrap">
              <Link href="/about" className="text-base text-neutral-500 hover:text-neutral-700 underline">
                About
              </Link>
              <Link href="/faq" className="text-base text-neutral-500 hover:text-neutral-700 underline">
                FAQ
              </Link>
            </div>

            <div className="flex space-x-6 flex-wrap">
            <a 
                href="https://client.schwab.com/Areas/Access/Login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base text-neutral-500 hover:text-neutral-700 underline"
              >
                Charles Schwab
              </a>
              <a href="tel:+19163350755" className="text-base text-neutral-500 hover:text-neutral-700 underline">
                Phone
              </a>
              <a href="mailto:ben@lindywealth.com" className="text-base text-neutral-500 hover:text-neutral-700 underline">
                Email
              </a>
              <a 
                href="https://adviserinfo.sec.gov/firm/summary/335277"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-neutral-500 hover:text-neutral-700 underline"
              >
                Form ADV
              </a>
              <a 
                href="/documents/Privacy.pdf"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base text-neutral-500 hover:text-neutral-700 underline"
              >
                Privacy
              </a>
              
            </div>
          </div>
        
          <div className="text-lg text-neutral-700 font-['Georgia']">
            <div>Lindy Wealth, LLC</div>
            <div>Los Angeles, CA</div>
          </div>
          
        </div>
      </div>
    </section>
  )
}