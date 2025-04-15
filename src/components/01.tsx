'use client'

import { FiArrowRight } from "react-icons/fi"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LindyLetter } from './LindyLetter'

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
        <div className="w-full text-xl sm:text-2xl">
          <div className="text-center space-y-3">
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="flex-shrink-0"
              >
                <a 
                  className="group inline-flex items-center justify-center h-[52px] px-4 sm:px-5 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
                  href="https://form.typeform.com/to/xtuCtft7"
                >
                  Start
                  <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  )
} 