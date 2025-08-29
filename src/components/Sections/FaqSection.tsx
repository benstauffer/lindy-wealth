'use client'

import React from 'react'

export function FaqSection() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl text-white font-medium">FAQ</h3>
        </div>

        {/* FAQ Items - Simple text with arrows */}
        <div className="space-y-8">
          
          <div>
            <p className="text-white font-medium mb-2">
              <span className="text-white/60 mr-2">&gt;</span>
              How is comprehensive planning only $1,000?
            </p>
            <p className="text-white/80 text-sm ml-4">
              Financial planning can be delivered cost-effectively without the overhead of large firms. It can be both comprehensive and thorough when advisors focus on client work instead of spending half their time on the golf course.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-2">
              <span className="text-white/60 mr-2">&gt;</span>
              Is the quality worse because it's cheaper?
            </p>
            <p className="text-white/80 text-sm ml-4">
              No. You get the same depth of analysis I provided at traditional firms charging 5-10x more. The difference is my flat-fee model, not the quality of work.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-2">
              <span className="text-white/60 mr-2">&gt;</span>
              What's included?
            </p>
            <p className="text-white/80 text-sm ml-4">
              I focus on key areas: investments, retirement planning, tax strategy, estate planning, insurance reviews, cash flow planning, and financial advice tailored to your situation.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-2">
              <span className="text-white/60 mr-2">&gt;</span>
              How long does it take?
            </p>
            <p className="text-white/80 text-sm ml-4">
              One month from start to finish.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-2">
              <span className="text-white/60 mr-2">&gt;</span>
              How do I pay?
            </p>
            <p className="text-white/80 text-sm ml-4">
              50% upfront when we begin, 50% at plan delivery.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-2">
              <span className="text-white/60 mr-2">&gt;</span>
              Who is this right for?
            </p>
            <p className="text-white/80 text-sm ml-4">
              People who want comprehensive planning without ongoing percentage fees. If you prefer hands-on management, I offer flat-fee ongoing engagements as well.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-2">
              <span className="text-white/60 mr-2">&gt;</span>
              What if I want ongoing services?
            </p>
            <p className="text-white/80 text-sm ml-4">
              I provide ongoing flat-fee engagements for clients who want continued support. We can discuss these options during your plan delivery if interested.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-2">
              <span className="text-white/60 mr-2">&gt;</span>
              What's your approach?
            </p>
            <p className="text-white/80 text-sm ml-4">
              I aim to give you an unbiased view of your options, but I'll also share my honest take on what I think makes the most sense for your situation.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
