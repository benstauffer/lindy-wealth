'use client'

import React from 'react'
import Image from 'next/image'

export function AboutContent() {
  return (
    <>
      {/* Main content container */}
      <div 
        id="main-content-that-scrolls"
        className="w-full relative z-10"
      >
        {/* Title Section */}
        <section className="bg-white py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-black font-medium leading-tight mb-16">
              Hi, I'm Ben. I help families optimize their finances through tax-focused planning and investment management.
            </h1>
          </div>
        </section>
        
        {/* Image Overlay - positioned between sections */}
        <div className="relative z-20 flex justify-center" style={{ marginTop: '-112px', marginBottom: '-112px' }}>
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-black">
            <Image
              src="/images/BenHeadshot.png"
              alt="Ben Stauffer"
              width={224}
              height={224}
              className="w-full h-full object-cover object-left"
              priority
            />
          </div>
        </div>
        
        {/* Bottom Text Section */}
        <section className="bg-[#F1F0EA] pt-40 pb-16">
          <div className="max-w-lg mx-auto px-4">
            <div className="text-left">
                <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8">
                Over the years, I've had the opportunity to help hundreds of clients—from high earners and retirees to business owners and ultra-high-net-worth families.
                </p>
                <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8">
                These experiences have given me a deep understanding of wealth management, retirement planning, and investment strategy. I bring that expertise to every client relationship, helping you make confident, well-informed financial decisions.
                </p>
                <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8">
                Whether you're planning for early retirement or simply want to make smarter financial decisions, I'm here to help you navigate your financial journey with expert advice and a personalized approach.
              </p>
              <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8">
              I don't promise to beat the market or sell flashy strategies. I help people get clear on what they want, then build tax smart strategies that help secure their financial future.
              </p>
              

                


            </div>
          </div>
        </section>
        
      </div>
      
    </>
  )
} 
