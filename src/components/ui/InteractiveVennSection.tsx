'use client';

import { useState } from 'react';
import AnimatedVennDiagram from './AnimatedVennDiagram';
import FreeScrollCarousel from './FreeScrollCarousel';

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

interface InteractiveVennSectionProps {
  servicesNavigationStep?: number;
  setSelectedService?: (service: string | null) => void;
  services?: Array<{id: string; name: string; description: string; bgColor: string}>;
  setServicesNavigationStep?: (step: number) => void;
}

export default function InteractiveVennSection({ 
  servicesNavigationStep = 0, 
  setSelectedService,
  services = [],
  setServicesNavigationStep
}: InteractiveVennSectionProps) {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(-1); // -1 means show Venn diagram
  const [localSelectedService, setLocalSelectedService] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);
  const [touchEnd, setTouchEnd] = useState<{x: number, y: number} | null>(null);

  const handleRightClick = () => {
    if (setServicesNavigationStep && setSelectedService) {
      const maxStep = services.length; // 0: venn, 1+: individual services
      if (servicesNavigationStep < maxStep) {
        const newStep = servicesNavigationStep + 1;
        setServicesNavigationStep(newStep);
        const serviceIndex = newStep - 1; // step 1 = service index 0
        setSelectedService(services[serviceIndex]?.id || null);
      }
    }
  };

  const handleLeftClick = () => {
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
  };

  const isShowingServices = currentServiceIndex >= 0;
  const showServiceCarousel = servicesNavigationStep >= 1;

  // Touch/swipe handlers for mobile horizontal navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || !touchEnd) return;
    
    const horizontalDistance = touchStart.x - touchEnd.x;
    const verticalDistance = touchStart.y - touchEnd.y;
    
    // Only process horizontal swipes (ignore vertical ones to let page navigation work)
    if (Math.abs(horizontalDistance) <= Math.abs(verticalDistance)) return;
    
    // Prevent default to stop any unwanted scrolling
    e.preventDefault();
    
    const isLeftSwipe = horizontalDistance > minSwipeDistance;
    const isRightSwipe = horizontalDistance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleRightClick(); // Swipe left = go to next service
    }
    if (isRightSwipe) {
      handleLeftClick(); // Swipe right = go to previous service
    }
  };

  return (
    <div 
      id="services-section" 
      className="absolute inset-0"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Venn diagram and text - show when step is 0 */}
      <div 
        className={`absolute inset-0 flex flex-col justify-center items-center transition-all duration-500 ease-out ${
          servicesNavigationStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <p style={{ lineHeight: 1.3 }} className="text-base sm:text-2xl leading-tight text-white mb-8 text-center font-suisse tracking-tight">
          Comprehensive guidance that <br/>
          makes your life and money <br/>
          work better together.
        </p>
        <AnimatedVennDiagram />
      </div>

      {/* Services Carousel - positioned to show current service when step >= 1 */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          showServiceCarousel ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full h-full">
          <FreeScrollCarousel 
            services={services}
            selectedService={localSelectedService}
            onServiceSelect={setLocalSelectedService}
            servicesNavigationStep={servicesNavigationStep}
          />
        </div>
      </div>

      {/* Right side trigger zone */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full z-40 cursor-pointer"
        style={{ cursor: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDI0SDM4TTM4IDI0TDI2IDEyTTM4IDI0TDI2IDM2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K") 24 24, auto' }}
        onClick={handleRightClick}
      >
      </div>

      {/* Left side trigger zone (to go back) */}
      {servicesNavigationStep > 0 && (
        <div 
          className="absolute top-0 left-0 w-1/2 h-full z-40 cursor-pointer"
          style={{ cursor: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4IDI0SDEwTTEwIDI0TDIyIDEyTTEwIDI0TDIyIDM2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K") 24 24, auto' }}
          onClick={handleLeftClick}
        >
        </div>
      )}

      {/* Service counter indicator */}
      {servicesNavigationStep > 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="text-white/70 text-sm font-suisse">
            {servicesNavigationStep} / {services.length}
          </div>
        </div>
      )}
    </div>
  );
}