'use client'

import React from 'react'
import { CardWrapper } from '../ui/CardWrapper'
import { ProcessCard } from '../InteractiveCards/HeroCards/Process'
import { AboutCard } from '../InteractiveCards/HeroCards/About'
import { VideoCard } from '../InteractiveCards/HeroCards/VideoCard'
import { BookCard } from '../InteractiveCards/HeroCards/Book'
import { QuotesCard } from '../InteractiveCards/HeroCards/Quotes'

interface VideoCtaSectionProps {
  isDarkMode?: boolean
}

export function VideoCtaSection({ isDarkMode }: VideoCtaSectionProps) {
  return (
    <section className="w-full relative py-16 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Desktop Layout - 7 columns x 3 rows */}
        <div className="hidden md:block">
          <div className="grid grid-cols-7 grid-rows-3 gap-6 w-full max-w-none">
            
            {/* Left Medium Card - Abstract Art (2x2) - columns 1-2, rows 1-2 */}
            <QuotesCard />

            {/* Left Small Card - Dropbox (1x1) - column 2, row 3 */}
            <AboutCard />

            {/* Middle Large Card - Video (3x3) - columns 3-5, rows 1-3 */}
            <VideoCard />

            {/* Right Small Card - Get Started (1x1) - column 6, row 1 */}
            <BookCard />

            {/* Right Medium Card - Description (2x2) - columns 6-7, rows 2-3 */}
            <ProcessCard />
          </div>
        </div>

        {/* Tablet Layout - 5 columns x 3 rows */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-5 grid-rows-3 gap-4 aspect-[5/3] max-w-4xl mx-auto">
            {/* Medium Square (2x2) - left */}
            <CardWrapper className="col-start-1 col-span-2 row-start-1 row-span-2 aspect-square" innerClassName="h-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 via-purple-200 to-yellow-200" padding="none">
              <h3 className="text-base font-medium text-neutral-800 text-center mb-2">Creative</h3>
              <p className="text-neutral-600 text-xs text-center">Design solutions</p>
            </CardWrapper>

            {/* Large Square (3x3) - center */}
            <CardWrapper className="col-start-2 col-span-3 row-start-1 row-span-3 aspect-square" innerClassName="h-full flex flex-col justify-center" padding="lg">
              <h1 className="text-2xl font-light text-neutral-400 mb-4">Enduring Brands</h1>
              <p className="text-base text-neutral-600 leading-relaxed mb-4">
                We deepen your audience connections, spark innovation, and support growth into new areas.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-neutral-500 text-sm">Trusted by leaders</span>
              </div>
            </CardWrapper>

            {/* Small Square (1x1) - bottom left */}
            <CardWrapper className="col-start-1 col-span-1 row-start-3 row-span-1 aspect-square" innerClassName="h-full bg-gradient-to-br from-yellow-100 to-pink-100 flex items-center justify-center" padding="none">
              <span className="text-xs font-medium text-neutral-700">Touch</span>
            </CardWrapper>

            {/* Small Square (1x1) - top right */}
            <CardWrapper className="col-start-5 col-span-1 row-start-1 row-span-1 aspect-square" innerClassName="h-full bg-gradient-to-br from-green-200 to-teal-200 flex items-center justify-center" padding="none">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-teal-600" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </CardWrapper>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden space-y-4">
          {/* Large Square (3x3) - Full width but maintaining square aspect */}
          <CardWrapper className="aspect-square" innerClassName="h-full flex flex-col justify-center" padding="lg">
            <h1 className="text-2xl font-light text-neutral-400 mb-4">Enduring Brands</h1>
            <p className="text-base text-neutral-600 leading-relaxed mb-4">
              We deepen your audience connections, spark innovation, and support growth into new areas.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-neutral-500 text-sm">Trusted by leaders</span>
            </div>
          </CardWrapper>

          {/* Grid of smaller squares */}
          <div className="grid grid-cols-3 gap-4">
            {/* Medium Square (2x2) */}
            <div className="col-span-2 row-span-2 aspect-square relative">
              <div className="absolute -inset-1.5 bg-neutral-50 rounded-[34px] border border-neutral-100 shadow-[0_4px_8px_0_rgb(0_0_0_/_0.1)]"></div>
              <div className="relative bg-white rounded-[30px] p-4 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-base font-medium text-neutral-800 mb-2">Creative Design</h3>
                <p className="text-neutral-600 text-sm">Innovative solutions</p>
              </div>
            </div>

            {/* Small Square (1x1) */}
            <div className="aspect-square relative">
              <div className="absolute -inset-1.5 bg-neutral-50 rounded-[34px] border border-neutral-100 shadow-[0_4px_8px_0_rgb(0_0_0_/_0.1)]"></div>
              <div className="relative bg-gradient-to-br from-yellow-100 to-pink-100 rounded-[30px] p-3 shadow-sm h-full flex items-center justify-center">
                <span className="text-xs font-medium text-neutral-700 text-center">Get in touch</span>
              </div>
            </div>

            {/* Small Square (1x1) */}
            <div className="aspect-square relative">
              <div className="absolute -inset-1.5 bg-neutral-50 rounded-[34px] border border-neutral-100 shadow-[0_4px_8px_0_rgb(0_0_0_/_0.1)]"></div>
              <div className="relative bg-gradient-to-br from-green-200 to-teal-200 rounded-[30px] p-3 shadow-sm h-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-teal-600" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Medium Square (2x2) */}
            <div className="col-span-2 aspect-square relative">
              <div className="absolute -inset-1.5 bg-neutral-50 rounded-[34px] border border-neutral-100 shadow-[0_4px_8px_0_rgb(0_0_0_/_0.1)]"></div>
              <div className="relative bg-white rounded-[30px] p-4 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-neutral-800 mb-2">Testimonial</h3>
                  <p className="text-neutral-600 text-xs leading-relaxed">"Creative horsepower and execution."</p>
                </div>
                <div className="border-t border-neutral-200 pt-2">
                  <p className="text-xs font-medium text-neutral-800">Max Marchione</p>
                  <p className="text-xs text-neutral-500">Superpower</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
} 