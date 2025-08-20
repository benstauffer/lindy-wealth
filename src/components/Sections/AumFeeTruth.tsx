'use client'

import React from 'react'

export function AumFeeTruth() {
  const feeData = [
    { assets: '$2,000,000', percentage: '0.91%', amount: '$18,200' },
    { assets: '$5,000,000', percentage: '0.84%', amount: '$42,000' },
    { assets: '$10,000,000', percentage: '0.69%', amount: '$69,000' },
    { assets: '$20,000,000', percentage: '0.65%', amount: '$130,000' },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-black font-medium leading-tight tracking-tight mb-6">
            The Truth About Financial Advisor Fees
          </h2>
          <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto mb-8">
            How much did you pay your advisor last year?
          </p>
          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            Traditional Wall Street money managers have mastered the art of cloaking their fees in obfuscation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          
          {/* Left Column - Problems */}
          <div className="space-y-12">
            
            <div>
              <h3 className="text-2xl md:text-3xl text-black font-medium mb-4">
                Are AUM fees destroying your wealth?
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Rather than charging you a specific amount of money, they charge you a percentage of the value of your assets. Advisors refer to these assets under management fees (AUM) in terms of "basis points" or "bips," and these seemingly small numbers are destroying your wealth.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl text-black font-medium mb-4">
                Stop buying your advisor a BMW. Every year
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                For many HNW investors their largest discretionary expense is the fee they pay their advisor.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl text-black font-medium mb-4">
                AUM fees look a lot like taxes
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                Paying more simply because you have more is a business model shared only with the IRS.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl text-black font-medium mb-4">
                Fees should reflect value
              </h3>
              <p className="text-lg text-black/70 leading-relaxed">
                For many HNW investors their AUM fees have no relationship to the amount of work their advisor is doing, or the value their advisor is providing.
              </p>
            </div>

          </div>

          {/* Right Column - Fee Comparison Table */}
          <div>
            <div className="bg-[#F1F0EA] p-8">
              <h3 className="text-2xl md:text-3xl text-black font-medium mb-6 text-center">
                Industry average AUM fees
              </h3>
              <p className="text-lg text-black/70 mb-8 text-center">
                How do your fees compare?
              </p>
              
              {/* Table */}
              <div className="space-y-4">
                {/* Header */}
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-black/20">
                  <div className="text-sm font-medium text-black">Investable Assets</div>
                  <div className="text-sm font-medium text-black text-center">Average Fees (%)</div>
                  <div className="text-sm font-medium text-black text-right">Average Fees ($)</div>
                </div>
                
                {/* Rows */}
                {feeData.map((row, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3">
                    <div className="text-base text-black">{row.assets}</div>
                    <div className="text-base text-black text-center">{row.percentage}</div>
                    <div className="text-base text-black text-right font-medium">{row.amount}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-black/60 mt-6">
                Source: https://www.advisoryhq.com/articles/financial-advisor-fees-wealth-managers-planners-and-fee-only-advisors/#Percentage-AUM
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
            className="px-8 py-4 bg-[#17A7FF] text-white hover:bg-[#17A7FF]/80 transition-colors font-medium text-lg"
          >
            Request Consultation
          </button>
        </div>
        
      </div>
    </section>
  )
}
