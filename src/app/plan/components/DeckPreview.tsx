"use client"

import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

export function PlanDeckPreview(): React.ReactElement {
  const slideContainerClasses =
    'bg-white p-6 md:p-8 border border-[#E7E6E4] shadow-sm h-full min-h-[640px]';

  return (
    <>
    <section className="w-full py-16 md:py-24 bg-[#2A2C33]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-5xl font-medium text-white tracking-tight">Get Started On<br />Your Financial Plan</h2>
        </div>
        
            {/* Single cover slide */}
            <div>
              <div className={slideContainerClasses}>
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-medium text-black leading-tight">Your Financial Plan</h3>
                    <div className="text-sm md:text-base text-black/70">Prepared by Lindy Wealth</div>
                  </div>
                </div>
                <div className="bg-[#F8F8F5] p-4">
                  <div className="text-black mb-2 text-sm md:text-base font-medium">Table of Contents</div>
                  <ol className="list-decimal pl-5 text-sm md:text-base text-black/90 md:columns-2 md:gap-x-8 space-y-2">
                    <li>
                      At a Glance
                      <div className="text-black/60 text-xs">Key goals and target numbers</div>
                    </li>
                    <li>
                      Current Financial Position
                      <div className="text-black/60 text-xs">Your income, savings, debt, and total net worth today</div>
                    </li>
                    <li>
                      Investments — Current vs Target
                      <div className="text-black/60 text-xs">How you’re invested now compared to the target mix</div>
                    </li>
                    <li>
                      Retirement Plan & Monte Carlo
                      <div className="text-black/60 text-xs">Assumptions, contributions, outcomes</div>
                    </li>
                    <li>
                      Risk Management (Insurance)
                      <div className="text-black/60 text-xs">Life, disability, umbrella, health overview</div>
                    </li>
                    <li>
                      Estate Planning
                      <div className="text-black/60 text-xs">Wills, trusts, beneficiaries, and account titling</div>
                    </li>
                    <li>
                      Equity Snapshot
                      <div className="text-black/60 text-xs">RSUs, ISOs, NQSOs, ESPP overview</div>
                    </li>
                    <li>
                      Equity Explainers 
                      <div className="text-black/60 text-xs">When taxed and what levers matter</div>
                    </li>
                    <li>
                      Scenario Summary
                      <div className="text-black/60 text-xs">Simple, balanced, event-driven</div>
                    </li>
                    <li>
                      Scenario Comparison 
                      <div className="text-black/60 text-xs">AMT impact, cash available, and stock exposure after each plan</div>
                    </li>
                    <li>
                      Equity Playbook
                      <div className="text-black/60 text-xs">Step-by-step actions</div>
                    </li>
                    <li>
                      Action Plan 
                      <div className="text-black/60 text-xs">Final checklist of tasks with deadlines</div>
                    </li>
                  </ol>
                </div>

              </div>
            </div>

        {/* Checklist of what's included */}
        <div className="mt-8 md:mt-10 p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-medium text-white mb-4">What’s included:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base text-white/90">
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> At‑a‑glance goals and KPIs</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> Income, liquidity, and net‑worth review</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> Portfolio allocation: current vs target</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> Retirement plan with Monte Carlo summary</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> Insurance and estate planning checklist</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> Equity comp analysis (SAUs/RSUs, ISOs, NQSOs, ESPP)</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> Tender‑window playbook and scenarios</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> Tax map and estimated payments cadence</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> AMT credit and cost‑basis trackers</div>
            <div className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#1F7AE0]" /> Action plan with owners and due dates</div>
          </div>
        </div>




      </div>
    </section>

<section className="bg-white py-32">
<div className="max-w-2xl mx-auto text-center">
  <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-black font-medium leading-tight mb-16 px-4">
    Hi, I'm Ben. I help families optimize their finances through tax-focused planning and investment management.
  </h1>
</div>
</section>

{/* Image Overlay - positioned between sections */}
<div className="relative z-20 flex justify-center" style={{ marginTop: '-112px', marginBottom: '-112px' }}>
<div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-black">
  <Image
    src="/images/BenHeadshot.png"
    alt="Ben Stauffer"
    width={224}
    height={224}
    className="w-full h-full object-cover object-left"
    priority
  />
</div>
</div>

{/* Bottom Text Section */}
<section className="bg-[#F1F0EA] pt-40 pb-16">
<div className="max-w-lg mx-auto px-4">
  <div className="text-left">
      <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8">
      Over the years, I've had the opportunity to help hundreds of clients—from high earners and retirees to business owners and ultra-high-net-worth families.
      </p>
      <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8">
      These experiences have given me a deep understanding of wealth management, retirement planning, and investment strategy. I bring that expertise to every client relationship, helping you make confident, well-informed financial decisions.
      </p>
      <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8">
      Whether you're planning for early retirement or simply want to make smarter financial decisions, I'm here to help you navigate your financial journey with expert advice and a personalized approach.
    </p>
  </div>
</div>
 </section>
    </>
  )
}

