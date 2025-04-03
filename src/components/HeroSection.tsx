'use client'

import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-start mt-8">
      <div className="w-full space-y-12"> 
        {/* Hero Text */}
        <div className="w-full space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-semibold text-left">
              Actionable financial advice & planning to reach your goals with confidence.
            </h1>

            <p className="text-base text-neutral-600 leading-relaxed">
              Lindy Wealth helps forward-looking individuals and families with their financial lives so they can keep more of their wealth and focus on what matters most.
              <br />
              <br />
              Less guesswork, more peace of mind.
            </p>
          </div>

          <div>
            <a 
              className="group inline-flex items-center px-4 py-2 text-sm font-medium shadow-inner text-black bg-neutral-100 border border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400 rounded-lg transition-colors duration-200"
              href="#help"
            >
              See if you're a fit
              <FaArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 