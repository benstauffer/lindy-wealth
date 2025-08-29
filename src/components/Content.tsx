'use client'

import React, { useState } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import Link from 'next/link'

export function Content() {
  const bgClass = "bg-gradient-to-b from-white from-0% via-gray-50 via-15% to-white to-25%"
  const textClass = "text-black"
  const textMutedClass = "text-black/70"
  const textMutedClass2 = "text-black/50"

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {/* Header */}
      <div className="w-full flex items-center justify-between py-6 px-4 max-w-xl mx-auto">
        <div className={`font-medium text-lg ${textClass}`}>
          Lindy Wealth
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
            className="underline transition-colors font-medium text-black hover:text-black/70"
          >
            Book a call
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full mt-16">
        <div className="max-w-xl mx-auto px-4">
          
          {/* Title */}
          <div className="mb-2">
            <h2 className={`text-left text-2xl md:text-3xl mb-4 font-medium ${textClass}`}>
              Keep it simple.
              <br />
              Keep it smart.
            </h2>
          </div>

          {/* Financial Planning Philosophy Content */}
          <div className="mb-12">
            <div className={`w-full text-left leading-tight ${textMutedClass}`}>
              <p className="text-base mb-3">
                This should be your financial planning philosophy.
              </p>
                <p className="text-base mb-3">
                Financial planning has become unnecessarily complicated. Much of the complexity has been created by advisors, fintech companies, and the wealth management industry to justify their existence.
              </p>
              <p className="text-base mb-3">
                Most people's financial lives can be addressed with straightforward strategies: save consistently, invest in low-cost diversified funds, optimize taxes, protect against major risks, have a clear retirement plan, and handle estate matters.
              </p>
              <p className="text-base mb-3">
                Instead, advisors recommend complex products, charge expensive AUM fees, and pitch that their sophisticated approach will deliver better outcomes.
              </p>
              <p className="text-base mb-3">
                And guess what? They don't. Over and over again. Why?
              </p>
              <p className="text-base mb-3">
                Because high fees and overcomplicated strategies aren't a winning formula.
              </p>
              <p className="text-base mb-3">
                The truth is that simple works. Boring works.
              </p>
              <p className="text-base mb-3">
                Your financial planning philosophy should look like this:
              </p>
              <p className="text-base mb-4">
                1. Build a plan based on your actual goals, not market predictions.
              </p>
              <p className="text-base mb-3">
                2. Stick to simple strategies unless there's compelling evidence something complex will deliver better after-tax, after-fee results.
              </p>
              <p className="text-base mb-3">
                3. Review your plan periodically, not constantly, and question whether complexity is adding value.
              </p>
              <p className="text-base mb-3">
                Financial planning should be simple. Human behavior is typically the problem, not the lack of sophisticated strategies.
              </p>
              <p className="text-base mb-3">
                My goal as a financial planner is to help with what I believe moves the needle:
              </p>
                <p className="text-base mb-3">
                1. Clear roadmap to your financial goals.
              </p>
              <p className="text-base mb-3">
                2. Smart tax planning and education as laws change.
              </p>
              <p className="text-base mb-3">
                3. Keeping you disciplined when markets get volatile.
              </p>
              <p className="text-base mb-3">
                4. Simple strategies that actually work.
              </p>
              <p className="text-base mb-3">
                The increasingly noisy financial media makes us think we need something more complex. We don't.
              </p>
              <p className="text-base mb-3">
                The formula for better financial outcomes = flat fees + proven tax-effective strategies + comprehensive custom planning.
              </p>
              <p className="text-base">
                If you take away one thing: Keep It Simple.
              </p>
            </div>
          </div>

          {/* Signature section */}
          <div className="max-w-xl mx-auto text-left">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src="/images/BenHeadshot.png" 
                  alt="Ben Stauffer - Financial Planner" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className={`text-lg  font-medium mb-1 ${textClass}`}>Ben Stauffer, CFP®</p>
                <p className={`text-base  leading-tight tracking-tight ${textMutedClass}`}>Financial Planner <br />Owner of Lindy Wealth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 ">
        <div className="max-w-xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="mb-4">
            <h3 className={`text-2xl md:text-3xl font-medium ${textClass}`}>FAQ</h3>
          </div>

          {/* FAQ Items */}
          <div className="space-y-8">
            
            <div>
              <p className={`text-lg font-medium mb-2 ${textClass}`}>
                <span className={`mr-2 ${textMutedClass2}`}>&gt;</span>
                What services do you offer?
              </p>
              <p className={`text-sm ml-4 ${textMutedClass}`}>
                I offer comprehensive financial planning. That includes:
              </p>
              <ul className={`text-sm ml-8 ${textMutedClass} list-disc space-y-1 mt-2`}>
                <li>Investment management</li>
                <li>Retirement planning</li>
                <li>Tax strategy</li>
                <li>Estate planning</li>
                <li>Insurance reviews</li>
                <li>Cash flow planning</li>
                <li>Ongoing financial advice</li>
              </ul>
              <p className={`text-sm ml-4 ${textMutedClass} mt-2`}>
                And everything else you need to feel confident about your financial future.
              </p>
            </div>

                         <div>
               <p className={`text-lg font-medium mb-2 ${textClass}`}>
                 <span className={`mr-2 ${textMutedClass2}`}>&gt;</span>
                 How do you get paid?
               </p>
               <p className={`text-sm ml-4 ${textMutedClass}`}>
                 I'm flat-fee only. No AUM fees, no commissions, no hidden costs. I'm only paid by you and never by product companies, banks, or insurance companies. This eliminates conflicts of interest and ensures my advice is always in your best interest.
               </p>
               <p className={`text-sm ml-4 ${textMutedClass} mt-2`}>
                 Pricing: 
                 <br />
                 One-time Plan: starting at $1,000. 
                 <br />
                 Ongoing Planning: $5,000-$10,000/year.
               </p>
             </div>

            <div>
              <p className={`text-lg font-medium mb-2 ${textClass}`}>
                <span className={`mr-2 ${textMutedClass2}`}>&gt;</span>
                How can I contact you?
              </p>
              <p className={`text-sm ml-4 ${textMutedClass} mt-1`}>
                Email: <a href="mailto:ben@lindywealth.com" className="underline hover:text-black">ben@lindywealth.com</a>
              </p>
            </div>

            <div>
              <p className={`text-lg font-medium mb-2 ${textClass}`}>
                <span className={`mr-2 ${textMutedClass2}`}>&gt;</span>
                Are you a CFP®?
              </p>
              <p className={`text-sm ml-4 ${textMutedClass}`}>
                Yes, I'm a Certified Financial Planner® Professional. As a CFP®, I'm held to the highest standards of ethics, education, and competency in financial planning.
              </p>
            </div>

            <div>
              <p className={`text-lg font-medium mb-2 ${textClass}`}>
                <span className={`mr-2 ${textMutedClass2}`}>&gt;</span>
                Where will my money be held?
              </p>
              <p className={`text-sm ml-4 ${textMutedClass}`}>
                Your money is held at Charles Schwab. The accounts are in your name, and Lindy Wealth acts as your advisor to manage them on your behalf. We don't work for Schwab or earn commissions, so every recommendation we make is in your best interest.
              </p>
            </div>

            <div>
              <p className={`text-lg font-medium mb-2 ${textClass}`}>
                <span className={`mr-2 ${textMutedClass2}`}>&gt;</span>
                What's your approach?
              </p>
              <p className={`text-sm ml-4 ${textMutedClass}`}>
                I built this firm to deliver tangible results without unnecessary complexity. We focus on building the right structure around your finances, optimizing for taxes, and creating a smart portfolio strategy that's durable, flexible, and clear.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-6 pt-32 max-w-xl mx-auto px-4">
        <div className="w-full mx-auto">
          <div className="mx-auto py-4">
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-8">
              
              {/* Copyright & Location - Left side */}
              <div className="flex flex-col">
                <p className={`text-xs md:text-sm font-light ${textClass}`}>&copy; 2025 Lindy Wealth</p>
                <p className={`text-xs md:text-sm font-light ${textClass}`}>
                  Based in ☀️ Los Angeles
                </p>
              </div>

              {/* Right side - Columns */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-16 w-full md:w-auto">

                {/* Contact Section */}
                <div className="flex flex-col space-y-1">
                  <h4 className={`text-xs md:text-sm font-medium mb-2 ${textClass}`}>Contact</h4>
                  <p className={`text-xs md:text-sm font-light ${textMutedClass}`}>
                    Phone: <a href="tel:9163350755" className={`hover:${textClass} transition-colors`}>(916) 335-0755</a>
                  </p>
                  <p className={`text-xs md:text-sm font-light ${textMutedClass}`}>
                    Email: <a href="mailto:Ben@lindywealth.com" className={`hover:${textClass} transition-colors`}>Ben@lindywealth.com</a>
                  </p>
                </div>

                {/* Legal Section */}
                <div className="flex flex-col space-y-1">
                  <h4 className={`text-xs md:text-sm font-medium mb-2 ${textClass}`}>Legal</h4>
                  <Link href="/disclosure" className={`hover:${textClass} transition-colors text-xs md:text-sm font-light ${textMutedClass}`}>
                    Disclosure
                  </Link>
                  <a 
                    href="/documents/Privacy.pdf"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`hover:${textClass} transition-colors text-xs md:text-sm font-light ${textMutedClass}`}
                  >
                    Privacy
                  </a>
                  <a 
                    href="https://client.schwab.com/Areas/Access/Login" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`hover:${textClass} transition-colors text-xs md:text-sm font-light ${textMutedClass}`}
                  >
                    Schwab
                  </a>
                  <a 
                    href="https://app.rightcapital.com/account/login" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`hover:${textClass} transition-colors text-xs md:text-sm font-light ${textMutedClass}`}
                  >
                    RightCapital
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
