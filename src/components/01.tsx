'use client'

import { FiArrowRight } from "react-icons/fi"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Section01() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.01
      }
    }
  }

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section className="relative flex flex-col items-center">
      <div className="w-full max-w-xl mx-auto space-y-12 relative px-6">
        {/* Hero Text */}
        <div className="w-full text-xl sm:text-2xl">

          {/* Text Content */}
          <div className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-neutral-900 suisse-font"
            >
              <motion.div variants={lineVariants}>I'm Ben Stauffer, CFP®.</motion.div>
              <motion.div variants={lineVariants}>I help entrepreneurs manage their wealth.</motion.div>
              <motion.div variants={lineVariants} className="h-4 sm:h-6"></motion.div>
              <motion.div variants={lineVariants}>Lindy Wealth is an independent,</motion.div> 
              <motion.div variants={lineVariants}>fee-only wealth management firm.</motion.div>
              <motion.div variants={lineVariants}>I offer full-service, personalized advice.</motion.div>
              <motion.div variants={lineVariants}>Planning, investing, and long-term strategy.</motion.div>
              <motion.div variants={lineVariants} className="h-4 sm:h-6"></motion.div>
             
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.25 }}
              className="mt-4"
            >
              <a 
                className="group inline-flex items-center px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
                href="https://form.typeform.com/to/xtuCtft7"
              >
                Book an intro call
                <FiArrowRight className="ml-2 " />
              </a>
            </motion.div>
          </div>
        </div>
      
      </div>
    </section>
  )
} 