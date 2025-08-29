'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Calculator, TrendingUp, FileText, Calendar, Shield, Heart } from 'lucide-react'
import { ConnectionCanvas, Connection } from '../ui/ConnectionCanvas'

const services = [
    {
      icon: Heart,
      title: 'Life & Goals Planning',
      description: 'Aligning your money with what matters most.',
      bgColor: 'bg-[#FFDA40]',
      textColor: 'text-black',
      position: 'top-left'
    },
    {
      icon: FileText,
      title: 'Retirement Planning',
      description: 'A clear path to a secure retirement.',
      bgColor: 'bg-[#17A7FF]',
      textColor: 'text-white',
      position: 'top'
    },
    {
      icon: Calculator,
      title: 'Investment Management',
      description: 'Evidence-based portfolios to grow your wealth.',
      bgColor: 'bg-[#FB651F]',
      textColor: 'text-white',
      position: 'top-right'
    },
    {
      icon: Shield,
      title: 'Tax Strategy',
      description: 'Minimize taxes and maximize efficiency.',
      bgColor: 'bg-[#5BD363]',
      textColor: 'text-black',
      position: 'bottom-right'
    },
    {
      icon: TrendingUp,
      title: 'Estate Planning',
      description: 'Protect and transfer your legacy.',
      bgColor: 'bg-[#D0D6E5]',
      textColor: 'text-black',
      position: 'bottom'
    },
    {
      icon: Calendar,
      title: 'Insurance Review',
      description: 'Right coverage at the right price.',
      bgColor: 'bg-[#9893A5]',
      textColor: 'text-white',
      position: 'bottom-left'
    }
]

export function ServiceGraphic() {
    const [isReady, setIsReady] = useState(false)
    
    // Refs for connection points
    const centralHubRef = useRef<HTMLDivElement>(null)
    const leftService1Ref = useRef<HTMLDivElement>(null)
    const leftService2Ref = useRef<HTMLDivElement>(null)
    const leftService3Ref = useRef<HTMLDivElement>(null)
    const rightService1Ref = useRef<HTMLDivElement>(null)
    const rightService2Ref = useRef<HTMLDivElement>(null)
    const rightService3Ref = useRef<HTMLDivElement>(null)

    const leftServiceRefs = [leftService1Ref, leftService2Ref, leftService3Ref]
    const rightServiceRefs = [rightService1Ref, rightService2Ref, rightService3Ref]

    useEffect(() => {
        // Set isReady after component mounts to ensure all refs are available
        const timer = setTimeout(() => setIsReady(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const connections: Connection[] = [
        // Left side connections
        { startRef: leftService1Ref, endRef: centralHubRef, startAnchor: 'middle-right', endAnchor: 'middle-left', curveType: 'smooth-L', bend: 'horizontal-first' },
        { startRef: leftService2Ref, endRef: centralHubRef, startAnchor: 'middle-right', endAnchor: 'middle-left', curveType: 'smooth-L', bend: 'horizontal-first' },
        { startRef: leftService3Ref, endRef: centralHubRef, startAnchor: 'middle-right', endAnchor: 'middle-left', curveType: 'smooth-L', bend: 'horizontal-first' },
        
        // Right side connections
        { startRef: rightService1Ref, endRef: centralHubRef, startAnchor: 'middle-left', endAnchor: 'middle-right', curveType: 'smooth-L', bend: 'horizontal-first' },
        { startRef: rightService2Ref, endRef: centralHubRef, startAnchor: 'middle-left', endAnchor: 'middle-right', curveType: 'smooth-L', bend: 'horizontal-first' },
        { startRef: rightService3Ref, endRef: centralHubRef, startAnchor: 'middle-left', endAnchor: 'middle-right', curveType: 'smooth-L', bend: 'horizontal-first' },
    ]

    return (
        <section className="w-full pb-24 md:pb-32">
            <div className="max-w-5xl mx-auto px-4">
                <div className="max-w-3xl mx-auto rounded-3xl p-8 md:p-16 shadow-inner" style={{
                    border: '.5px solid transparent',
                    borderRadius: '24px',
                    background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
                }}>
                    <div className="flex justify-center items-center">
                        <div className="hidden md:flex relative justify-center items-center min-h-[400px] w-full">
                                <ConnectionCanvas 
                                    connections={connections}
                                    isReady={isReady}
                                    className="absolute inset-0 w-full h-full pointer-events-none z-30"
                                />
                                {/* Left side services */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                                    {services.slice(3).map((service, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <div ref={leftServiceRefs[index]} className="w-20 h-20 rounded-2xl border border-neutral-600 flex items-center justify-center shadow-inner" style={{
                                                border: '.5px solid transparent',
                                                borderRadius: '16px',
                                                background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
                                            }}>
                                                <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Right side services */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                                    {services.slice(0, 3).map((service, index) => (
                                        <div key={index} className="flex items-center gap-4 flex-row-reverse">
                                            <div ref={rightServiceRefs[index]} className="w-20 h-20 rounded-2xl border border-neutral-600 flex items-center justify-center shadow-inner" style={{
                                                border: '.5px solid transparent',
                                                borderRadius: '16px',
                                                background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
                                            }}>
                                                <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Central Hub */}
                                <div className="relative z-20 w-48 h-64 flex items-center justify-center">
                                    <div ref={centralHubRef} className="w-full h-full shadow-inner rounded-lg flex flex-col p-6" style={{
                                        border: '.5px solid transparent',
                                        borderRadius: '16px',
                                        background: 'linear-gradient(45deg, #141517 0%, #1A1C1F 15%, #1E2023 30%, #1A1C1F 50%, #141517 100%) padding-box, linear-gradient(to bottom, #686E61, #1A1C1F) border-box'
                                    }}>
                                        <div className="flex-shrink-0 mb-4">
                                            <h3 className="text-lg font-bold text-white leading-tight">Financial <br /> Plan</h3>
                                        </div>
                                        <div className="flex-grow space-y-2">
                                            <div className="h-1.5 bg-white/20 rounded-full w-full"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-10/12"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-full"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-8/12"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-9/12"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-full"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-10/12"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-full"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-8/12"></div>
                                            <div className="h-1.5 bg-white/20 rounded-full w-9/12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
} 