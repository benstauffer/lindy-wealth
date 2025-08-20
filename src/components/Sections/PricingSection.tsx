"use client"

import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { Check } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="w-full py-20" data-section="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl text-black tracking-tight font-['Georgia'] mb-4">Transparent Pricing</h2>
          </div>

          {/* Features List */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-black">CFP® financial advisor</span>
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-black">Digital net worth tracking including stock options, crypto, and real estate</span>
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-black">Cash flow and retirement projections</span>
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-black">Public equities & fixed income</span>
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-black">Personalized direct indexing</span>
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-black">Help with setting up an estate plan</span>
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-black">Help with donor advised fund & philanthropic goals</span>
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-black">Help with acquiring life insurance</span>
                  <Check className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          </div>

          {/* AUM Fee Table */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-black mb-2">Asset-Based Fee Structure</h3>
                <p className="text-gray-600">Fees are calculated quarterly in advance</p>
              </div>
              
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Assets Under Management</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-700">Annual Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">$0 - $1M</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">1.00%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">$1M - $5M</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">0.75%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">$5M - $10M</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">0.50%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">$10M - $25M</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">0.40%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Above $25M</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">0.30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Includes comprehensive financial planning, investment management, tax strategy, and ongoing guidance
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-lg text-black/80 mb-8">
              All fees are transparent with no hidden costs. Schedule a call to discuss which option works best for you.
            </p>
            
            <button 
              onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
              className="group px-8 py-4 bg-[#17A7FF] text-white hover:bg-[#17A7FF]/80 transition-colors text-lg font-semibold flex items-center justify-center gap-2 mx-auto rounded-lg"
            >
              Schedule a consultation
              <RiArrowRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}