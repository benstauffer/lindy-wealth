'use client'

import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AnimatedButtonText } from './AnimatedButtonText'
import { RiArrowRightLine } from "react-icons/ri"

interface AnimatedButtonProps {
  text: string
  onClick?: () => void
  href?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'underline' | 'yellow' | 'transparent' | 'header-cta' | 'red' | 'white'
  showArrow?: boolean
  children?: React.ReactNode
}

export function AnimatedButton({ 
  text, 
  onClick, 
  href, 
  className = '', 
  variant = 'primary',
  showArrow = false,
  children
}: AnimatedButtonProps) {
  // Physics for button
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 15 })
  const springY = useSpring(y, { stiffness: 250, damping: 15 })
  const rotateX = useTransform(springY, [-100, 100], [7, -7])
  const rotateY = useTransform(springX, [-100, 100], [-7, 7])

  const createMouseHandlers = () => ({
    onMouseEnter: (event: React.MouseEvent<HTMLButtonElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = event.clientX - centerX
      const deltaY = event.clientY - centerY
      
      const maxMove = 8
      const sensitivity = 0.3
      
      const moveX = Math.max(-maxMove, Math.min(maxMove, deltaX * sensitivity))
      const moveY = Math.max(-maxMove, Math.min(maxMove, deltaY * sensitivity))
      
      x.set(moveX)
      y.set(moveY)
    },
    onMouseMove: (event: React.MouseEvent<HTMLButtonElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = event.clientX - centerX
      const deltaY = event.clientY - centerY
      
      const maxMove = 8
      const sensitivity = 0.3
      
      const moveX = Math.max(-maxMove, Math.min(maxMove, deltaX * sensitivity))
      const moveY = Math.max(-maxMove, Math.min(maxMove, deltaY * sensitivity))
      
      x.set(moveX)
      y.set(moveY)
    },
    onMouseLeave: () => {
      x.set(0)
      y.set(0)
    }
  })

  const buttonHandlers = variant === 'underline' ? {} : createMouseHandlers()

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white hover:text-white'
      case 'secondary':
        return 'bg-neutral-900 text-white hover:text-white'
      case 'underline':
        return 'bg-transparent text-neutral-900 hover:text-neutral-700 underline'
      case 'yellow':
        return 'bg-yellow-400 text-neutral-900 hover:text-white hover:bg-yellow-400'
      case 'transparent':
        return 'bg-transparent px-8 text-base font-light text-foreground hover:text-background'
      case 'header-cta':
        return 'bg-transparent px-8 text-base font-light text-foreground hover:text-background'
      case 'red':
        return 'bg-red-50 text-pure-red hover:text-white hover:bg-red-50'
      case 'white':
        return 'bg-white text-pure-red hover:text-white hover:bg-white'
        
      default:
        return 'bg-blue-500 text-white hover:text-white'
    }
  }

  const getHoverBackground = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-950'
      case 'secondary':
        return 'bg-neutral-700'
      case 'underline':
        return 'bg-transparent'
      case 'yellow':
        return 'bg-foreground dark:bg-neutral-900'
      case 'transparent':
        return 'bg-foreground'
      case 'header-cta':
        return 'bg-foreground'
      case 'red':
        return 'bg-pure-red'
      case 'white':
        return 'bg-black'
      default:
        return 'bg-blue-950'
    }
  }

  const getBorderStyle = () => {
    if (variant === 'transparent' || variant === 'header-cta') {
      return {
        borderWidth: '1px',
        borderStyle: 'solid',
      }
    }
    return {}
  }

  const handleClick = () => {
    if (href) {
      window.location.href = href
    }
    if (onClick) {
      onClick()
    }
  }

  const buttonSize = variant === 'header-cta' ? 'h-16' : 'h-12'

  return (
    <motion.div
      style={variant === 'underline' ? {} : {
        x: springX,
        y: springY,
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d"
      }}
      initial="initial"
      whileHover="hover"
    >
      <Button 
        className={`${buttonSize} ${variant === 'underline' ? 'rounded-none' : 'rounded-full'} ${getVariantStyles()} border-border text-base font-medium relative overflow-hidden px-6 ${className} transition-colors`}
        style={getBorderStyle()}
        {...buttonHandlers}
        onClick={handleClick}
      >
        <span className="relative z-10 flex items-center gap-2">
          <AnimatedButtonText text={text} />
          {showArrow && (
            <span style={{ display: 'inline-grid', placeContent: 'center', overflow: 'hidden' }}>
              <motion.span
                style={{ gridColumn: 1, gridRow: 1 }}
                variants={{
                  hover: { y: '-105%' },
                  initial: { y: '0%' },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <RiArrowRightLine className="w-5 h-5" />
              </motion.span>
              <motion.span
                style={{ gridColumn: 1, gridRow: 1 }}
                variants={{
                  hover: { y: '0%' },
                  initial: { y: '105%' },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <RiArrowRightLine className="w-5 h-5" />
              </motion.span>
            </span>
          )}
          {children}
        </span>
        {variant === 'underline' ? (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900"
            variants={{
                initial: { width: "0%" },
                hover: { width: "100%" }
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <motion.div 
            className={`absolute bottom-0 left-0 right-0 w-full h-full ${getHoverBackground()}`}
            variants={{
                initial: { height: "0%" },
                hover: { height: "100%" }
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </Button>
    </motion.div>
  )
} 