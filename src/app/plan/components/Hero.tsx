"use client"

import React from 'react'
 

export function PlanHero(): React.ReactElement {
  return (
    <section className="relative w-full py-16 md:py-28">
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-6xl px-4 h-full">
        <div className="w-full text-center">
          <h1
            className="text-3xl md:text-5xl lg:text-7xl tracking-tight text-black text-center max-w-5xl mx-auto font-medium mb-6 md:mb-8"
            style={{ lineHeight: '1.1' }}
          >
            SpaceX Equity Comp 
            <br />
            Financial Plan — 4 Weeks, $2,500 Flat Fee
          </h1>
          <p className="text-lg md:text-2xl text-black/90 max-w-3xl mx-auto tracking-tight px-4 mb-6 md:mb-8">
            In 4 weeks, you’ll receive a clear, actionable financial plan that maps your objectives and equity outcomes so you can move forward with confidence.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              className="group px-5 md:px-6 py-3 md:py-3 bg-[#17A7FF] text-white hover:bg-[#17A7FF]/80 transition-colors text-sm md:text-base font-normal flex items-center justify-center gap-2"
              onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
            >
              Book a 30‑min Intro
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <div className="text-xs md:text-sm text-black/60">Fee‑Only • Fiduciary • Virtual or LA • No asset minimums</div>
            <div className="text-[11px] md:text-xs text-black/50 max-w-3xl">
              Independent firm. Not affiliated with SpaceX. “SpaceX” and other marks belong to their respective owners.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

