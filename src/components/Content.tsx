'use client'

import React, { useState } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import Link from 'next/link'

export function Content() {
  const bgClass = "bg-gradient-to-b from-white from-0% via-gray-50 via-15% to-white to-25%"
  const textClass = "text-black"
  const textMutedClass = "text-black/70"
  const textMutedClass2 = "text-black/50"

  return (
        <div className="max-w-lg mx-auto">

                    {/* Mission Section */}
          <section className="w-full mt-16">
            <div className="max-w-lg mx-auto px-4">
              <div className="space-y-6 text-left">
                
                <div>
                  <p className="text-base leading-relaxed text-black/80">
                  Lindy Wealth is a flat-fee financial planning practice focused on tax strategy, fee minimization, and diversified investing.                  </p>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-black/80">
                    Financial planning doesn't need to be complicated. Too often, the financial services industry creates complexity as a way to justify its existence. Complex products, expensive AUM fees, and active management don't lead to better outcomes.
                  </p>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-black/80">
                    Simple works. Boring works.                </p>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-black/80">
                  Good financial planning comes down to the fundamentals: get clear on your goals, save consistently, invest in diversified low-cost funds, adjust as tax laws change, protect against major risks, and plan intentionally for retirement and legacy.                   </p>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-black/80">
                  I build plans around your goals, not market predictions. I use simple strategies unless complexity improves after-tax, after-fee results. I provide clear roadmaps, tax-focused planning, and discipline during volatility. Together, we'll review plans periodically and always question complexity.                  </p>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-black/80">
                    Flat fees + proven tax strategies + custom planning = the Lindy way.
                  </p>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-black/80 font-medium">
                    One takeaway: Keep It Simple.
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-8 justify-start items-start">
                <button
                  onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                  className="text-black underline hover:text-black/70 transition-colors font-medium"
                >
                  Book a call
                </button>
                <Link 
                  href="/about"
                  className="text-black underline hover:text-black/70 transition-colors font-medium"
                >
                  About
                </Link>
                <Link 
                  href="/faq"
                  className="text-black underline hover:text-black/70 transition-colors font-medium"
                >
                  FAQ
                </Link>
                <Link 
                  href="/pricing"
                  className="text-black underline hover:text-black/70 transition-colors font-medium"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </section>
    </div>
  )
}
