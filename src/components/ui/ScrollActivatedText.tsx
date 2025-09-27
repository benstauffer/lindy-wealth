'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrollActivatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollActivatedText({ children, className = '' }: ScrollActivatedTextProps) {
  const [isActive, setIsActive] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Activate when 70% of the element is visible
        setIsActive(entry.isIntersecting && entry.intersectionRatio >= 0.7);
      },
      {
        threshold: [0, 0.3, 0.7, 1],
        rootMargin: '-20% 0px -20% 0px' // Trigger when in middle 60% of viewport
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={textRef} className={`relative pl-8 transition-opacity duration-500 ${
      isActive ? 'opacity-100' : 'opacity-30'
    } ${className}`}>
      {/* Dot indicator */}
      <div 
        className={`absolute left-2 top-2 w-2 h-2 bg-black rounded-full transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className={isActive ? 'opacity-100' : 'opacity-30'}>
        {children}
      </div>
    </div>
  );
}