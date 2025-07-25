'use client'

import React from 'react'

export function ServicesSection() {
  return (
    <section className="w-full" data-section="services">
      <div className="max-w-5xl mx-auto">
        <div className="w-full">
          <div className="bg-white py-8 px-12 md:px-16 rounded-3xl">
            <h2 className="text-4xl md:text-5xl leading-tight text-black font-medium pt-16 mb-16 text-center">
              Who we help
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-t border-neutral-200 pt-8">
              <div className="lg:col-span-1 text-center lg:text-left">
                <h3 className="text-sm text-black mb-2">Our Services</h3>
              </div>
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="text-xl mb-4">
                  Lindy Wealth is an independent wealth management firm that helps people secure their financial future.
                </div>
                <div className="text-sm text-black/70 mb-6 leading-relaxed">
                  <p>I'm Ben Stauffer, a certified financial planner and the founder of Lindy Wealth. I've worked with all types of clients over the years ranging from young professionals just starting to build out their investment portfolios to retired families to billion dollar net worth multigenerational families.</p>
                </div>

                <div>
                  <h4 className="text-xl text-black mb-6">Here's who I help:</h4>
                  
                  <div className="space-y-6">
                    <div className="relative">
                      <span className="absolute -left-6 text-sm text-black/70 lg:block hidden">1.</span>
                      <div>
                        <p className="text-sm text-black/70">
                          <span className="lg:hidden text-black underline">1. You're planning for early retirement, already retired, or aiming for work-optional life</span>
                          <span className="hidden lg:inline text-black underline">You're planning for early retirement, already retired, or aiming for work-optional life</span> and you feel unsure if your strategy is optimized — or if it will actually support the lifestyle you want. You're ready for a partner to help you run the numbers, minimize taxes, and make confident decisions with your money.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <span className="absolute -left-6 text-sm text-black/70 lg:block hidden">2.</span>
                      <div>
                        <p className="text-sm text-black/70">
                          <span className="lg:hidden text-black underline">2. You're a small business owner or entrepreneur</span>
                          <span className="hidden lg:inline text-black underline">You're a small business owner or entrepreneur</span> and you feel like your personal and business finances are all tangled up. You know big decisions are coming — a sale, expansion, succession — and want help getting organized and ahead of it all.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <span className="absolute -left-6 text-sm text-black/70 lg:block hidden">3.</span>
                      <div>
                        <p className="text-sm text-black/70">
                          <span className="lg:hidden text-black underline">3. You're a high-earning household managing a busy family life</span>
                          <span className="hidden lg:inline text-black underline">You're a high-earning household managing a busy family life</span> and you feel like there's too much on your plate. You've done well, but between careers, kids, and competing priorities, your finances feel disjointed — and you don't want to DIY it anymore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-xl text-black mb-6">What's included:</h4>
                  <div className="text-sm text-black/70 leading-relaxed space-y-2">
                    <p>- Investment strategy <br />
                      - Tax strategy <br />
                      - Retirement planning <br />
                      - Estate planning <br />
                      - Insurance reviews <br />
                      - Cash flow planning <br />
                      - Ongoing financial advice <br />
                      - Big decision support (RSUs, business sale, inheritance, etc.) <br />
                      - Email/Zoom access whenever questions come up <br />
                      - A clear, flexible plan that grows with you</p>
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