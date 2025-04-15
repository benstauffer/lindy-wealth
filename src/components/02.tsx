'use client'

import Image from 'next/image'
import { FiArrowRight } from "react-icons/fi"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ContactCard } from './ContactCard'
import { LindyLetter } from './LindyLetter'

export function Section02() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.02
      }
    }
  }

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.15
      }
    }
  }

  return (
    <>
      <section 
        id="map-section" 
        className="relative pt-4 pb-12 flex items-center justify-center px-6"
      >

        <div className="max-w-4xl w-full text-center flex flex-col items-center space-y-8"> 
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContactCard />
          </motion.div>
          
          <motion.h2 
            className="block w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="text-neutral-900 suisse-font text-xl sm:text-2xl max-w-xl mx-auto">              
              <motion.div variants={lineVariants}>This site is simple and so are my goals:</motion.div>
              <motion.div variants={lineVariants} className="h-4 sm:h-6"></motion.div>

              <motion.div variants={lineVariants}>Give you clear, actionable advice,</motion.div>
              <motion.div variants={lineVariants}>Create a plan that supports your goals,</motion.div>
              <motion.div variants={lineVariants}>Build an investment strategy around that plan,</motion.div>
              <motion.div variants={lineVariants}>And bring you clarity and peace of mind.</motion.div>
              
            </div>
          </motion.h2>

          <div className="flex flex-col items-center space-y-4 mt-8 sm:mt-10">
            
            <motion.div 
              className="flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.2 }}
            >
              <a 
                href="/about"
                className="group inline-flex items-center px-2 sm:px-3 py-1 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full"
              >
                About
              </a>
              <Link 
                href="/services"
                className="group inline-flex items-center px-2 sm:px-3 py-1 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full"
              >
                Services
              </Link>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  )
}
