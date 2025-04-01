'use client'

import React, { createContext, useContext, useState, useEffect, useRef } from 'react'

type ScrollStage = 0 | 1 | 2

interface HeaderContextType {
  scrollStage: ScrollStage
  isHovered: boolean
  setIsHovered: (isHovered: boolean) => void
  lockScrollStage: () => void
  unlockScrollStage: () => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [scrollStage, setScrollStage] = useState<ScrollStage>(0)
  const [isHovered, setIsHovered] = useState(false)
  const scrollStageRef = useRef<ScrollStage>(0)
  const initialStateSetRef = useRef(false)
  const scrollLockRef = useRef(false)

  // Set initial scroll stage based on current scroll position
  useEffect(() => {
    if (initialStateSetRef.current || typeof window === 'undefined') return
    
    // Get current scroll position
    const currentScroll = window.scrollY
    
    let initialStage: ScrollStage = 0
    if (currentScroll >= 200) {
      initialStage = 2
    } else if (currentScroll >= 50) {
      initialStage = 1
    }
    
    setScrollStage(initialStage)
    scrollStageRef.current = initialStage
    initialStateSetRef.current = true
  }, [])

  // Update scroll stage based on scroll position
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      // Don't update if scroll is locked (e.g. during drawer interaction)
      if (scrollLockRef.current) return
      
      const scrollY = window.scrollY
      
      let newStage: ScrollStage = 0
      
      if (scrollY < 50) {
        newStage = 0
      } else if (scrollY < 200) {
        newStage = 1
      } else {
        newStage = 2
      }
      
      if (newStage !== scrollStageRef.current) {
        scrollStageRef.current = newStage
        setScrollStage(newStage)
      }
    }
    
    // Run once to ensure initial state
    if (!scrollLockRef.current) {
      handleScroll()
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to lock the scroll stage (prevent updates during drawer interaction)
  const lockScrollStage = () => {
    scrollLockRef.current = true
  }

  // Function to unlock the scroll stage
  const unlockScrollStage = () => {
    // Simple unlock without any scroll position manipulation
    scrollLockRef.current = false
  }

  const value = {
    scrollStage,
    isHovered,
    setIsHovered,
    lockScrollStage,
    unlockScrollStage
  }

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeaderContext() {
  const context = useContext(HeaderContext)
  if (context === undefined) {
    throw new Error('useHeaderContext must be used within a HeaderProvider')
  }
  return context
} 