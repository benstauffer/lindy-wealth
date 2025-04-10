import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

// Simple component rendering a card based on the image provided
export function FAQ() {
  return (
    <Link href="/faq" className="block group hover:bg-neutral-100 transition-colors duration-200 bg-neutral-50 rounded-xl py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Left side text content */}
        <div>
          <p className="text-base font-medium text-neutral-900">
            FAQ
          </p>
          <p className="text-sm text-neutral-500">
            Review frequently asked questions
          </p>
        </div>

        {/* Right side arrow icon */}
        <div>
          <FiArrowRight className="text-lg text-neutral-700 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
