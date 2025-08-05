'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Search, Box, Workflow, Home, ShieldCheck, Landmark, PiggyBank, Check } from 'lucide-react'
import { ConnectionCanvas, Connection } from '../ui/ConnectionCanvas'

const services = [
    {
      icon: Check,
      title: 'Life & Goals Planning',
      description: 'Aligning your money with what matters most.',
      bgColor: 'bg-[#FFDA40]',
      textColor: 'text-black',
      position: 'top-left'
    },
    {
      icon: Box,
      title: 'Retirement Planning',
      description: 'A clear path to a secure retirement.',
      bgColor: 'bg-[#17A7FF]',
      textColor: 'text-white',
      position: 'top'
    },
    {
      icon: Search,
      title: 'Investment Management',
      description: 'Evidence-based portfolios to grow your wealth.',
      bgColor: 'bg-[#FB651F]',
      textColor: 'text-white',
      position: 'top-right'
    },
    {
      icon: Landmark,
      title: 'Tax Strategy',
      description: 'Minimize taxes and maximize efficiency.',
      bgColor: 'bg-[#5BD363]',
      textColor: 'text-black',
      position: 'bottom-right'
    },
    {
      icon: Workflow,
      title: 'Estate Planning',
      description: 'Protect and transfer your legacy.',
      bgColor: 'bg-[#D0D6E5]',
      textColor: 'text-black',
      position: 'bottom'
    },
    {
      icon: ShieldCheck,
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
        <div className="hidden md:flex relative justify-center items-center min-h-[700px] w-full rounded-3xl border border-gray-200 shadow-sm bg-[#E9E8E4]">
            <ConnectionCanvas 
                connections={connections}
                isReady={isReady}
                className="absolute inset-0 w-full h-full pointer-events-none z-30 "
            />
            {/* Left side services */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 p-12 ">
                {services.slice(3).map((service, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div ref={leftServiceRefs[index]} className={`w-28 h-28 ${service.bgColor} flex flex-col items-center justify-center p-2`}>
                            <service.icon className={`w-6 h-6 ${service.textColor} mb-1`} strokeWidth={1.5} />
                            <div className="text-center">
                                <div className={`text-xs font-semibold ${service.textColor} leading-tight`}>{service.title.split(' ')[0]}</div>
                                <div className={`text-xs font-semibold ${service.textColor} leading-tight`}>{service.title.split(' ').slice(1).join(' ')}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right side services */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 p-12">
                {services.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center gap-4 flex-row-reverse ">
                        <div ref={rightServiceRefs[index]} className={`w-28 h-28 ${service.bgColor} flex flex-col items-center justify-center p-2`}>
                            <service.icon className={`w-6 h-6 ${service.textColor} mb-1`} strokeWidth={1.5} />
                            <div className="text-center">
                                <div className={`text-xs font-semibold ${service.textColor} leading-tight`}>{service.title.split(' ')[0]}</div>
                                <div className={`text-xs font-semibold ${service.textColor} leading-tight`}>{service.title.split(' ').slice(1).join(' ')}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Central Hub */}
            <div className="relative z-20 w-48 h-64 flex items-center justify-center">
                <div ref={centralHubRef} className=" w-full h-full bg-white shadow-sm border border-gray-200 rounded-lg  flex flex-col p-6">
                    <div className="flex-shrink-0 mb-4">
                        <h3 className="text-lg font-bold text-black leading-tight">Your <br /> Financial <br /> Plan</h3>
                    </div>
                    <div className="flex-grow space-y-2">
                        <div className="h-1.5 bg-black/20 rounded-full w-full"></div>
                        <div className="h-1.5 bg-black/20 rounded-full w-10/12"></div>
                        <div className="h-1.5 bg-black/20 rounded-full w-full"></div>
                        <div className="h-1.5 bg-black/20 rounded-full w-8/12"></div>
                        <div className="h-1.5 bg-black/20 rounded-full w-9/12"></div>
                    </div>
                    <div className="flex-shrink-0 mt-4 text-xs text-black text-center">
                        A Lindy Financial Plan
                    </div>
                </div>
            </div>
        </div>
    )
} 