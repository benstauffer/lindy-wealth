'use client'

import Image from 'next/image'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowUpRight } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-start">
      <div className="w-full space-y-12 relative"> 
        {/* Decorative Image */}
        <div className="absolute -right-32 top-[375px] hidden xl:block">
          <Image
            src="/images/happy.png"
            alt="Happy people with a plan"
            width={100}
            height={100}
            className="opacity-90"
          />
        </div>

        {/* Hero Text */}
        <div className="w-full space-y-8">
          <div className="space-y-6">
            <h1 className="block text-3xl sm:text-5xl text-left font-['Georgia']">
              <div className="leading-[1.1]">
                Financial advice & planning to reach your goals with <span className="text-red-500 font-medium">confidence.</span>
              </div>
              
            </h1>

            <p className="text-[17px] text-neutral-700 leading-[1.5]">
              Lindy Wealth helps forward-looking individuals and families with their financial lives so they can keep more of their wealth and focus on what matters most. <span className="">Less guesswork, more peace of mind.</span>
            </p>

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

            <div className="flex items-center space-x-4">
              <a 
                className="group inline-flex items-center px-4 py-2 text-base font-medium shadow-inner text-white border bg-red-500 border-red-700 hover:bg-red-600 hover:border-red-800 rounded-lg transition-colors duration-200"
                href="#help"
              >
                Get started
                <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 