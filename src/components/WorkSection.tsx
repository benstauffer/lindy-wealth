'use client'

import Image from 'next/image'
import { ProcessSection } from './ProcessCard'
import { ServicesSection } from './ServiceCard'
import { FiArrowRight } from "react-icons/fi"

export function WorkSection() {
  return (
    <section id="process" className="w-full relative">
      {/* Decorative Image */}
      <div className="absolute -right-32 top-48 hidden xl:block">
        <Image
          src="/images/simple.png"
          alt="Simple one step at a time"
          width={100}
          height={200}
          className="opacity-90"
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-neutral-500">
            Work with me
          </h2>
          <p className="text-base text-neutral-400 mt-1">
            See my approach & services
          </p>
        </div>
        
        <a 
          className="group inline-flex items-center px-4 py-2 text-sm font-medium shadow-inner text-neutral-600 hover:text-neutral-900 bg-neutral-100 border border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400 rounded-lg transition-colors duration-200"
          href="#help"
        >
          See if you're a fit
          <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
      
      <div className="space-y-8 mt-4">
        <ServicesSection />
      </div>
    </section>
  )
}
