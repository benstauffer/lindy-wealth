'use client'

import React from 'react'

export function WhoThisIsFor(): React.ReactElement {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-4xl tracking-tight text-black mb-6 md:mb-8 font-medium text-center">Who this is for</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-black/80 text-base md:text-lg">
          <li className="bg-[#F1F0EA] p-4 md:p-6">You’ve got valuable company stock but aren’t sure how or when to turn it into cash.</li>
          <li className="bg-[#F1F0EA] p-4 md:p-6">You want to make smart moves when a sale opportunity comes up, without risking too much in one company.</li>
          <li className="bg-[#F1F0EA] p-4 md:p-6">You’d like a clear, one-time financial plan</li>
          <li className="bg-[#F1F0EA] p-4 md:p-6">You want step-by-step guidance and you don’t want to hand over control of your accounts.</li>
        </ul>
      </div>
    </section>
  )
}

