'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export function Closing() {
  return (
    <div id="closing" className="mb-6 md:mb-8">
      <h2 className="text-2xl md:text-2xl text-neutral-700 font-['Georgia'] mb-6 border-b border-neutral-200 pb-2 mt-20">Working Together</h2>
      
      <div>
        <p className="text-base leading-relaxed mb-6 text-neutral-700">
          I work with a select group of clients who are committed to building long-term wealth through disciplined investing and comprehensive financial planning.
        </p>
        
        <p className="text-base leading-relaxed mb-6 text-neutral-700">
          My approach is collaborative and transparent. We'll work together to understand your goals, develop a tailored strategy, and implement it with precision and care.
        </p>

        <p className="text-base leading-relaxed mb-6 text-neutral-700">
          If you're ready to take the next step in your financial journey, let's connect and explore how we can work together.
        </p>

        <p className="text-base leading-relaxed mb-6 text-neutral-700">
            - Ben Stauffer
            <br />
            Founder, Lindy Wealth
        </p>

      </div>

      <Link 
        href="/contact"
        className="group inline-flex items-center text-sm font-medium shadow-inner text-white border bg-red-500 border-red-700 hover:bg-red-600 hover:border-red-800 rounded-lg transition-colors duration-200 px-4 py-2 mt-6"
      >
        Book a call 
        <FaArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
