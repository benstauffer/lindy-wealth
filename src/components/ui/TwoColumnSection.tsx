'use client'

import React from 'react'

interface TwoColumnSectionProps {
  eyebrow?: string
  title: string
  description: string
  graphic: React.ReactNode
  graphicSide?: 'left' | 'right'
}

export function TwoColumnSection({
  eyebrow,
  title,
  description,
  graphic,
  graphicSide = 'right',
}: TwoColumnSectionProps) {
  const graphicOrder = graphicSide === 'left' ? 'lg:order-first' : 'lg:order-last'

  return (
    <section className="w-full py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-7 gap-16 items-stretch">
        {/* Text Content */}
        <div className="lg:col-span-3 flex flex-col justify-between py-8">
          <div>
            <h2 className="text-4xl sm:text-5xl text-black font-medium -tracking-tight">
              {title}
            </h2>
          </div>
          <div>
            <hr className="border-t-2 border-black my-8" />
            <p className="text-2xl text-neutral-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Graphic Content */}
        <div className={`lg:col-span-4 flex justify-center items-center ${graphicOrder}`}>
          <div className="w-full aspect-square">
            {graphic}
          </div>
        </div>
      </div>
    </section>
  )
} 