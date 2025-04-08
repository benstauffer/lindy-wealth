'use client'

import Image from 'next/image'
import Link from 'next/link'

export function BioCard() {
  return (
    <div className="lg:sticky lg:top-48">
      {/* Main container - horizontal layout */}
      <div className="flex gap-6">
        {/* Left - Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-3xl bg-neutral-50 relative shadow-inner">
            {/* <Image
              src=""
              alt="Ben Stauffer"
              fill
              className="object-cover bg-[#FB651F]"
              priority
            /> */}
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="flex-grow space-y-4">
          {/* Bio Information */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">I'm Ben Stauffer <span className="text-base text-neutral-500 font-normal">CFP®</span></h2> 
            <p className="text-base text-neutral-700 leading-[1.5] font-['Georgia']">
              I'm a Certified Financial Planner™ helping individuals & families organize their financial lives. I simplify complexity, optimize wealth, and help you achieve your goals.
              <br />
              <br />
              My mission is to help empower you with thoughtful financial planning that helps you live your richest life.
            </p>
          </div>

          {/* Find Me */}
          <div className="space-y-2">
            <h3 className="text-xs font-medium">Socials</h3>
            <div className="flex items-center space-x-3 text-sm">
              <Link href="https://twitter.com" target="_blank" className="hover:text-neutral-700 text-neutral-500 underline">
               Twitter
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-neutral-700 text-neutral-500 underline">
                LinkedIn
              </Link>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-3 text-sm">
              <h3 className="text-sm text-neutral-500">Email me:</h3>
              <Link href="mailto:ben@lindywealth.com" className="hover:text-neutral-700 text-neutral-500 underline">
                ben@lindywealth.com
              </Link>
            </div>
          </div>

          {/* Thinking Image */}
          <div className="hidden md:flex justify-end">
            <div className="w-48 h-48 relative">
              <Image
                src="/images/thinking.png"
                alt="thinking"
                fill
                className=""
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
