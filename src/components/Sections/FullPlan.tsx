'use client'

import React from 'react'

export function FullPlan() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Centered title section */}
        <div className="mb-2">
          <h2 className="text-center text-3xl md:text-6xl text-white mb-12 max-w-2xl mx-auto italic font-semibold">
            Why Lindy Wealth?
          </h2>
        </div>

        {/* Intro text */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-white/90 leading-tight mb-6 max-w-xl mx-auto font-mono text-left">
            After years at traditional firms, I watched too many clients pay fees for planning that could be delivered more effectively. Most advisors charge close to 1% AUM, and over time, these costs compound and materially reduce your portfolio's long-term growth.
            <br />
            <br />
            That's why I built a different model: a clear, flat-fee structure that offers comprehensive, tax-focused financial planning designed to help you keep more of what you earn and actually reach your financial goals. 
            <br />
            <br />
            For $1,000, you get a comprehensive analysis — that some firms charge 5–10x for.
            <br />
            <br />
            The reality is, not everyone needs ongoing advisory relationships. 
            <br />
            <br />
            Many people just need a solid plan they can follow. My goal is to give you that plan without asset minimums or AUM fees, then let you choose what comes next.
          </p>
        </div>

        {/* Signature section */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-6">
            <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/images/BenHeadshot.png" 
                alt="Ben Stauffer - Financial Planner" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-mono font-medium text-white mb-1">Ben Stauffer, CFP®</p>
              <p className="text-base font-mono text-white/80 mb-1">Financial Planner</p>
              <p className="text-base font-mono text-white/80">Owner of Lindy Wealth</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
} 