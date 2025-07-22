"use client"

import React from 'react'

export function PricingSection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto flex flex-col items-center max-w-xl">
        {/* Title Above Content */}
        <div className="mb-8 w-full">
          <h3 className="text-base text-neutral-500">Pricing</h3>
        </div>

        {/* Pricing Cards */}
        <div className="w-full space-y-4">
          {/* AUM Fee Card */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div>
                  <h3 className="text-lg font-medium text-black">AUM Fee</h3>
                  <p className="text-sm text-gray-600">Full-service investment management and planning.</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-black">Under 1% / year</div>
              </div>
            </div>
          </div>

          {/* Flat Fee Card */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-medium text-black">Flat Fee</h3>
                  <p className="text-sm text-gray-600">Comprehensive financial planning and advice.</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-black">$5,000 / year</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            All fees are transparent with no hidden costs. <br />
            Schedule a call to discuss which option works best for you.
          </p>
        </div>
      </div>
    </section>
  )
} 