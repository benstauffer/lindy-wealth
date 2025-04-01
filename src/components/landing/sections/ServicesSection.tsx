'use client'

import { servicesData } from '@/components/data/services-data'

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

const illustrations = {
  'sphere-lines': SphereLines,
  'sphere-dots': SphereDots,
}

export function ServicesSection() {
  return (
    <section className="flex items-center justify-center bg-white py-[125px]">
      <div className="w-full">
        <div className="w-full max-w-6xl mx-auto">
          <div className="px-6 sm:px-8 lg:px-12 xl:px-0">
            <h2 className="text-xl md:text-4xl text-gray-900 font-semibold text-center">
              Services
            </h2>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesData.map((service, index) => {
                const Illustration = illustrations[service.illustration as keyof typeof illustrations]
                
                return (
                  <div 
                    key={index}
                    className="group relative bg-neutral-50 rounded-3xl p-8 transition-all "
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                        <h3 className="text-2xl font-medium text-neutral-900">
                          {service.name}
                        </h3>
                        <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300"
                        >
                          <path 
                            d="M7 17L17 7M17 7H8M17 7V16" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      
                      <Illustration />
                      
                      <p className="text-neutral-600 text-lg">
                        {service.description}
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
