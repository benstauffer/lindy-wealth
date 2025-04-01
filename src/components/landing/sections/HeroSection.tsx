'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="min-h-[90vh] relative flex flex-col items-center justify-center px-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center"> {/* Increased negative margin for more centering */}

        {/* Hero Text */}
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl leading-[1.3] tracking-tight font-medium">
            An independent wealth management firm serving forward-looking individuals and families.
          </h1>

          <div className="mt-8">
            <a 
              className="inline-flex items-center px-6 py-4 text-sm font-medium text-black bg-white border border-black hover:bg-neutral-800 hover:text-white rounded-full transition-colors duration-200"
            >
              See if you're a fit
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
} 