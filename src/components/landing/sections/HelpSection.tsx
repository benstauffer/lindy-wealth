'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function HelpSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const title = useInView(titleRef, { amount: 0.8 })
  
  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex flex-col items-center justify-center bg-white px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32"
    >
      <div className="flex flex-col w-full max-w-xl mx-auto space-y-12 sm:space-y-8">
        <h2 ref={titleRef} className="text-xl md:text-4xl text-gray-900 font-semibold text-center">
          3 different ways
          <br />
          <span>I can help you</span>
        </h2>
      
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-left pl-8">
          <p className="text-[clamp(1.5rem,2vw,1.75rem)] leading-snug font-medium">
            1. Comprehensive financial planning that adapts to your evolving needs and goals.
          </p>
          
          <p className="text-[clamp(1.5rem,2vw,1.75rem)] leading-snug font-medium">
            2. Tax-efficient investment strategies designed to maximize your long-term wealth.
          </p>
          
          <p className="text-[clamp(1.5rem,2vw,1.75rem)] leading-snug font-medium">
            3. Estate planning and legacy building to protect and transfer your wealth.
          </p>
        </div>
      </div>
    </section>
  )
}
