"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import Link from "next/link";

export default function About() {
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
          {/* About Content */}
          <div className="space-y-6">
            <h1 className="text-2xl font-medium text-black">About</h1>
            
            {/* Photo and Introduction */}
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 overflow-hidden flex-shrink-0">
                <img 
                  src="/images/BenHeadshot.png" 
                  alt="Ben Stauffer - Financial Planner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-black/80">
                Hi, I'm Ben. I'm a CFP® running Lindy Wealth - a tax-focused financial planning firm.
              </p>
                <p className="text-base leading-relaxed text-black/80">
              I've worked at several firms serving 100s of clients - retirees, high-earners, HNWs, UHNWs. Now I happily serve my clients at Lindy Wealth.
              </p>
              <p className="text-base leading-relaxed text-black/80">
              I'm from Sacramento, CA, and now live in Los Angeles, CA.
              </p>
              <p className="text-base leading-relaxed text-black/80">
              You can reach me at <a href="mailto:ben@lindywealth.com" className="text-black underline hover:text-black/70 transition-colors font-medium">ben@lindywealth.com</a>.
              </p>
              

            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
      <FooterSection />
    </div>
  )
}
