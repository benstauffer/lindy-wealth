"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import { HiOutlineExternalLink } from "react-icons/hi";
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
                Keep it simple. Your life is complex enough.                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                The financial services industry often adds layers of complexity through high fees, products, and market predictions to justify its existence. But complexity doesn't mean better results.                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                Good planning is built on fundamentals, not complexity. The principles are straightforward:
                <br />
                - Define your goals
                <br />
                - Save consistently
                <br />
                - Invest in low-cost, diversified funds
                <br />
                - Adapt as tax laws change
                <br />
                - Protect against major risks
                <br />
                - Plan for retirement and legacy
                <br />
                                 </p>

              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                At Lindy Wealth, I provide flat-fee financial planning that focuses on tax-smart strategies, diversified investing, and thoughtful, goal-driven planning. I partner with clients to bring clarity, simplify decisions, and build a roadmap that helps them reach their financial objectives while avoiding unnecessary complexity and high fees.
                </p>
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
                <p className="text-base  text-black/80 ">
                  - Ben Stauffer, CFP®
                </p>
                <p className="text-base  text-black/50 ">
                  Owner, Lindy Wealth
                </p>
                <a href="mailto:ben@lindywealth.com" className="text-base underline  text-black/50 hover:text-black/40 transition-colors">
                  ben@lindywealth.com
                </a>
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-12 flex flex-col md:flex-row gap-3 md:gap-8 justify-start items-start">
              <button
                onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
                className="text-black/80 underline hover:text-black/60 transition-colors flex items-center gap-1"
              >
                Book a call
                <HiOutlineExternalLink className="w-4 h-4" />
              </button>
              <Link 
                href="/about"
                className="text-black/80 underline hover:text-black/60 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/faq"
                className="text-black/80 underline hover:text-black/60 transition-colors"
              >
                FAQ
              </Link>
              <Link 
                href="/pricing"
                className="text-black/80 underline hover:text-black/60 transition-colors"
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
