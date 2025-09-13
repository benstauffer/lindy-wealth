"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1 pt-52 pb-16">
        <div className="max-w-lg mx-auto px-6">
          
          {/* Bio Card */}
          <div className="mb-12">
            <div className="flex items-center gap-6 mb-6">
              <Image
                src="/images/Ben.png"
                alt="Ben Stauffer"
                width={80}
                height={80}
                className="rounded"
              />
              <div className="space-y-1">
                <p className="text-white font-normal text-lg leading-tight">Ben Stauffer, CFP®</p>
                <p className="text-white/80 text-base leading-tight">Sacramento, CA → Los Angeles, CA</p>
                <p className="text-white/80 text-base leading-tight">ben@lindywealth.com</p>
              </div>
            </div>
            <p className="text-white font-normal leading-relaxed text-lg">
              Hi, I'm Ben. I'm a CFP® running Lindy Wealth, a fee-only financial planning firm focused on delivering tax optimized advice. I provide full service comprehensive advice, acting as my clients' CFO to coordinate their financial life so they can focus on what matters most. I've worked at several firms serving 100s of clients - retirees, high-earners, HNWs, UHNWs. Now, I happily serve my clients at Lindy Wealth.
            </p>
          </div>


          {/* FAQ */}
          <div className="mb-24">
            <div className="border-b border-white/20 pb-2 mb-4">
              <h2 className="text-white font-normal text-xl">FAQ</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full ml-4">
              <AccordionItem value="pricing" className="border-b border-white/20">
                <AccordionTrigger className="text-white font-normal leading-tight text-left text-lg [&[data-state=open]>svg]:rotate-180">
                  How much does it cost?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-normal leading-tight text-base">
                  One-time Plan: $8,000 (50% upfront, 50% at completion)<br/>
                  Ongoing Planning: $10,000/year (paid quarterly in advance)<br/><br/>
                  I'm flat-fee only. No AUM fees, no commissions, no hidden costs. I'm only paid by you and never by product companies, banks, or insurance companies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services" className="border-b border-white/20">
                <AccordionTrigger className="text-white font-normal leading-tight text-left text-lg [&[data-state=open]>svg]:rotate-180">
                  What services do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-normal leading-tight text-base">
                  Tax Strategy, Investment Management, Retirement Planning, Estate Planning, Insurance Reviews, and Cash Flow Planning. And anything to make you feel confident in your financial future.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="custody" className="border-b border-white/20">
                <AccordionTrigger className="text-white font-normal leading-tight text-left text-lg [&[data-state=open]>svg]:rotate-180">
                  Where will my money be held?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-normal leading-tight text-base">
                  Your money is held at Charles Schwab. The accounts are in your name, and Lindy Wealth acts as your advisor to manage them on your behalf. We don't work for Schwab or earn commissions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>
      <FooterSection />
    </div>
  )
}
