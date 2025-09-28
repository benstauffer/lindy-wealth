'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import MarketStatus from './MarketStatus';

interface AnimatedHeaderProps {
  currentPage: number;
  selectedService: string | null;
  showExpandedContent?: boolean;
  servicesNavigationStep?: number;
  setServicesNavigationStep?: (step: number) => void;
  setSelectedService?: (service: string | null) => void;
  services?: Array<{id: string; name: string; description: string; bgColor: string}>;
}

function ExpandableHeader({ 
  currentPage, 
  selectedService, 
  showExpandedContent = true, 
  servicesNavigationStep = 0,
  setServicesNavigationStep,
  setSelectedService,
  services = []
}: { 
  currentPage: number; 
  selectedService: string | null; 
  showExpandedContent?: boolean;
  servicesNavigationStep?: number;
  setServicesNavigationStep?: (step: number) => void;
  setSelectedService?: (service: string | null) => void;
  services?: Array<{id: string; name: string; description: string; bgColor: string}>;
}) {
  
  return (
    <motion.div
      className="w-full  transition-colors overflow-hidden"
      layout
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Logo and Navigation Content */}
      <motion.div
        className="w-full flex items-center px-6  relative"
      >
        <div className="flex items-center justify-between w-full">
          <div className="w-12 flex justify-start">
            {/* Services navigation X button */}
            {currentPage === 1 && servicesNavigationStep > 0 && services.length > 0 && (
              <button 
                className="text-[#999999] hover:text-white transition-colors"
                onClick={() => {
                  if (setServicesNavigationStep && setSelectedService) {
                    setServicesNavigationStep(0);
                    setSelectedService(null);
                  }
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            {/* About page X button to go back home */}
            {services.length === 0 && (
              <a 
                href="/"
                className="text-[#999999] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            )}
          </div>
          <div className="flex items-center">
            {services.length === 0 ? (
              <span className="text-[#999999] font-medium text-base tracking-tight">
                About
              </span>
            ) : (
              <AnimatePresence mode="wait">
                {currentPage === 0 && (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="h-6 flex items-center"
                  >
                    <Logo />
                  </motion.div>
                )}
                {currentPage === 1 && (
                  <motion.span
                    key={`services-${selectedService || 'default'}`}
                    className="text-[#999999] font-medium text-base tracking-tight"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                  >
                    {servicesNavigationStep === 0 
                      ? "Services" 
                      : services.find(s => s.id === selectedService)?.name || "Services"
                    }
                  </motion.span>
                )}
                {currentPage === 2 && (
                  <motion.span
                    key="pricing"
                    className="text-[#999999] font-medium text-base tracking-tight"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                  >
                    Pricing
                  </motion.span>
                )}
                {currentPage === 3 && (
                  <motion.span
                    key="faq"
                    className="text-[#999999] font-medium text-base tracking-tight"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                  >
                    FAQ
                  </motion.span>
                )}
                {currentPage === 4 && (
                  <motion.span
                    key="navigation"
                    className="text-[#999999] font-medium text-base tracking-tight"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                  >
                    Navigation
                  </motion.span>
                )}
              </AnimatePresence>
            )}
          </div>
          
          {/* Navigation buttons for Services page */}
          <div className="flex items-center gap-3 w-12 justify-end">
            {currentPage === 1 && services.length > 0 && (
              <>
                <button 
                  className="text-[#999999] hover:text-white transition-colors"
                  onClick={() => {
                    if (setServicesNavigationStep && setSelectedService) {
                      if (servicesNavigationStep > 0) {
                        if (servicesNavigationStep === 1) {
                          // Going back to venn from first service
                          setServicesNavigationStep(0);
                          setSelectedService(null);
                        } else {
                          // Moving to previous service
                          const newStep = servicesNavigationStep - 1;
                          setServicesNavigationStep(newStep);
                          const serviceIndex = newStep - 1; // step 1 = service index 0
                          setSelectedService(services[serviceIndex]?.id || null);
                        }
                      }
                    }
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="text-[#999999] hover:text-white transition-colors"
                  onClick={() => {
                    if (setServicesNavigationStep && setSelectedService) {
                      const maxStep = services.length; // 0: venn, 1+: individual services
                      if (servicesNavigationStep < maxStep) {
                        const newStep = servicesNavigationStep + 1;
                        setServicesNavigationStep(newStep);
                        const serviceIndex = newStep - 1; // step 1 = service index 0
                        setSelectedService(services[serviceIndex]?.id || null);
                      }
                    }
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
        
        
      </motion.div>

    </motion.div>
  );
}

export default function AnimatedHeader({ 
  currentPage, 
  selectedService, 
  showExpandedContent = true,
  servicesNavigationStep = 0,
  setServicesNavigationStep,
  setSelectedService,
  services = []
}: AnimatedHeaderProps) {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-center">
      <div className="pointer-events-auto w-full max-w-sm mx-4">
        <ExpandableHeader 
          currentPage={currentPage} 
          selectedService={selectedService} 
          showExpandedContent={showExpandedContent}
          servicesNavigationStep={servicesNavigationStep}
          setServicesNavigationStep={setServicesNavigationStep}
          setSelectedService={setSelectedService}
          services={services}
        />
      </div>
    </div>
  );
}