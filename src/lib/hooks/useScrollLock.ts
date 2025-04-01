import { useEffect, useRef } from 'react'

/**
 * Custom hook to properly manage scroll position when showing modal/drawer content
 */
export function useScrollLock() {
  const scrollYRef = useRef(0)
  
  const lockScroll = () => {
    // Record current scroll position
    scrollYRef.current = window.scrollY
    
    // Apply body styles directly
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollYRef.current}px`
    document.body.style.width = '100%'
    document.body.style.overflowY = 'scroll'
  }
  
  const unlockScroll = () => {
    // Remove the fixed position
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.style.overflowY = ''
    
    // Restore scroll position
    window.scrollTo(0, scrollYRef.current)
  }
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      unlockScroll()
    }
  }, [])
  
  return { lockScroll, unlockScroll }
} 