'use client'

import Image from 'next/image'
import { FiArrowRight } from "react-icons/fi"
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-start">
      <div className="w-full space-y-6 relative">
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
        <div className="w-full space-y-2">
          <div className="space-y-6">
            <h1 className="block text-4xl sm:text-5xl text-left">
              <div className="leading-[1] text-neutral-700">
                <span className="text-neutral-900 italic font-[300] font-['Georgia'] tracking-tight">Less guesswork, </span>
                <br />
                <span className="font-[200] tracking-tight">more peace of mind.</span>
              </div>
            </h1>

            <div className="w-full h-[290px]">
              <Image 
                src="/images/map.png" 
                alt="Lindy Wealth" 
                width={1200}
                height={600}
                className="left-0 h-full object-contain object-left"
                priority
              />
            </div>

            <p className="text-[17.5px] text-neutral-700 leading-[1.5]">
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
              className="group inline-flex items-center px-4 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors duration-200"
              href="#help"
            >
            
              Book a call with Ben
              <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Added Links Section */}
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center px-4 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors duration-200">
                About
              </Link>
              <Link href="/services" className="inline-flex items-center px-4 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors duration-200">
                Services
              </Link>
              <Link href="https://blog.lindywealth.com" className="inline-flex items-center px-4 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors duration-200">
                Blog
              </Link>
              <Link href="/faq" className="inline-flex items-center px-4 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors duration-200">
                FAQ
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
} 