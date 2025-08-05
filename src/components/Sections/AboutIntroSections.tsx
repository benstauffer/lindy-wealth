'use client'

import React from 'react'
import { DigitalAssetsGraphic } from '../Graphics/DigitalAssetsGraphic'

export function AboutIntroSections() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
        
        {/* Section 1: Full Service Planning - Text Left, Graphic Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl text-black font-light leading-tight">
              Full-service financial planning. 
              <br />
              Coordinated and built around <span className="italic">you</span>.
            </h2>
            <p className="text-base md:text-lg text-black/80 leading-relaxed">
              Lindy is an independent planning-first advisory firm helping clients with the 
              key areas to help you get the most out of life: your cash flow, how your investments 
              are structured, where your taxes can be optimized, and protection strategies. All to 
              make sure your finances are optimized and clear so you can have the confidence to 
              focus on what matters most to you.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <DigitalAssetsGraphic />
          </div>
        </div>

        {/* Section 2: Early Retirement - Graphic Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            {/* Placeholder for retirement graphic */}
            <div className="w-80 h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
              <div className="text-center">
                <div className="text-4xl mb-2">🏖️</div>
                <div className="text-blue-800 font-medium">Early Retirement</div>
                <div className="text-blue-600 text-sm">Work Optional Life</div>
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl md:text-4xl text-black font-light leading-tight">
              Planning for early retirement or work-optional life
            </h2>
            <p className="text-base md:text-lg text-black/80 leading-relaxed">
              Whether you're pursuing FIRE, already retired, or aiming for work-optional life, 
              we help you navigate the unique challenges of non-traditional retirement. From 
              sustainable withdrawal strategies to healthcare coverage transitions, we ensure 
              your financial plan supports the lifestyle you want on your timeline.
            </p>
          </div>
        </div>

        {/* Section 3: High-Earning Households - Text Left, Graphic Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl text-black font-light leading-tight">
              Comprehensive planning for high-earning households
            </h2>
            <p className="text-base md:text-lg text-black/80 leading-relaxed">
              Managing complex financial situations requires sophisticated strategies. We work 
              with high-earning professionals and families to optimize tax efficiency, implement 
              advanced estate planning, access alternative investments, and coordinate all the 
              moving pieces of your financial life so you can focus on your career and family.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            {/* Placeholder for high-earning graphic */}
            <div className="w-80 h-64 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center border border-emerald-200">
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <div className="text-emerald-800 font-medium">High Earners</div>
                <div className="text-emerald-600 text-sm">Complex Planning</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
} 