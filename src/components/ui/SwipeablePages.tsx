'use client';

import React, { useEffect, useRef, useState } from 'react';
import AnimatedToolbar from './AnimatedToolbar';
import AnimatedHeader from './AnimatedHeader';

interface SwipeablePagesProps {
  children: React.ReactNode[];
  selectedService: string | null;
  showExpandedToolbar?: boolean;
  servicesNavigationStep?: number;
  setServicesNavigationStep?: (step: number) => void;
  setSelectedService?: (service: string | null) => void;
  services?: Array<{id: string; name: string; description: string; bgColor: string}>;
}



export default function SwipeablePages({ 
  children, 
  selectedService, 
  showExpandedToolbar = true, 
  servicesNavigationStep = 0,
  setServicesNavigationStep,
  setSelectedService,
  services = []
}: SwipeablePagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = children.length;
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);
  const [touchEnd, setTouchEnd] = useState<{x: number, y: number} | null>(null);

  // Update current page based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const pageHeight = window.innerHeight;
      const newPage = Math.round(scrollTop / pageHeight);
      
      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current;
      if (!container) return;

      if (e.key === 'ArrowDown' && currentPage < totalPages - 1) {
        container.scrollTo({
          top: (currentPage + 1) * window.innerHeight,
          behavior: 'smooth'
        });
      } else if (e.key === 'ArrowUp' && currentPage > 0) {
        container.scrollTo({
          top: (currentPage - 1) * window.innerHeight,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  // Touch/swipe handlers
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

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const verticalDistance = touchStart.y - touchEnd.y;
    const horizontalDistance = touchStart.x - touchEnd.x;
    
    // Only process vertical swipes for page navigation
    // Don't interfere with horizontal swipes (let services section handle them)
    // Increase threshold to 1.5x to give horizontal swipes more priority
    if (Math.abs(verticalDistance) <= Math.abs(horizontalDistance) * 1.5) return;
    
    const isUpSwipe = verticalDistance > minSwipeDistance;
    const isDownSwipe = verticalDistance < -minSwipeDistance;

    // Special handling for services section (page 1) - be more conservative
    if (currentPage === 1) {
      // Require stronger vertical swipes when on services page
      const strongerThreshold = minSwipeDistance * 1.5;
      if (Math.abs(verticalDistance) < strongerThreshold) return;
    }

    if (isUpSwipe && currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
    if (isDownSwipe && currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };


  const goToPage = (pageIndex: number) => {
    const container = containerRef.current;
    if (!container || pageIndex < 0 || pageIndex >= totalPages) return;
    
    container.scrollTo({
      top: pageIndex * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen">
      {/* Main content container with snap scroll */}
      <div 
        ref={containerRef}
        className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {children.map((child, index) => (
          <div key={index} className="h-screen w-full flex flex-col snap-start">
            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex justify-center items-center">
                <div className="w-full">
                  {child}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Page indicators (dots) - hidden on mobile */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col space-y-2 hidden md:flex">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              currentPage === index 
                ? 'bg-black' 
                : 'bg-black/30 hover:bg-black/50'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Header */}
      <AnimatedHeader 
        currentPage={currentPage} 
        selectedService={selectedService} 
        showExpandedContent={showExpandedToolbar}
        servicesNavigationStep={servicesNavigationStep}
        setServicesNavigationStep={setServicesNavigationStep}
        setSelectedService={setSelectedService}
        services={services}
      />

      {/* Animated Toolbar */}
      <AnimatedToolbar currentPage={currentPage} selectedService={selectedService} showExpandedContent={showExpandedToolbar} />
    </div>
  );
}