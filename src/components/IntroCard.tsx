'use client'

import Image from 'next/image'
import Link from 'next/link'

export function IntroCard() {
  return (
    <div className="p-6 flex flex-col items-center space-y-4">
      {/* Profile Image */}
      <div className="mr-6">
        <Image
          src="/images/ben.png"
          alt="Ben Stauffer"
          width={100}
          height={100}
          className="rounded-full object-cover object-top"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h2 className="text-neutral-900 suisse-font text-4xl">Hey, I'm Ben 👋</h2>
      </div>
    </div>
  )
} 