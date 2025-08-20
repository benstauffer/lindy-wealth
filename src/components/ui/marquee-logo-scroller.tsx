import React from 'react';
import { cn } from '@/lib/utils'; // Assuming a `cn` utility for classnames

// Define the type for individual service props
interface Service {
  name: string;
}

// Define the props for the main component
interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  services: Service[];
  speed?: 'normal' | 'slow' | 'fast';
  itemClassName?: string; // optional override for service text color/styles
  itemGapClassName?: string; // optional override for gap between items
}

/**
 * A responsive, self-contained, and infinitely scrolling marquee component.
 * It pauses on hover and uses shadcn/ui theme variables for styling.
 * This component includes its own CSS animation and does not require tailwind.config.js modifications.
 */
const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, services, speed = 'normal', itemClassName, itemGapClassName, className, ...props }, ref) => {
    // Map speed prop to animation duration
    const durationMap = {
      normal: '40s',
      slow: '130s',
      fast: '5s',
    };
    const animationDuration = durationMap[speed];

    return (
      <>
        {/* The @keyframes for the marquee animation are defined directly here for robustness. */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        
        <section
          ref={ref}
          aria-label={title}
          className={cn(
            'w-full bg-background text-foreground rounded-lg border overflow-hidden',
            className
          )}
          {...props}
        >


          {/* Marquee Section */}
          <div
            className="w-full overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
            }}
          >
            <div 
              className={cn('flex w-max items-center py-4 pr-4 hover:[animation-play-state:paused] transition-all duration-300 ease-in-out', itemGapClassName ?? 'gap-4')} 
              style={{
                animation: `marquee ${animationDuration} linear infinite`,
              }}
            >
              {/* Render services twice to create a seamless loop */}
              {[...services, ...services].map((service, index) => (
                <div
                  key={index}
                  className={cn('flex items-center gap-2 text-lg font-medium', itemClassName ?? 'text-white/60')}
                >
                  <div className="w-2 h-2 bg-blue-500"></div>
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller }; 