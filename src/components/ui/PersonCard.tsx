"use client";

import React from 'react';
import Link from 'next/link';

interface PersonCardProps {
  name: string;
  role: string;
  description: string;
  linkedinUrl?: string;
  className?: string;
}

export function PersonCard({
  name,
  role,
  description,
  linkedinUrl,
  className = ""
}: PersonCardProps) {
  return (
    <div className={`bg-[#f5efe9] rounded-2xl p-5 sm:p-7 h-full flex flex-col ${className}`}>
      {/* Tag/Badge */}
      <div className="mb-4 sm:mb-5">
        <span className="bg-[#d6ceff] rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm uppercase tracking-wide font-medium text-black">
          {role}
        </span>
      </div>
      
      {/* Name */}
      <h3 className="text-[#3a2f2d] text-xl sm:text-2xl font-normal mb-3 sm:mb-4">
        {name}
      </h3>
      
      {/* Description */}
      <p className="text-[#5c504c] text-sm sm:text-base mb-6">
        {description}
      </p>
      
      {/* LinkedIn button */}
      {linkedinUrl && (
        <div className="mt-auto">
          <Link 
            href={linkedinUrl}
            className="inline-flex items-center justify-center border border-[#3a2f2d] rounded-full px-6 sm:px-7 py-2 text-sm text-[#3a2f2d] hover:bg-[#3a2f2d] hover:text-white transition-colors"
          >
            LINKEDIN
          </Link>
        </div>
      )}
    </div>
  );
} 