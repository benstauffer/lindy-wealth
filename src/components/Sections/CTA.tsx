'use client'

import React from 'react'
import { Check } from 'lucide-react'

export function WhatItCostsSection() {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main Card Container */}
          <div className="max-w-3xl mx-auto rounded-3xl p-8 md:p-16 shadow-inner mb-16" style={{
            border: '.5px solid transparent',
            borderRadius: '24px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
                        <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Ready to get started?</h3>
              <p className="text-white/80 font-mono">1 Month. 1 Plan. $1k flat fee. <br />
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl p-4 shadow-inner flex items-center justify-center mx-auto mb-4" style={{
                  border: '.5px solid transparent',
                  borderRadius: '16px',
                  background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
                }}>
                  <span className="text-gray-300 text-2xl font-semibold">1</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Intro Call</h4>
                <div className="w-20 h-8 rounded-2xl p-2 shadow-inner flex items-center justify-center mx-auto mb-3" style={{
                  border: '.5px solid transparent',
                  borderRadius: '16px',
                }}>
                  <span className="text-gray-300 text-xs">FREE</span>
                </div>
                <p className="text-white/80 text-sm font-mono">Free 30-minute consultation to discuss your goals and see if we're a good fit</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl p-4 shadow-inner flex items-center justify-center mx-auto mb-4" style={{
                  border: '.5px solid transparent',
                  borderRadius: '16px',
                  background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
                }}>
                  <span className="text-gray-300 text-2xl font-semibold">2</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Engagement</h4>
                <div className="w-20 h-8 rounded-2xl p-2 shadow-inner flex items-center justify-center mx-auto mb-3" style={{
                  border: '.5px solid transparent',
                  borderRadius: '16px',
                }}>
                  <span className="text-gray-300 text-xs">$500</span>
                </div>
                <p className="text-white/80 text-sm font-mono">Upload financial documents, full financial review call, and pay $500 to begin analysis</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl p-4 shadow-inner flex items-center justify-center mx-auto mb-4" style={{
                  border: '.5px solid transparent',
                  borderRadius: '16px',
                  background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
                }}>
                  <span className="text-gray-300 text-2xl font-semibold">3</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Plan Delivery</h4>
                <div className="w-20 h-8 rounded-2xl p-2 shadow-inner flex items-center justify-center mx-auto mb-3" style={{
                  border: '.5px solid transparent',
                  borderRadius: '16px',
                }}>
                  <span className="text-gray-300 text-xs">$500</span>
                </div>
                <p className="text-white/80 text-sm font-mono">Receive your comprehensive plan, review recommendations and action items, pay remaining $500</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Your Free Intro Call
              </button>
              <p className="text-white/60 text-sm mt-3 font-mono">No commitment • 30 minutes</p>
            </div>

          </div>
        </div>

       
      </div>
    </section>
  )
}
