'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiArrowRightLine, RiPlayCircleLine, RiVolumeUpFill } from 'react-icons/ri'




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
            <div className="relative z-10 flex flex-col items-center justify-center pt-12  max-w-5xl mx-auto ">
                {/* Main Hero Headline */}
                <div className="w-full mb-4 text-center">
                    <motion.h1
                        className="text-3xl md:text-5xl leading-tight text-black text-center max-w-xl mx-auto font-['Georgia']"
                        style={{ lineHeight: '1' }}
                    >
                        Plan Smarter, 
                        <br />
                        Live Better. 
                    </motion.h1>
                </div>
                <div className="w-full mb-4 text-center">
                    <motion.h1
                        className="text-lg md:text-2xl text-black max-w-lg mx-auto font-light"
                    >
                        Want a financial partner who helps you get the most out of life with your money? 
                    </motion.h1>
                </div>





    

                {/* Video Section */}
                <div className="w-full mb-8">
                    <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden ">
                        {/* Auto-playing muted video */}
                        <iframe
                            src={showAudioOverlay 
                                ? "https://www.youtube.com/embed/UA0vm-s32vU?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=UA0vm-s32vU&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&hd=1&vq=hd2160"
                                : "https://www.youtube.com/embed/UA0vm-s32vU?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&hd=1&vq=hd2160"
                            }
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                        
                        {/* Audio overlay */}
                        {showAudioOverlay && (
                                                             <div 
                                 onClick={handlePlayAudio}
                                 className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer group"
                             >
                                 <div className="flex flex-col items-center gap-2">
                                     <RiVolumeUpFill className="w-12 h-12 text-white drop-shadow-lg" />
                                     <span className="text-white font-medium uppercase text-lg text-center">Click for sound</span>
                                 </div>
                             </div>
                        )}
                    </div>
                </div>

                {/* Scroll target for typeform - positioned to account for fixed header */}
                <div id="typeform-section" className="w-full" style={{ paddingTop: '100px', marginTop: '-100px' }}>
                </div>
                
                {/* Call to Action Section */}
                <div className="w-full mb-12 text-center">
                    <button 
                        onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                        className="group px-6 py-4 bg-[#17A7FF] text-white hover:bg-[#17A7FF]/80 rounded-xl transition-colors text-sm md:text-lg  font-normal flex items-center justify-center gap-2 mx-auto"
                    >
                        Book a call
                        <RiArrowRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>



            </div>
        </section>
    )
} 