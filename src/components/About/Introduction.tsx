import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { PricingTable } from './PricingTable';

// Remove the SVG component
// function LogoSvg() { ... }

export function Introduction() {
  return (
    <div className="md:mt-0">
      <h2 id="intro" className="text-2xl md:text-2xl text-neutral-700 font-['Georgia'] border-neutral-200 mt-8 mb-4">About Lindy Wealth</h2>

      <div className="border rounded-sm p-4 md:p-8 space-y-2 border-neutral-200 mb-4 bg-neutral-50">
        <div className="space-y-1">
          <p className="font-['Georgia'] text-base md:text-lg">
            <span className="inline md:hidden">Lindy</span>
            <span className="hidden md:inline">
              <span className="float-left mt-0 mr-1 hidden md:inline-block deutsche-font text-[5.5rem] leading-[1] -mb-3 text-red-500">
                L
              </span>
              indy {/* Text part for desktop */}
            </span>
            {' '}is heuristic stating that the longer something—an idea, book, or technology—has existed, the longer it is likely to continue existing. In this sense, longevity becomes a signal of robustness, wisdom, and enduring value.
          </p>
          </div>
      </div>
      <p className="text-base leading-relaxed mb-6 text-neutral-700">
        Why Lindy? Because in a world filled with endless information and distractions that leave little room for clarity, meaning, or trust, Lindy ideas offer quiet wisdom to navigate life confidently.
      </p>
      <p className="text-base leading-relaxed mb-6 text-neutral-700">
        Grounded in this heuristic, Lindy Wealth emphasizes robust, enduring financial principles that provide clarity and confidence. Together, we'll focus on what we can control, prepare wisely for what we can't, and create a financial plan tailored to support your long-term goals.

      </p>
      <p className="text-base leading-relaxed mb-2 text-neutral-700">
        We help clients manage wealth through two core services:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-base text-neutral-700">
        <li>Investment Management – A personalized investment strategy carefully aligned with your financial plan, emphasizing cost efficiency, tax optimization, and risk management.</li>
        <li>Financial Planning – Comprehensive financial guidance that includes personalized financial planning, tax planning, insurance planning, and estate planning, serving as the quarterback that seamlessly coordinates and optimizes your financial life.</li>
      </ul>
      <p className="text-base leading-relaxed mb-2 text-neutral-700">
        Pricing:
      </p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2 text-base text-neutral-700">
        <li>Investment management is billed as a percentage of assets.</li>
        <div className="py-1">
        <PricingTable/>
      </div>
        <li>Financial Planning ranges from $5,000 to $20,000 per year, based on complexity.</li>
      </ul>

      <p className="text-base leading-relaxed mb-6 text-neutral-700">
        If you're looking for a calm, clear path forward, it would be an honor to work together.{' '}
        <Link 
          href="/contact"
          className="group inline-flex items-center text-neutral-700 hover:text-neutral-900 hover:underline transition-colors duration-200"
        >
          Get in touch
          <FaArrowRight className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </p>
  
      <p className="text-base leading-relaxed mb-6 text-neutral-700">
        —Ben Stauffer, Founder
      </p>
    </div>
  );
}
