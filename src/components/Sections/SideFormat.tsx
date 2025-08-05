'use client'

import React from 'react'
import { DigitalAssetsGraphic } from '../Graphics/DigitalAssetsGraphic'

export function AboutSummarySection() {
  return (
    <section className="w-full bg-[#17A7FF]" data-section="about-summary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full space-y-4">
          

          {/* Financial Plan Graphic
          <div className="flex justify-center py-8 md:py-16">
            <DigitalAssetsGraphic />
          </div>
          */}

          {/* Staggered Text Sections */}
          <div className="space-y-20 md:space-y-40 py-8 md:py-16">
            
            {/* Section 1: Full Service Planning - Left Aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-5xl text-black font-light leading-tight font-['Georgia'] tracking-tight">
                  Full-service planning. Coordinated and built around <span className="italic">you</span>.
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
                <div className="space-y-2 w-96">
                  {/* Investment Portfolio Pill - Left */}
                  <div className="bg-[#9893A5]  px-3 py-2  flex items-center justify-between mr-12">
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                      </div>
                      <div>
                        <div className="text-sm text-black">Financial Planning</div>
                        <div className="text-sm text-black/80">Tax-focused planning</div>
                      </div>
                    </div>
                  </div>

                  {/* Tax Strategy Pill - Right */}
                  <div className="bg-[#17A7FF]  px-3 py-2 flex items-center justify-between ml-12">
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                      </div>
                      <div>
                        <div className="text-sm text-white">Investment Management</div>
                        <div className="text-sm text-white/80">Low-cost & globally diversified</div>
                      </div>
                    </div>
                  </div>

                  {/* Estate Planning Pill - Left */}
                  <div className="bg-[#D0D6E5]  px-3 py-2 flex items-center justify-between mr-12">
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                      </div>
                      <div>
                        <div className="text-sm text-white">Ongoing Execution</div>
                        <div className="text-sm text-white/80">Support & guidance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Early Retirement - Right Aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="flex justify-center lg:justify-start">
                                <div className="space-y-2 w-96">
                  {/* Index Funds Pill - Left */}
                  <div className="bg-[#9893A5] px-3 py-2 0 flex items-center justify-between ml-12">
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-black">Financial Projections</div>
                        <div className="text-sm text-black/80">Monte Carlo simulations</div>
                      </div>
                    </div>
                  </div>

                  {/* 401k Rollover Pill - Right */}
                  <div className="bg-[#17A7FF] px-3 py-2 0 flex items-center justify-between mr-12">
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-white">401(k) Rollover</div>
                        <div className="text-sm text-white/80">Traditional IRA</div>
                      </div>
                    </div>
                  </div>

                  {/* Bridge Account Pill - Left */}
                  <div className="bg-[#D0D6E5] px-3 py-2 0 flex items-center justify-between ml-12">
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-white">Bridge Account</div>
                        <div className="text-sm text-white/80">Ages 50-59½</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-5xl text-black font-light leading-tight font-['Georgia'] tracking-tight">
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

            {/* Section 3: High-Earning Households - Left Aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-5xl text-black font-light leading-tight font-['Georgia'] tracking-tight">
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
                                <div className="space-y-2 w-96 ">
                  {/* Real Estate Fund Pill - Left */}
                  <div className="bg-[#9893A5] px-3 py-2 0 flex items-center justify-between mr-12">
                    <div className="flex items-center space-x-12">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-black">Real Estate Fund</div>
                        <div className="text-sm text-black/80">Private REIT</div>
                      </div>
                    </div>
                  </div>

                  {/* Backdoor Roth Pill - Right */}
                  <div className="bg-[#17A7FF] px-3 py-2 0 flex items-center justify-between ml-12">
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-white">Backdoor Roth</div>
                        <div className="text-sm text-white/80">Tax Strategy</div>
                      </div>
                    </div>
                  </div>

                  {/* Irrevocable Trust Pill - Left */}
                  <div className="bg-[#D0D6E5] px-3 py-2 0 flex items-center justify-between mr-12">
                    <div className="flex items-center space-x-12">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-white">Estate & Insurance Planning</div>
                        <div className="text-sm text-white/80">Legacy & Protection Strategies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
} 