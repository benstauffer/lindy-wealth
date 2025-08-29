'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiArrowRightLine } from 'react-icons/ri'
import { GrFormCheckmark } from 'react-icons/gr'
import { FinancialPlanSection } from './FinancialPlanSection'
import { Misc } from './Misc'

    
export function HeroIntroSection() {
    const [showAudioOverlay, setShowAudioOverlay] = useState(true)

    const handleFreeAssessment = () => {
        const processSection = document.querySelector('[data-section="process"]')
        if (processSection) {
            processSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handlePlayAudio = () => {
        setShowAudioOverlay(false)
        // This will reload the iframe with audio enabled
    }

    return (
        <section className="relative bg-gradient-to-b from-[#080808] from-0% via-neutral-940 via-15% to-[#080808] to-25%">
            {/* Header */}
            <div className="w-full flex items-center justify-between py-6 px-4 max-w-xl mx-auto">
                <div className="text-white font-medium text-lg">
                    Lindy Wealth
                </div>
                <div className="flex items-center gap-8">
                    <button className="px-3 py-1.5 bg-white text-black rounded-xl hover:bg-white/90 transition-colors font-medium">
                        Contact
                    </button>
                </div>
            </div>

            {/* Art Image below header */}
            <div className="max-w-xl mx-auto px-4">
                <img 
                    src="/images/art.png" 
                    alt="Art Gallery Scene" 
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Hero Content */}
            <div className="max-w-xl mx-auto px-4 pt-20">
                <div className="text-left">
                <h1 className="text-2xl md:text-3xl text-white font-medium mb-4 leading-tight">
                        Financial planning that makes sense.
                    </h1>
                    <h1 className="text-lg text-white/80 mb-4 leading-tight">
                        Get strategic tax planning, investing, and comprehensive advice the way it should be: clear, flat fee, no conflicts. 
                    </h1>
                    
                    {/* CTA Button */}
                    <button
                        onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                        className="w-full px-6 py-3 bg-white text-black rounded-xl hover:bg-white/90 transition-all duration-200 font-medium text-lg flex items-center justify-between"
                    >
                        <span>Book a call</span>
                        <RiArrowRightLine className="w-5 h-5" />
                    </button>
                </div>
            </div>


            
        </section>
    )
}


