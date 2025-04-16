'use client'

import Image from 'next/image'

export function ProfileIntro() {
  return (
    <div className="flex flex-col items-center mb-4">
      {/* Profile Image */}
      <div className="">
        <Image
          src="/images/ben.png"
          alt="Ben Stauffer"
          width={100}
          height={100}
          className="rounded-full object-cover object-top"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col mt-6">
        <h2 className="text-neutral-900 suisse-font text-3xl">Ben Stauffer, CFP®</h2>
      </div>
    </div>
  )
} 