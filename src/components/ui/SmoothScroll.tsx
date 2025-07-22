'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,        // Scroll duration (higher = slower/smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(5, -10 * t)), // Custom easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,   // Mouse wheel sensitivity
      touchMultiplier: 1,   // Touch scroll sensitivity
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
} 