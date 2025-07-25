'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AboutFaqSection() {
  return (
    <section className="w-full pt-48" data-section="faqs">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title and description on top */}
        <div className="mb-12">
          <h2 className="text-5xl font-medium text-black mb-4">FAQs</h2>
        </div>
        
        {/* FAQ Cards */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem 
              value="faq-1" 
              className="pr-6 bg-white shadow-sm transition-colors px-6 py-2 rounded-3xl border border-neutral-200"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <h3 className="text-xl text-black">Is my advisor a CFP?</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-xl text-black">
                  <p>
                    Yes, I'm Ben Stauffer, a Certified Financial Planner® Professional and founder of Lindy Wealth. As a CFP®, I'm held to the highest standards of ethics, education, and competency in financial planning.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="faq-2" 
              className="pr-6 bg-white shadow-sm transition-colors px-6 py-2 rounded-3xl border border-neutral-200"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <h3 className="text-xl text-black">What services do you offer?</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-xl text-black">
                  <p>
                    I offer comprehensive financial planning. That includes:
                    <ul>
                      <li>- Investment management</li>
                      <li>- Retirement planning</li>
                      <li>- Tax strategy</li>
                      <li>- Estate planning</li>
                      <li>- Insurance reviews</li>
                      <li>- Cash flow planning</li>
                      <li>- Ongoing financial advice</li>
                      <br />
                      <li>And everything else you need to feel confident about your financial future.</li>
                    </ul>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="faq-3" 
              className="pr-6 bg-white shadow-sm transition-colors px-6 py-2 rounded-3xl border border-neutral-200"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <h3 className="text-xl text-black">What's your approach?</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-xl text-black">
                  <p>
                    I built this firm to deliver tangible results without unnecessary complexity. We focus on building the right structure around your finances, optimizing for taxes, and creating a smart portfolio strategy that's durable, flexible, and clear.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="faq-4" 
              className="pr-6 bg-white shadow-sm transition-colors px-6 py-2 rounded-3xl border border-neutral-200"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <h3 className="text-xl text-black">How do you get paid?</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-xl text-black">
                  <p>
                    I'm fee-only, which means I'm only paid by you—never by product companies. This eliminates conflicts of interest and ensures my advice is always in your best interest.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="faq-5" 
              className="pr-6 bg-white shadow-sm transition-colors px-6 py-2 rounded-3xl border border-neutral-200"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <h3 className="text-xl text-black">Do I have enough to become a client?</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-xl text-black">
                  <p>
                    I typically work with successful individuals and families who have $1M+ in investable assets. If you're not quite there yet but are committed to your financial future, let's talk about project-based planning.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="faq-6" 
              className="pr-6 bg-white shadow-sm transition-colors px-6 py-2 rounded-3xl border border-neutral-200"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <h3 className="text-xl text-black">Where will my money be held?</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-xl text-black">
                  <p>
                    Your money is held at Charles Schwab. The accounts are in your name, and Lindy Wealth acts as your advisor with limited authority to manage them on your behalf. We don't work for Schwab or earn commissions, so every recommendation we make is in your best interest.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="faq-7" 
              className="pr-6 bg-white shadow-sm transition-colors px-6 py-2 rounded-3xl border border-neutral-200"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <h3 className="text-xl text-black">What can I expect if we work together?</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-xl text-black">
                  <p>
                    We're an independent registered investment advisor. This means we're not beholden to specific products or strategies and can recommend what's truly the best fit for your situation. It also means we're a fiduciary financial advisor and are legally obligated to put your best interests first. While we're based in Los Angeles, we work with people remotely throughout the United States.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 