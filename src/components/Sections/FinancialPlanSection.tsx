'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function FinancialPlanSection() {
  return (
    <div className="px-4">
      <div className="max-w-3xl mx-auto px-4">
        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div 
            className="rounded-2xl p-6 md:p-8 border border-neutral-800 bg-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header with Ben's headshot and text */}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/images/BenHeadshot.png" 
                alt="Ben Stauffer" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-white text-lg italic">
                  Hey there, let's review your financial plan
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Ben Stauffer CFP
                </p>
                <p className="text-white/60 text-xs">
                  Owner of Lindy Wealth
                </p>
              </div>
            </div>

            {/* Case Study Tabs */}
            <div className="mb-8">
              <p className="text-white/60 text-sm mb-4">Choose your case study:</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-sm font-medium transition-colors border border-neutral-700 hover:border-neutral-600">
                  $0-100K
                </button>
                <button className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-sm font-medium transition-colors border border-neutral-700 hover:border-neutral-600">
                  $100K-$1M
                </button>
                <button className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-sm font-medium transition-colors border border-neutral-700 hover:border-neutral-600">
                  $1M-$10M
                </button>
              </div>
            </div>

            {/* Fixed Tab Navigation */}
            <div className="sticky top-0 z-10 bg-black border-b border-neutral-800 pb-4 mb-8">
              <div className="flex items-center space-x-4 overflow-x-auto">
                <button className="text-white border-b-2 border-white pb-1 text-sm font-medium whitespace-nowrap">Key Metrics</button>
                <button className="text-white/60 hover:text-white text-sm whitespace-nowrap">Net Worth</button>
                <button className="text-white/60 hover:text-white text-sm whitespace-nowrap">Asset Allocation</button>
                <button className="text-white/40 hover:text-white text-sm whitespace-nowrap">more + (locked)</button>
              </div>
            </div>

            {/* Key Metrics Section */}
            <section id="key-metrics" className="mb-16">
              <h2 className="text-white text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-800 rounded-lg p-6">
                  <h3 className="text-white/60 text-sm mb-2">Current Net Worth</h3>
                  <p className="text-white text-3xl font-bold">$2.4M</p>
                  <p className="text-green-400 text-sm mt-2">+12.4% YTD</p>
                </div>
                <div className="bg-neutral-800 rounded-lg p-6">
                  <h3 className="text-white/60 text-sm mb-2">Monthly Savings</h3>
                  <p className="text-white text-3xl font-bold">$15K</p>
                  <p className="text-white/60 text-sm mt-2">Target: $18K</p>
                </div>
                <div className="bg-neutral-800 rounded-lg p-6">
                  <h3 className="text-white/60 text-sm mb-2">Retirement Goal</h3>
                  <p className="text-white text-3xl font-bold">$30K/mo</p>
                  <p className="text-white/60 text-sm mt-2">Target Age: 55</p>
                </div>
              </div>
            </section>

            {/* Net Worth Section */}
            <section id="net-worth" className="mb-16">
              <h2 className="text-white text-2xl font-bold mb-6">Net Worth Breakdown</h2>
              <div className="bg-neutral-800 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-lg font-medium">Assets</h3>
                  <span className="text-white text-2xl font-bold">$3.2M</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Investment Portfolio</span>
                    <span className="text-white">$1.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Real Estate</span>
                    <span className="text-white">$850K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Cash & Emergency Fund</span>
                    <span className="text-white">$320K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Other Assets</span>
                    <span className="text-white">$230K</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-lg font-medium">Liabilities</h3>
                  <span className="text-white text-2xl font-bold">$800K</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Mortgage</span>
                    <span className="text-white">$650K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Student Loans</span>
                    <span className="text-white">$120K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Other Debt</span>
                    <span className="text-white">$30K</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Asset Allocation Section */}
            <section id="asset-allocation" className="mb-16">
              <h2 className="text-white text-2xl font-bold mb-6">Asset Allocation</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-neutral-800 rounded-lg p-6">
                  <h3 className="text-white text-lg font-medium mb-4">Current Allocation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-white/80">US Stocks</span>
                      </div>
                      <span className="text-white font-medium">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-white/80">International</span>
                      </div>
                      <span className="text-white font-medium">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span className="text-white/80">Bonds</span>
                      </div>
                      <span className="text-white font-medium">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span className="text-white/80">Real Estate</span>
                      </div>
                      <span className="text-white font-medium">10%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800 rounded-lg p-6">
                  <h3 className="text-white text-lg font-medium mb-4">Target Allocation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">US Stocks</span>
                      <span className="text-white font-medium">50%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">International</span>
                      <span className="text-white font-medium">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Bonds</span>
                      <span className="text-white font-medium">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Real Estate</span>
                      <span className="text-white font-medium">5%</span>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-neutral-700 rounded">
                    <p className="text-white/80 text-sm">
                      <strong>Next Rebalance:</strong> Move 5% from bonds to US stocks, 5% from real estate to international
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Natural fade-out effect */}
            <div className="h-32 bg-gradient-to-b from-black to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
