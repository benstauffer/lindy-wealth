"use client"

import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

export function BigCTASection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full text-center">
          <div className="bg-[#17A7FF] px-12 md:px-16 py-24 md:py-32">
            <h2 className="text-5xl md:text-7xl tracking-tight text-white mb-8 font-medium leading-tight">
              Less guesswork.
              <br />
              More peace of mind.
            </h2>
            
            {/* Call to Action Section */}
            <div className="w-full text-center mt-8">
              <button 
                  onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                  className="group px-6 py-4 bg-white text-black hover:bg-white/80 transition-colors text-sm md:text-lg font-normal flex items-center justify-center gap-2 mx-auto"
              >
                  Get started
                  <RiArrowRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 