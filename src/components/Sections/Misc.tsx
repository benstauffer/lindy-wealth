'use client'

import React from 'react'

export function Misc() {
  return (
    <div className="max-w-3xl mx-auto mt-12 rounded-3xl p-6 shadow-inner" style={{
      border: '.5px solid transparent',
      borderRadius: '24px',
      background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
    }}>
      {/* Title for the three pillars */}
      <div className="text-center my-4">
        <h2 className="text-2xl md:text-4xl text-white font-medium leading-tight tracking-tight italic">
          Our Formula for <br />
          Great Planning
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {/* Section 1: Flat Fees */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl p-4 shadow-inner flex items-center justify-center mx-auto mb-4" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <span className="text-gray-300 text-2xl font-semibold">1</span>
          </div>
          <h2 className="text-xl text-white font-medium leading-tight tracking-tight mb-4">
            Flat
            <br />
            Fee.
            <br />
          </h2>
          <p className="text-md text-white/80 tracking-tight font-mono">
          Transparent flat-fee structure with no hidden costs or expenseive AUM fees.
          </p>
        </div>

        {/* Section 2: Tax-Efficient Portfolios */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl p-4 shadow-inner flex items-center justify-center mx-auto mb-4" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <span className="text-gray-300 text-2xl font-semibold">2</span>
          </div>
          <h2 className="text-xl text-white font-medium leading-tight tracking-tight mb-4">
            Smart Tax
            <br />
            Optimization.
            <br />
          </h2>
          <p className="text-md text-white/80 tracking-tight font-mono">
          Strategic tax planning tailored to help improve your overall tax situation
          </p>
        </div>

        {/* Section 3: Personalized Planning */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl p-4 shadow-inner flex items-center justify-center mx-auto mb-4" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <span className="text-gray-300 text-2xl font-semibold">3</span>
          </div>
          <h2 className="text-xl text-white font-medium leading-tight tracking-tight mb-4">
            Custom
            <br />
            Planning.
            <br />
          </h2>
          <p className="text-md text-white/80 tracking-tight font-mono">
          A personalized plan built around your specific goals, timeline, and situation
          </p>
        </div>
      </div>
    </div>
  )
}