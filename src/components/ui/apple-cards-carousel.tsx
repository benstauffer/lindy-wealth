"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: () => void;
  currentIndex: number;
  isMobileView: boolean;
}>({
  onCardClose: () => {},
  currentIndex: 0,
  isMobileView: false,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Minimum swipe distance
  const minSwipeDistance = 30;

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  // Center the active card on mobile when currentIndex changes
  useEffect(() => {
    if (isMobileView && carouselRef.current && !isScrolling) {
      centerActiveCard();
    }
  }, [currentIndex, isMobileView]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      
      // Calculate current index based on scroll position
      if (items.length > 0) {
        const cardWidth = carouselRef.current.scrollWidth / items.length;
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(Math.min(index, items.length - 1));
      }
    }
  };

  const centerActiveCard = () => {
    if (carouselRef.current && items.length > 0) {
      const container = carouselRef.current;
      const viewportWidth = window.innerWidth;
      const cardWidth = viewportWidth * 0.75; // 75vw
      const gap = 24; // gap-6 = 1.5rem = 24px
      const padding = viewportWidth * 0.06; // roughly equivalent to px-6 on mobile
      
      // Calculate the target scroll position
      const targetScroll = (currentIndex * (cardWidth + gap)) - ((viewportWidth - cardWidth) / 2) + padding;
      
      setIsScrolling(true);
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
      
      // Reset scrolling state after animation completes
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= items.length) return;
    
    setCurrentIndex(index);
    if (carouselRef.current) {
      const container = carouselRef.current;
      const viewportWidth = window.innerWidth;
      const cardWidth = viewportWidth * 0.75; // 75vw
      const gap = 24; // gap-6 = 1.5rem = 24px
      const padding = viewportWidth * 0.06; // roughly equivalent to px-6 on mobile
      
      // Calculate the target scroll position
      const targetScroll = (index * (cardWidth + gap)) - ((viewportWidth - cardWidth) / 2) + padding;
      
      setIsScrolling(true);
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
      
      // Reset scrolling state after animation completes
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  const handleCardClose = () => {
    // Just maintain the current index
  };

  // Touch event handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentIndex < items.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex, isMobileView }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
          onScroll={() => {
            if (!isScrolling) {
              checkScrollability();
            }
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={cn(
              "flex flex-row gap-6",
              "w-full max-w-6xl mx-auto",
              "pt-2 pb-2",
              "px-6 sm:px-8 lg:px-12 xl:px-0"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                key={"card" + index}
                className={cn(
                  "rounded-3xl flex-shrink-0",
                  "w-[75vw] sm:w-[calc(100vw-4rem)] lg:w-auto",
                  index === items.length - 1 && !isMobileView ? "xl:pr-[33%]" : ""
                )}
              >
                <div className="p-0">
                  {item}
                </div>
              </motion.div>
            ))}
            
            {/* Extra spacer at the end for proper centering of last item */}
            {isMobileView && <div className="w-6 flex-shrink-0" />}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
  className,
  showExpandIcon = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
  className?: string;
  showExpandIcon?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Check for mobile screens
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener('resize', checkMobile);
    };
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/40 h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              ref={containerRef}
              className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 h-[90vh] z-[60] fixed inset-x-0 bottom-0 rounded-t-[2rem] overflow-auto p-4 md:p-8"
            >
              <button
                className="absolute top-4 md:top-8 right-4 md:right-8 h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-5 w-5 text-white dark:text-black" />
              </button>
              
              <div className="mt-4">
                <motion.p
                  className="text-base font-medium text-neutral-500 dark:text-neutral-400"
                >
                  {card.category}
                </motion.p>
                <motion.h2
                  className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2"
                >
                  {card.title}
                </motion.h2>
                <div className="mt-6 md:mt-8">{card.content}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className={cn(
          "bg-white dark:bg-neutral-900 overflow-hidden flex flex-col relative z-10 p-0",
          className
        )}
      >
        <div 
          className="relative w-full h-full rounded-2xl"
          style={{ 
            backgroundColor: "#f3f4f6"
          }}
        />
        <div className="px-4 py-5 w-full">
          <div className="flex justify-between items-center">
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-black dark:text-white text-lg md:text-xl font-semibold text-left [text-wrap:balance] font-sans mr-3"
            >
              {card.title}
            </motion.p>
            
            {showExpandIcon && (
              <div className="flex items-center flex-shrink-0">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-neutral-600 dark:text-neutral-300"
                >
                  <path 
                    d="M7 17L17 7M17 7H8M17 7V16" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans text-left mt-1"
          >
            {card.category}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};