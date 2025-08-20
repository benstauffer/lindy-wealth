'use client'

import React from 'react'
import { EquationGraphic } from './EquationGraphic'

export function EquationSection() {
  return (
    <section className="w-full bg-[#F1F0EA] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Centered title section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2A2C33] mb-6">
            I believe success comes down to a simple equation
          </h2>
          <p className="text-xl text-[#2A2C33]/70 font-light max-w-2xl mx-auto">
            The right strategy, executed consistently, with lower costs
          </p>
        </div>
        
        <EquationGraphic />
        
      </div>
    </section>
  )
}
