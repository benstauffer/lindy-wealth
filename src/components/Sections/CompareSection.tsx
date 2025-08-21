"use client"

import React from 'react'
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
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-black tracking-tight font-medium mb-4 mt-12">
            Flat-fee. <br />
            Full transparency.
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <div className="bg-[#F1F0EA] p-8 ">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-2">
                  <span className="text-3xl md:text-5xl font-medium text-black">Starting at $1,250</span>
                  <span className="text-lg text-black">/quarter</span>
                </div>
                <div className="text-black/80 text-base">
                  $5,000/year
                  <br />
                  billed quarterly in advance
                </div>
              </div>


              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-800 text-base leading-relaxed">
                  Best for high earners seeking comprehensive wealth management and personalized financial planning.
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors font-medium mb-6"
              >
                Get started
              </button>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Comprehensive financial planning</span>
                </div>
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Tax-efficient investment management</span>
                </div>
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Estate planning and Insurance reviews</span>
                </div>
                <div className="flex items-start gap-3">
                  <IoMdCheckmark className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Ongoing support and guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="w-full bg-[#2A2C33] py-12">
        <div className="mb-12 text-center max-w-6xl mx-auto px-4">
          <h2 className="text-4xl text-white tracking-tight font-medium mb-4 mt-12">Services</h2>
        </div>
        <div className="relative">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 border-b border-[#DCDCDC]/20 last:border-b-0"></div>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between p-6">
                  <div className="text-base text-white">{service.name}</div>
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