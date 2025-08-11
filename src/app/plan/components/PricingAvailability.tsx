"use client"

import React from 'react'

export function PricingAvailability(): React.ReactElement {
  return (
    <section className="w-full py-16 md:py-28 bg-[#F1F0EA]">
      <div className="container mx-auto px-4 max-w-5xl text-black">
        <div className="bg-white p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl tracking-tight font-medium">Flat fee: $2,500 
                <br /> ($1,000 due to start. 
                  <br /> 
                $1,500 due on plan delivery.)</h2>
            </div>
            <button
              className="group px-5 md:px-6 py-3 md:py-3 bg-[#17A7FF] text-white hover:bg-[#17A7FF]/80 transition-colors text-sm md:text-base font-normal flex items-center justify-center gap-2 w-full md:w-auto"
              onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
            >
              Book Intro
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

