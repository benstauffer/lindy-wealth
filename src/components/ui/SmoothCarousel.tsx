'use client';

import React, { useRef, useEffect } from 'react';

interface SmoothCarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function SmoothCarousel({ children, className = '' }: SmoothCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (container.scrollWidth > container.clientWidth) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 0.8;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={className}>
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-y-visible scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollBehavior: 'auto'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {children}
      </div>
    </div>
  );
}