'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { RiMenuLine } from "react-icons/ri"
import { MdClose } from "react-icons/md"
import { VscArrowRight } from "react-icons/vsc"

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25
  }

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 40 }
  }

  const arrowVariants = {
    initial: { x: -20, opacity: 0 },
    hover: { x: 0, opacity: 1 }
  }

  // Handle scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div>
      {/* Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[110] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <MdClose className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        ) : (
          <RiMenuLine className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        )}
      </button>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/5 backdrop-blur-sm z-[100]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 right-0 w-screen h-screen bg-white dark:bg-black z-[105]"
              role="dialog"
              aria-modal="true"
            >
              <div className="pt-20 sm:pt-28 md:pt-40 px-6 sm:px-10 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-8">
                {/* Left Column - Hidden on mobile */}
                <div className="hidden lg:flex lg:flex-col text-[32px]">
                  {/* Image placeholder */}
                  <div className="border border-neutral-300 aspect-[4/3] mb-12">
                    {/* Image will go here */}
                  </div>
                </div>

                {/* Right Column */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] flex flex-col gap-2">
                  <Link 
                    href="#services"
                    className="group hover:underline underline-offset-4 relative flex items-center"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredLink('services')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <motion.div
                      className="absolute flex items-center"
                      animate={{ 
                        opacity: hoveredLink === 'services' ? 1 : 0,
                        x: hoveredLink === 'services' ? 0 : -20
                      }}
                      transition={springTransition}
                    >
                      <VscArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 [stroke-width:1.1]" />
                    </motion.div>
                    <motion.span
                      animate={{ 
                        x: hoveredLink === 'services' ? 32 : 0
                      }}
                      transition={springTransition}
                    >
                      Services
                    </motion.span>
                  </Link>
                  <Link 
                    href="#process"
                    className="group hover:underline underline-offset-4 relative flex items-center"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredLink('process')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <motion.div
                      className="absolute flex items-center"
                      animate={{ 
                        opacity: hoveredLink === 'process' ? 1 : 0,
                        x: hoveredLink === 'process' ? 0 : -20
                      }}
                      transition={springTransition}
                    >
                      <VscArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 [stroke-width:1.1]" />
                    </motion.div>
                    <motion.span
                      animate={{ 
                        x: hoveredLink === 'process' ? 32 : 0
                      }}
                      transition={springTransition}
                    >
                      Process
                    </motion.span>
                  </Link>
                  <Link 
                    href="#about"
                    className="group hover:underline underline-offset-4 relative flex items-center"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredLink('about')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <motion.div
                      className="absolute flex items-center"
                      animate={{ 
                        opacity: hoveredLink === 'about' ? 1 : 0,
                        x: hoveredLink === 'about' ? 0 : -20
                      }}
                      transition={springTransition}
                    >
                      <VscArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 [stroke-width:1.1]" />
                    </motion.div>
                    <motion.span
                      animate={{ 
                        x: hoveredLink === 'about' ? 32 : 0
                      }}
                      transition={springTransition}
                    >
                      About
                    </motion.span>
                  </Link>
                  <Link 
                    href="#get-started"
                    className="group hover:underline underline-offset-4 relative flex items-center"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredLink('get-started')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <motion.div
                      className="absolute flex items-center"
                      animate={{ 
                        opacity: hoveredLink === 'get-started' ? 1 : 0,
                        x: hoveredLink === 'get-started' ? 0 : -20
                      }}
                      transition={springTransition}
                    >
                      <VscArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 [stroke-width:1.1]" />
                    </motion.div>
                    <motion.span
                      animate={{ 
                        x: hoveredLink === 'get-started' ? 32 : 0
                      }}
                      transition={springTransition}
                    >
                      Get Started
                    </motion.span>
                  </Link>
                  
                  {/* Contact info */}
                  <div className="mt-8 md:mt-12 text-base sm:text-lg md:text-xl text-neutral-600">
                    <a 
                      href="mailto:ben@lindywealth.com" 
                      className="hover:text-neutral-900 block"
                    >
                      ben@lindywealth.com
                    </a>
                    <a 
                      href="tel:+19163350755" 
                      className="hover:text-neutral-900"
                    >
                      (916) 335-0755
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
