'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { usePathname } from 'next/navigation'


interface HeaderProps {
  isDarkMode?: boolean
}

export function Header({ isDarkMode = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    // Only track scroll on home page
    if (!isHomePage) return

    const handleScroll = () => {
      // Consider the header to be over hero when scroll position is less than viewport height
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const shouldBeOverHero = scrollY < viewportHeight * 0.8 // Change at 80% of viewport height
      
      if (shouldBeOverHero !== isOverHero) {
        setIsOverHero(shouldBeOverHero)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOverHero, isHomePage])



  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = (section: string) => {
    if (section === 'process') {
      // Scroll to process section
      const processSection = document.querySelector('[data-section="process"]');
      if (processSection) {
        processSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'services') {
      // Scroll to services section
      const servicesSection = document.querySelector('[data-section="services"]');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'faqs') {
      // Scroll to FAQs section
      const faqsSection = document.querySelector('[data-section="faqs"]');
      if (faqsSection) {
        faqsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'contact') {
      // Scroll to contact/get started section or handle contact action
      const getStartedSection = document.querySelector('[data-section="get-started"]');
      if (getStartedSection) {
        getStartedSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false) // Close menu after selection
  }

  const handleCallAction = (action: string) => {
    if (action === 'phone') {
      window.open('tel:+1234567890', '_self');
    } else if (action === 'email') {
      window.open('mailto:ben@lindywealth.com', '_self');
    }
  }

  return (
    <>
      {/* ============ HEADER CONTAINER ============ */}
      <header className="max-w-5xl mx-auto  py-3 ">
        {/* Pricing Panel - positioned within header */}


        {/* Content container */}
        <div className="flex items-center justify-between">
          
          {/* ============ LEFT - LOGO ============ */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center hover:opacity-80 transition-opacity">
                <span className="text-sm md:text-base font-light text-black block tracking-wider uppercase">
                 Lindy Wealth
                </span>
            </Link>
          </div>

          {/* ============ CENTER - EMPTY ============ */}
          <div className="hidden sm:flex">
          </div>

          {/* ============ RIGHT - NAVIGATION AND SCHEDULE CALL BUTTON ============ */}
          <div className="items-center gap-4 hidden sm:flex">
            <button 
              onClick={() => {
                const aboutSection = document.querySelector('[data-section="about-summary"]')
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-4 py-2 hover:opacity-80 transition-opacity"
            >

            </button>
            <button 
              onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
              className="group px-4 py-2 bg-[#17A7FF] text-white rounded-xl hover:bg-[#17A7FF]/80 transition-colors text-xs md:text-sm font-normal flex items-center justify-center gap-2"
            >
              See if we're a fit
            </button>
          </div>

          {/* ============ MOBILE - NAVIGATION ============ */}
          <div className="flex items-center gap-4 sm:hidden">
            <button 
              onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
              className="px-3 py-2 bg-[#17A7FF] text-white rounded-lg hover:bg-[#17A7FF]/80 transition-colors text-xs md:text-sm font-medium"
            >
              See if we're a fit
            </button>
          </div>

        </div>
      </header>
    </>
  )
} 