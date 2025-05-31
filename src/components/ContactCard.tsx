'use client'

import Image from 'next/image'
import Link from 'next/link'

export function ContactCard() {
  return (
    <div className="border rounded-2xl border-neutral-200 aspect-square px-10 py-6 flex flex-col items-center text-center justify-between">
      {/* Profile Image */}
      <div className="mt-4 mb-6">
        <Image
          src="/images/ben.png"
          alt="Ben Stauffer"
          width={120}
          height={120}
          className="rounded-full object-cover object-top"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center my-1">
        <p className="text-xl text-neutral-900">Ben Stauffer</p>
        <p className="text-base text-neutral-900">Certified Financial Planner</p>
        <p className="text-base text-neutral-900">Founder | Lindy Wealth, LLC</p>
      </div>

      {/* Contact Links */}
      <div className="mb-4 mt-4 space-y-2">
        {/* Top row: Phone and Email */}
        <div className="flex justify-center gap-2 text-xs">
          <a href="tel:+19163350755" className="group inline-flex items-center px-3 py-1 border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full">
            Phone
          </a>
          <a href="mailto:ben@lindywealth.com" className="group inline-flex items-center px-3 py-1 border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full">
            Email
          </a>
        </div>
        
        {/* Bottom row: Twitter and LinkedIn */}
        <div className="flex justify-center gap-2 text-xs">
          <Link href="https://x.com/_benstauffer" target="_blank" className="group inline-flex items-center px-3 py-1 border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full">
            Twitter
          </Link>
          <Link href="https://www.linkedin.com/in/ben-stauffer/" target="_blank" className="group inline-flex items-center px-3 py-1 border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  )
} 