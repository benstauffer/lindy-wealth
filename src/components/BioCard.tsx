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
              className="object-cover bg-neutral-100"
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
            <div className="flex items-center space-x-3">
              <Link href="https://twitter.com" target="_blank" aria-label="X (Twitter)">
                <div className="w-4 h-4 relative">
                  <Image
                    src="/images/logo-black.png"
                    alt="X (Twitter)"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <div className="w-4 h-4 relative">
                  <Image
                    src="/images/InBug-Black.png"
                    alt="LinkedIn"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="https://substack.com" target="_blank" aria-label="Substack">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/images/substack.png"
                    alt="Substack"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
