'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useHeaderContext } from './HeaderContext'

export function Header() {
  const { scrollStage } = useHeaderContext()

  // Transition for general animations
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1.2
  }
  
  // Fast morphing transition for direct rectangle transformation
  const morphTransition = {
    duration: 0.2,
    ease: [0.3, 0, 0.2, 1]
  }

  return (
    <header className="w-full h-28 fixed top-0 z-50">
      <div className="w-full h-full px-8 lg:px-12 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="flex items-center space-x-8 bg-neutral-200/50 backdrop-blur-md px-5 py-3 rounded-full">
          <Link href="#about" className="text-sm hover:text-neutral-900 transition-colors font-medium">
            About
          </Link>
          <Link href="#process" className="text-sm hover:text-neutral-900 transition-colors font-medium">
            Process
          </Link>
          <Link href="#services" className="text-sm hover:text-neutral-900 transition-colors font-medium">
            Services
          </Link>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          {/* Circle L that expands - All stages after initial */}
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
            initial={false}
            animate={{ 
              scale: scrollStage > 0 ? 1 : 0,
              opacity: scrollStage > 0 ? 1 : 0,
            }}
            transition={springTransition}
          >
            <div className="relative w-16 h-16">
              {/* Circle background */}
              <motion.div 
                className="absolute bg-neutral-200/50 backdrop-blur-md overflow-hidden z-10"
                initial={false}
                animate={{ 
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1.75rem',
                }}
                transition={morphTransition}
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: 0,
                  transformOrigin: 'center top',
                  backdropFilter: 'blur(8px)'
                }}
              />

              {/* L centered */}
              <div className="absolute inset-0 w-full flex items-center justify-center z-20">
                <motion.span 
                  className="font-['Georgia'] text-3xl pointer-events-none -translate-y-[2px]"
                >
                  L
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Full text that collapses - Stage 0 */}
          <motion.span
            className="block font-['Georgia'] text-3xl text-center"
            initial={false}
            animate={{ 
              scale: scrollStage > 0 ? 0 : 1,
              opacity: scrollStage > 0 ? 0 : 1,
            }}
            transition={springTransition}
          >
            Lindy Wealth
          </motion.span>
        </div>

        {/* Right Button */}
        <div>
          <Link 
            href="/contact"
            className="inline-flex items-center text-sm font-medium bg-neutral-200/50 backdrop-blur-md px-5 py-3 rounded-full"
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  )
} 