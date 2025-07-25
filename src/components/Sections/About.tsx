'use client'

import React from 'react'
import { Header } from './Header'
import { FooterSection } from './Footer'
import { AboutHeroSection } from './AboutHero'
import { ServicesSection } from './ServicesSection'
import { ProcessSection } from './ProcessSection'
import { PricingTableSection } from './PricingTableSection'
import { AboutFaqSection } from './AboutFaqSection'

export function AboutContent() {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Main content container */}
      <div 
        id="main-content-that-scrolls"
        className="w-full relative z-10 px-4 sm:px-6 lg:px-0"
      >
        {/* Hero Section */}
        <div className="mb-0">
          <AboutHeroSection />
        </div>

        {/* Services Section */}
        <div className="pt-8 md:pt-0">
          <ServicesSection />
        </div>

        {/* Process Section */}
        <div className="pt-8 md:pt-0">
          <ProcessSection />
        </div>

        {/* Pricing Section */}
        <div className="pt-8 md:pt-0">
          <PricingTableSection />
        </div>

        {/* FAQ Section */}
        <div className="pt-8 md:pt-0">
          <AboutFaqSection />
        </div>
        
      </div>
      <FooterSection />
      
    </>
  )
} 

// Export individual sections for flexibility
export { AboutHeroSection } from './AboutHero'
export { ServicesSection } from './ServicesSection'
export { ProcessSection } from './ProcessSection' 
export { PricingTableSection } from './PricingTableSection'
export { AboutFaqSection } from './AboutFaqSection' 