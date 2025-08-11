"use client"

import React from 'react'
import { IoMdCheckmark } from "react-icons/io"
import { RiArrowRightLine } from 'react-icons/ri'


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
            Fee-only. <br />
            Full transparency.
          </h2>
        </div>

        {/* Flat Fee Card */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="max-w-2xl mx-auto w-full">
            <div className="bg-[#2A2C33] text-white p-12 text-center flex flex-col h-full">
              <h3 className="text-2xl tracking-tight text-white mb-2">Flat Fee Ongoing Planning</h3>
              <h4 className="text-5xl tracking-tight text-white mb-4">Starting at $5,000/year</h4>
              <p className="text-white/80 text-sm mb-1">+ 0.30% AUM (on assets we manage for you)</p>
              <p className="text-white/80 text-sm mb-6">Billed quarterly in advance</p>
              <button
                onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                className="group px-6 py-4 bg-white text-black hover:bg-white/80 transition-colors text-sm md:text-lg font-normal flex items-center justify-center gap-2 mx-auto"
              >
                Get started
                <RiArrowRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="w-full bg-[#2A2C33] py-12">
        <div className="mb-12 text-center max-w-6xl mx-auto px-4">
          <h2 className="text-4xl text-white tracking-tight font-medium mb-4 mt-12">Client Benefits</h2>
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