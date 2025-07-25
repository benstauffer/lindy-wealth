'use client'

import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { BookingModal } from '@/components/ui/BookingModal'

export function ProcessSection() {
  return (
    <section className="w-full" data-section="process">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title and description on top */}
        <div className="mb-12">
          <h2 className="text-5xl font-medium text-black mb-4">Here's how to get started</h2>
          <p className="text-xl text-black/80 max-w-2xl mb-4"> 
            We'll review your financial situation and provide a clear assessment of your current financial situation and honest assessment of areas needing attention.
          </p>
          <p className="text-xl text-black/80 max-w-2xl"> 
            At the end of this process, take your time to think about it. There is never a hard-sell or pressure to say "yes."
          </p>
        </div>
        
        {/* Cards - Full width horizontal layout */}
        <div>
          {/* Horizontal grid for steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Step 1 */}
            <div className="min-h-[400px] bg-white p-6 flex flex-col rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="text-base text-neutral-400 mb-2 flex items-center gap-2">
                Step 1
              </h3>
              <h3 className="text-2xl font-medium text-black mb-3">Schedule an Intro Call</h3>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-black/80 text-sm mb-6">15–30 min • Phone Call</p>
                  <p className="text-black text-base leading-relaxed mb-4">
                    We'll discuss your current financial situation and goals, how I work, whether we're a good fit, next steps, and answer any questions you have.
                  </p>
                </div>
                <BookingModal>
                  <button className="group px-3 py-3 bg-black rounded-xl text-white hover:bg-neutral-800 transition-colors text-base font-medium flex items-center justify-start gap-3">
                    Schedule a call
                    <RiArrowRightLine className="text-xl transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </BookingModal>
              </div>
            </div>

            {/* Step 2 */}
            <div className="min-h-[400px] bg-white p-6 flex flex-col rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="text-base text-neutral-400 mb-2 flex items-center gap-2">
                Step 2
              </h3>
              <h3 className="text-2xl font-medium text-black mb-3">Discovery Session</h3>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-black/80 text-sm mb-6">1 hour • Zoom/Phone</p>
                  <p className="text-black text-base leading-relaxed">
                    After our initial meeting, we'll request a few important documents from you. 
                    Then, we'll review the documents and discuss your financials in depth.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="min-h-[400px] bg-white p-6 flex flex-col rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="text-base text-neutral-400 mb-2 flex items-center gap-2">
                Step 3
              </h3>
              <h3 className="text-2xl font-medium text-black mb-3">Get Your Free Assessment</h3>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-black/80 text-sm mb-6">1 hour • Zoom/Phone</p>
                  <p className="text-black text-base leading-relaxed">
                    You'll receive clear analysis of your current financial situation and honest assessment of areas needing attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 