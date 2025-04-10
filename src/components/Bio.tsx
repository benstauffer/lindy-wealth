'use client'

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";
// Remove Image import - no longer needed for this card
// import Image from 'next/image'

// Rename function to Bio
export function Bio() {
  return (
    // Adapt card to be the booking link
    <Link 
      href="#help" // Point to booking section/link
      // Remove mb-12, keep card styles
      className="block group hover:bg-neutral-100 transition-colors duration-200 bg-neutral-50 rounded-xl p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4"> {/* Use flex here */}
           <div className="w-12 h-12 rounded-full bg-neutral-200 flex-shrink-0">
             {/* <Image src="/path/to/your/image.jpg" alt="Ben Stauffer" layout="fill" objectFit="cover" className="rounded-full" /> */}
           </div>
          <div>
            <p className="text-base font-medium text-neutral-900">
              Book a call with Ben
            </p>
          </div>
        </div>
        <div>
          <FiArrowRight className="text-lg text-neutral-700 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
