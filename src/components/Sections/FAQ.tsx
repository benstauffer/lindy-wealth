'use client'

import React, { useState } from 'react';

const AccordionItem = ({ 
  value, 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  value: string; 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <div className="border-b border-black/20 dark:border-white/20">
      <button
        onClick={onToggle}
        className="w-full py-4 text-left flex justify-between items-center group"
      >
        <span className="text-black dark:text-white font-normal leading-tight text-left text-lg pr-4">
          {question}
        </span>
        <svg 
          className={`w-4 h-4 text-black dark:text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4">
          <div className="text-black/80 dark:text-white/80 font-normal leading-tight text-base">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">
    {children}
  </div>
);

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      value: "pricing",
      question: "How much does it cost?",
      answer: "One-time Plan: $8,000 (50% upfront, 50% at completion)\nOngoing Planning: $10,000/year (paid quarterly in advance)\n\nI'm flat-fee only. No AUM fees, no commissions, no hidden costs. I'm only paid by you and never by product companies, banks, or insurance companies."
    },
    {
      value: "services",
      question: "What services do you provide?",
      answer: "Tax Strategy, Investment Management, Retirement Planning, Estate Planning, Insurance Reviews, and Cash Flow Planning. And anything to make you feel confident in your financial future."
    },
    {
      value: "custody",
      question: "Where will my money be held?",
      answer: "Your money is held at Charles Schwab. The accounts are in your name, and Lindy Wealth acts as your advisor to manage them on your behalf. We don't work for Schwab or earn commissions."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-black py-32 mb-32">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-start gap-12">
          {/* FAQ Title - Left */}
          <div className="lg:col-span-1 text-right">
            <h2 className="text-black dark:text-white font-normal text-2xl md:text-6xl">FAQ</h2>
          </div>
          
          {/* FAQ Accordions - Middle */}
          <div className="lg:col-span-2">
            <Accordion>
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === faq.value}
                  onToggle={() => setOpenItem(openItem === faq.value ? null : faq.value)}
                />
              ))}
            </Accordion>
          </div>
          
          {/* Book Call Button - Right */}
          <div className="lg:col-span-1 flex justify-start">
            <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Book Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}