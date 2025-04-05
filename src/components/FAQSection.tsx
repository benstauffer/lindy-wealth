'use client'

import { FAQCard } from './FAQCard'
import Link from 'next/link'

export function FAQSection() {
  return (
    <section id="faqs" className="w-full">
      <div className="flex items-center justify-between mb-4 bg-white">
        <div>
          <h2 className="text-base font-semibold text-neutral-500">
            Have questions?
          </h2>
          <p className="text-base text-neutral-400 mt-1">
            Review the FAQs or send me an <Link href="mailto:ben@lindywealth.com" className="text-neutral-500 hover:text-neutral-900 hover:underline">email</Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full">
        <Link href="/faq">
          <FAQCard
            title="Frequently Asked Questions"
            description="Common questions about financial planning, investment management, and working together."
          />
        </Link>
      </div>
    </section>
  )
}
