'use client'

import React from 'react'
import { ServiceGraphic } from './ServiceGraphic'
import { Heart, FileText, Calculator, Shield, TrendingUp, Calendar } from 'lucide-react'

export function AboutSummarySection() {
  return (
    <section className="w-full pb-24 md:32" data-section="about-summary">
      <ServiceGraphic />
      
      {/* Centered title section */}
      <div className="mb-2">
        <h2 className="text-center text-3xl md:text-6xl text-white mb-12 max-w-2xl mx-auto font-medium">
          What's In
          <br />
          Your Plan?
        </h2>
      </div>

      {/* Services List */}
      <div className="max-w-lg mx-auto space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-neutral-600 flex items-center justify-center shadow-inner" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <Heart className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Your Cash Flow Blueprint</h3>
            <p className="text-white/80">Understand exactly where your money goes and discover the most efficient ways to save and manage your cash.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-neutral-600 flex items-center justify-center shadow-inner" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <FileText className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white ">Your Investment Game Plan</h3>
            <p className="text-white/80">Build a portfolio that grows your wealth without the complicated products or high fees.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-neutral-600 flex items-center justify-center shadow-inner" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <Calculator className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Your Tax Playbook</h3>
            <p className="text-white/80">Simple moves to keep more of what you earn instead of handing it over to the IRS.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-neutral-600 flex items-center justify-center shadow-inner" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <Shield className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Your Retirement Timeline</h3>
            <p className="text-white/80">Find out exactly when you can stop working and how much you'll actually have to live on.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-neutral-600 flex items-center justify-center shadow-inner" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <TrendingUp className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Your Protection Strategy</h3>
            <p className="text-white/80">Make sure you're covered if something goes wrong without paying for insurance you don't need.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-neutral-600 flex items-center justify-center shadow-inner" style={{
            border: '.5px solid transparent',
            borderRadius: '16px',
            background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
          }}>
            <Calendar className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Your Legacy Plan</h3>
            <p className="text-white/80">Make sure your wealth goes where you want it to go and that the right person can make decisions if you're unable to.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 