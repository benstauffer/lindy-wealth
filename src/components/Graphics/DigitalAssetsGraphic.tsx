"use client"

import React, { useState, type FC } from "react"
import { motion } from 'framer-motion'
import { LuBadgeCheck, LuShield, LuUserCheck, LuHeadphones } from "react-icons/lu"

interface PageConfig {
  title: string
  titleLines: string[]
  subtitle?: string
  closedSize?: string
  openSize?: string
  closedTransform: string
  openTransform: string
  zIndex: string
  titleFontSize: string
  subtitleFontSize?: string
  backgroundColor: string
  borderColor: string
  textColor: string
  contentType: 'checklist' | 'tree' | 'pie-chart' | 'badge' | 'retirement-chart'
  boxShadow: string
  badgeIcon?: React.ReactNode
}

interface FolderProps {
  color?: string
  size?: number
  items?: React.ReactNode[]
  className?: string
}

// Page configurations - easily customizable
const PAGE_CONFIGS: PageConfig[] = [
  {
    title: "Financial Plan",
    titleLines: ["Financial", "Plan"],
    closedSize: "w-[55%] h-[75%]",
    openSize: "w-[55%] h-[75%]",
    closedTransform: "translate(-50%, -15%)",
    openTransform: "translate(-50%, -30%)",
    zIndex: "z-[15]",
    titleFontSize: "18px",
    subtitleFontSize: "18px",
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    textColor: "#000000",
    contentType: "checklist",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
  },
  {
    title: "Estate Plan",
    titleLines: ["Estate", "Plan"],
    closedSize: "w-[60%] h-[75%]",
    openSize: "w-[60%] h-[75%]",
    closedTransform: "translate(-60%, -24%)",
    openTransform: "translate(-90%, -100%) rotate(-10deg)",
    zIndex: "z-[9]",
    titleFontSize: "18px",
    backgroundColor: "#75776B",
    borderColor: "#ffffff",
    textColor: "#ffffff",
    contentType: "checklist",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
  },
  {
    title: "Asset Allocation",
    titleLines: ["Asset", "Allocation"],
    closedSize: "w-[50%] h-[80%]",
    openSize: "w-[50%] h-[80%]",
    closedTransform: "translate(-15%, -10%)",
    openTransform: "translate(40%, -30%) rotate(10deg)",
    zIndex: "z-[10]",
    titleFontSize: "15px",
    backgroundColor: "#3F4662",
    borderColor: "#ffffff",
    textColor: "#ffffff",
    contentType: "pie-chart",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
  },
  {
    title: "Tax Strategy",
    titleLines: ["Tax", "Strategy"],
    closedSize: "w-[60%] h-[70%]",
    openSize: "w-[60%] h-[70%]",
    closedTransform: "translate(-75%, -25%)",
    openTransform: "translate(-120%, -40%) rotate(-10deg)",
    zIndex: "z-[12]",
    titleFontSize: "18px",
    backgroundColor: "#718087",
    borderColor: "#ffffff",
    textColor: "#ffffff",
    contentType: "checklist",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
  },
      {
      title: "Retirement Projection",
      titleLines: ["Retirement", "Projection"],
      closedSize: "w-[60%] h-[70%]",
      openSize: "w-[60%] h-[70%]",
      closedTransform: "translate(-52%, -28%)",
      openTransform: "translate(-30%, -120%) rotate(8deg)",
      zIndex: "z-[9]",
      titleFontSize: "18px",
      backgroundColor: "#D2D4D1",
      borderColor: "#ffffff",
      textColor: "#000000",
      contentType: "retirement-chart",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
    },
  // Badge pages
  {
    title: "CFP Advisor",
    titleLines: ["CFP Advisor"],
    closedTransform: "translate(-45%, -22%)",
    openTransform: "translate(-225%, -520%) rotate(-12deg)",
    zIndex: "z-[10]",
    titleFontSize: "15px",
    backgroundColor: "#17A7FF",
    borderColor: "#17A7FF",
    textColor: "#ffffff",
    contentType: "badge",
    boxShadow: "0 2px 6px rgba(23, 167, 255, 0.2)",
  },

  {
    title: "Ongoing Support",
    titleLines: ["Ongoing Support"],
    closedTransform: "translate(-50%, -20%)",
    openTransform: "translate(50%, -80%) rotate(10deg)",
    zIndex: "z-[10]",
    titleFontSize: "15px",
    backgroundColor: "#17A7FF",
    borderColor: "#17A7FF",
    textColor: "#ffffff",
    contentType: "badge",
    boxShadow: "0 2px 6px rgba(23, 167, 255, 0.2)",
  }
]

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("")
  }
  if (color.length !== 6) return hex

  const num = Number.parseInt(color, 16)
  let r = (num >> 16) & 0xff
  let g = (num >> 8) & 0xff
  let b = num & 0xff

  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))))
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))))
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))))

  const rr = r.toString(16).padStart(2, "0")
  const gg = g.toString(16).padStart(2, "0")
  const bb = b.toString(16).padStart(2, "0")

  return `#${rr}${gg}${bb}`.toUpperCase()
}

export const Folder: FC<FolderProps> = ({ color = "#00d8ff", size = 1, items = [], className = "" }) => {
  const maxItems = PAGE_CONFIGS.length
  const papers = Array(maxItems)
    .fill(null)
    .map((_, i) => items[i] || null)
  const [open, setOpen] = useState(false)
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })),
  )

  const folderBackColor = darkenColor(color, 0.08)
  const paper1Color = darkenColor("#FFFFFF", 0.12)
  const paper2Color = darkenColor("#FFFFFF", 0.06)
  const paper3Color = "#FFFFFF"

  const handleClick = () => {
    setOpen((prev) => {
      if (prev) {
        setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })))
      }
      return !prev
    })
  }

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = (e.clientX - centerX) * 0.1
    const offsetY = (e.clientY - centerY) * 0.1

    setPaperOffsets((prev) => {
      const newOffsets = [...prev]
      newOffsets[index] = { x: offsetX, y: offsetY }
      return newOffsets
    })
  }

  const handlePaperMouseLeave = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev]
      newOffsets[index] = { x: 0, y: 0 }
      return newOffsets
    })
  }

  const folderBaseStyle: React.CSSProperties = {
    transform: `scale(${size})`,
    transformOrigin: "center center",
    display: "inline-block",
  }

  const folderInteractiveStyle: React.CSSProperties = {
    transform: open ? "translateY(-8px)" : undefined,
  }

  const getOpenTransform = (index: number) => {
    const config = PAGE_CONFIGS[index]
    if (!config) return ""
    
    const mouseTransform = `translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)`
    return `${config.openTransform} ${mouseTransform}`
  }

  return (
    <div style={folderBaseStyle} className={className}>
      <div
        className={`group relative transition-all duration-300 ease-in-out cursor-pointer`}
        style={folderInteractiveStyle}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div
          className="relative w-[300px] h-[240px] rounded-bl-[18px] rounded-br-[18px] rounded-tr-[24px]"
          style={{ backgroundColor: "#D9DBDC" }}
        >
          <span
            className="absolute z-0 bottom-[99%] left-0 w-[90px] h-[18px]
                         rounded-tl-[18px] rounded-tr-[18px] -rounded-br-[18px]"
            style={{ backgroundColor: "#D9DBDC" }}
          ></span>
          {papers.map((_itemContent, i) => {
            const config = PAGE_CONFIGS[i]
            if (!config) return null

            const sizeClasses = open ? (config.openSize || "") : (config.closedSize || "")
            const paperBaseTransform = !open ? config.closedTransform : ""
            const paperHoverTransform = !open ? "group-hover:translate-y-0" : ""
            const isBadge = config.contentType === 'badge'

            return (
              <div
                key={i}
                onMouseMove={!open ? (e) => handlePaperMouseMove(e, i) : undefined}
                onMouseLeave={!open ? (e) => handlePaperMouseLeave(e, i) : undefined}
                className={`absolute ${config.zIndex} bottom-[10%] left-1/2
                           transition-all duration-300 ease-in-out transform
                           ${paperHoverTransform} ${isBadge ? '' : sizeClasses} ${
                             isBadge ? `inline-block px-3 py-3 rounded-full` : 'flex flex-col p-4'
                           }`}
                style={{
                  backgroundColor: config.backgroundColor,
                  border: `1px solid ${config.borderColor}`,
                  borderRadius: isBadge ? "60px" : "6px",
                  boxShadow: config.boxShadow,
                  transform: open ? getOpenTransform(i) : paperBaseTransform,
                }}
              >
                {/* Badge Content */}
                {isBadge ? (
                  <div className="flex items-center justify-center">
                    <div 
                      className="font-medium leading-none text-center whitespace-nowrap" 
                      style={{ 
                        fontSize: config.titleFontSize,
                        color: config.textColor 
                      }}
                    >
                      {config.titleLines.map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < config.titleLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Page Title */}
                    <div className={`flex-shrink-0 mb-1 ${config.title === 'Asset Allocation' || config.title === 'Retirement Projection' || config.title === 'Financial Plan' ? 'text-center' : ''}`}>
                      <h3 
                        className="font-bold leading-none" 
                        style={{ 
                          fontSize: config.titleFontSize,
                          color: config.textColor 
                        }}
                      >
                        {config.titleLines.map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex < config.titleLines.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h3>
                    </div>

                    {/* Content Based on Type */}
                    <div className="flex-grow">
                      {config.contentType === 'checklist' && (
                        <div className="space-y-0.5">
                          <div className="flex items-center space-x-1">
                            <LuBadgeCheck className={config.title === 'Financial Plan' ? "text-black" : "text-white"} style={{ fontSize: '18px' }} />
                            <div className={`font-medium ${config.title === 'Financial Plan' ? "text-black/70" : "text-white/90"}`} style={{ fontSize: '12px' }}>
                              {config.title === 'Financial Plan' && 'Retirement Goals'}
                              {config.title === 'Estate Plan' && 'Will & Trust'}
                              {config.title === 'Tax Strategy' && 'Tax Optimization'}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <LuBadgeCheck className={config.title === 'Financial Plan' ? "text-black" : "text-white"} style={{ fontSize: '18px' }} />
                            <div className={`font-medium ${config.title === 'Financial Plan' ? "text-black/70" : "text-white/90"}`} style={{ fontSize: '12px' }}>
                              {config.title === 'Financial Plan' && 'Investment Plan'}
                              {config.title === 'Estate Plan' && 'Beneficiary Review'}
                              {config.title === 'Tax Strategy' && 'Deductions'}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <LuBadgeCheck className={config.title === 'Financial Plan' ? "text-black" : "text-white"} style={{ fontSize: '18px' }} />
                            <div className={`font-medium ${config.title === 'Financial Plan' ? "text-black/70" : "text-white/90"}`} style={{ fontSize: '12px' }}>
                              {config.title === 'Financial Plan' && 'Risk Assessment'}
                              {config.title === 'Estate Plan' && 'Core Documents'}
                              {config.title === 'Tax Strategy' && 'Quarterly Review'}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {config.contentType === 'pie-chart' && (
                                                  <div className="space-y-1 flex flex-col items-center justify-center h-full">
                          {/* Simple pie chart */}
                          <div className="flex justify-center">
                            <div className="w-16 h-16 rounded-full relative overflow-hidden" style={{ background: 'conic-gradient(from 0deg, #718087 0deg 120deg, #924E62 120deg 240deg, #A1553B 240deg 360deg)' }}>
                            </div>
                          </div>
                        </div>
                      )}

                      {config.contentType === 'retirement-chart' && (
                        <div className="flex flex-col items-center justify-center space-y-1 h-full">
                          {/* Retirement growth chart */}
                          <div className="flex items-end justify-center space-x-1.5">
                            <div className="w-3 h-6 bg-white/90 rounded-sm"></div>
                            <div className="w-3 h-9 bg-white/90 rounded-sm"></div>
                            <div className="w-3 h-12 bg-white/90 rounded-sm"></div>
                            <div className="w-3 h-16 bg-white/90 rounded-sm"></div>
                            <div className="w-3 h-12 bg-white/90 rounded-sm"></div>
                          </div>
                          {/* Timeline */}

                        </div>
                      )}
                    </div>

                    {/* Subtitle (if exists) */}
                    {config.subtitle && (
                      <div 
                        className="flex-shrink-0 mt-1 text-center leading-none" 
                        style={{ 
                          fontSize: config.subtitleFontSize || '6px',
                          color: config.textColor 
                        }}
                      >
                        {config.subtitle}
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          })}
            
          {/* White page layer at 91% height - left side */}
          <div
            className={`absolute z-[39] w-full origin-bottom transition-all duration-300 ease-in-out`}
            style={{
              backgroundColor: "white",
              borderRadius: "24px 24px 18px 18px",
              height: "91%",
              bottom: "0%",
              transform: open ? "translateY(20%) skewX(25deg) scaleY(0.5)" : "skewX(0deg) scaleY(1)",
            }}
          ></div>
          {/* White page layer at 91% height - right side */}
          <div
            className={`absolute z-[39] w-full origin-bottom transition-all duration-300 ease-in-out`}
            style={{
              backgroundColor: "white",
              borderRadius: "24px 24px 18px 18px",
              height: "91%",
              bottom: "0%",
              transform: open ? "translateY(20%) skewX(-25deg) scaleY(0.5)" : "skewX(0deg) scaleY(1)",
            }}
          ></div>
          <div
            className={`absolute z-[40] w-full origin-bottom transition-all duration-300 ease-in-out`}
            style={{
              background: "linear-gradient(to bottom, #e5e5e5, #fafafa)",
              borderRadius: "24px 24px 18px 18px",
              height: "90%",
              bottom: "0%",
              transform: open ? "translateY(20%) skewX(25deg) scaleY(0.5)" : "skewX(0deg) scaleY(1)",
            }}
          ></div>
          <div
            className={`absolute z-[41] w-full origin-bottom transition-all duration-300 ease-in-out flex items-center justify-center`}
            style={{
              background: "linear-gradient(to bottom, #e5e5e5, #fafafa)",
              borderRadius: "24px 24px 18px 18px",
              height: "90%",
              bottom: "0%",
              transform: open ? "translateY(20%) skewX(-25deg) scaleY(0.5)" : "skewX(0deg) scaleY(1)",
            }}
          >
            <div className="text-center font-medium text-[#babec5] leading-none transition-opacity duration-300 font-['Georgia']" 
                 style={{ 
                   fontSize: '24px',
                   opacity: open ? 0 : 1
                 }}>
              <div>Your</div>
              <div>Financial</div>
              <div>Plan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DigitalAssetsGraphic() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Folder color="#d1d5db" size={1} />
      </motion.div>
      
      {/* Folder Label */}
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >

      </motion.div>
    </div>
  )
} 