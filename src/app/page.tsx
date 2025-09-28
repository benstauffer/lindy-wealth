"use client"

import { useState } from "react";
import SwipeablePages from "@/components/ui/SwipeablePages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InteractiveVennSection from "@/components/ui/InteractiveVennSection";

const StructuredData = () => (
  <>
    {/* Organization Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lindy Wealth",
          "alternateName": "Lindy Wealth LLC",
          "description": "Fee-only financial planning and wealth management specifically for content creators, YouTubers, and online entrepreneurs.",
          "url": "https://lindywealth.com",
          "logo": "https://lindywealth.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://www.linkedin.com/company/lindywealth"
          ],
          "serviceArea": {
            "@type": "Country",
            "name": "United States"
          }
        })
      }}
    />

    {/* Person Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ben Stauffer",
          "jobTitle": "Certified Financial Planner",
          "description": "CFP® specializing in financial planning for content creators, YouTubers, and online entrepreneurs.",
          "url": "https://lindywealth.com/about",
          "sameAs": [
            "https://www.linkedin.com/in/benstauffer"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Lindy Wealth"
          },
          "knowsAbout": [
            "Financial Planning",
            "Tax Strategy",
            "Creator Business Structure",
            "Retirement Planning",
            "Investment Management"
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Professional Certification",
              "recognizedBy": {
                "@type": "Organization",
                "name": "CFP Board"
              }
            }
          ]
        })
      }}
    />

    {/* Financial Service Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Creator Financial Planning Services",
          "provider": {
            "@type": "Organization",
            "name": "Lindy Wealth"
          },
          "areaServed": "US",
          "serviceType": [
            "Financial Planning",
            "Wealth Management", 
            "Tax Strategy",
            "Business Structure Planning",
            "Retirement Planning"
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": "Content creators, YouTubers, online entrepreneurs"
          }
        })
      }}
    />
  </>
);


const services = [
  { 
    id: 'tax', 
    name: 'Tax Strategy', 
    description: 'Tax planning to reduce what you owe through smart business structures.',
    bgColor: 'bg-neutral-300'
  },
  { 
    id: 'investment', 
    name: 'Investment & Cash Management', 
    description: 'Build and manage your investment portfolio while handling irregular income.',
    bgColor: 'bg-orange-500'
  },
  { 
    id: 'life', 
    name: 'Life & Goal Planning', 
    description: 'Plan your finances around what matters most to you and your big life goals.',
    bgColor: 'bg-neutral-300'
  },
  { 
    id: 'estate', 
    name: 'Estate Planning', 
    description: 'Protect your wealth and make sure it goes where you want when you are gone.',
    bgColor: 'bg-orange-500'
  },
  { 
    id: 'insurance', 
    name: 'Insurance Reviews', 
    description: 'Make sure you have the right coverage without overpaying.',
    bgColor: 'bg-neutral-300'
  },
  { 
    id: 'cashflow', 
    name: 'Cash Flow Planning', 
    description: 'Manage your money when income varies month to month.',
    bgColor: 'bg-orange-500'
  },
  { 
    id: 'retirement', 
    name: 'Retirement Strategy', 
    description: 'Save for retirement with tax-advantaged accounts designed for business owners.',
    bgColor: 'bg-neutral-300'
  }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [servicesNavigationStep, setServicesNavigationStep] = useState(0); // 0: venn, 1: list, 2+: individual services

  return (
    <>
      <StructuredData />
      <SwipeablePages 
        selectedService={selectedService}
        servicesNavigationStep={servicesNavigationStep}
        setServicesNavigationStep={setServicesNavigationStep}
        setSelectedService={setSelectedService}
        services={services}
      >
        {/* Section 1: Hero + Venn Diagram + Value Prop */}
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-6 md:px-8 text-center">


          <div className="">
            <p style={{ lineHeight: 1.1 }} className="text-3xl sm:text-4xl md:text-5xl leading-tight text-black/80 font-suisse tracking-tight">
              Wealth Management.
              <br />
              <span className="">
                Built for Solopreneurs.
              </span>
            </p>
          </div>

          <div className="flex justify-center mt-0">
            <p className="text-base sm:text-xl leading-normal text-black/70 max-w-sm text-center font-suisse tracking-tight">
              <br/>
              We design tax-smart plans that help solopreneurs save thousands in taxes, free up hours of time, and build lasting wealth.
            </p>
          </div>
        </div>


        {/* Section 2: Interactive Venn Diagram */}
        <div className="w-full bg-black relative z-10 min-h-screen">
          <InteractiveVennSection 
            servicesNavigationStep={servicesNavigationStep}
            setSelectedService={setSelectedService}
            services={services}
            setServicesNavigationStep={setServicesNavigationStep}
          />


        </div>

        {/* Section 3: Pricing */}
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-6 md:px-8 text-center">
          <div className="mb-4">
            <p style={{ lineHeight: 1.1 }} className="text-3xl sm:text-4xl leading-tight text-black/80 font-suisse tracking-tight">
              Transparent
              <br/> 
              Flat Fee
            </p>
          </div>

          <div className="flex justify-center mt-0">
            <div className="text-base sm:text-xl leading-normal text-black/70 max-w-md text-center font-suisse tracking-tight">
              <div>No AUM fees, no commissions, no hidden costs.
                <br/>
                Only paid by you and never by product companies, banks, or insurance companies. 
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: FAQ */}
        <div className="relative w-full h-screen" style={{backgroundColor: '#000000'}}>
          
          <div className="absolute inset-0 flex items-center justify-center pt-16 sm:pt-0">
            <div className="w-full max-w-md mx-auto px-6 sm:px-6 md:px-8">
              <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-0 bg-[#0D0D0D] hover:bg-[#000000] data-[state=open]:hover:bg-[#0D0D0D] transition-colors px-6 rounded-lg mb-1">
                <AccordionTrigger className="text-sm font-mono text-white hover:text-white transition-colors tracking-tighter">
                  What services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-normal text-white/90">
                  I offer comprehensive financial planning. That includes: Investment management, Retirement planning, Tax strategy, Estate planning, Insurance reviews, Cash flow planning, Ongoing financial advice. And everything else you need to feel confident about your financial future.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-0 bg-[#0D0D0D] hover:bg-[#000000] data-[state=open]:hover:bg-[#0D0D0D] transition-colors px-6 rounded-lg mb-1">
              <AccordionTrigger className="text-sm font-mono text-white hover:text-white transition-colors tracking-tighter">
              How do you get paid?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-normal text-white/90">
                  I'm flat-fee only. No AUM fees, no commissions, no hidden costs. I'm only paid by you and never by product companies, banks, or insurance companies. This eliminates conflicts of interest and ensures my advice is always in your best interest. Pricing: One-time Plan: $7,000. Ongoing Planning: $10,000/year.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-0 bg-[#0D0D0D] hover:bg-[#000000] data-[state=open]:hover:bg-[#0D0D0D] transition-colors px-6 rounded-lg mb-1">
              <AccordionTrigger className="text-sm font-mono text-white hover:text-white transition-colors tracking-tighter">
              How can I contact you?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-normal text-white/90">
                  Email: ben@lindywealth.com
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-0 bg-[#0D0D0D] hover:bg-[#000000] data-[state=open]:hover:bg-[#0D0D0D] transition-colors px-6 rounded-lg mb-1">
              <AccordionTrigger className="text-sm font-mono text-white hover:text-white transition-colors tracking-tighter">
              Are you a CFP®?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-normal text-white/90">
                  Yes, I'm a Certified Financial Planner® Professional. As a CFP®, I'm held to the highest standards of ethics, education, and competency in financial planning.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-0 bg-[#0D0D0D] hover:bg-[#000000] data-[state=open]:hover:bg-[#0D0D0D] transition-colors px-6 rounded-lg mb-1">
              <AccordionTrigger className="text-sm font-mono text-white hover:text-white transition-colors tracking-tighter">
              Where will my money be held?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-normal text-white/90">
                  Your money is held at Charles Schwab. The accounts are in your name, and Lindy Wealth acts as your advisor to manage them on your behalf. We don't work for Schwab or earn commissions, so every recommendation we make is in your best interest.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-0 bg-[#0D0D0D] hover:bg-[#000000] data-[state=open]:hover:bg-[#0D0D0D] transition-colors px-6 rounded-lg">
              <AccordionTrigger className="text-sm font-mono text-white hover:text-white transition-colors tracking-tighter">
              What's your approach?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-normal text-white/90">
                  I built this firm to deliver tangible results without unnecessary complexity. We focus on building the right structure around your finances, optimizing for taxes, and creating a smart portfolio strategy that's durable, flexible, and clear.
                </AccordionContent>
              </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Section 5: Navigation Links */}
        <div className="relative w-full h-screen bg-white flex items-center justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <button 
              onClick={() => {
                const container = document.querySelector('.h-screen.overflow-y-scroll');
                if (container) {
                  container.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-2xl sm:text-3xl font-suisse text-black/80 hover:text-black transition-colors tracking-tight"
            >
              Top
            </button>
            
            <a 
              href="/about"
              className="text-2xl sm:text-3xl font-suisse text-black/80 hover:text-black transition-colors tracking-tight"
            >
              About
            </a>
            
            <button 
              onClick={() => {
                const container = document.querySelector('.h-screen.overflow-y-scroll');
                if (container) {
                  container.scrollTo({
                    top: 1 * window.innerHeight,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-2xl sm:text-3xl font-suisse text-black/80 hover:text-black transition-colors tracking-tight"
            >
              Services
            </button>
            
            <button 
              onClick={() => {
                const container = document.querySelector('.h-screen.overflow-y-scroll');
                if (container) {
                  container.scrollTo({
                    top: 2 * window.innerHeight,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-2xl sm:text-3xl font-suisse text-black/80 hover:text-black transition-colors tracking-tight"
            >
              Pricing
            </button>
            
            <a 
              href="#newsletter"
              className="text-2xl sm:text-3xl font-suisse text-black/80 hover:text-black transition-colors tracking-tight"
            >
              Newsletter
            </a>
            
            <a 
              href="mailto:ben@lindywealth.com"
              className="text-2xl sm:text-3xl font-suisse text-black/80 hover:text-black transition-colors tracking-tight"
            >
              Contact
            </a>
          </div>

          {/* Footer moved to bottom of navigation page */}
          <div className="absolute bottom-0 left-0 right-0 w-full px-6 sm:px-6 md:px-8 py-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="text-sm text-[#999999]">&copy; 2025 Lindy Wealth</p>
              </div>
              <div className="flex flex-row gap-4 md:gap-8">
                <a href="/disclosure" className="text-[#999999] hover:text-black transition-colors text-sm">
                  Disclosure
                </a>
                <a 
                  href="/documents/Privacy.pdf"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#999999] hover:text-black transition-colors text-sm"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
        </SwipeablePages>
    </>
  )
}