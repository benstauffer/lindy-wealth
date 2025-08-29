'use client'

import React from 'react'
import { FooterSection } from './Footer'
import { HeroIntroSection } from './Hero'
import { FullPlan } from './About'
import { AboutSummarySection } from './Services'
import { WhatItCostsSection } from './CTA'

import { FaqSection } from './FaqSection'

export function LandingContent() {
  return (
    <>
      
      <div id="main-content-that-scrolls" className="w-full relative z-10">

        {/* Hero Intro Section (handles its own full-width background) */}
        <div className="mb-0">
          <HeroIntroSection />
        </div>

        {/* Services Section (About Ben) */}
        <div className="mb-0" id="services" data-section="services">
          <FullPlan />
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