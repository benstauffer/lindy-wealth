'use client'

import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-start mt-8">
      <div className="w-full space-y-12"> 
        {/* Hero Text */}
        <div className="w-full space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-semibold text-left">
              Financial advice & planning to reach your goals with confidence. 
              <br />
              <span className="text-[#FB651F]">Less guesswork, more peace of mind.</span>
            </h1>

            <p className="text-base text-neutral-600 leading-relaxed">
              Lindy Wealth helps forward-looking individuals and families with their financial lives so they can keep more of their wealth and focus more on what matters most.
            </p>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-neutral-500">
                  Join my email list. It's packed with financial planning strategies and practical tips for optimizing your financial life.
                </p>
              </div>
              
              <div className="w-full max-w-xl">
                <iframe 
                  src="https://embeds.beehiiv.com/886d101b-12e1-438b-9c0e-0b06f7c1f176?slim=true" 
                  data-test-id="beehiiv-embed" 
                  height="52" 
                  frameBorder="0" 
                  scrolling="no" 
                  style={{ 
                    margin: 0, 
                    borderRadius: '0px !important', 
                    backgroundColor: 'transparent',
                    width: '100%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 