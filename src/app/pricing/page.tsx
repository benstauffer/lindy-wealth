"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1">
        <div className="max-w-lg mx-auto px-4">
          {/* Back Button */}
          <div className="mt-8 mb-8">
            <Link 
              href="/"
              className="text-black underline hover:text-black/70 transition-colors font-medium"
            >
              ← Back
            </Link>
          </div>

          {/* Pricing Content */}
          <div className="space-y-6">
            <h1 className="text-2xl font-medium text-black">Pricing</h1>
            <div className="space-y-6 text-left">
              
              <div>
                <p className="text-base leading-relaxed text-black/80">
                  One-time Plan: starting at $1,000.
                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                  Ongoing Planning: $5,000-$10,000/year.
                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                  I'm flat-fee only. No AUM fees, no commissions, no hidden costs. I'm only paid by you and never by product companies, banks, or insurance companies. This eliminates conflicts of interest and ensures my advice is always in your best interest.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
      <FooterSection />
    </div>
  )
}
