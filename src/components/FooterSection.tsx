import Link from 'next/link'

export function FooterSection() {
  return (
    <section id="contact" className="w-full mt-24 pb-16">
      <h2 className="text-base font-semibold text-neutral-500">
        Contact & more links
      </h2>
      
      <div className="mt-4">
        <div className="flex flex-col space-y-8">
          <div className="flex space-x-6">
            <a href="tel:+19163350755" className="text-base text-neutral-500 hover:text-neutral-600 underline">
              916.335.0755
            </a>
            <a href="mailto:ben@lindywealth.com" className="text-base text-neutral-500 hover:text-neutral-600 underline">
              Email
            </a>
            <Link href="/adv" className="text-base text-neutral-500 hover:text-neutral-600 underline">
              ADV
            </Link>
            <Link href="/privacy" className="text-base text-neutral-500 hover:text-neutral-600 underline">
              Privacy
            </Link>
            <Link href="/about" className="text-base text-neutral-500 hover:text-neutral-600 underline">
              About
            </Link>
            <Link href="/faq" className="text-base text-neutral-500 hover:text-neutral-600 underline">
              FAQ
            </Link>
          </div>

          <div className="text-base text-neutral-500 space-y-1">
            <div>Lindy Wealth, LLC</div>
            <div>Los Angeles, CA</div>
          </div>
        </div>
      </div>
    </section>
  )
}