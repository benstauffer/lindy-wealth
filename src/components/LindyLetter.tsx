import React from 'react';
import Image from 'next/image';

export function LindyLetter() {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-12">
        <Image 
          src="/images/arrow.png" 
          alt="Arrow pointing to Lindy Letter content" 
          width={80}
          height={120}
          className="opacity-80"
        />
      </div>
      <div className="flex flex-col items-start text-neutral-900 space-y-1 max-w-[300px]">
        <span className="text-2xl leading-tight suisse-font">
          Join the Lindy Letter
        </span>
        <span className="text-base leading-tight suisse-font mb-2">
          A newsletter for entrepreneurs -
          <br />
          tips, strategies, and resources for your wealth
        </span>
      </div>
    </div>
  );
}
