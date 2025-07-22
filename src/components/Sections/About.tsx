'use client'

import React from 'react'
import { Header } from './Header'
import { FooterSection } from './Footer'
import { Check } from 'lucide-react'
import { RiArrowRightLine } from 'react-icons/ri'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function AboutHeroSection() {
  return (
    <section className="w-full">
      <div className="pt-48 flex flex-col py-20 max-w-5xl mx-auto justify-start px-6">
        <div className="w-full text-left space-y-16">

          {/* Main Content Block */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-black font-['Georgia']"> 
              👋 Hey there
            </h1>
            
            <div className="text-2xl text-black/80 leading-relaxed">
              <p>
                If you're reading this, you're probably looking to make some changes. And whether you've built $2M or $20M, you're not looking for more noise or complexity.
                <br />
                <br />
                You want clarity, confidence, and a trusted partner to help you make smart decisions. But too much of the financial industry is focused on selling products instead of solving problems.
                <br />
                <br />
                That's why I started Lindy Wealth. I set out to build something useful, thoughtful, and honest for people who believe their goals should be at the center.
                <br />
                <br />
                I help successful individuals cut through complexity, make smart decisions, and align their money with what actually matters.
                <br />
                <br />
                I have three simple goals:
                <br />
                1. Help you achieve your financial objectives
                <br />
                2. Bring you peace of mind
                <br />
                3. Leave you happy about our partnership
                <br />
                <br />
                If you're ready to make a change, I'd be happy to help.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6">
              <p className="text-4xl font-handwritten text-black mb-2 transform -rotate-1">
                Ben Stauffer
              </p>
              <p className="text-lg text-black/60">
                CFP®, Founder, Lindy Wealth
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="w-full flex flex-col items-center mt-24 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-['Georgia'] text-4xl sm:text-5xl text-black font-medium mb-4 ">
            FAQs
          </h2>
          <p className="text-lg text-gray-600 max-w-sm mx-auto text-center">
            If you can't find an answer to your question, email <a href="mailto:ben@lindywealth.com" className="font-medium text-black hover:underline">ben@lindywealth.com</a>
          </p>
        </div>
        <div className="w-full max-w-4xl border border-gray-200 bg-white">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="px-6">
              <AccordionTrigger className="text-base text-black hover:no-underline">
                How much does it cost?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-black">
                  No commissions. No product sales. No bank or insurance ties. Just simple, straightforward advice with transparent pricing.
                </p>
                <div className="w-full">
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    <AccordionItem value="aum-fee" className="bg-white px-4 border border-gray-200">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex justify-between items-center w-full pr-4">
                          <div>
                            <h3 className="text-base text-black text-left">AUM Fee</h3>
                            <p className="text-sm text-left">For those with over $1M in assets</p>
                          </div>
                          <div className="text-right">
                            <div className="text-base text-black">Under 1% / year</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="text-gray-700 text-sm leading-relaxed">
                          <p className="mb-4 font-medium">Services:</p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Ongoing financial advice</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Investment management</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Tax strategy</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Estate planning</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Insurance reviews</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Cash flow planning</span>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <p className="mb-3 font-medium">AUM Schedule:</p>
                            <div className="border border-neutral-200 overflow-hidden">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="text-left font-medium p-3">Assets</th>
                                    <th className="text-right font-medium p-3">Annual Fee</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-gray-100">
                                    <td className="p-3 text-gray-700">$0 - $1M</td>
                                    <td className="text-right p-3 text-gray-700">1.00%</td>
                                  </tr>
                                  <tr className="border-b border-gray-100">
                                    <td className="p-3 text-gray-700">$1 - $5M</td>
                                    <td className="text-right p-3 text-gray-700">0.75%</td>
                                  </tr>
                                  <tr className="border-b border-gray-100">
                                    <td className="p-3 text-gray-700">$5M - $10M</td>
                                    <td className="text-right p-3 text-gray-700">0.50%</td>
                                  </tr>
                                  <tr className="border-b border-gray-100">
                                    <td className="p-3 text-gray-700">$10M - $25M</td>
                                    <td className="text-right p-3 text-gray-700">0.40%</td>
                                  </tr>
                                  <tr>
                                    <td className="p-3 text-gray-700">Above $25M</td>
                                    <td className="text-right p-3 text-gray-700">0.30%</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <p className="mt-4 font-medium">Billing: billed quarterly in advance</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="flat-fee" className="bg-white px-4 border border-gray-200">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex justify-between items-center w-full pr-4">
                          <div>
                            <h3 className="text-base text-black text-left">Flat Fee</h3>
                            <p className="text-sm text-left">For those with under $1M in assets</p>
                          </div>
                          <div className="text-right">
                            <div className="text-base text-black">Starting at $5,000 / year</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="text-gray-700 text-sm leading-relaxed">
                          <p className="mb-4 font-medium">Services:</p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Ongoing financial advice</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Tax strategy</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Estate planning</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Insurance reviews</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0" />
                              <span>Cash flow planning</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">(Optional investment management - 0.3% fee)</span>
                            </div>
                          </div>
                          <p className="mt-4 font-medium">Billing: billed quarterly in advance</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="px-6">
              <AccordionTrigger className="text-base text-black hover:no-underline">
                Do I have enough money to work with you?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-black">
                  I work with successful individuals and families who typically have $1M+ in investable assets. If you're not quite there yet but are committed to your financial future, let's talk—I may be able to help with project-based planning.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="px-6">
              <AccordionTrigger className="text-base text-black hover:no-underline">
                What makes you different?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-black">
                  I'm not trying to sell you anything. I'm fee-only, which means I'm paid by you, not by product companies. My focus is on solving your problems, not pushing products. You get direct access to me—no junior advisors or call centers.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="px-6">
              <AccordionTrigger className="text-base text-black hover:no-underline">
                How do we get started?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-black">
                  Simple. Email me at ben@lindywealth.com or schedule a brief call. We'll discuss your situation, see if we're a good fit, and go from there. No pressure, no sales pitch—just an honest conversation about your goals.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="px-6">
              <AccordionTrigger className="text-base text-black hover:no-underline">
                What's your investment philosophy?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-black">
                  I believe in evidence-based investing with low-cost, diversified portfolios. No hot stock picks or market timing. Instead, we focus on what you can control: costs, taxes, asset allocation, and your behavior. Simple, but effective.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
    </section>
  )
}


export function AboutSection() {
  function handleMenuItemClick(arg0: string): void {
    throw new Error('Function not implemented.')
  }

  return (
    <section className="w-full ">
      <div className="max-w-5xl mx-auto flex flex-col ">
        <div className="w-full ">
          
          {/* Getting Started - First */}
          <div data-section="process">
            {/* Title and description on top */}
            <div className=" mb-12 ">
              <h2 className="text-5xl font-medium text-black mb-4">Here's how to get started</h2>
              <p className="text-xl text-black/80 max-w-2xl mb-4"> 
              We'll review your financial situation and provide a clear assessment of your current financial situation and honest assessment of areas needing attention.
              </p>
              <p className="text-xl text-black/80 max-w-2xl"> 
                At the end of this process, take your time to think about it. There is never a hard-sell or pressure to say "yes."
              </p>
            </div>
            
            {/* Cards - Full width horizontal layout */}
            <div>
              {/* Horizontal grid for steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Step 1 */}
                  <div className="min-h-[400px] bg-white p-6 flex flex-col rounded-3xl border border-neutral-200 shadow-sm" >
                  <h3 className="text-base text-neutral-400 mb-2 flex items-center gap-2">
                    Step 1
                  </h3>

                    <h3 className="text-2xl font-medium text-black mb-3">Schedule an Intro Call</h3>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-black/80 text-sm mb-6">15–30 min • Phone Call</p>
                        <p className="text-black text-base leading-relaxed mb-4">
                          We'll discuss your current financial situation and goals, how I work, whether we're a good fit, next steps, and answer any questions you have.
                        </p>
                      </div>
                      <button 
              onClick={() => handleMenuItemClick('contact')}
              className="group px-3 py-3 bg-black rounded-xl text-white hover:bg-neutral-800 transition-colors text-base font-medium flex items-center justify-start gap-3"
            >
              Schedule a call
              <RiArrowRightLine className="text-xl transition-transform duration-200 group-hover:translate-x-1" />
            </button>
                      
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="min-h-[400px] bg-white p-6 flex flex-col rounded-3xl border border-neutral-200 shadow-sm">
                    <h3 className="text-base text-neutral-400 mb-2 flex items-center gap-2">
                      Step 2
                    </h3>
                    <h3 className="text-2xl font-medium text-black mb-3">Discovery Session</h3>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-black/80 text-sm mb-6">1 hour • Zoom/Phone</p>
                        <p className="text-black text-base leading-relaxed">
                          After our initial meeting, we'll request a few important documents from you. 
                          Then, we'll review the documents and discuss your financials in depth.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="min-h-[400px] bg-white p-6 flex flex-col rounded-3xl border border-neutral-200 shadow-sm">
                    <h3 className="text-base text-neutral-400 mb-2 flex items-center gap-2">
                      Step 3
                    </h3>
                    <h3 className="text-2xl font-medium text-black mb-3">Get Your Free Assessment</h3>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-black/80 text-sm mb-6">1 hour • Zoom/Phone</p>
                        <p className="text-black text-base leading-relaxed">
                          You'll receive clear analysis of your current financial situation and honest assessment of areas needing attention.
                        </p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div data-section="pricing" className="pt-36">
            <div className="mb-12">
              <h2 className="text-5xl font-medium text-black mb-4">Pricing & Services</h2>
              <p className="text-xl text-neutral-600 max-w-2xl mb-6">
                No commissions. No product sales. No bank or insurance ties. Just simple, straightforward advice with transparent pricing.
              </p>
            </div>
            
            {/* Pricing Table */}
            <div className="max-w-5xl border-gray-200 overflow-hidden">
              {/* Header with Pricing */}
              <div className="grid grid-cols-3 border-b border-[#E7E6E4]">
                <div className="p-6"></div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-medium text-black mb-1">Flat Fee</h3>

                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-medium text-black mb-1">AUM Fee</h3>
                </div>
              </div>

              {/* Asset Requirements */}
              <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-4">
                <div className=" text-black">Asset Requirements</div>
                <div className="text-center text-sm text-gray-600">Under $2M in assets</div>
                <div className="text-center text-sm text-gray-600">Over $2M in assets</div>
              </div>

              {/* Fee */}
              <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-4">
                <div className="text-black">Fee</div>
                <div className="text-center text-sm text-gray-600">Starts at $5,000 per year</div>
                <div className="text-center text-sm text-gray-600">
                  Under 1% AUM{" "}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium underline cursor-pointer">
                        (view schedule)
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-medium text-black mb-2">AUM Fee Schedule</DialogTitle>
                        <DialogDescription className="text-base text-black/80">
                          Our asset-based fee structure with transparent pricing tiers.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6">
                        <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-neutral-200 bg-neutral-50">
                                <th className="text-left font-medium p-4 text-base">Assets Under Management</th>
                                <th className="text-right font-medium p-4 text-base">Annual Fee</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-neutral-200">
                                <td className="p-4 text-black text-sm">$0 - $1M</td>
                                <td className="text-right p-4 text-black text-sm font-medium">1.00%</td>
                              </tr>
                              <tr className="border-b border-neutral-200">
                                <td className="p-4 text-black text-sm">$1M - $5M</td>
                                <td className="text-right p-4 text-black text-sm font-medium">0.75%</td>
                              </tr>
                              <tr className="border-b border-neutral-200">
                                <td className="p-4 text-black text-sm">$5M - $10M</td>
                                <td className="text-right p-4 text-black text-sm font-medium">0.50%</td>
                              </tr>
                              <tr className="border-b border-neutral-200">
                                <td className="p-4 text-black text-sm">$10M - $25M</td>
                                <td className="text-right p-4 text-black text-sm font-medium">0.40%</td>
                              </tr>
                              <tr>
                                <td className="p-4 text-black text-sm">Above $25M</td>
                                <td className="text-right p-4 text-black text-sm font-medium">0.30%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-black/80 text-sm mt-4 text-center">
                          All fees are billed quarterly in advance
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Service Rows - Starting with Investment management */}
              <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
                <div className=" text-black">Investment management</div>
                <div className="text-center text-sm text-gray-600">Optional (+0.3% AUM fee)</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
                <div className="text-black">Ongoing financial advice</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
                <div className="text-black">Tax strategy</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
                <div className="text-black">Estate planning</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
                <div className="text-black">Insurance reviews</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
                <div className="text-black">Cash flow planning</div>
                <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
                  <div className="text-center">
                  <Check className="h-5 w-5 text-black mx-auto" />
                </div>
              </div>

              {/* Billing */}
              <div className="grid grid-cols-3 py-4">
                <div className="text-black">Billing</div>
                <div className="text-center text-sm text-gray-600">Billed quarterly in advance</div>
                <div className="text-center text-sm text-gray-600">Billed quarterly in advance</div>
              </div>
            </div>
          </div>

          
          {/* FAQ Content - Third */}
          <div className="pt-48" data-section="faqs">
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
                          <li>-Tax strategy</li>
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
                      I built this firm to deliver tangible results without unnecessary complexity. We focus on building the right structure around your finances, optimizing for taxes, and creating a smart portfolio strategy that's durable, flexible, and clear.                      </p>
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

          

        </div>
    </section>
  )
}


export function AboutContent() {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Main content container */}
      <div 
        id="main-content-that-scrolls"
        className="w-full relative z-10"
      >
        {/* Hero Section */}
        <div className="mb-0">
          <AboutHeroSection />
        </div>

        {/* Additional sections can be added here following the same pattern */}
        
      </div>
      <FooterSection />
      
    </>
  )
} 