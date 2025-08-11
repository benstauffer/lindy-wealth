'use client'

import React from 'react'

export function Faq(): React.ReactElement {
  return (
    <section className="w-full py-16 md:py-28 bg-[#F1F0EA]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-4xl tracking-tight text-black mb-6 md:mb-8 font-medium">FAQ</h2>
        <div className="space-y-6">

        <div className="bg-white p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">What’s included in the $2,500 plan?</h3>
            <p className="text-sm md:text-base text-black/70">A clear, actionable financial plan covering your goals, investments, estate and insurance needs, and a full equity compensation strategy.</p>
          </div>
          <div className="bg-white p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">Do I need to be in Los Angeles?</h3>
            <p className="text-sm md:text-base text-black/70">No. We work virtually nationwide and locally in LA.</p>
          </div>
          <div className="bg-white p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">Do you have asset minimums?</h3>
            <p className="text-sm md:text-base text-black/70">No. This is a flat-fee engagement with no asset minimums.</p>
          </div>
          <div className="bg-white p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">How do payments work?</h3>
            <p className="text-sm md:text-base text-black/70">$1,000 upfront to start. $1,500 due on delivery of your plan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

