'use client'

import React from 'react'
import { EquationGraphic } from './EquationGraphic'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function AboutBen() {
  return (
    <section className="w-full bg-[#2A2C33] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Centered title section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Flat-fee, tax-smart wealth management built to make work optional
          </h2>
        </div>
        
        {/* Centered image */}
        <div className="flex justify-center mb-12">
          <div className="relative">
                        <div className=" bg-[#373941] p-8 flex flex-col items-center justify-center text-center">
                <img
                  src="/images/BenHeadshot.png"
                  alt="Ben Stauffer - Certified Financial Planner® Professional"
                  className="w-40 h-40 rounded-full object-cover object-left mb-4"
                />
                <h3 className="text-white text-xl mb-1">Ben Stauffer</h3>
                <div className="bg-[#51555D] px-4 py-1 rounded-full">
                  <span className="text-sm text-white">CFP® Professional</span>
                </div>
              </div>
          </div>
        </div>
        
        {/* Centered text content */}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Hi, I'm Ben Stauffer, founder of Lindy Wealth. 
            As a CFP®, I help high earners cut taxes, invest smarter, and build a plan for a work-optional life.
          </p>
          <a href="/about" className="text-[#17A7FF] hover:text-[#17A7FF]/80 transition-colors text-lg">
            Read more →
          </a>
        </div>
        
      </div>
    </section>
  )
} 