"use client"

import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { IoMdCheckmark } from "react-icons/io"


export function CompareSection() {
  const services = [
    {
      name: "CFP® financial advisor",
      available: true
    },
    {
      name: "Tax Planning",
      available: true
    },
    {
      name: "Cash flow and retirement projections",
      available: true
    },
    {
      name: "Investment Management",
      available: true
    },
    {
      name: "Direct Indexing",
      available: true
    },
    {
      name: "Net Worth Tracking",
      available: true
    },
    {
      name: "Help with setting up an estate plan",
      available: true
    },
    {
      name: "Help with donor advised fund & philanthropic goals",
      available: true
    },
    {
      name: "Help with acquiring life insurance",
      available: true
    },
    {
      name: "Fee-only advisor - no commissions or product sales",
      available: true
    },
    {
      name: "Fiduciary duty - advice always in your best interest",
      available: true
    },
    {
      name: "100% transparent pricing - no hidden fees",
      available: true
    },
  ]

  return (
    <section className="w-full bg-white">
      <div className="px-4 py-20">
        {/* Title */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-7xl text-black tracking-tight font-medium mb-4 mt-12">Fee-only. <br />
            Full transparency.</h2>
        </div>
        
        {/* Pricing Card */}
        <div className="max-w-xl mx-auto mt-8 mb-8 px-4">
          <div className="bg-[#2A2C33] text-white p-8 text-left flex flex-col h-full">
            <div>
              <h3 className="text-3xl tracking-tight text-white mb-2">AUM Fee</h3>
              <h3 className="text-5xl tracking-tight text-white mb-2">0.30% - 1.00% AUM</h3>

              <p className="text-white/80 text-sm italic">
                Tier based AUM schedule
              </p>

              <p className="text-white/80 text-sm mb-6 italic">
                Billed quarterly in advance
              </p>

              <div className="mb-6">
                <p className="text-base text-white/80 mb-4">
                  Best for those with $2M+ in investable assets who want financial planning and investment management.
                </p>
                <p className="text-base text-white/80">
                  For those with under $2M, let's discuss flat fee pricing.
                </p>
              </div>

              {/* AUM Schedule */}
              <div className="mb-6">
                <table className="w-full border border-white/10">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-2 text-left text-white font-normal text-sm">
                        Assets Under Management
                      </th>
                      <th className="p-2 text-center text-white font-normal text-sm">
                        Annual Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="p-2 text-sm text-white/80">
                        $0 - $1M
                      </td>
                      <td className="p-2 text-center text-sm text-white/80">
                        1.00%
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-2 text-sm text-white/80">
                        $1M - $5M
                      </td>
                          <td className="p-2 text-center text-sm text-white/80">
                        0.75%
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                            <td className="p-2 text-sm text-white/80">
                        $5M - $10M
                      </td>
                      <td className="p-2 text-center text-sm text-white/80">
                        0.50%
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-2 text-sm text-white/80">
                        $10M - $25M
                      </td>
                      <td className="p-2 text-center text-sm text-white/80">
                        0.40%
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 last:border-b-0">
                      <td className="p-2 text-sm text-white/80">
                        Above $25M
                      </td>
                      <td className="p-2 text-center text-sm text-white/80">
                        0.30%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Button */}
              <button className="w-full bg-white text-black py-3 px-6 hover:bg-black/80 transition-colors mt-auto">
              Get Started
            </button>
          </div>
        </div>
        </div>

        {/* Services List */}
        <div className="w-full bg-[#2A2C33] py-12">
        <div className="mb-12 text-center max-w-6xl mx-auto px-4">
            <h2 className="text-4xl text-white tracking-tight font-medium mb-4 mt-12">
            Client Benefits
          </h2>
        </div>
          <div className="relative">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 border-b border-[#DCDCDC]/20 last:border-b-0"></div>
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center justify-between p-6">
                    <div className="text-base text-white">
                      {service.name}
                    </div>
                    <div className="flex items-center justify-center pr-2">
                      {service.available ? (
                        <IoMdCheckmark className="text-white text-xl" />
                      ) : (
                        <div className="w-6 h-6"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    </section>
  )
} 