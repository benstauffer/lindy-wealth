'use client'

import React from 'react'

export function AboutHeroSection() {
  return (
    <section className="w-full">
      <div className="pt-48 flex flex-col py-20 max-w-5xl mx-auto justify-start px-6">
        <div className="w-full">
          
          {/* Left-Right Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            

            {/* Right 2/3 - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl text-black font-['Georgia']"> 
                👋 Hey there
              </h1>
              
              <div className="text-2xl text-black/80 leading-relaxed">
                <p>
                  If you're reading this, you're probably looking to make some changes. And whether you've built $2M or $20M, you're not looking for more noise or complexity.
                  <br />
                  <br />
                  You want clarity, confidence, and a trusted partner to help you make smart decisions. But too much of the financial industry is focused on selling products instead of solving problems.
                  <br />
                  <br />
                  That's why I started Lindy Wealth. I set out to build something useful, thoughtful, and honest for people who believe their goals should be at the center.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 