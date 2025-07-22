'use client'

import { LandingContent } from "@/components/Sections/LandingContent";
import { useEffect, useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      const trigger = document.getElementById('dark-mode-trigger')
      if (!trigger) return

      const triggerRect = trigger.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Trigger dark mode when the trigger div is past the vertical center of the screen.
      const shouldBeDark = triggerRect.top < viewportHeight / 2.5

      if (shouldBeDark !== isDarkMode) {
        setIsDarkMode(shouldBeDark)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDarkMode])

  return (
    <>
      {/* Full viewport background */}
      <div className="fixed inset-0 w-full h-full -z-10 transition-colors duration-400 ease-in-out" />
      
      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        {/* Content wrapper */}
        <div className="flex-grow">
          <main>
            <div className="min-h-screen flex items-center">
              <div className="w-full">
                <LandingContent />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
