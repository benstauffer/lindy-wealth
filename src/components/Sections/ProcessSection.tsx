"use client"

import React from 'react'

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Introduction\n& Proposal",
      description: "We'll learn about each other to see if there's a potential fit. It's a casual, no-pressure conversation."
    },
    {
      number: "02", 
      title: "Planning\n& Investment Strategy",
      description: "We go deep so we can give you well-informed guidance. You'll teach us your fears and motivations around money."
    },
    {
      number: "03",
      title: "Ongoing\nExecution", 
      description: "After our initial work to organize your financial life, we'll meet quarterly to track progress."
    }
  ]

  return (
    <section className="w-full bg-[#2A2C33]">
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 mx-auto max-w-6xl px-4">
                 {/* Title */}
                 <div className="w-full mb-4 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-white font-medium mb-12">
              How it works
            </h2>
          </div>
        <div className="w-full mb-8">
                      <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((step, index) => {
                const colors = ['#51555D', '#51555D','#51555D'];
                const textColors = ['text-white', 'text-white', 'text-white'];
                
                return (
                  <div key={index} className="relative">
                    {/* Panel */}
                    <div className={`p-8 h-full`} style={{ backgroundColor: colors[index] }}>
                      <div className={textColors[index]}>
                        {/* Number */}
                        <div className="text-5xl mb-32 font-medium">
                          {step.number}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl  tracking-tight leading-tight mb-4 whitespace-pre-line font-medium">
                          {step.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-lg leading-tight">
                          {step.description}
                        </p>

                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Description below cards */}
        <div className="w-full mb-4 text-center">
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            No cookie-cutter financial advice. This process is guided by your why so you get a plan that's truly yours.
          </p>
        </div>
        
        {/* Learn More Button */}
        <div className="w-full mb-24 text-center mt-8">
          <a 
            href="/process"
            className="group px-8 py-4 bg-[#17A7FF] text-white hover:bg-[#17A7FF]/80 transition-colors text-lg font-normal flex items-center justify-center gap-2 mx-auto w-fit"
          >
            Learn more
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 