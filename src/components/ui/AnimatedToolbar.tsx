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
    description: "Strategic tax planning to minimize your tax burden through entity structuring, deduction optimization, and quarterly estimated payments.",
    details: [
      "Entity structure optimization (LLC, S-Corp, Solo 401k)",
      "Quarterly estimated tax payment planning",
      "Business expense deduction strategies",
      "Tax-loss harvesting for investments"
    ]
  },
  {
    id: "investment",
    title: "Investment & Cash Management", 
    description: "Portfolio management and cash flow optimization tailored to your irregular income streams and financial goals.",
    details: [
      "Asset allocation based on irregular income",
      "Low-cost index fund portfolio construction",
      "Tax-efficient investment strategies",
      "Cash flow forecasting and optimization"
    ]
  },
  {
    id: "life",
    title: "Life & Goal Planning",
    description: "Comprehensive life planning to align your financial decisions with your personal values and long-term goals.",
    details: [
      "Personal values assessment and goal setting",
      "Life milestone financial planning",
      "Career transition financial strategies",
      "Family financial planning coordination"
    ]
  },
  {
    id: "estate",
    title: "Estate Planning",
    description: "Estate planning strategies to protect your wealth and ensure your legacy is preserved for future generations.",
    details: [
      "Will and trust preparation",
      "Beneficiary designation optimization",
      "Estate tax minimization strategies",
      "Legacy planning and wealth transfer"
    ]
  },
  {
    id: "insurance",
    title: "Insurance Reviews",
    description: "Comprehensive insurance analysis to ensure optimal coverage and protection for your financial security.",
    details: [
      "Life and disability insurance analysis",
      "Health insurance optimization",
      "Property and liability coverage review",
      "Insurance cost-benefit analysis"
    ]
  },
  {
    id: "cashflow",
    title: "Cash Flow Planning",
    description: "Cash flow optimization and budgeting strategies for creators with variable income streams.",
    details: [
      "Variable income budgeting strategies",
      "Emergency fund planning",
      "Business vs personal expense tracking",
      "Revenue smoothing techniques"
    ]
  },
  {
    id: "retirement",
    title: "Retirement Strategy",
    description: "Retirement savings strategies including Solo 401(k)s, SEP-IRAs, and Roth conversions designed for entrepreneurs.",
    details: [
      "Solo 401(k) and SEP-IRA setup",
      "Roth conversion strategies",
      "Retirement income projections",
      "Healthcare cost planning"
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
      {/* Selected Service Details - appears when service is selected on page 1 (Services) */}
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


      {/* Pricing Section - appears above on page 3 (Pricing) */}
      <AnimatePresence>
        {showExpandedContent && currentPage === 3 && (
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

      {/* FAQ Section - appears above on page 4 (FAQ) */}
      <AnimatePresence>
        {showExpandedContent && currentPage === 4 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 pb-2">
              <div className="space-y-3">
                
                <button 
                  onClick={() => window.open('/about', '_self')}
                  className="w-full bg-white/10 rounded-lg p-3 flex justify-between items-center hover:bg-white/20 transition-colors"
                >
                  <span className="text-white text-sm">Learn more about Lindy</span>
                  <span className="text-white text-xs">→</span>
                </button>
                
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
                  className="w-full bg-white/10 rounded-lg p-3 flex justify-between items-center hover:bg-white/20 transition-colors"
                >
                  <span className="text-white text-sm">Services</span>
                  <span className="text-white text-xs">→</span>
                </button>
                
                <button 
                  onClick={() => {
                    const container = document.querySelector('.h-screen.overflow-y-scroll');
                    if (container) {
                      container.scrollTo({
                        top: 3 * window.innerHeight,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-full bg-white/10 rounded-lg p-3 flex justify-between items-center hover:bg-white/20 transition-colors"
                >
                  <span className="text-white text-sm">Pricing</span>
                  <span className="text-white text-xs">→</span>
                </button>
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