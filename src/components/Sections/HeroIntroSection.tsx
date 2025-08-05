'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiArrowRightLine, RiPlayCircleLine, RiVolumeUpFill } from 'react-icons/ri'
import { ServiceGraphic } from './ServiceGraphic'
import { Graphic } from './Graphic'




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
            <div className="relative z-10 flex flex-col items-center justify-center pt-32  mx-auto max-w-6xl px-4">
                {/* Main Hero Headline */}
                <div className="w-full mb-4 text-center ">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-black text-center max-w-3xl mx-auto mt-24 font-medium"
                        style={{ lineHeight: '1' }}
                    >
                        Helping you secure 
                        <br />
                        your financial future.
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-black max-w-xl mx-auto mt-8 tracking-tight">
                        Lindy Wealth is an independent wealth management firm helping families optimize their finances through tax-focused planning and investment management.
                    </p>
                </div>
                <div className="w-full mb-4 text-center">
                    <motion.h1
                        className="text-lg md:text-2xl text-black max-w-lg mx-auto font-light"
                    >
                    </motion.h1>
                </div>

                               {/* Call to Action Section */}
                               <div className="w-full mb-8 text-center mt-4">
                    <button 
                        onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                        className="group px-6 py-4 bg-[#17A7FF] text-white hover:bg-[#17A7FF]/80 transition-colors text-sm md:text-lg  font-normal flex items-center justify-center gap-2 mx-auto"
                    >
                        Let's Begin
                        <RiArrowRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Graphic */}
                <div className="w-full mt-8 max-w-4xl">
                    <Graphic />
                </div>
            </div>
        </section>
    )
} 