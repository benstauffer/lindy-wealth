'use client'

import Image from 'next/image'
import { FiArrowRight } from "react-icons/fi"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-start">
      <div className="w-full space-y-12 relative"> 
        {/* Decorative Image */}
        {/*<div className="absolute -right-32 top-[375px] hidden xl:block">
          <Image
            src="/images/happy.png"
            alt="Happy people with a plan"
            width={100}
            height={100}
            className="opacity-90"
          />
        </div>*/}

        {/* Hero Text */}
        <div className="w-full space-y-8">
          <div className="space-y-6">
            <h1 className="block text-4xl sm:text-5xl text-left">
              <div className="leading-[1] text-neutral-700">
                <span className="text-neutral-900 italic font-[300] font-['Georgia'] tracking-tight">Less guesswork, </span>
                <br />
                <span className="font-[200] tracking-tight">more peace of mind.</span>
              </div>
            </h1>

            <div className="w-full h-[250px] border border-neutral-200">
              <Image 
                src="/images/drinks.png" 
                alt="Lindy Wealth" 
                width={1200}
                height={475}
                className="w-full h-full object-cover object-center rounded-xl"
                priority
              />
            </div>

            <p className="text-[17.5px] text-neutral-900 leading-[1.5]">
              Lindy Wealth helps forward-looking individuals and families with their financial lives so they can keep more of their wealth and focus on what matters most.
            </p>

            <div className="mt-6 space-y-2 text-base text-neutral-700">
              <p>Lindy Wealth has two goals:</p>
              <ul className="space-y-1"> 
                <li className="flex items-baseline space-x-3">
                  <span className="text-[#9CBE8E] pl-2">→</span>
                  <span className="flex-1">
                    Create a financial plan that helps achieve your goals and brings clarity and peace of mind.
                  </span>
                </li>
                <li className="flex items-baseline space-x-3">
                  <span className="text-[#9CBE8E] pl-2">→</span>
                  <span className="flex-1">
                    Build an investment strategy that aligns with your financial plan and emphasizes tax efficiency, fees, and diversification.
                  </span>
                </li>
              </ul>
            </div>

            <a 
              className="group inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors duration-200"
              href="#help"
            >
              {/* Image Placeholder */}
              <div className="w-10 h-10 rounded-full bg-neutral-300 mr-4">
                {/* Replace with <Image> when path is known */}
              </div>
              Book a call with Ben
              <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 