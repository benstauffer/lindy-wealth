'use client'

import React from 'react'
import { Check } from 'lucide-react'

export function EquationGraphic(): React.ReactElement {

  return (
    <div className="w-full flex justify-center py-8">
      {/* Horizontal equation layout */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 max-w-4xl">
        {/* Pill 1 */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 min-w-0">
          <div className="w-6 h-6 rounded-full bg-[#5BD363] grid place-items-center flex-shrink-0">
            <Check className="w-3 h-3 text-black" />
          </div>
          <div className="text-sm text-black leading-tight whitespace-nowrap">Personal Planning</div>
        </div>
        
        {/* Plus sign */}
        <div className="w-6 h-6 rounded-full bg-[#9893A5] text-white grid place-items-center text-sm flex-shrink-0">+</div>
        
        {/* Pill 2 */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 min-w-0">
          <div className="w-6 h-6 rounded-full bg-[#5BD363] grid place-items-center flex-shrink-0">
            <Check className="w-3 h-3 text-black" />
          </div>
          <div className="text-sm text-black leading-tight whitespace-nowrap">Smart Investing</div>
        </div>
        
        {/* Plus sign */}
        <div className="w-6 h-6 rounded-full bg-[#9893A5] text-white grid place-items-center text-sm flex-shrink-0">+</div>
        
        {/* Pill 3 */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 min-w-0">
          <div className="w-6 h-6 rounded-full bg-[#5BD363] grid place-items-center flex-shrink-0">
            <Check className="w-3 h-3 text-black" />
          </div>
          <div className="text-sm text-black leading-tight whitespace-nowrap">Flat Fees</div>
        </div>
        
        {/* Equals sign */}
        <div className="w-6 h-6 rounded-full bg-[#9893A5] text-white grid place-items-center text-sm flex-shrink-0">=</div>
        
        {/* Result pill */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 min-w-0">
          <div className="w-6 h-6 rounded-full bg-[#17A7FF] grid place-items-center flex-shrink-0">
            <Check className="w-3 h-3 text-white" />
          </div>
          <div className="text-sm text-black leading-tight whitespace-nowrap">Better Results</div>
        </div>
      </div>
    </div>
  )
}

