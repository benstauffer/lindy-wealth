'use client'

import Image from 'next/image'
import Link from 'next/link'

export function ContactCard() {
  return (
    <div className="bg-neutral-50 rounded-xl p-4 flex items-center justify-between space-x-4">
      {/* Left: Image */}
      <div className="flex-shrink-0">
        <Image
          src="/images/ben.png"
          alt="Ben Stauffer"
          width={72}
          height={72}
          className="w-[72px] h-[72px] rounded-lg object-cover object-top"
        />
      </div>

      {/* Middle: Text */}
      <div className="flex-grow">
        <p className="text-base font-medium text-neutral-900">Ben Stauffer</p>
        <p className="text-sm text-neutral-600">CFP®</p>
      </div>

      {/* Right: Links */}
      <div className="flex-shrink-0">
        <div className="flex items-center space-x-3 text-xs">
          <a href="tel:+19163350755" className="hover:text-neutral-700 text-neutral-500 hover:underline">
            Phone
          </a>
          <a href="mailto:ben@lindywealth.com" className="hover:text-neutral-700 text-neutral-500 hover:underline">
            Email
          </a>
          <Link href="https://twitter.com" target="_blank" className="hover:text-neutral-700 text-neutral-500 hover:underline">
            Twitter
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-neutral-700 text-neutral-500 hover:underline">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  )
} 