"use client"

import React from 'react'
import { Header } from '@/components/Sections/Header'
import { FooterSection } from '@/components/Sections/Footer'
import { PlanHero } from './components/Hero'
import { PlanDeckPreview } from './components/DeckPreview'
import { WhoThisIsFor } from './components/WhoThisIsFor'
import { ProcessTimeline } from './components/ProcessTimeline'
import { Pitfalls } from './components/Pitfalls'
import { PricingAvailability } from './components/PricingAvailability'
import { WhyUs } from './components/WhyUs'
import { Faq } from './components/Faq'
import { Disclaimer } from './components/Disclaimer'
import { BigCTASection } from '@/components/Sections/BigCTASection'

export default function PlanPage(): React.ReactElement {
  return (
    <>
      <Header />
      <div id="main-content-that-scrolls" className="w-full relative z-10">
        <PlanHero />
        <PlanDeckPreview />
        <WhoThisIsFor />
        <ProcessTimeline />
        <PricingAvailability />
        <Pitfalls />
        <BigCTASection />
        <Faq />
        <Disclaimer />

      </div>
      <FooterSection />
    </>
  )
}

