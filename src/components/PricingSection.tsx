'use client'

import React from 'react'

export function PricingSection() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="space-y-6 text-left">
        
        <div>
          <p className="text-base leading-relaxed text-black/80">
            One-time Plan: starting at $1,000.
            <br />
            Ongoing Planning: $5,000-$10,000/year.
          </p>
        </div>

        <div>
          <p className="text-base leading-relaxed text-black/80">
            I'm flat-fee only. No AUM fees, no commissions, no hidden costs. I'm only paid by you and never by product companies, banks, or insurance companies. This eliminates conflicts of interest and ensures my advice is always in your best interest.
          </p>
        </div>

      </div>
    </div>
  )
}
