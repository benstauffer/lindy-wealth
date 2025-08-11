"use client"

import React from "react"
 

export function ProcessTimeline(): React.ReactElement {
  return (
    <section className="w-full py-16 md:py-28 bg-[#2A2C33]">
      <div className="container mx-auto px-4 max-w-5xl text-white">
        <h2 className="text-2xl md:text-4xl tracking-tight mb-12 font-medium text-center">
          How it works
        </h2>

        <div className="space-y-10 md:space-y-14">
          {/* 1 - Left */}
          <div className="flex md:items-center md:justify-start">
            <div className="bg-white/5 p-5 md:p-6 rounded-sm max-w-xl w-full">
              <h3 className="text-lg md:text-xl font-medium mb-2">Intro Call</h3>
              <p className="text-white/80 text-sm md:text-base">30‑min call to get to know you, confirm fit, and answer questions.</p>
            </div>
          </div>

          {/* 2 - Right */}
          <div className="flex md:items-center md:justify-end">
            <div className="bg-white/5 p-5 md:p-6 rounded-sm max-w-xl w-full">
              <h3 className="text-lg md:text-xl font-medium mb-2">Engagement Begins ($1,000 paid upfront) → Discovery Call</h3>
              <p className="text-white/80 text-sm md:text-base">After the intro, I’ll request documents. We’ll review your materials along with your goals and objectives, then meet for a discovery call.</p>
            </div>
          </div>

          {/* 3 - Left */}
          <div className="flex md:items-center md:justify-start">
            <div className="bg-white/5 p-5 md:p-6 rounded-sm max-w-xl w-full">
              <h3 className="text-lg md:text-xl font-medium mb-2">Plan Preparation</h3>
              <p className="text-white/80 text-sm md:text-base">I build your financial plan—cash flow, investments, tax strategy, risk/estate review, and scenarios—based on your data and priorities.</p>
            </div>
          </div>

          {/* 4 - Right */}
          <div className="flex md:items-center md:justify-end">
            <div className="bg-white/5 p-5 md:p-6 rounded-sm max-w-xl w-full">
              <h3 className="text-lg md:text-xl font-medium mb-2">Plan Delivery (Remaining $1,500 paid)</h3>
              <p className="text-white/80 text-sm md:text-base">We review your plan together, finalize decisions, and hand off a clear 90‑day action list with owners and timelines.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            className="group px-5 md:px-6 py-3 md:py-3 bg-white text-black hover:bg-white/90 transition-colors text-sm md:text-base font-normal flex items-center justify-center gap-2"
            onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
          >
            Book your Intro
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

