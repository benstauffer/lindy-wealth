'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import AnimatedVennDiagram from '@/components/ui/AnimatedVennDiagram';

// Interface for the props of each individual square.
interface SquareProps {
  id: number;
  content: React.ReactNode;
  bgColor: string;
  className: string; // Used for custom positioning of the square.
  label?: string;
}

// Interface for the main component's props.
export interface FloatingSquaresVennProps {
  squares: SquareProps[];
}

// A single square component with its own motion logic
const Square = ({
  mouseX,
  mouseY,
  squareData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  squareData: SquareProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  // Motion values for the square's position, with spring physics for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  // Mouse effects disabled
  React.useEffect(() => {
    // Keep squares in original position
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      key={squareData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('absolute', squareData.className)}
    >
      {/* Static wrapper - no floating animation */}
      <div className="flex flex-col items-center">
        <div className={cn('w-32 h-32 rounded-xl flex items-center justify-center', squareData.bgColor)}>
          {squareData.content}
        </div>
        {squareData.label && (
          <div className="text-xs text-black/60 mt-1 text-center">{squareData.label}</div>
        )}
      </div>
    </motion.div>
  );
};

const FloatingSquaresVenn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingSquaresVennProps
>(({ className, squares, ...props }, ref) => {
  // Refs to track the raw mouse position
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-full h-screen flex items-center justify-center overflow-hidden bg-white',
        className
      )}
      {...props}
    >
      {/* Container for the background floating squares */}
      <div className="absolute inset-0 w-full h-full">
        {squares.map((squareData, index) => (
          <Square
            key={squareData.id}
            mouseX={mouseX}
            mouseY={mouseY}
            squareData={squareData}
            index={index}
          />
        ))}
      </div>

      {/* Container for the foreground content - Venn Diagram */}
      <div className="relative z-10 flex flex-col items-center">
        <AnimatedVennDiagram />
        <div className="text-center mt-4">
          <p className="text-lg leading-normal text-black/70 max-w-sm text-center font-suisse tracking-tight">
            Lindy Wealth provides full service guidance to make your life and your money work better together.
          </p>
        </div>
      </div>
    </section>
  );
});

FloatingSquaresVenn.displayName = 'FloatingSquaresVenn';

export default FloatingSquaresVenn;