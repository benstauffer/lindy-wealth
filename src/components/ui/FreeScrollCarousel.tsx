'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  name: string;
  description: string;
  bgColor: string;
}

interface FreeScrollCarouselProps {
  services: Service[];
  selectedService: string | null;
  onServiceSelect: (serviceId: string | null) => void;
}

export default function FreeScrollCarousel({ services, selectedService, onServiceSelect }: FreeScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const velocity = useRef(0);
  const lastTime = useRef(0);
  const animationFrame = useRef<number | undefined>(undefined);

  useEffect(() => {
    const container = scrollRef.current;
    const servicesSection = document.getElementById('services-section');
    if (!container || !servicesSection) return;

    // Don't auto-select first service on mount - let user scroll to activate

    const updateCarouselBasedOnScroll = () => {
      const sectionRect = servicesSection.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through this section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, -sectionTop / (sectionHeight - windowHeight)));
      
      // Map scroll progress to service index
      const targetIndex = Math.floor(scrollProgress * services.length);
      const clampedIndex = Math.max(0, Math.min(services.length - 1, targetIndex));
      
      // Update carousel position - adjust for mobile vs desktop card widths
      const isMobile = window.innerWidth < 640; // sm breakpoint
      const cardWidth = isMobile ? 384 : 320; // w-96 = 384px on mobile, w-80 = 320px on desktop
      const gap = 16; // gap-4 = 16px
      const scrollPosition = clampedIndex * (cardWidth + gap);
      container.scrollLeft = scrollPosition;
      
      // Don't auto-select - only update when user clicks
    };

    // Update on scroll
    const handleScroll = () => {
      updateCarouselBasedOnScroll();
    };

    // Initial update
    updateCarouselBasedOnScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [services.length]);

  return (
    <div className="flex items-center justify-center overflow-visible h-full" style={{ marginTop: '-60px' }}>
      <div className="w-full overflow-visible relative">
        <div 
          ref={scrollRef}
          className="flex gap-4 items-center pl-[calc(50vw-192px)] pr-[calc(50vw-192px)] sm:pl-[calc(50vw-288px)] sm:pr-[calc(50vw-288px)]"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'auto',
            width: '100vw',
            maxWidth: '100%',
            overflowX: 'scroll',
            overflowY: 'visible'
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="flex-shrink-0 overflow-visible w-96 sm:w-80"
            >
              <button
                onClick={() => onServiceSelect(selectedService === service.id ? null : service.id)}
                className="w-full group text-left overflow-visible "
              >
                <div className="relative overflow-visible py-4">
                  <motion.div 
                    className={`${service.bgColor} p-6 sm:p-6 h-[550px] sm:h-[400px] rounded-lg flex flex-col justify-between`}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 0 20px rgba(0, 0, 0, 0.08)"
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 280,
                      damping: 25
                    }}
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-black leading-tight">{service.name}</h3>
                    </div>
                    <div>
                      <p className="text-sm text-black leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}