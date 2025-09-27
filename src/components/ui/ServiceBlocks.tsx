"use client"

import React, { useState, type FC } from "react"
import { motion } from 'framer-motion'

interface ServiceConfig {
  title: string
  icon: string
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
    transform?: string
  }
  backgroundColor: string
  textColor: string
  hoverColor: string
  animation: 'pulse' | 'grow' | 'rotate' | 'flow' | 'shield'
  delay: number
}

interface ServiceBlocksProps {
  className?: string
}

// Service configurations - easily customizable
const SERVICE_CONFIGS: ServiceConfig[] = [
  {
    title: "Tax Strategy",
    icon: "%",
    position: {
      top: "16px",
      left: "32px"
    },
    backgroundColor: "white",
    textColor: "black",
    hoverColor: "emerald-600",
    animation: "pulse",
    delay: 0.1
  },
  {
    title: "Investment Management",
    icon: "chart",
    position: {
      top: "80px",
      right: "48px"
    },
    backgroundColor: "slate-900",
    textColor: "white",
    hoverColor: "slate-700",
    animation: "grow",
    delay: 0.2
  },
  {
    title: "Risk Planning",
    icon: "shield",
    position: {
      top: "256px",
      left: "64px"
    },
    backgroundColor: "blue-500",
    textColor: "white",
    hoverColor: "blue-600",
    animation: "shield",
    delay: 0.3
  },
  {
    title: "Retirement Planning",
    icon: "clock",
    position: {
      bottom: "128px",
      left: "50%",
      transform: "-translate-x-1/2"
    },
    backgroundColor: "orange-400",
    textColor: "white",
    hoverColor: "orange-600",
    animation: "rotate",
    delay: 0.4
  },
  {
    title: "Cash Flow",
    icon: "$",
    position: {
      top: "320px",
      right: "32px"
    },
    backgroundColor: "purple-500",
    textColor: "white",
    hoverColor: "purple-600",
    animation: "flow",
    delay: 0.5
  }
]

const ServiceBlock: FC<{ config: ServiceConfig; index: number }> = ({ config, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getPositionClasses = () => {
    const { position } = config
    let classes = "absolute "
    
    if (position.top) classes += `top-[${position.top}] `
    if (position.bottom) classes += `bottom-[${position.bottom}] `
    if (position.left) classes += `left-[${position.left}] `
    if (position.right) classes += `right-[${position.right}] `
    if (position.transform) classes += `transform ${position.transform} `
    
    return classes
  }

  const getBackgroundClasses = () => {
    if (config.backgroundColor === "white") {
      return "bg-white border border-gray-100"
    }
    return `bg-${config.backgroundColor}`
  }

  const renderIcon = () => {
    switch (config.icon) {
      case "%":
        return (
          <div className="relative">
            <div className={`w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center`}>
              <div className="text-white font-bold text-sm">%</div>
            </div>
            <div className={`absolute -top-1 -right-1 w-3 h-3 bg-emerald-200 rounded-full transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}></div>
          </div>
        )

      case "chart":
        return (
          <div className="relative">
            <div className="flex items-end space-x-1">
              <div className={`w-1.5 h-4 bg-blue-400 rounded-sm transition-all duration-500 ${isHovered ? 'h-6' : ''}`}></div>
              <div className={`w-1.5 h-6 bg-blue-500 rounded-sm transition-all duration-500 ${isHovered ? 'h-8' : ''}`}></div>
              <div className={`w-1.5 h-3 bg-blue-300 rounded-sm transition-all duration-500 ${isHovered ? 'h-5' : ''}`}></div>
              <div className={`w-1.5 h-8 bg-blue-600 rounded-sm transition-all duration-500 ${isHovered ? 'h-10' : ''}`}></div>
            </div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <svg width="16" height="8" viewBox="0 0 16 8" className={`text-green-400 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <path d="M1 7L8 1L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>
        )

      case "shield":
        return (
          <div className="relative">
            <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/60 flex items-center justify-center">
              <div className={`w-3 h-3 bg-white rounded-full transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}></div>
            </div>
            <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-300 ${isHovered ? 'animate-pulse' : 'animate-ping'}`}></div>
          </div>
        )

      case "clock":
        return (
          <div className="relative">
            <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white flex items-center justify-center">
              <div className={`absolute w-3 h-3 bg-white rounded-full transition-transform duration-1000 ${isHovered ? 'rotate-180' : ''}`}
                   style={{ transformOrigin: '50% 150%' }}>
                <div className="w-0.5 h-3 bg-white absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0.5 h-2 bg-white"></div>
          </div>
        )

      case "$":
        return (
          <div className="relative">
            <div className="text-white text-xl font-bold">$</div>
            <div className="absolute -top-1 -right-2 flex flex-col space-y-0.5">
              <div className={`w-1 h-1 bg-green-400 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} delay-100`}></div>
              <div className={`w-1 h-1 bg-green-400 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} delay-200`}></div>
              <div className={`w-1 h-1 bg-green-400 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} delay-300`}></div>
            </div>
          </div>
        )

      default:
        return <div className="text-2xl">{config.icon}</div>
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: config.delay, duration: 0.5, ease: "easeOut" }}
      className={`${getPositionClasses()} text-center group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-20 h-20 ${getBackgroundClasses()} rounded-3xl shadow-lg flex items-center justify-center mb-3 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden`}>
        {renderIcon()}
      </div>
      <div className={`text-sm font-medium ${config.textColor === 'white' ? 'text-black' : 'text-black'} group-hover:text-${config.hoverColor} transition-colors`}>
        {config.title}
      </div>
    </motion.div>
  )
}

export const ServiceBlocks: FC<ServiceBlocksProps> = ({ className = "" }) => {
  return (
    <div className={`flex-1 relative max-w-5xl mx-auto w-full px-8 ${className}`}>
      {SERVICE_CONFIGS.map((config, index) => (
        <ServiceBlock key={config.title} config={config} index={index} />
      ))}
    </div>
  )
}

export function ServiceBlocksSection() {
  return (
    <div className="relative w-full h-screen flex flex-col">
      {/* Centered headline at top */}
      <motion.div 
        className="flex-none pt-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ lineHeight: 1.1 }} className="text-5xl leading-tight text-black/80 font-suisse tracking-tight">
          Full-Service
          <br />
          Financial Planning
        </p>
      </motion.div>

      {/* Scattered service blocks */}
      <ServiceBlocks />
    </div>
  )
}