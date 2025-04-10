import { Header } from "@/components/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { PricingTable } from "@/components/PricingTable"; // Assuming path is correct, consider moving PricingTable later
import React from 'react'; // Needed for JSX fragment in description

// Data mirroring Services.tsx for consistency
const pricingData = [
  {
    id: 1,
    name: 'Investment Management - A personalized investment strategy carefully aligned with your financial plan, emphasizing cost efficiency, tax optimization, and risk management.',
    description: (
      <>
        Billed as a percentage of assets.
      </>
    ),
    showTable: true,
  },
  {
    id: 2,
    name: 'Financial Planning - Comprehensive financial guidance that includes personalized financial planning, tax planning, insurance planning, and estate planning, serving as the quarterback that seamlessly coordinates and optimizes your financial life.',
    description: (
      <>
        Ranges from $5,000 to $20,000 per year, based on complexity.
      </>
    ),
    showTable: false,
  },
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="mb-16 flex-grow">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 pt-32 lg:pt-24">
          <div className="max-w-2xl mx-auto h-full flex flex-col">
            <Link
              href="/"
              className="group self-start inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 bg-neutral-100 hover:bg-neutral-200 rounded-full px-4 py-2"
            >
              <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
              Back to home
            </Link>

            <div className="flex-grow mt-8">
              {/* Remove h2 title if not needed */}
              {/* <h2 className="text-lg">Pricing</h2> */}
              <ul className="space-y-8">
                {pricingData.map((item) => (
                  <li key={item.id} className="flex items-baseline space-x-3 text-base text-neutral-700">
                     <span className="text-[#9CBE8E]">→</span>
                     <div className="flex-1">
                       {/* Main text: Name - Description */}
                       <span>{item.name}</span>
                       {/* Pricing details below */}
                       <p className="mt-1 text-sm text-neutral-500">
                         {item.description}
                       </p>
                       {/* Conditionally render PricingTable */}
                       {item.showTable && (
                         <div className="mt-4">
                           <PricingTable />
                         </div>
                       )}
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
