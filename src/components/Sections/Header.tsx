'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerTitle } from '@/components/ui/drawer'
import { usePathname } from 'next/navigation'


interface HeaderProps {
  isDarkMode?: boolean
}

export function Header({ isDarkMode = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isPricingPage = pathname === '/pricing'

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto py-5 px-4">
        {/* Pricing Panel - positioned within header */}


        {/* Content container */}
        <div className="flex items-center justify-between">
          
          {/* ============ LEFT - LOGO ============ */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center hover:opacity-80 transition-opacity">
                <span className="text-2xl text-black block tracking-tight font-medium hover:rotate-[-2.5deg] transition-transform duration-300">
                 Lindy Wealth
                </span>
            </Link>
          </div>

          {/* ============ CENTER - NAVIGATION ============ */}
          <div className="hidden sm:flex items-center gap-8">
            <Link 
              href="/about"
              className="py-2 hover:opacity-80 transition-opacity text-base"
            >
              About
            </Link>
            <Link 
              href="/pricing"
              className="py-2 hover:opacity-80 transition-opacity text-base"
            >
              Pricing
            </Link>
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
              className="py-2 hover:opacity-80 transition-opacity"
            >

            </button>
            <button 
              onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
              className="group px-4 py-3 bg-[#17A7FF] text-white  hover:bg-[#17A7FF]/80 transition-colors text-xs md:text-sm font-medium flex items-center justify-center gap-2"
            >
              See if we're a fit
            </button>
          </div>

          {/* ============ MOBILE - NAVIGATION ============ */}
          <div className="flex items-center gap-2 sm:hidden">
            <button 
              onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
              className="px-3 py-3 bg-[#17A7FF] text-white  hover:bg-[#17A7FF]/80 transition-colors text-xs md:text-sm font-medium"
            >
              Book Intro
            </button>
            <Drawer>
              <DrawerTrigger asChild>
                <button aria-label="Open menu" className="p-3 border border-black/10 text-black">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-white border-t border-black/10">
                <DrawerTitle className="sr-only">Main menu</DrawerTitle>
                <nav className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="block w-full px-3 py-3 text-base">About</Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="block w-full px-3 py-3 text-base">Pricing</Link>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <button 
                      onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                      className="w-full px-4 py-3 bg-[#17A7FF] text-white hover:bg-[#17A7FF]/80 transition-colors text-sm"
                    >
                      Book a 15‑min Intro
                    </button>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <DrawerClose asChild>
                      <button className="px-3 py-2 text-black/60 text-sm" aria-label="Close menu">Close</button>
                    </DrawerClose>
                  </div>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>

        </div>
        </div>
      </header>
    </>
  )
} 