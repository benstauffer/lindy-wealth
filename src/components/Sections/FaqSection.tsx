'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Badge component for navigation
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 bg-white text-neutral-600 text-xs font-medium mr-4">
    {children}
  </span>
)

export function FaqSection() {
  return (
    <section className="w-full" data-section="faq">
      <div className="max-w-3xl mx-auto px-4">
        {/* All Sections as Accordion */}
        <div className="space-y-2 mx-auto py-20">

            <div className="flex justify-center mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-black mb-8 font-medium text-center mt-12">Frequently Asked Questions</h2>
            </div>



          <Accordion type="multiple" className="w-full">
            
            {/* BADGED SECTIONS FIRST */}
            



            {/* 3. What services do you offer? - Services */}
            <AccordionItem value="services" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-sm md:text-lg text-black">What services do you offer?</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed">
                  I offer comprehensive financial planning. That includes:
                  <br />- Investment management
                  <br />- Retirement planning
                  <br />- Tax strategy
                  <br />- Estate planning
                  <br />- Insurance reviews
                  <br />- Cash flow planning
                  <br />- Ongoing financial advice
                  <br /><br />
                  And everything else you need to feel confident about your financial future.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* 4. How do you get paid? - Pricing */}
            <AccordionItem value="pricing" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-sm md:text-lg text-black">How do you get paid?</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed mb-6">
                  I'm fee-only, which means I'm only paid by you and never by product companies, banks, or insurance companies. This eliminates conflicts of interest and ensures my advice is always in your best interest.
                </p>
                
                <div>

                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 5. How can I contact you? - Contact */}
            <AccordionItem value="contact" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-sm md:text-lg text-black">How can I contact you?</h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed mb-4">
                  The best way to reach me is by email. 
                </p>
                <div className="">
                  <p className="text-sm md:text-base text-black">
                    Email: <a href="mailto:ben@lindywealth.com" className="hover:underline">ben@lindywealth.com</a>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* REMAINING SECTIONS WITHOUT BADGES */}

            <AccordionItem value="is-my-advisor-a-cfp" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <h4 className="text-sm md:text-lg text-black">Is my advisor a CFP?</h4>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed">Yes, I'm a Certified Financial Planner® Professional. As a CFP®, I'm held to the highest standards of ethics, education, and competency in financial planning.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="custody" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <h4 className="text-sm md:text-lg text-black">Where will my money be held?</h4>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed">
                  Your money is held at Charles Schwab. The accounts are in your name, and Lindy Wealth acts as your advisor to manage them on your behalf. We don't work for Schwab or earn commissions, so every recommendation we make is in your best interest.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="approach" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <h4 className="text-sm md:text-lg text-black">What's your approach?</h4>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed">
                  I built this firm to deliver tangible results without unnecessary complexity. We focus on building the right structure around your finances, optimizing for taxes, and creating a smart portfolio strategy that's durable, flexible, and clear.
                </p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  )
}
