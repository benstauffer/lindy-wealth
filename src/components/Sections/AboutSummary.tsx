'use client'

import React, { useEffect, useRef, useState } from 'react'
import { DigitalAssetsGraphic } from '../Graphics/DigitalAssetsGraphic'

// Add CSS animations for the cards
const cardAnimations = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
  }
  
  .animate-delay-1 {
    animation-delay: 0.2s;
  }
  
  .animate-delay-2 {
    animation-delay: 0.4s;
  }
  
  .animate-delay-3 {
    animation-delay: 0.6s;
  }
`;

export function AboutSummarySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#F1F0EA] pb-20 md:pb-32" data-section="about-summary">
      <style>{cardAnimations}</style>
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full space-y-4">
          
          {/* Centered Intro Text */}
          <div className="text-center py-8 md:py-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-black font-medium leading-tight tracking-tight mt-12">
              Three ways 
              <br />
              I can help you.
            </h2>
          </div>

          {/* Financial Plan Graphic
          <div className="flex justify-center py-8 md:py-16">
            <DigitalAssetsGraphic />
          </div>
          */}

          {/* Staggered Text Sections */}
          <div className="space-y-20 md:space-y-40 py-8 md:py-16">
            
            {/* Section 1: Full Service Planning - Left Aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="space-y-4 order-1">
                <h2 className="text-2xl md:text-5xl text-black font-medium leading-tight tracking-tight">
                  Full-service planning. Coordinated and built around <span className="italic">you</span>.
                </h2>
                <p className="text-base md:text-lg text-black/80 tracking-tight">
                  I help clients with the 
                  key areas to help you get the most out of life: your cash flow, how your investments 
                  are structured, where your taxes can be optimized, and protection strategies. All to 
                  make sure your finances are optimized and clear so you can have the confidence to 
                  focus on what matters most to you.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end order-2 lg:order-2">
                <div className="space-y-2 w-96">
                  {/* Cash Flow Planning Pill - Left */}
                  <div className={`bg-[#9893A5] px-3 py-2 flex items-center justify-between mr-12 ${isVisible ? 'animate-slide-in-right animate-delay-1' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                      </div>
                      <div>
                        <div className="text-sm text-black">Cash Flow Planning</div>
                        <div className="text-sm text-black/80">Optimize your spending</div>
                      </div>
                    </div>
                  </div>

                  {/* Investment Management Pill - Right */}
                  <div className={`bg-[#17A7FF] px-3 py-2 flex items-center justify-between ml-12 ${isVisible ? 'animate-slide-in-right animate-delay-2' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                      </div>
                      <div>
                        <div className="text-sm text-white">Investment Management</div>
                        <div className="text-sm text-white/80">Low-cost & globally diversified</div>
                      </div>
                    </div>
                  </div>

                  {/* Tax & Protection Pill - Left */}
                  <div className={`bg-[#D0D6E5] px-3 py-2 flex items-center justify-between mr-12 ${isVisible ? 'animate-slide-in-right animate-delay-3' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                      </div>
                      <div>
                        <div className="text-sm text-white">Tax & Protection</div>
                        <div className="text-sm text-white/80">Optimization & strategies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Early Retirement - Right Aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="space-y-2 w-96">
                  {/* Tax-Efficient Funds Pill - Left */}
                  <div className={`bg-[#9893A5] px-3 py-2 flex items-center justify-between ml-12 ${isVisible ? 'animate-slide-in-left animate-delay-1' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-black">Tax-Efficient Funds</div>
                        <div className="text-sm text-black/80">ETFs & index funds</div>
                      </div>
                    </div>
                  </div>

                  {/* Asset Location Pill - Right */}
                  <div className={`bg-[#17A7FF] px-3 py-2 flex items-center justify-between mr-12 ${isVisible ? 'animate-slide-in-left animate-delay-2' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-white">Asset Location</div>
                        <div className="text-sm text-white/80">Tax-optimized placement</div>
                      </div>
                    </div>
                  </div>

                  {/* Tax-Loss Harvesting Pill - Left */}
                  <div className={`bg-[#D0D6E5] px-3 py-2 flex items-center justify-between ml-12 ${isVisible ? 'animate-slide-in-left animate-delay-3' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-white">Tax-Loss Harvesting</div>
                        <div className="text-sm text-white/80">Annual optimization</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-2xl md:text-5xl text-black font-medium leading-tight tracking-tight">
                  Tax-Efficient Portfolios.
                </h2>
                <p className="text-base md:text-lg text-black/80 tracking-tight">
                My investment process is built on simplicity, evidence, and discipline. Markets generally work, costs and taxes matter, and long-term investing beats short-term movements, but only if you can survive the journey. That's why I tailor portfolios to your goals and manage risk to help you stay invested during turbulent times. I reject promises to "beat the market" and instead focus on building custom, globally diversified, low-cost, tax-efficient portfolios.</p>
              </div>
            </div>

            {/* Section 3: High-Earning Households - Left Aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="space-y-6 order-1">
                <h2 className="text-2xl md:text-5xl text-black font-medium leading-tight tracking-tight">
                  Receive A Free Assessment.
                </h2>
                <p className="text-base md:text-lg text-black/80 tracking-tight">
                If you're not 100% confident in your current financial plan or just want a second opinion, I offer a free, no strings attached assessment of your plan. There's no hard sell or pressure to say yes. Just thoughtful conversations, honest feedback, and a chance for you to see how I work. Whether we move forward together or not, my goal is for you to walk away feeling clearer and glad we connected.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end order-2">
                <div className="space-y-2 w-96">
                  {/* Free Review Pill - Left */}
                  <div className={`bg-[#9893A5] px-3 py-2 flex items-center justify-between mr-12 ${isVisible ? 'animate-slide-in-right animate-delay-1' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-black">Free Plan Review</div>
                        <div className="text-sm text-black/80">No strings attached</div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Assessment Pill - Right */}
                  <div className={`bg-[#17A7FF] px-3 py-2 flex items-center justify-between ml-12 ${isVisible ? 'animate-slide-in-right animate-delay-2' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-white">Risk Assessment</div>
                        <div className="text-sm text-white/80">Identify potential issues</div>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps Pill - Left */}
                  <div className={`bg-[#D0D6E5] px-3 py-2 flex items-center justify-between mr-12 ${isVisible ? 'animate-slide-in-right animate-delay-3' : ''} opacity-0`}>
                    <div className="flex items-center space-x-8">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
 
                      </div>
                      <div>
                        <div className="text-sm text-white">Next Steps</div>
                        <div className="text-sm text-white/80">Clear action plan</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
} 