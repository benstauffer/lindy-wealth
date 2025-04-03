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
          <div className="w-24 h-24 rounded-3xl overflow-hidden bg-neutral-100 relative">
            <Image
              src="/images/ben.png"
              alt="Ben Stauffer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="flex-grow space-y-4">
          {/* Bio Information */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium">I'm Ben Stauffer <span className="text-sm text-neutral-500">CFP®</span></h2>
            <p className="text-base text-neutral-600">
              I'm a Certified Financial Planner™ helping individuals & families organize their financial lives. I simplify complexity, optimize wealth, and help you achieve your goals.
              <br />
              <br />
              My mission is to help empower you with thoughtful financial planning that aligns your personal values with strategic wealth optimization.
            </p>
          </div>

          {/* Find Me */}
          <div className="space-y-2">
            <h3 className="text-xs font-medium">Find Me</h3>
            <div className="flex space-x-3">
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
