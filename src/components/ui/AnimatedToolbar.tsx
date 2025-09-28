'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiArrowUpRightLight } from "react-icons/pi";

interface AnimatedToolbarProps {
  currentPage: number;
  selectedService: string | null;
  showExpandedContent?: boolean;
}

const services = [
  {
    id: "tax",
    title: "Tax Strategy",
    description: "Tax planning to reduce what you owe through smart business structures.",
    details: [
      "Choose the right business structure (LLC, S-Corp)",
      "Plan quarterly tax payments",
      "Tax-loss harvesting for investments",
      "Retirement account optimization"
    ]
  },
  {
    id: "investment",
    title: "Investment & Cash Management", 
    description: "Build and manage your investment portfolio while handling irregular income.",
    details: [
      "Asset allocation for variable income",
      "Low-cost index fund portfolios",
      "Tax-smart investing",
      "Cash flow planning"
    ]
  },
  {
    id: "life",
    title: "Life & Goal Planning",
    description: "Plan your finances around what matters most to you and your big life goals.",
    details: [
      "Define your values and financial goals",
      "Plan for major life events",
      "Navigate career changes",
      "Coordinate family finances"
    ]
  },
  {
    id: "estate",
    title: "Estate Planning",
    description: "Protect your wealth and make sure it goes where you want when you are gone.",
    details: [
      "Estate planning strategy",
      "Update beneficiaries",
      "Reduce estate taxes",
      "Plan wealth transfer"
    ]
  },
  {
    id: "insurance",
    title: "Insurance Reviews",
    description: "Make sure you have the right coverage without overpaying.",
    details: [
      "Review life and disability insurance",
      "Evaluate health insurance options",
      "Check property and liability coverage",
      "Compare costs vs benefits"
    ]
  },
  {
    id: "cashflow",
    title: "Cash Flow Planning",
    description: "Manage your money when income varies month to month.",
    details: [
      "Budget with variable income",
      "Build emergency funds",
      "Track business vs personal expenses",
      "Smooth out income swings"
    ]
  },
  {
    id: "retirement",
    title: "Retirement Strategy",
    description: "Save for retirement with tax-advantaged accounts designed for business owners.",
    details: [
      "Set up Solo 401(k) or SEP-IRA",
      "Plan Roth conversions",
      "Project retirement income",
      "Plan for healthcare costs"
    ]
  }
];

function ExpandableToolbar({ currentPage, selectedService, showExpandedContent = true }: { currentPage: number; selectedService: string | null; showExpandedContent?: boolean }) {
  const selectedServiceData = services.find(service => service.id === selectedService);
  return (
    <motion.div
      className="w-full rounded-2xl transition-colors overflow-hidden"
      style={{ 
        backgroundColor: '#323232'
      }}
      whileHover={{ backgroundColor: '#252525' }}
      layout
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Selected Service Details - appears when service is selected on page 1 (Interactive Venn) */}
      <AnimatePresence>
        {showExpandedContent && selectedService && selectedServiceData && currentPage === 1 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 pb-2 ">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium text-sm">{selectedServiceData.title}</h3>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <p className="text-white/80 text-xs leading-relaxed">
                  {selectedServiceData.description}
                </p>
                <div className="space-y-1">
                  {selectedServiceData.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/70 text-xs">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Pricing Section - appears above on page 2 (Pricing) */}
      <AnimatePresence>
        {showExpandedContent && currentPage === 2 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 pb-2">
              <div className="space-y-3">
                
                <div className="bg-white/10 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-white text-sm">One time plan</span>
                  <span className="text-white font-medium">$7,000</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-white text-sm">Ongoing</span>
                  <span className="text-white font-medium">$10,000</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Book Call Button Content */}
      <motion.button
        onClick={() => window.open('https://cal.com/ben-stauffer-ysbawo/30min', '_blank')}
        className="w-full flex items-center justify-between px-6 py-4"
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-base">
          <span className="text-white">Start your financial plan, </span>
          <span style={{ color: '#919191' }}>book a call</span>
        </span>
        <PiArrowUpRightLight className="text-white font-light" size={24} />
      </motion.button>
    </motion.div>
  );
}


export default function AnimatedToolbar({ currentPage, selectedService, showExpandedContent = true }: AnimatedToolbarProps) {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none flex justify-center">
      <div className="pointer-events-auto w-full max-w-sm mx-4">
        <ExpandableToolbar currentPage={currentPage} selectedService={selectedService} showExpandedContent={showExpandedContent} />
      </div>
    </div>
  );
}