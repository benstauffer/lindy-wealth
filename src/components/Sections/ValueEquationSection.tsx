'use client'

import React from 'react'
import { EquationGraphic } from './EquationGraphic'

export function ValueEquationSection(): React.ReactElement {
  return (
    <section className="w-full bg-[#E9E8E4] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-normal tracking-tight text-black mb-10">
          I believe the equation for successful investing is simple:
        </h2>

        {/* Equation graphic */}
        <div className="mb-16">
          <EquationGraphic />
        </div>

        {/* Feature grid (3 horizontal cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-black/10">
            <div className="text-2xl text-black mb-3">No AUM fees</div>
            <p className="text-sm text-black/70 leading-6">
              Our flat-fee is dramatically lower than peers. Based on industry averages, a
              $5,000,000 portfolio often saves nearly $30,000 per year.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/10">
            <div className="text-2xl text-black mb-3">Disciplined approach</div>
            <p className="text-sm text-black/70 leading-6">
              Invest like the world’s most sophisticated investors using a proven and cogent
              approach to portfolio construction.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/10">
            <div className="text-2xl text-black mb-3">Financial planning guidance</div>
            <p className="text-sm text-black/70 leading-6">
              Your advisor works closely with you to develop a comprehensive plan so your decisions
              are aligned with your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

