'use client'

import React from 'react'
import { AumCalculator } from './AumCalculator'

export function AumCalculatorSection(): React.ReactElement {
  return (
    <section className="w-full bg-[#E9E8E4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-6xl tracking-tight text-black font-medium">How much can a flat fee save you?</h2>
          <p className="text-xl md:text-2xl text-black max-w-xl mx-auto mt-8 tracking-tight">
          See how a fixed flat fee compares to a traditional percentage-of-assets model over time.
          </p>
        </div>
        <AumCalculator />
      </div>
    </section>
  )
}

