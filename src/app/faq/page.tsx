"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import { BackButton } from "@/components/ui/BackButton";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1">
        <div className="max-w-lg mx-auto px-4">
          {/* Back Button */}
          <div className="mt-8 mb-8">
            <BackButton href="/" />
          </div>

          {/* FAQ Content */}
          <div className="space-y-6">
            <h1 className="text-2xl font-medium text-black">FAQ</h1>
            <div className="space-y-8">
              
              <div>
                <p className="text-black font-medium mb-2">
                  <span className="text-black/60 mr-2">&gt;</span>
                  What services do you offer?
                </p>
                <p className="text-black/80 text-base ml-4">
                  I offer comprehensive financial planning. That includes:
                </p>
                <ul className="text-black/80 text-base ml-8 mt-2 ">
                  <li>&gt; Investment management</li>
                  <li>&gt; Retirement planning</li>
                  <li>&gt; Tax strategy</li>
                  <li>&gt; Estate planning</li>
                  <li>&gt; Insurance reviews</li>
                  <li>&gt; Cash flow planning</li>
                  <li>&gt; Ongoing financial advice</li>
                </ul>
                <p className="text-black/80 text-base ml-4 mt-2">
                  And everything else you need to feel confident about your financial future.
                </p>
              </div>

              <div>
                <p className="text-black font-medium mb-2">
                  <span className="text-black/60 mr-2">&gt;</span>
                  How do you get paid?
                </p>
                <p className="text-black/80 text-base ml-4">
                  I'm flat-fee only. No AUM fees, no commissions, no hidden costs. I'm only paid by you and never by product companies, banks, or insurance companies. This eliminates conflicts of interest and ensures my advice is always in your best interest.
                </p>
                <p className="text-black/80 text-base ml-4 mt-2">
                  Pricing:<br />
                  One-time Plan: $8,000.<br />
                  Ongoing Planning: $10,000/year.
                </p>
              </div>

              <div>
                <p className="text-black font-medium mb-2">
                  <span className="text-black/60 mr-2">&gt;</span>
                  How can I contact you?
                </p>
                <p className="text-black/80 text-base ml-4">
                  Email: <a href="mailto:ben@lindywealth.com" className="text-black underline hover:text-black/70 transition-colors">ben@lindywealth.com</a>
                </p>
              </div>

              <div>
                <p className="text-black font-medium mb-2">
                  <span className="text-black/60 mr-2">&gt;</span>
                  Are you a CFP®?
                </p>
                <p className="text-black/80 text-base ml-4">
                  Yes, I'm a Certified Financial Planner® Professional. As a CFP®, I'm held to the highest standards of ethics, education, and competency in financial planning.
                </p>
              </div>

              <div>
                <p className="text-black font-medium mb-2">
                  <span className="text-black/60 mr-2">&gt;</span>
                  Where will my money be held?
                </p>
                <p className="text-black/80 text-base ml-4">
                  Your money is held at Charles Schwab. The accounts are in your name, and Lindy Wealth acts as your advisor to manage them on your behalf. We don't work for Schwab or earn commissions, so every recommendation we make is in your best interest.
                </p>
              </div>

              <div>
                <p className="text-black font-medium mb-2">
                  <span className="text-black/60 mr-2">&gt;</span>
                  What's your approach?
                </p>
                <p className="text-black/80 text-base ml-4">
                  I built this firm to deliver tangible results without unnecessary complexity. We focus on building the right structure around your finances, optimizing for taxes, and creating a smart portfolio strategy that's durable, flexible, and clear.
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
