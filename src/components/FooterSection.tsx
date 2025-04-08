import Link from 'next/link'

export function FooterSection() {
  return (
    <section id="contact" className="w-full mt-24 pb-16">
      <h2 className="text-base text-neutral-700 font-['Georgia']">
        Contact & more links
      </h2>
      
      <div className="mt-4">
        <div className="flex flex-col space-y-8">
          <div className="flex space-x-6">
            <a href="tel:+19163350755" className="text-base text-neutral-500 hover:text-neutral-700 underline">
              916.335.0755
            </a>
            <a href="mailto:ben@lindywealth.com" className="text-base text-neutral-500 hover:text-neutral-700 underline">
              Email
            </a>
            <Link href="/adv" className="text-base text-neutral-500 hover:text-neutral-700 underline">
              ADV
            </Link>
            <Link href="/privacy" className="text-base text-neutral-500 hover:text-neutral-700 underline">
              Privacy
            </Link>
            <Link href="/about" className="text-base text-neutral-500 hover:text-neutral-700 underline">
              About
            </Link>
            <Link href="/faq" className="text-base text-neutral-500 hover:text-neutral-700 underline">
              FAQ
            </Link>
          </div>

          <div className="text-base text-neutral-500 space-y-1 font-['Georgia']">
            <div>Lindy Wealth, LLC</div>
            <div>Los Angeles, CA</div>
          </div>

          <Link href="/">
            <span className="deutsche-font text-7xl my-16 text-neutral-400 hover:text-neutral-900 leading-none inline-block">
              L
            </span>
          </Link>
          
        </div>
      </div>
    </section>
  )
}