"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import { BackButton } from "@/components/ui/BackButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1">
        <div className="max-w-lg mx-auto px-4">
          {/* Mission Section */}
          <div className="w-full mt-16">
            <div className="space-y-6 text-left">
              
              <div>
                <p className="text-base leading-relaxed text-black/80">
                Lindy Wealth is a flat-fee financial planning practice focused on tax strategy, fee minimization, and diversified investing.                  </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                  Financial planning doesn't need to be complicated. Too often, the financial services industry creates complexity as a way to justify its existence. Complex products, expensive AUM fees, and active management don't lead to better outcomes.
                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                  Simple works. Boring works.                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                Good financial planning comes down to the fundamentals: get clear on your goals, save consistently, invest in diversified low-cost funds, adjust as tax laws change, protect against major risks, and plan intentionally for retirement and legacy.                   </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                I build plans around your goals, not market predictions. I use simple strategies unless complexity improves after-tax, after-fee results. I provide clear roadmaps, tax-focused planning, and discipline during volatility. Together, we'll review plans periodically and always question complexity.                  </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                  Flat fees + proven tax strategies + custom planning = the Lindy way.
                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80 ">
                  One takeaway: Keep It Simple.
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-black/80 ">
                  - Ben Stauffer, CFP®
                </p>
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-8 justify-start items-start">
              <button
                onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                className="text-black/80 underline hover:text-black/70 transition-colors"
              >
                Book a call
              </button>
              <Link 
                href="/about"
                className="text-black/80 underline hover:text-black/70 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/faq"
                className="text-black/80 underline hover:text-black/70 transition-colors"
              >
                FAQ
              </Link>
              <Link 
                href="/pricing"
                className="text-black/80 underline hover:text-black/70 transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
      <FooterSection />
    </div>
  )
}
