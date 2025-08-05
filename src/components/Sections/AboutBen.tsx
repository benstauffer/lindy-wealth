'use client'

import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function ServicesSection() {
  return (
    <section className="w-full bg-[#E9E8E4] py-24">
      <div className="max-w-4xl mx-auto px-4">

        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left - Polaroid Photo Card */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Polaroid Card */}
              <div className="bg-white p-3 flex flex-col items-center">
                {/* Image Container */}
                <div className="w-32 h-32 lg:w-32 lg:h-32 mb-3">
                  <img 
                    src="/images/BenS.png" 
                    alt="Ben Stauffer - Certified Financial Planner® Professional and founder of Lindy Wealth"
                    className="w-full h-full object-cover object-left rounded-full justify-center items-center"
                  />
                </div>
                
                {/* Polaroid Caption Area */}
                <div className="text-center px-2 pb-2">
                  <p className="text-xs text-gray-600 font-mono">Ben Stauffer, CFP®</p>
                  <p className="text-xs text-gray-500 font-mono">Lindy Wealth</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 mt-2">
                    <a 
                      href="https://linkedin.com/in/ben-stauffer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#17A7FF] transition-colors text-xs flex items-center gap-1"
                    >
                      <FaLinkedin className="text-sm" />
                      LinkedIn
                    </a>
                    <a 
                      href="mailto:ben@lindywealth.com" 
                      className="text-gray-600 hover:text-[#17A7FF] transition-colors text-xs flex items-center gap-1"
                    >
                      <MdEmail className="text-sm" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Right - Text Content */}
          <div className="flex-1">
            <p className="text-black text-2xl md:text-3xl leading-relaxed">
              Hi—I'm Ben Stauffer. I'm a Certified Financial Planner® Professional and the founder of Lindy Wealth. 
              <br />
              <br />
              My goal is to provide you with a personalized, comprehensive roadmap that helps you get the most out of life with your money.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 