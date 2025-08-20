'use client'

import React from 'react'
import { EquationGraphic } from './EquationGraphic'

export function AboutBenFullWidthSection() {
  return (
    <section className="w-full bg-[#2A2C33] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Hero section with Ben */}
        <div className="text-center mb-16">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-8">
            A different approach
            <br />
            to wealth management
          </h1>
          
          {/* Ben's photo - centered */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 bg-white p-6 flex items-center justify-center">
              <img
                src="/images/BenHeadshot.png"
                alt="Ben Stauffer - Certified Financial Planner® Professional"
                className="w-36 h-36 rounded-full object-cover object-left"
              />
            </div>
          </div>
          
          {/* Content - centered container, left-aligned text */}
          <div className="max-w-lg mx-auto text-left">
            <p className="text-2xl text-white/90 leading-tight">
              Hi—I'm Ben Stauffer, founder of Lindy Wealth. As a Certified Financial Planner®, my goal is to provide you with a personalized, 
              comprehensive roadmap that helps you get the most out of life with your money. I believe successful investing comes down to a simple equation:
            </p>
          </div>
        </div>

        {/* Value equation */}
        <div className="mb-16">
          <EquationGraphic />
        </div>

        {/* Three pillars - enhanced design for dark background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 md:p-10 shadow-sm border-l-4 border-[#17A7FF]">
            <div className="text-3xl font-semibold text-black mb-4">No AUM fees</div>
            <p className="text-base text-black/70 leading-relaxed">
              Our flat-fee model is dramatically lower than traditional advisors. A typical $5M portfolio 
              saves nearly $30,000 annually compared to industry averages.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 shadow-sm border-l-4 border-[#5BD363]">
            <div className="text-3xl font-semibold text-black mb-4">Disciplined approach</div>
            <p className="text-base text-black/70 leading-relaxed">
              Invest like institutional investors using evidence-based portfolio construction 
              and systematic rebalancing strategies.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 shadow-sm border-l-4 border-[#9893A5]">
            <div className="text-3xl font-semibold text-black mb-4">Comprehensive guidance</div>
            <p className="text-base text-black/70 leading-relaxed">
              Work directly with a fiduciary advisor who develops personalized strategies 
              aligned with your specific goals and values.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
