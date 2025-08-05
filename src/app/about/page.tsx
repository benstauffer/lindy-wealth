'use client'

import React from 'react'
import { Header } from '../../components/Sections/Header'
import { FooterSection } from '../../components/Sections/Footer'
import { AboutContent } from '../../components/Sections/About'
import { AboutSummarySection } from '../../components/Sections/AboutSummary'
import { BigCTASection } from '../../components/Sections/BigCTASection'
import { FaqSection } from '../../components/Sections/FaqSection'

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <div id="main-content-that-scrolls" className="w-full relative z-10">

        {/* About Content Section */}
        <div className="mb-0">
          <AboutContent />
        </div>

        {/* CTA Section */}
        <div className="mb-20">
          <BigCTASection />
        </div>

        <div className="mb-20">
          <FaqSection />
        </div>



      </div>
      
      <FooterSection />
    </>
  )
} 