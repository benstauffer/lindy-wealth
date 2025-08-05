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
            

            {/* 2. What's the process to get started? - Process */}
            <AccordionItem value="process" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-sm md:text-lg text-black">What's the process to get started?</h4>
                  <Badge>Process</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <div className="space-y-8">
                  <div className="flex gap-4">
                      <p className="text-sm md:text-base text-black/80">
                      <span className="text-black/50 text-sm">Step 1: A 15–30 Minute Intro Call</span><br />
                        We'll talk through your goals, financial situation, and what you're hoping to get out of the process. You'll get a feel for how I work, and we'll decide if it makes sense to move forward.
                      </p>
                  </div>
                  
                  <div className="flex gap-4">
                      <p className="text-sm md:text-base text-black/80">
                      <span className="text-black/50 text-sm">Step 2: Discovery + Assessment</span><br />
                        After our intro call, I'll request a few key documents and put together a detailed assessment and proposal for our engagement.
                      </p>
                  </div>
                  
                  <div className="flex gap-4">
                      <p className="text-sm md:text-base text-black/80">
                      <span className="text-black/50 text-sm">Step 3: Implementation + Ongoing Support</span><br />
                        We start by mapping out the life you actually want and once your objectives are clear, we'll review key areas to help you get the most out of life. All to make sure your finances are optimized and clear so you can have the confidence to focus on what matters most to you.
                        <br /><br />
                        I'll help you put your strategy into action and we'll stay in close contact through email, Zoom, and check-ins to keep everything aligned and moving forward.
                      </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 3. What services do you offer? - Services */}
            <AccordionItem value="services" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-sm md:text-lg text-black">What services do you offer?</h4>
                  <Badge>Services</Badge>
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
                  <Badge>Pricing</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed mb-6">
                  I'm fee-only, which means I'm only paid by you and never by product companies, banks, or insurance companies. This eliminates conflicts of interest and ensures my advice is always in your best interest.
                </p>
                
                <div>
                  <div className="mt-2">
                    <p className="text-sm md:text-base text-black/80 leading-relaxed mb-6">For clients with $2M+ in assets, our tiered asset-based fee structure is shown below. Fees are pulled quarterly in advance. For those with less than $2M, we offer flat fee engagements starting at $5,000/year with an optional investment management component.</p>
                    
                    <div className="flex justify-start">
                      <Table className="border-neutral-200 rounded-xl overflow-hidden">
                        <TableHeader>
                          <TableRow className="bg-neutral-50">
                            <TableHead className="text-xs md:text-sm text-black/70">Assets Under Management</TableHead>
                            <TableHead className="text-xs md:text-sm text-black/70">Annual Fee</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="text-xs md:text-sm text-black/70">$0 - $1M</TableCell>
                            <TableCell className="text-xs md:text-sm text-black/70">1.00%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-xs md:text-sm text-black/70">$1M - $5M</TableCell>
                            <TableCell className="text-xs md:text-sm text-black/70">0.75%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-xs md:text-sm text-black/70">$5M - $10M</TableCell>
                            <TableCell className="text-xs md:text-sm text-black/70">0.50%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-xs md:text-sm text-black/70">$10M - $25M</TableCell>
                            <TableCell className="text-xs md:text-sm text-black/70">0.40%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-xs md:text-sm text-black/70">Above $25M</TableCell>
                            <TableCell className="text-xs md:text-sm text-black/70">0.30%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 5. How can I contact you? - Contact */}
            <AccordionItem value="contact" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-sm md:text-lg text-black">How can I contact you?</h4>
                  <Badge>Contact</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed mb-4">
                  The best way to reach me is by email. I typically respond within a few hours during business days.
                </p>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <p className="text-sm md:text-base text-black font-medium">
                    Email: <a href="mailto:ben@lindywealth.com" className="text-[#17A7FF] hover:underline">ben@lindywealth.com</a>
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

            <AccordionItem value="who-we-help" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <h4 className="text-sm md:text-lg text-black">Who do you help?</h4>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <div className="space-y-5">
                <p className="text-sm md:text-base text-black/80">
                        <span className="text-black">I work with people who want a clear, confident strategy and often don't have the time to figure it all out themselves. If that sounds like you, here are a few examples of who I help most often:</span>  
                      </p>
                      <p className="text-sm md:text-base text-black/80">
                        <span className="text-black font-medium">1. You're planning for early retirement, aiming for a work-optional life, or already retired</span> and you feel unsure if your strategy is optimized — or if it will actually support the lifestyle you want.
                      </p>
                  
                  <div className="flex gap-4">
                      <p className="text-sm md:text-base text-black/80">
                        <span className="text-black font-medium">2. You're a high-earning family managing a busy life</span> and you feel like there's too much on your plate. Between careers, kids, maybe a business, you don't want to DIY it anymore.
                      </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="client-fit" className="bg-neutral-100 px-6 mb-2.5 hover:bg-neutral-200">
              <AccordionTrigger className="hover:no-underline py-5 font-normal text-left">
                <h4 className="text-sm md:text-lg text-black">Do I have enough to become a client?</h4>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-sm md:text-base text-black/80 leading-relaxed">
                  I typically work with individuals and families who have $2M+ in investable assets. If you're not quite there yet but are committed to your financial future, let's talk about flat fee engagements.
                </p>
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
