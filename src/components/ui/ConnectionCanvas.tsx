'use client'

import React, { useRef, useEffect } from 'react'

export interface Connection {
  startRef: React.RefObject<HTMLDivElement | null>
  endRef: React.RefObject<HTMLDivElement | null>
  startAnchor: string
  endAnchor: string
  curveType: string
  bend: string
}

interface ConnectionCanvasProps {
  connections: Connection[]
  isReady: boolean
  className?: string
}

export const ConnectionCanvas: React.FC<ConnectionCanvasProps> = ({ 
  connections, 
  isReady, 
  className = "absolute top-0 left-0 w-full h-full -z-10" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!isReady) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    connections.forEach(connection => {
      const startElement = connection.startRef.current
      const endElement = connection.endRef.current

      if (startElement && endElement) {
        const startRect = startElement.getBoundingClientRect()
        const endRect = endElement.getBoundingClientRect()
        const canvasRect = canvas.getBoundingClientRect()

        // Calculate connection points based on anchors
        let startX, startY, endX, endY

        // Start point
        if (connection.startAnchor === 'middle-right') {
          startX = startRect.right - canvasRect.left
          startY = startRect.top - canvasRect.top + startRect.height / 2
        } else if (connection.startAnchor === 'middle-left') {
          startX = startRect.left - canvasRect.left
          startY = startRect.top - canvasRect.top + startRect.height / 2
        } else {
          startX = startRect.left - canvasRect.left + startRect.width / 2
          startY = startRect.top - canvasRect.top + startRect.height / 2
        }

        // End point
        if (connection.endAnchor === 'middle-right') {
          endX = endRect.right - canvasRect.left
          endY = endRect.top - canvasRect.top + endRect.height / 2
        } else if (connection.endAnchor === 'middle-left') {
          endX = endRect.left - canvasRect.left
          endY = endRect.top - canvasRect.top + endRect.height / 2
        } else {
          endX = endRect.left - canvasRect.left + endRect.width / 2
          endY = endRect.top - canvasRect.top + endRect.height / 2
        }

        // Draw curved line
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        
        const controlX1 = startX + (endX - startX) * 0.5
        const controlY1 = startY
        const controlX2 = endX - (endX - startX) * 0.5
        const controlY2 = endY

        ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
        
        ctx.strokeStyle = '#51555D'
        ctx.lineWidth = 8
        ctx.stroke()
      }
    })
  }, [connections, isReady])

  return <canvas ref={canvasRef} className={className} />
}
