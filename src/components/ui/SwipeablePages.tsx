'use client';

import React, { useEffect, useRef, useState } from 'react';
import AnimatedToolbar from './AnimatedToolbar';

interface SwipeablePagesProps {
  children: React.ReactNode[];
  selectedService: string | null;
  showExpandedToolbar?: boolean;
}



export default function SwipeablePages({ children, selectedService, showExpandedToolbar = true }: SwipeablePagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = children.length;

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
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
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

      {/* Page indicators (dots) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-2">
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

      {/* Animated Toolbar */}
      <AnimatedToolbar currentPage={currentPage} selectedService={selectedService} showExpandedContent={showExpandedToolbar} />
    </div>
  );
}