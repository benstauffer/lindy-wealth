'use client'

import React from 'react'

export function Pitfalls(): React.ReactElement {
  return (
    <section className="w-full py-16 md:py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-4xl tracking-tight text-black mb-6 md:mb-8 font-medium">Common pitfalls we fix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* 1 */}
          <div className="bg-[#F8F8F5] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">1. Clarify objectives and create a prioritized action list</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-black/70 mt-4">
              <li>Facilitate a values/goals conversation.</li>
              <li>Turn those into 3–5 measurable objectives with target dates.</li>
              <li>Build a single-page action list showing exactly what to do next and when.</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="bg-[#F8F8F5] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">2. Ensure a complete estate and insurance plan</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-black/70 mt-4">
              <li>Review or create core documents: revocable trust, will, POAs, AHCDs.</li>
              <li>Evaluate life, disability, and umbrella coverage for income and liability protection.</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="bg-[#F8F8F5] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">3. Implement a proper Investment Policy Statement (IPS) and portfolio strategy</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-black/70 mt-4">
              <li>Define target allocation and acceptable drift bands.</li>
              <li>Set rules for rebalancing, asset location, and tax-loss harvesting.</li>
              <li>Integrate company stock into the IPS with a hard concentration cap and automatic sell rules.</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="bg-[#F8F8F5] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">4. Build and execute an equity compensation strategy</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-black/70 mt-4">
              <li>Inventory all equity grants (type, vesting, strike, FMV).</li>
              <li>Model tax impact for different sale/exercise schedules.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

