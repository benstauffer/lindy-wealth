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
    } else if (action === 'calendar') {
      // Replace with actual calendar booking link
      window.open('https://calendly.com/your-link', '_blank');
    }
  }

  return (
    <>
      {/* ============ HEADER CONTAINER ============ */}
      <header className="fixed top-0 left-0 right-0 z-[102] bg-gray-50 max-w-5xl mx-auto px-6 py-3 md:px-12">
        {/* Pricing Panel - positioned within header */}


        {/* Content container */}
        <div className="flex items-center justify-between">
          
          {/* ============ LEFT - LOGO ============ */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center hover:opacity-80 transition-opacity">
                <span className="text-base font-medium text-black block tracking-wider uppercase">
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
              onClick={() => handleMenuItemClick('process')}
              className="px-4 py-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm font-medium text-black">
                How it works
              </span>
            </button>
            <button 
              onClick={() => handleMenuItemClick('faqs')}
              className="px-4 py-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm font-medium text-black">
                FAQs
              </span>
            </button>
            <button 
              onClick={() => handleCallAction('calendar')}
              className="group px-4 py-2 bg-[#17A7FF] text-white rounded-xl hover:bg-[#17A7FF]/80 transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              Schedule a call
            </button>
          </div>

          {/* ============ MOBILE - MENU BUTTON ============ */}
          <div className="flex items-center gap-4 sm:hidden">
            <button 
              onClick={() => handleCallAction('calendar')}
              className="px-3 py-2 bg-[#17A7FF] text-white rounded-lg hover:bg-[#17A7FF]/80 transition-colors text-sm font-medium"
            >
              Book Call
            </button>
            
            <button
              onClick={handleMenuClick}
              className="p-2 hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </header>
    </>
  )
} 