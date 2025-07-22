'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { RiArrowRightLine } from 'react-icons/ri'
import { ServiceGraphic } from './ServiceGraphic'

export function HeroIntroSection() {

    const handleFreeAssessment = () => {
      const processSection = document.querySelector('[data-section="process"]')
      if (processSection) {
        processSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return (
        <section className="relative">
            {/* Content container that respects layout constraints */}
            <div className="relative z-10 flex flex-col items-start justify-start pt-32  max-w-5xl mx-auto ">
                {/* Main Hero Headline */}
                <div className="w-full mb-4">
                    <motion.h1
                        className="text-4xl md:text-6xl leading-tight text-black font-medium max-w-3xl"
                        style={{ lineHeight: '1' }}
                    >
                        Plan smarter, <br />
                        live better.
                    </motion.h1>
                </div>
                <div className="w-full mb-8">
                    <motion.h1
                        className="text-xl leading-tight text-neutral-600 max-w-xl"
                    >
                        Financial planning that helps you <br />
                        get the most out of life with your money.
                    </motion.h1>
                </div>

                                {/* Left-aligned Description */}
                <div className="w-full mb-12">
                    <div className="max-w-2xl">
                        {/* Description Text */}

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button 
                                onClick={() => {}}
                                className="group px-4 py-3 bg-[#17A7FF] rounded-xl text-white hover:bg-[#17A7FF]/80 transition-colors text-base font-medium flex items-center justify-center gap-3"
                            >
                                See if you're a fit
                            </button>
                            <button 
                                onClick={handleFreeAssessment}
                                className="group px-4 py-3 shadow-sm rounded-xl text-neutral-500 hover:text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors text-base font-medium flex items-center justify-center gap-1"
                            >
                                Free Assessment
                                <RiArrowRightLine className="text-xl transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>


                {/* Financial Planning Graphic */}
                <div className="w-full mb-12">
                    <ServiceGraphic />
                </div>

                {/* Main Content Block */}
                <div className="w-full mb-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl md:text-5xl text-black font-['Georgia']"> 
                            👋 Hey there
                        </h1>
                        
                        <div className="text-xl text-black/80 max-w-2xl">
                            <p>
                                If you're reading this, you're probably looking to make some changes. And whether you've built $2M or $20M, you're not looking for more noise or complexity.
                                <br />
                                <br />
                                You want clarity, confidence, and a trusted partner to help you make smart decisions. But too much of the financial industry is focused on selling products instead of solving problems.
                                <br />
                                <br />
                                That's why I started Lindy Wealth. I set out to build something useful, thoughtful, and honest for people who believe their goals should be at the center of the conversation.
                                <br />
                                <br />
                                I help successful individuals cut through complexity, make smart decisions, and align their money with what actually matters.
                                <br />
                                <br />
                                I have three simple goals:
                                <br />
                                1. Help you achieve your financial objectives
                                <br />
                                2. Bring you peace of mind
                                <br />
                                3. Leave you happy about our partnership
                                <br />
                                <br />
                                If you're ready to make a change, I'd be happy to help.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="pt-6">
                            <p className="text-4xl font-handwritten text-black mb-2 transform -rotate-1">
                                Ben Stauffer
                            </p>
                            <p className="text-lg text-black/60">
                                CFP®, Founder, Lindy Wealth
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
} 