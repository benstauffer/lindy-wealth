import { WealthTable } from "./WealthTable";
import { Principals } from "./Principals";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

// Remove the SVG component
// function LogoSvg() { ... }

export function Introduction() {

  return (
    <div className="mt-8 md:mt-0">
      <h2 id="intro" className="text-2xl md:text-2xl  text-neutral-700 font-['Georgia'] mb-6 border-neutral-200 pb-2 mt-20">About Lindy Wealth</h2>

      <div className="border-2 rounded-sm p-4 md:p-8 space-y-2 shadow-inner border-red-500 mb-6">
        <div className="space-y-1">
          <p className="font-['Georgia'] text-base md:text-lg">
            <span className="inline md:hidden">Lindy</span>
            <span className="hidden md:inline">
              {/* Use the direct @font-face CSS class */}
              {/* Try negative bottom margin to pull text up */}
              <span className="float-left mt-0 mr-1 hidden md:inline-block deutsche-font text-[5.5rem] leading-[1] -mb-3 text-red-500">
                L
              </span>
              indy {/* Text part for desktop */}
            </span>
            {' '}is heuristic stating that the longer something—an idea, book, or technology—has existed, the longer it is likely to continue existing. In this sense, longevity becomes a signal of robustness, wisdom, and enduring value.
          </p>
          </div>

      </div>

      <p className="text-base leading-relaxed mb-6  text-neutral-700">
        Grounded in this idea, Lindy Wealth emphasizes timeless financial principles. In a world that's loud, fast, and flooded with information, we offer a steady alternative. Together, we'll focus on what we can control, prepare wisely for what we can't, and build a financial plan designed to support your goals.
      </p>
      <p className="text-base leading-relaxed mb-6  text-neutral-700">
        We help individuals and families build long-term wealth through two core services:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-base  text-neutral-700">
        <li><span className="font-semibold">Investment Management</span> – low-cost, globally diversified portfolios with tax-efficient strategies.</li>
        <li><span className="font-semibold">Financial Planning</span> – comprehensive planning across taxes, estate, insurance, and more.</li>
      </ul>
      <p className="text-base leading-relaxed mb-6  text-neutral-700">
        Pricing is straightforward:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-base text-neutral-700">
        <li>Investment management is billed as a percentage of assets.</li>
        <li>Planning ranges from $5,000 to $20,000 per year, based on complexity.</li>
      </ul>
      <p className="text-base leading-relaxed mb-6 text-neutral-700">
        We work with a small group of clients who value clarity, discipline, and long-term thinking. If that sounds like you, let's talk.
      </p>
  
      <p className="text-base leading-relaxed mb-6  text-neutral-700">
        —Ben Stauffer, Founder
      </p>

      <div className="mt-8">
        <Link 
          href="/contact"
          className="group inline-flex items-center text-sm font-medium shadow-inner text-white border bg-red-500 border-red-700 hover:bg-red-600 hover:border-red-800 rounded-lg transition-colors duration-200 px-4 py-2"
        >
          Book a call 
          <FaArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

    </div>


  );
}
