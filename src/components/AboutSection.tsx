'use client'

import { useRef } from 'react'
import Image from 'next/image'

// Mission statement component
function MissionStatement() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl md:text-4xl text-gray-900 font-semibold mb-6">About</h2>
      
      <p className="text-base leading-relaxed font-medium">
        Hi, I'm Ben Stauffer. I'm a Certified Financial Planner™ helping individuals & families organize their financial lives.
      </p>
      
      <p className="text-base leading-relaxed font-medium">
        I organize complexity, optimize wealth, and help you achieve your goals.
      </p>
      
      <p className="text-base leading-relaxed font-medium">
        My mission is to help empower you with a thoughtful financial plan that aligns your personal values with strategic wealth optimization.
      </p>
    </div>
  )
}

// Manifesto diagram component
function ManifestoDiagram() {
  return (
    <div className="w-full bg-neutral-50 h-[400px] rounded-2xl mt-12 relative overflow-hidden">
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
    <section id="about" className="w-full">
      <div className="flex flex-col w-full space-y-12">
        <MissionStatement />
        <ManifestoDiagram />
      </div>
    </section>
  )
}