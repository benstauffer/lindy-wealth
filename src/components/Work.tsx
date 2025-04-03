'use client'

import { ProcessSection } from './ProcessCard'
import { ServicesSection } from './ServiceCard'

export function WorkSection() {
  return (
    <section id="process" className="w-full">
      <h2 className="text-base font-semibold text-neutral-500">
        Work with me
      </h2>
      <p className="text-base text-neutral-400 mt-1">
        See my approach & services.
      </p>
      
      <div className="space-y-8 mt-4">
        <ProcessSection />
        <ServicesSection />
      </div>
    </section>
  )
}
