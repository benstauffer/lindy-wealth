"use client"

import React from 'react'
import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller"

export function WhoAreYouSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#2A2C33] to-[#1a1c23] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-white font-medium mb-4">
            Who Are You?
          </h2>          
          {/* Click on a person button */}
          <div className="flex items-center justify-center mb-8">
            <button className=" text-white/80 px-4 py-2 text-sm font-medium border border-white/20 transition-colors flex items-center gap-2">
              Click on a person 👇
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
          
          {/* Card 1: Early Retirement */}
          <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer group flex flex-col h-full">
            <div className="text-center flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl text-white font-medium mb-8">
                Planning for Retirement
              </h3>
              <p className="text-white/80 leading-relaxed text-sm flex-grow">
                You're planning for early retirement, aiming for a work-optional life, or already retired and you feel unsure if your strategy is optimized — or if it will actually support the lifestyle you want.
              </p>
              <button className="mt-12 bg-white text-black px-6 py-2 font-medium hover:bg-white/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2: High-Earning Family */}
          <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer group flex flex-col h-full">
            <div className="text-center flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl text-white font-medium mb-8">
                High-Earners
              </h3>
              <p className="text-white/80 leading-relaxed text-sm flex-grow">
                You're a high-earning family managing a busy life and you feel like there's too much on your plate. Between careers, kids, maybe a business, you don't want to DIY it anymore.
              </p>
              <button className="mt-12 bg-white text-black px-6 py-2 font-medium hover:bg-white/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3: Catch All */}
          <div className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer group flex flex-col h-full">
            <div className="text-center flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl text-white font-medium mb-8">
                Other Goals & Situations
              </h3>
              <p className="text-white/80 leading-relaxed text-sm flex-grow">
                Whether you're navigating a career transition, managing complex finances, or simply want professional guidance to optimize your financial strategy, I'm here to help you achieve your unique goals.
              </p>
              <button className="mt-12 bg-white text-black px-6 py-2 font-medium hover:bg-white/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>

        </div>

        {/* Description below cards */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            I work with people who want a clear, confident strategy and often don't have the time to figure it all out themselves.
          </p>
        </div>

        {/* Scrolling Services */}
        <div className="mt-16">
          <MarqueeLogoScroller
            title="Our Services"
            description="Comprehensive financial planning and investment management tailored to your goals."
            services={[
              { name: "Investment Management" },
              { name: "Tax Planning" },
              { name: "Retirement Planning" },
              { name: "Estate Planning" },
              { name: "Insurance Reviews" },
              { name: "Cash Flow Planning" },
              { name: "Direct Indexing" },
              { name: "Net Worth Tracking" },
              { name: "CFP® Financial Advisor" }
            ]}
            speed="normal"
            className="bg-transparent border-none"
          />
        </div>
      </div>
    </section>
  )
} 