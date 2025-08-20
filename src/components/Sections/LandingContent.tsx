'use client'

import React from 'react'
import { Header } from './Header'
import { FooterSection } from './Footer'
import { HeroIntroSection } from './HeroIntroSection'
import { AboutBen } from './AboutBen'
import { AboutBenFullWidthSection } from './AboutBenFullWidth'


import { AboutSummarySection } from './AboutSummary'
import { CompareSection } from './CompareSection'
import { ProcessSection } from './ProcessSection'

import { PricingSection } from './PricingSection'
import { CTASection } from './CTASection'
import { BigCTASection } from './BigCTASection'
import { FaqSection } from './FaqSection'
import { AboutContent } from './About'
import { WhoAreYouSection } from './WhoAreYouSection'

export function LandingContent() {
  return (
    <>
      <Header />
      
      <div id="main-content-that-scrolls" className="w-full relative z-10">

        {/* Hero Intro Section (handles its own full-width background) */}
        <div className="mb-0">
          <HeroIntroSection />
        </div>

        {/* Services Section (About Ben) */}
        <div className="mb-0" id="services" data-section="services">
          <AboutBen />
        </div>



        {/* Who Are You Section 
        <div className="mb-0">
          <WhoAreYouSection />
        </div> */}
        

        {/* About Summary Section */}
        <div className="mb-0">
          <AboutSummarySection />
        </div>


        {/* Big CTA Section */}
        <div className="mb-0">
          <BigCTASection />
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <FaqSection />
        </div>

      </div>
      
      <FooterSection />
    </>
  )
}