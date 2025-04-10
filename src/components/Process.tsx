import React from 'react';
import Link from 'next/link';

// Process steps data (extracted from Services.tsx)
const processSteps = [
  {
    id: 1, // Resetting IDs for this component
    name: 'Plan First - We discuss your goals, values, and vision, and create a financial plan to bring it all to life with clarity and peace of mind.',
  },
  {
    id: 2,
    name: 'Invest Next - We work together to build an investment strategy that aligns with your financial plan and focuses on what we can control: tax efficiency, fees, and diversification.',
  },
  {
    id: 3,
    name: 'Ongoing Management - We execute the strategy & continuously adapt as your life evolves. Day to day, you can have peace of mind knowing your finances are aligned with your goals and financial plan.',
  },
  {
    id: 4,
    name: (
      <Link href="/pricing" className="group transition-colors">
        <span className="text-[#327E0B] group-hover:text-[#9CBE8E] transition-colors">
          Read more about services & pricing
        </span>
      </Link>
    ),
  },
];

export function Process() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg text-neutral-900">Process</h2>
      <ul className="space-y-4">
        {processSteps.map((step) => (
          <li key={step.id} className="flex items-baseline space-x-3 text-base text-neutral-700">
            <span className="text-[#9CBE8E] pl-2">→</span>
            <span className="flex-1">{step.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
