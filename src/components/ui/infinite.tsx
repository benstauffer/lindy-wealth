"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface MarqueeProps {
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
  className?: string
  children: React.ReactNode
}

export const Marquee = ({ direction = "left", speed = 40, pauseOnHover = false, className = "", children }: MarqueeProps) => {
  const [duplicated, setDuplicated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      // Only duplicate if necessary
      setDuplicated(contentRef.current.offsetWidth < containerRef.current.offsetWidth * 2)
    }
  }, [])

  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [0, -(contentRef.current?.offsetWidth ?? 0)] : [-(contentRef.current?.offsetWidth ?? 0), 0],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: contentRef.current?.offsetWidth ? contentRef.current.offsetWidth / (speed * 25) : 5,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
      }}
    >
      <motion.div
        ref={contentRef}
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
        {...(pauseOnHover && { whileHover: { animationPlayState: "paused" } })}
      >
        {children}
        {duplicated && children}
      </motion.div>
    </div>
  )
}

interface LogoProps {
  name: string
  src?: string
}

const Logo = ({ name, src }: LogoProps) => (
  <div className="flex items-center justify-center px-8 py-4">
    {src ? (
      <img src={src || "/placeholder.svg"} alt={name} className="h-8 opacity-50" />
    ) : (
      <span className="text-2xl font-semibold text-gray-400">{name}</span>
    )}
  </div>
)

export function InfiniteMarquee() {
  const topLogos: LogoProps[] = [
    { name: "INSTAGE" },
    { name: "Meta" },
    { name: "SendCutSend" },
    { name: "NETFLIX" },
    { name: "INSTAGE" },
    { name: "Meta" },
  ]

  const bottomLogos: LogoProps[] = [
    { name: "Showroom" },
    { name: "formula bot" },
    { name: "INSTAGE" },
    { name: "Showroom" },
    { name: "formula bot" },
    { name: "INSTAGE" },
  ]

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Top row - moves left */}
          <Marquee direction="left" speed={2} className="py-2">
            {topLogos.map((logo, index) => (
              <Logo key={`top-${index}`} name={logo.name} src={logo.src} />
            ))}
          </Marquee>

          {/* Bottom row - moves right */}
          <Marquee direction="right" speed={1.5} className="py-2">
            {bottomLogos.map((logo, index) => (
              <Logo key={`bottom-${index}`} name={logo.name} src={logo.src} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
