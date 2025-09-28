'use client';

import React, { useRef, useLayoutEffect, useState } from 'react';
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
  servicesNavigationStep?: number; // 1-based
}

export default function FreeScrollCarousel({
  services,
  selectedService,
  onServiceSelect,
  servicesNavigationStep = 0,
}: FreeScrollCarouselProps) {
  const currentIndex = servicesNavigationStep >= 1 ? servicesNavigationStep - 1 : 0;

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [x, setX] = useState(0);

  // compute center using real offsets (accounts for true gap, borders, etc.)
  const recalc = () => {
    const container = containerRef.current;
    const track = trackRef.current;
    const card = cardRefs.current[currentIndex];
    if (!container || !track || !card) return;

    const containerW = container.clientWidth;
    const cardLeft = card.offsetLeft;        // position within track (includes gap)
    const cardW = card.offsetWidth;          // wrapper width (not scaled inner)
    const centerOfCard = cardLeft + cardW / 2;

    // shift the whole track so the card center lands at container center
    const targetX = containerW / 2 - centerOfCard;

    // avoid subpixel fuzz
    setX(Math.round(targetX));
  };

  useLayoutEffect(() => {
    recalc();
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ro1 = new ResizeObserver(recalc);
    const ro2 = new ResizeObserver(recalc);
    ro1.observe(container);
    ro2.observe(track);

    // fonts/images/layout shifts
    window.addEventListener('load', recalc);
    window.addEventListener('resize', recalc);

    return () => {
      ro1.disconnect();
      ro2.disconnect();
      window.removeEventListener('load', recalc);
      window.removeEventListener('resize', recalc);
    };
  }, [currentIndex, services.length]);

  if (!services?.length) return null;

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden flex items-center">
      <motion.div
        ref={trackRef}
        className="flex items-center gap-8 will-change-transform"
        animate={{ x }}
        initial={false}
        transition={{ type: 'spring', stiffness: 250, damping: 30 }}
      >
        {services.map((service, i) => (
          <div
            key={service.id}
            ref={(el) => { if (el) cardRefs.current[i] = el; }}
            className="w-80 flex-shrink-0"
          >
            <button
              onClick={() => onServiceSelect(selectedService === service.id ? null : service.id)}
              className="w-full group text-left"
            >
              <motion.div
                className={`${service.bgColor} p-6 h-[350px] sm:h-[400px] rounded-lg flex flex-col justify-between origin-center`}
                animate={{
                  opacity: i === currentIndex ? 1 : 0.45,
                  scale: i === currentIndex ? 1.05 : 0.96,
                  filter: i === currentIndex ? 'blur(0px)' : 'blur(1px)',
                  zIndex: i === currentIndex ? 10 : 1,
                }}
                whileHover={{ scale: i === currentIndex ? 1.08 : 0.98 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-black leading-tight font-mono">
                    {service.name}
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-black leading-relaxed font-mono">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
