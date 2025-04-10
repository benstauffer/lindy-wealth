import { Header } from "@/components/Header";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "What services do you provide?",
      answer: (
        <>
          Investment management and financial planning. 
          <Link href="/pricing" className="group ml-1 transition-colors">
            <span className="text-[#327E0B] group-hover:text-[#9CBE8E] transition-colors">
              Read more here →
            </span>
          </Link>
        </>
      )
    },
    {
      id: "2",
      question: "How do you charge for your services?",
      answer: (
        <>
          For investment management, fees are charges based on a percentage of assets under management. For financial planning, fees are based on complexity and typically range from $5,000 to $20,000.
          <Link href="/pricing" className="group ml-1 transition-colors">
            <span className="text-[#327E0B] group-hover:text-[#9CBE8E] transition-colors">
              Read more here →
            </span>
          </Link>
        </>
      )
    },
    {
      id: "3",
      question: "What is your client onboarding process?",
      answer: 
        "First, we discuss your goals, values, and vision, and create a financial plan. Next, we work together to build an investment strategy that aligns with your financial plan. Finally, we execute the strategy & continuously adapt as your life evolves"
    },
    {
      id: "4",
      question: "How often do you meet with clients?",
      answer: "Typically quarterly, but I'm always availble to talk. At a minimum, we should meet twice a year with an annual review of your financial plan."
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="mb-16 flex-grow">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 h-full pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto h-full flex flex-col">
            <Link
              href="/"
              className="group self-start inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 bg-neutral-100 hover:bg-neutral-200 rounded-full px-4 py-2"
            >
              <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
              Back to home
            </Link>

            <div className="flex-grow mt-8">
              <div>
                <h1 className="text-2xl font-semibold text-neutral-900">Frequently Asked Questions</h1>
              </div>

              <ul className="space-y-8 mt-8">
                {faqs.map((faq) => (
                  <li key={faq.id}>
                    <p className="text-lg text-neutral-900">
                      {faq.question}
                    </p>
                    <div className="flex items-baseline space-x-3 mt-2">
                      <span className="text-[#9CBE8E]">→</span>
                      <div className="flex-1">
                        <p className="text-base text-neutral-700">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
