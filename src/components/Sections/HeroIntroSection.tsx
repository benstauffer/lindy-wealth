'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiArrowRightLine, RiPlayCircleLine, RiVolumeUpFill } from 'react-icons/ri'
import { Graphic } from './Graphic'
import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller"
import { BeehiivEmbed } from "@/components/ui/BeehiivEmbed"
import Script from 'next/script'

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
        <section className="relative">
            {/* Content container that respects layout constraints */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-32 mx-auto max-w-6xl px-4">
                {/* Main Hero Headline */}
                <div className="w-full mb-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-black text-center max-w-3xl mx-auto mt-24 font-medium"
                        style={{ lineHeight: '1' }}
                    >
                        Helping you secure 
                        <br />
                        your financial future.
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-black max-w-xl mx-auto mt-8 tracking-tight">
                        Join our newsletter for weekly insights helping six-figure earners in their 30s–50s become work-optional using proven tax strategies.
                    </p>
                </div>

                {/* Newsletter signup (Beehiiv) */}
                <BeehiivEmbed />

                {/* Marquee of topics */}
                <div className="w-full mt-4 max-w-4xl">
                    <MarqueeLogoScroller
                        title="Topics we help with"
                        description="Common planning areas"
                        className="bg-transparent border-none"
                        speed="slow"
                        itemClassName="text-black/80"
                        itemGapClassName="gap-10 md:gap-12"
                        services={[
                            { name: "Tax Planning" },
                            { name: "Investment Management" },
                            { name: "Cash flow projections" },
                            { name: "Retirement planning" },
                            { name: "Estate planning guidance" },
                            { name: "Direct Indexing" },
                            { name: "Net Worth Tracking" },
                            { name: "Philanthropic goals" },
                            { name: "Life insurance guidance" },
                            { name: "Fee-only advice" },
                            { name: "Fiduciary duty" },
                            { name: "Transparent pricing" },
                        ]}
                    />
                </div>

                {/* Graphic */}
                <div className="w-full mt-2 max-w-4xl">
                    <Graphic />
                </div>
            </div>
            
            {/* Beehiiv attribution tracking (optional; forwards UTM params) */}
            <Script src="https://subscribe-forms.beehiiv.com/attribution.js" strategy="afterInteractive" async />
        </section>
    )
}