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
          <div className="w-full ">
            
            {/* Great Advice Image */}
            <div className=" flex justify-center">
              <img 
                src="/images/advice_chart.png" 
                alt="Great Advice" 
                className="w-full h-auto mb-6 max-w-md"
              />
            </div>

            <div className="space-y-6 text-left">

              <div>
                <p className="text-base leading-relaxed text-black/80">
                Lindy Wealth provides comprehensive financial guidance to make your life and your money work better together.
                              </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/80">
                For your life, that means clarity, less complexity, and confidence that your financial decisions support your goals. For your money, that means flat-fee planning, tax-smart strategies, and personalized advice that grows and protects your wealth. Every plan balances both, ensuring your finances are clear and optimized so you can focus on what matters most.                                </p>
              </div>
      
              <div>
                <p className="text-base leading-relaxed text-black/80">
                  Flat fees + proven tax strategies + custom planning = the Lindy way.
                </p>
              </div>

              <div>
                <p className="text-base  text-black/80 ">
                 Ben Stauffer, CFP®
                </p>
                <p className="text-base  text-black/50 ">
                  Owner, Lindy Wealth
                </p>
                <a href="mailto:ben@lindywealth.com" className="text-base underline  text-black/50 hover:text-black/40 transition-colors">
                  ben@lindywealth.com
                </a>
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
