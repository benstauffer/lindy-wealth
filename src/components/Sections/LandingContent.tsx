'use client'

import React from 'react'
import { Header } from './Header'
import { FooterSection } from './Footer'
import { HeroIntroSection } from './HeroIntroSection'
import { AboutSummarySection } from './AboutSummary'
import { AboutContent } from './About'

export function LandingContent() {
  return (
    <>
      <Header />
      
      <div id="main-content-that-scrolls" className="w-full relative z-10">

        {/* Hero Intro Section (handles its own full-width background) */}
        <div className="mb-20">
          <HeroIntroSection />
        </div>

        {/* About Summary Section */}
        <div className="mb-20">
          <AboutSummarySection />
        </div>

      </div>
      
      <FooterSection />
    </>
  )
}