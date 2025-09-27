'use client';

import { useEffect, useState, useRef, createContext, useContext } from 'react';

// Throttle function for smooth scroll handling
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
}

interface ScrollActivatedContentContextType {
  activeIndex: number;
  registerElement: (index: number, element: HTMLDivElement) => void;
  unregisterElement: (index: number) => void;
}

const ScrollActivatedContentContext = createContext<ScrollActivatedContentContextType | null>(null);

interface ScrollActivatedContentProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollActivatedContent({ children, className = '' }: ScrollActivatedContentProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const elementsRef = useRef<Map<number, HTMLDivElement>>(new Map());

  const registerElement = (index: number, element: HTMLDivElement) => {
    elementsRef.current.set(index, element);
  };

  const unregisterElement = (index: number) => {
    elementsRef.current.delete(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestIndex = -1;
      let bestScore = Infinity;

      elementsRef.current.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        
        // Only consider elements that are at least partially visible
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
        
        // Calculate how much of the element is visible
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(window.innerHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / rect.height;
        
        // Strong preference for elements in the center third of viewport
        const centerZoneStart = window.innerHeight * 0.3;
        const centerZoneEnd = window.innerHeight * 0.7;
        const inCenterZone = elementCenter >= centerZoneStart && elementCenter <= centerZoneEnd;
        
        // Score calculation: lower is better
        let score = distanceFromCenter;
        
        // Heavy bonus for being in center zone
        if (inCenterZone) {
          score *= 0.3;
        }
        
        // Bonus for high visibility
        score *= (1 - visibilityRatio * 0.5);
        
        // Prevent rapid switching by adding hysteresis
        if (activeIndex === index) {
          score *= 0.7; // Current active element has advantage
        }
        
        if (score < bestScore) {
          bestIndex = index;
          bestScore = score;
        }
      });

      if (bestIndex !== -1 && bestIndex !== activeIndex) {
        setActiveIndex(bestIndex);
      }
    };

    // Use scroll listener instead of intersection observer for more control
    const throttledScroll = throttle(handleScroll, 16); // ~60fps
    
    handleScroll(); // Initial call
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activeIndex]);

  // Calculate dot position aligned with first line vertical middle
  const dotPosition = activeIndex >= 0 && elementsRef.current.has(activeIndex) 
    ? (() => {
        const element = elementsRef.current.get(activeIndex);
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = element.closest('[data-scroll-container]')?.getBoundingClientRect();
          if (containerRect) {
            // Get the first text element (usually a <p> tag)
            const firstTextElement = element.querySelector('p') || element;
            if (firstTextElement) {
              const firstTextRect = firstTextElement.getBoundingClientRect();
              const lineHeight = parseFloat(getComputedStyle(firstTextElement).lineHeight) || 24;
              
              // Position dot at the vertical middle of the first line
              return firstTextRect.top - containerRect.top + (lineHeight / 2) - 4; // -4 to center the 8px dot
            } else {
              // Fallback: position at element top with estimated line height
              return rect.top - containerRect.top + 12;
            }
          }
        }
        return 0;
      })()
    : 0;

  return (
    <ScrollActivatedContentContext.Provider value={{ activeIndex, registerElement, unregisterElement }}>
      <div className={`relative ${className}`} data-scroll-container>
        {/* Single moving dot */}
        <div 
          className={`absolute left-1 w-2.5 h-2.5 bg-black rounded-full transition-all duration-500 ease-out ${
            activeIndex >= 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${dotPosition}px)`,
            transitionProperty: 'transform, opacity'
          }}
        />
        <div className="pl-8">
          {children}
        </div>
      </div>
    </ScrollActivatedContentContext.Provider>
  );
}

interface ScrollActivatedItemProps {
  children: React.ReactNode;
  className?: string;
  index: number;
}

export function ScrollActivatedItem({ children, className = '', index }: ScrollActivatedItemProps) {
  const context = useContext(ScrollActivatedContentContext);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (context && elementRef.current) {
      elementRef.current.dataset.index = index.toString();
      context.registerElement(index, elementRef.current);
      return () => context.unregisterElement(index);
    }
  }, [context, index]);

  const isActive = context?.activeIndex === index;

  return (
    <div 
      ref={elementRef}
      className={`transition-opacity duration-700 ease-out ${
        isActive ? 'opacity-100' : 'opacity-25'
      } ${className}`}
    >
      {children}
    </div>
  );
}