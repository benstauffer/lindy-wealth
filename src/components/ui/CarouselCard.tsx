'use client'

import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from "@/lib/utils"

interface CarouselCardProps {
  children: React.ReactNode
  icon?: React.ReactNode
  index: number
  className?: string
}

export function CarouselCard({ children, icon, index, className }: CarouselCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Damping controls the oscillation/bouncing:
  // Lower damping (15-20) = more bouncing/oscillation  
  // Higher damping (30-40) = less bouncing, more controlled
  const springX = useSpring(x, { stiffness: 250, damping: 15 }) // Adjust this for bounce control
  const springY = useSpring(y, { stiffness: 250, damping: 15 }) // Adjust this for bounce control
  
  const rotateX = useTransform(springY, [-100, 100], [7, -7])
  const rotateY = useTransform(springX, [-100, 100], [-7, 7])

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = event.clientX - centerX
    const deltaY = event.clientY - centerY
    
    // ADJUST INITIAL PUSH STRENGTH:
    const maxMove = 10        // Maximum push distance (increase for stronger push)
    const sensitivity = -0.2  // Push sensitivity (increase absolute value for more responsive push)
    
    const moveX = Math.max(-maxMove, Math.min(maxMove, deltaX * sensitivity))
    const moveY = Math.max(-maxMove, Math.min(maxMove, deltaY * sensitivity))
    
    // Initial push
    x.set(moveX)
    y.set(moveY)
    
    // ADJUST PUSH DURATION:
    setTimeout(() => {
      x.set(0)
      y.set(0)
    }, 250) // How long push lasts before spring back (increase for longer push)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1
      }}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("rounded-xl shadow-sm px-6 sm:px-8 md:px-8 sm:py-12 md:py-12 py-8 h-full min-h-[600px] flex flex-col justify-start cursor-pointer", className)}
    >
      {icon && (
        <div className="mb-6">
          {icon}
        </div>
      )}
      {children}
    </motion.div>
  )
} 