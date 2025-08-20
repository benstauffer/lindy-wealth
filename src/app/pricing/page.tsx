'use client'

import React from 'react'
import { Header } from '../../components/Sections/Header'
import { FooterSection } from '../../components/Sections/Footer'
import { CompareSection } from '../../components/Sections/CompareSection'
import { FeeComparisonSection } from '../../components/Sections/FeeComparisonSection'
import { BigCTASection } from '../../components/Sections/BigCTASection'
import { FaqSection } from '../../components/Sections/FaqSection'
import { AumCalculatorSection } from '../../components/Sections/AumCalculatorSection'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div id="main-content-that-scrolls" className="w-full relative z-10">

        {/* Compare Section - Full width */}
        <div className="mb-0 w-full">
          <CompareSection />
        </div>

        {/* Fee Comparison Section */}
        <div className="mb-0">
          <FeeComparisonSection />
        </div>

        <div className="bg-[#E9E8E4]">
          <AumCalculatorSection />
        </div>

        {/* CTA Section */}
        <div className="mb-20">
          <BigCTASection />
        </div>

        {/* FAQ Section */}
        <div className="mb-10">
          <FaqSection />
        </div>

      </div>
      
      <FooterSection />
    </div>
  )
} 