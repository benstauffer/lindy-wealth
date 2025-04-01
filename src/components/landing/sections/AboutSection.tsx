'use client'

import { useRef } from 'react'
import Image from 'next/image'

// Profile section component
function ProfileSection() {
  return (
    <div className="flex flex-col items-center space-y-8 md:space-y-12">
      <div className="aspect-square w-full max-w-[300px] rounded-2xl bg-neutral-50 relative overflow-hidden">

      </div>
    </div>
  )
}

// Mission statement component
function MissionStatement() {
  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-xl mx-auto">
      <p className="text-[clamp(1.5rem,2vw,1.75rem)] leading-snug font-medium text-left pl-8">
        Hi, I'm Ben Stauffer. I'm a Certified Financial Planner™ helping individuals & families organize their financial lives.
      </p>
      
      <p className="text-[clamp(1.5rem,2vw,1.75rem)] leading-snug font-medium text-left pl-8">
        I organize complexity, optimize wealth, and help you achieve your goals.
      </p>
      
      <p className="text-[clamp(1.5rem,2vw,1.75rem)] leading-snug font-medium text-left pl-8">
        My mission is to help empower you with a thoughtful financial plan that aligns your personal values with strategic wealth optimization.
      </p>
    </div>
  )
}

// Manifesto diagram component
function ManifestoDiagram() {
  return (
    <div className="w-full bg-neutral-50 h-[500px] rounded-2xl mt-16 relative overflow-hidden">
      <Image
        src="/images/manifesto.png"
        alt="Exponential Opportunity Venn Diagram"
        fill
        className="object-contain py-8"
        priority
      />
    </div>
  )
}

// Main AboutSection component
export function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col w-full max-w-4xl mx-auto space-y-12 sm:space-y-16">
        <ProfileSection />
        <MissionStatement />
        <ManifestoDiagram />
      </div>
    </section>
  )
}