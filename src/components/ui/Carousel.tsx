"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  itemWidth?: number;
  gap?: number;
  showControls?: boolean;
}

export function Carousel({
  children,
  className = "",
  itemWidth = 340, // Default card width
  gap = 16,        // Gap between items
  showControls = false // Default to no controls
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft <
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      checkScrollButtons();
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      
      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -itemWidth - gap : itemWidth + gap;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    if (scrollRef.current) {
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className={`relative w-full overflow-visible ${className}`}>
      {showControls && (
        <>
          <button
            onClick={() => scroll("left")}
            className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-opacity duration-300 ${
              canScrollLeft ? "opacity-70 hover:opacity-100" : "opacity-0 cursor-default"
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-opacity duration-300 ${
              canScrollRight ? "opacity-70 hover:opacity-100" : "opacity-0 cursor-default"
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="hide-scrollbar flex w-full overflow-x-auto touch-pan-x"
        style={{ 
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory", 
          scrollPaddingLeft: "16px",
          WebkitOverflowScrolling: "touch"
        }}
        onScroll={checkScrollButtons}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {children.map((child, index) => (
          <div
            key={index}
            style={{ 
              flex: `0 0 ${itemWidth}px`,
              marginRight: `${gap}px`,
              scrollSnapAlign: "start"
            }}
            className="transition-transform duration-300 ease-out"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
} 