'use client'

import { FAQCard } from './FAQCard'
import Link from 'next/link'

export function FAQSection() {
  return (
    <section id="faqs" className="w-full">
      <div className="flex items-center justify-between mb-4 bg-white">
        <div>
          <h2 className="text-lg text-neutral-700 font-['Georgia']">
            Have questions?
          </h2>
          <p className="text-base text-neutral-700">
            Review frequently asked questions
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full">
        <Link href="/faq">
          <FAQCard
            title="Review FAQs "
            description="Common questions about financial planning, investment management, and working together."
          />
        </Link>
      </div>
    </section>
  )
}
