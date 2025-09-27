'use client';

import { useEffect, useState, useRef } from 'react';

export default function ScrollingDot() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100); // Show dot after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed left-8 top-0 h-screen pointer-events-none z-50">
      <div className="relative h-full w-1">
        {/* Background line */}
        <div className="absolute left-0 top-[15%] h-[70%] w-px bg-gray-300"></div>
        
        {/* Moving dot */}
        <div 
          className="absolute w-2 h-2 bg-black rounded-full -translate-x-0.5 transition-all duration-300 ease-out"
          style={{
            top: `${15 + (scrollProgress * 70)}%`,
          }}
        ></div>
      </div>
    </div>
  );
}