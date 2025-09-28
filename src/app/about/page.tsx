"use client"

import SwipeablePages from "@/components/ui/SwipeablePages";
import AnimatedVennDiagram from "@/components/ui/AnimatedVennDiagram";

export default function About() {
  return (
    <SwipeablePages selectedService={null} showExpandedToolbar={false} services={[]}>
      {/* Section 1: Hero */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div className="mb-2">
          <p style={{ lineHeight: 1.1 }} className="text-3xl sm:text-4xl md:text-5xl leading-tight text-black/80 font-suisse tracking-tight">
            Financial Planning 
            <br/>
            That Makes Sense
          </p>
        </div>
      </div>

      {/* Section 2: About Ben */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 rounded-lg overflow-hidden">
            <img 
              src="/images/Ben.png" 
              alt="Ben Stauffer" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-sm">
            <p className="text-xl leading-tight text-black/80 font-suisse tracking-tight">
              Hi, I'm Ben. I'm a Certified Financial Planner® and founder of Lindy Wealth - a tax-focused financial planning firm designed for entrepreneurs and creators.
              <br/><br/>
              I've worked at several firms serving hundreds of clients across all wealth levels - retirees, high-earners, and ultra-high-net-worth individuals. Now, I focus exclusively on providing clear, tax-smart financial guidance to solopreneurs.
              <br/><br/>
              Originally from Sacramento, CA, I now live in Los Angeles, CA.
              <br/><br/>
              You can reach me at ben@lindywealth.com.
            </p>
          </div>
        </div>
      </div>

      
    </SwipeablePages>
  )
}