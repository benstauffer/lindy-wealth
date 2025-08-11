'use client'

import React from 'react'

export function WhyUs(): React.ReactElement {
  return (
    <section className="w-full py-16 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-4xl tracking-tight text-black mb-6 md:mb-8 font-medium">Why Lindy Wealth</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#F8F8F5] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">Fee‑only fiduciary</h3>
            <p className="text-sm md:text-base text-black/70">We’re paid only by you. No commissions. Advice aligned with your interests.</p>
          </div>
          <div className="bg-[#F8F8F5] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">Equity‑comp heavy</h3>
            <p className="text-sm md:text-base text-black/70">SAUs (SpaceX RSUs), ISO/AMT ladders, NQSO timing, ESPP—we live this.</p>
          </div>
          <div className="bg-[#F8F8F5] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">Flat fee, no minimums</h3>
            <p className="text-sm md:text-base text-black/70">Get clarity without moving assets. Ongoing/AUM is optional later.</p>
          </div>
          <div className="bg-[#F8F8F5] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">Clear, fast, technical</h3>
            <p className="text-sm md:text-base text-black/70">We speak engineer. We’ll be direct, precise, and on time.</p>
          </div>
          <div className="bg-[#F8F8F5] p-5 md:p-6 md:col-span-2">
            <h3 className="text-lg md:text-xl font-medium">SpaceX realities, handled</h3>
            <p className="text-sm md:text-base text-black/70">Tender‑offer windows, blackout periods, and SAU withholding quirks are built into the plan. We’ll model AMT credit carryforward, and pre‑commit liquidity so taxes and diversification don’t get left to chance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

