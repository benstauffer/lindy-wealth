'use client'

import React, { useState } from 'react'

const services = [
  'Investment strategy',
  'Tax strategy',
  'Retirement planning',
  'Estate planning',
  'Insurance reviews',
  'Cash flow planning',
  'Ongoing financial advice',
  'Big decision support'
]

export function AnimatedServicesFolder() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Central element */}
      <div className="relative mb-12">
        {/* Background card */}
        <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 p-8">
          {/* Professional folder */}
          <div className="w-24 h-20 mx-auto mb-4 relative">
            {/* Folder back */}
            <div className="w-full h-16 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-lg shadow-md"></div>
            
            {/* Folder tab */}
            <div className="absolute -top-1 left-6 w-12 h-4 bg-gradient-to-b from-neutral-100 to-neutral-200 rounded-t-lg border-t border-l border-r border-neutral-300"></div>
            
            {/* Folder front */}
            <div className="absolute top-2 inset-x-0 h-14 bg-gradient-to-b from-white to-neutral-50 rounded-lg shadow-lg border border-neutral-200">
              {/* Blue accent tab */}
              <div className="absolute top-0 left-4 right-4 h-1 rounded-t-sm" style={{backgroundColor: '#17A7FF'}}></div>
              
              {/* Folder contents preview */}
              <div className="absolute inset-2 pt-2 flex flex-col gap-1">
                <div className="h-0.5 bg-neutral-300 rounded w-full opacity-60"></div>
                <div className="h-0.5 bg-neutral-300 rounded w-3/4 opacity-50"></div>
                <div className="h-0.5 bg-neutral-300 rounded w-5/6 opacity-40"></div>
                <div className="h-0.5 bg-neutral-300 rounded w-2/3 opacity-30"></div>
              </div>
            </div>
            
            {/* Professional shadow/depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-lg pointer-events-none"></div>
          </div>
        </div>

        {/* Central label */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap" style={{backgroundColor: '#17A7FF'}}>
            Financial Services
          </div>
        </div>
      </div>

      {/* Services stacked below */}
      <div className="flex flex-col items-center gap-3 max-w-sm">
        {services.map((service, index) => (
          <div
            key={service}
            className="bg-white px-4 py-3 rounded-xl shadow-lg border border-neutral-200 text-sm text-black flex items-center gap-2 hover:shadow-xl transition-shadow w-full"
          >
            <span style={{color: '#17A7FF'}}>■</span>
            {service}
          </div>
        ))}
      </div>
    </div>
  )
} 