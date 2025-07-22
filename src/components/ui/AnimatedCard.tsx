'use client'

import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 250, damping: 15 })
  const springY = useSpring(y, { stiffness: 250, damping: 15 })
  
  const rotateX = useTransform(springY, [-100, 100], [7, -7])
  const rotateY = useTransform(springX, [-100, 100], [-7, 7])

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = event.clientX - centerX
    const deltaY = event.clientY - centerY
    
    const maxMove = 10
    const sensitivity = -0.2
    
    const moveX = Math.max(-maxMove, Math.min(maxMove, deltaX * sensitivity))
    const moveY = Math.max(-maxMove, Math.min(maxMove, deltaY * sensitivity))
    
    x.set(moveX)
    y.set(moveY)
    
    setTimeout(() => {
      x.set(0)
      y.set(0)
    }, 250)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </motion.div>
  )
} 