'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export function Closing() {
  return (
    <div id="closing" className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#FB651F]">Working Together</h2>
      
      <div className="space-y-4 text-neutral-600">
        <p>
          I work with a select group of clients who are committed to building long-term wealth through disciplined investing and comprehensive financial planning.
        </p>
        
        <p>
          My approach is collaborative and transparent. We'll work together to understand your goals, develop a tailored strategy, and implement it with precision and care.
        </p>

        <p>
          If you're ready to take the next step in your financial journey, let's connect and explore how we can work together.
        </p>
      </div>

      <Link 
        href="/contact"
        className="group inline-flex items-center mt-6 text-[#FB651F] hover:text-[#FB651F] font-medium"
      >
        Book a call 
        <FaArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
