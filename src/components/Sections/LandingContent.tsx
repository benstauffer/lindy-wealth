'use client'

import React from 'react'
import { Header } from './Header'
import { FooterSection } from './Footer'
import { HeroIntroSection } from './HeroIntroSection'
import { AboutSection } from './About'

export function LandingContent() {
  return (
    <>
      <Header />
      
      <div id="main-content-that-scrolls" className="w-full relative z-10">

        {/* Hero Intro Section (handles its own full-width background) */}
        <div className="mb-20">
          <HeroIntroSection />
        </div>

 

        {/* About Section */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 w-screen left-1/2 -ml-[50vw] " />
          <div className="py-10" data-section="about">
            <AboutSection />
          </div>
        </section>

      </div>
      
      <FooterSection />
    </>
  )
}