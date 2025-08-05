'use client'

import React from 'react'
import { Header } from '../../components/Sections/Header'
import { FooterSection } from '../../components/Sections/Footer'
import { ServicesSection } from '../../components/Sections/AboutBen'
import { ProcessSection } from '../../components/Sections/ProcessSection'
import { BigCTASection } from '../../components/Sections/BigCTASection'
import { FaqSection } from '../../components/Sections/FaqSection'

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      <div id="main-content-that-scrolls" className="w-full relative z-10">

        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-32">
          <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-6xl px-4 h-full">
            <div className="w-full text-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl tracking-tight text-black text-center max-w-4xl mx-auto font-medium mb-6 md:mb-8" style={{ lineHeight: '1.1' }}>
                Evaluate Lindy Wealth through a free financial assessment
              </h1>
              <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto tracking-tight px-4">
                Discover how our personalized approach can help you achieve your financial goals with confidence and clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Assessment Process Section */}
        <section className="w-full py-16 md:py-32 bg-[#2A2C33]">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Title */}
            <div className="text-center mb-12 md:mb-16">
                             <h2 className="text-3xl md:text-5xl lg:text-7xl tracking-tight text-white mb-4 md:mb-6 font-medium">
                 Getting Started
               </h2>
               <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto px-4">
                 A 3-step process to see if we're a good fit.
               </p>
            </div>

            <div className="mx-auto">
              <div className="space-y-12 md:space-y-8">
                
                {/* Step 1: Discovery Meeting - Left Aligned */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
                  <div className="space-y-4 md:space-y-6">
                                         <h2 className="text-xl md:text-5xl text-white font-medium leading-tight tracking-tight">
                       Meet & Greet Call
                     </h2>
                    <p className="text-sm md:text-lg text-white/80 tracking-tight">
                     A 30 minute call to see if we're a good fit. We'll talk through your goals, financial situation, and what you're hoping to get out of the process. You'll get a feel for how I work, and we'll decide if it makes sense to move forward.
                    </p>
                    <div className="mt-4 md:mt-6">
                      <button 
                        onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                          className="group px-4 md:px-6 py-2 md:py-3 bg-white text-black transition-colors text-sm font-normal flex items-center justify-center gap-2 w-fit"
                      >
                        Schedule Your Meeting
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                  </div>
                </div>

                {/* Step 2: Share Documents - Right Aligned */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
                  <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  </div>
                  <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                    <h2 className="text-xl md:text-5xl text-white font-medium leading-tight tracking-tight">
                      Share Documents
                    </h2>
                    <p className="text-sm md:text-lg text-white/80 tracking-tight">
                      After our first call, we'll request a few key pieces of information to help us get a better understanding of your financial situation.
                    </p>
                  </div>
                </div>

                {/* Step 3: Review Assessment - Left Aligned */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
                  <div className="space-y-4 md:space-y-6">
                                         <h2 className="text-xl md:text-5xl text-white font-medium leading-tight tracking-tight">
                       Review Assessment
                     </h2>
                    <p className="text-sm md:text-lg text-white/80 tracking-tight">
                      During this meeting, we'll discuss the your assessment. My goal is to help you understand your financial situation and give you a clear path forward.
                      <br /><br />
                      After this call, take time to think about it. There's no hard sell or pressure to say yes. Just thoughtful conversations, honest feedback, and a chance for you to see how I work. Whether we move forward together or not, I hope you're glad we connected.

                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Client Process Section */}
        <section className="w-full py-16 md:py-32 bg-[#F1F0EA]">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Title */}
            <div className="text-center mb-12 md:mb-16">
                             <h2 className="text-3xl md:text-5xl lg:text-7xl tracking-tight text-black mb-4 md:mb-6 font-medium">
                 As Your
                 <br />
                Financial Partner
               </h2>
            </div>

            <div className="mx-auto">
              <div className="space-y-8 max-w-4xl mx-auto">
                <div className="space-y-4 md:space-y-6">
                                     <p className="text-base md:text-xl text-black/80 tracking-tight leading-relaxed">
                     As a client I hope to bring you the peace of mind that comes with having a comprehensive strategy. Together we'll focus on what we can control: minimizing unnecessary fees, optimizing taxes, using smart diversification, and keeping your behavior aligned with your "why." Because when you know exactly what the money is for, every choice becomes simpler.
                   </p>
                  <p className="text-base md:text-xl text-black/80 tracking-tight leading-relaxed">
                    That's why we start by mapping out the life you actually want and once your objectives are clear, we'll review the key areas to help you get the most out of life: your cash flow, how your investments are structured, where your taxes can be optimized, and protection strategies. All to make sure your finances are optimized and clear so you can have the confidence to focus on what matters most to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
                  </section>

                            {/* CTA Section */}
          <div className="mb-20">
            <BigCTASection />
          </div>

          {/* FAQ Section */}
          <div className="mb-0">
            <FaqSection />
          </div>

      </div>
      
      <FooterSection />
    </>
  )
} 