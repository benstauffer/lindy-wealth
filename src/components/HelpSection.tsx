'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function HelpSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const title = useInView(titleRef, { amount: 0.8 })
  
  return (
    <section className="w-full">
      <h2 ref={titleRef} className="text-xl md:text-4xl text-gray-900 font-semibold mb-8">
        3 ways I can help you
      </h2>
    
      <div className="space-y-6">
        <div className="bg-neutral-50 rounded-3xl p-6">
          <p className="text-lg font-medium">
            1. Comprehensive financial planning that adapts to your evolving needs and goals.
          </p>
        </div>
        
        <div className="bg-neutral-50 rounded-3xl p-6">
          <p className="text-lg font-medium">
            2. Tax-efficient investment strategies designed to maximize your long-term wealth.
          </p>
        </div>
        
        <div className="bg-neutral-50 rounded-3xl p-6">
          <p className="text-lg font-medium">
            3. Estate planning and legacy building to protect and transfer your wealth.
          </p>
        </div>
      </div>
    </section>
  )
}
