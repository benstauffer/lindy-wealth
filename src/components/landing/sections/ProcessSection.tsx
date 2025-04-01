'use client'

import { processData } from '@/components/data/process-data'

const SphereLines = () => {
  // Pre-calculate rotation angles to ensure consistency
  const rotations = Array.from({ length: 12 }, (_, i) => ({
    angle: (i * 15).toFixed(1),
  }))

  return (
    <div className="w-48 h-48 mx-auto mb-8">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.5" className="text-neutral-400"/>
        {rotations.map((rot, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="100"
            rx="99"
            ry="30"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-neutral-400"
            transform={`rotate(${rot.angle} 100 100)`}
          />
        ))}
      </svg>
    </div>
  )
}

const SphereDots = () => {
  // Pre-calculate dot positions to ensure consistency
  const dots = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * Math.PI) / 12
    return {
      x: (100 + 80 * Math.cos(angle)).toFixed(1),
      y: (100 + 80 * Math.sin(angle)).toFixed(1),
    }
  })

  return (
    <div className="w-48 h-48 mx-auto mb-8">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.5" className="text-neutral-400"/>
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="2"
            fill="currentColor"
            className="text-neutral-400"
          />
        ))}
      </svg>
    </div>
  )
}

const SphereCircles = () => {
  return (
    <div className="w-48 h-48 mx-auto mb-8">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.5" className="text-neutral-400"/>
        <circle cx="100" cy="100" r="66" stroke="currentColor" strokeWidth="0.5" className="text-neutral-400"/>
        <circle cx="100" cy="100" r="33" stroke="currentColor" strokeWidth="0.5" className="text-neutral-400"/>
      </svg>
    </div>
  )
}

const illustrations = {
  'sphere-lines': SphereLines,
  'sphere-dots': SphereDots,
  'sphere-circles': SphereCircles,
}

// Process descriptions
const PROCESS_DESCRIPTIONS: Record<string, string> = {
  'Discovery': 'We explore your values & goals. This creates clarity and defines possibilities for your future.',
  'Strategy': 'We develop a comprehensive financial plan & roadmap tailored to your unique situation.',
  'Implement & Manage': 'We execute your strategy with discipline and continuously adapt as your life evolves.',
}

export function ProcessSection() {
  return (
    <section className="flex items-center justify-center bg-white py-[125px]">
      <div className="w-full">
        <div className="w-full max-w-6xl mx-auto">
          <div className="px-6 sm:px-8 lg:px-12 xl:px-0">
            <h2 className="text-xl md:text-4xl text-gray-900 font-semibold text-center">
              Process
            </h2>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processData.map((step, index) => {
                const Illustration = illustrations[
                  index === 0 ? 'sphere-lines' : 
                  index === 1 ? 'sphere-dots' : 
                  'sphere-circles'
                ]
                
                return (
                  <div 
                    key={index}
                    className="group relative bg-neutral-50 rounded-3xl p-8 transition-all duration-300"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                        <h3 className="text-2xl font-medium text-neutral-900">
                          {step.name}
                        </h3>
                        <div className="text-4xl font-bold text-neutral-400">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>
                      
                      <Illustration />
                      
                      <p className="text-neutral-600 text-lg">
                        {PROCESS_DESCRIPTIONS[step.name]}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 