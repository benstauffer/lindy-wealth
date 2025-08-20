'use client'

import React, { useEffect, useRef, useState } from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { AumCalculatorSection } from './AumCalculatorSection'

// Add CSS animations for the cards (natural, spring-like)
const cardAnimations = `
  @keyframes springInLeft {
    0% { opacity: 0; transform: translateX(-28px) translateY(8px) scale(0.96) rotate(-0.8deg); filter: blur(6px); }
    60% { opacity: 1; transform: translateX(3px) translateY(-1px) scale(1.015) rotate(0.15deg); filter: blur(0px); }
    84% { transform: translateX(0px) translateY(0px) scale(0.997) rotate(0deg); }
    100% { opacity: 1; transform: translateX(0px) translateY(0px) scale(1) rotate(0deg); filter: blur(0px); }
  }
  @keyframes springInRight {
    0% { opacity: 0; transform: translateX(28px) translateY(8px) scale(0.96) rotate(0.8deg); filter: blur(6px); }
    60% { opacity: 1; transform: translateX(-3px) translateY(-1px) scale(1.015) rotate(-0.15deg); filter: blur(0px); }
    84% { transform: translateX(0px) translateY(0px) scale(0.997) rotate(0deg); }
    100% { opacity: 1; transform: translateX(0px) translateY(0px) scale(1) rotate(0deg); filter: blur(0px); }
  }
  .animate-spring-in-left { animation: springInLeft 800ms cubic-bezier(.22,.8,.28,1) both; will-change: transform, opacity, filter; }
  .animate-spring-in-right { animation: springInRight 800ms cubic-bezier(.22,.8,.28,1) both; will-change: transform, opacity, filter; }
  .animate-delay-1 { animation-delay: 0.12s; }
  .animate-delay-2 { animation-delay: 0.28s; }
  .animate-delay-3 { animation-delay: 0.44s; }
  .pill { transition: transform 260ms cubic-bezier(.2,.8,.2,1), box-shadow 260ms cubic-bezier(.2,.8,.2,1); box-shadow: 0 0 0 rgba(0,0,0,0); }
  .pill:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 10px 20px rgba(0,0,0,0.06); }
  @media (prefers-reduced-motion: reduce) { .animate-spring-in-left, .animate-spring-in-right { animation: none; opacity: 1 !important; transform: none !important; filter: none !important; } }
`;

export function FeeComparisonSection() {
  const group1Ref = useRef<HTMLDivElement>(null);
  const group2Ref = useRef<HTMLDivElement>(null);
  const group3Ref = useRef<HTMLDivElement>(null);
  const [visibleGroup1, setVisibleGroup1] = useState(false);
  const [visibleGroup2, setVisibleGroup2] = useState(false);
  const [visibleGroup3, setVisibleGroup3] = useState(false);

  const feeData = [
    { assets: '$1,000,000', percentage: '1.00%', amount: '$10,000' },
    { assets: '$2,000,000', percentage: '0.91%', amount: '$18,200' },
    { assets: '$5,000,000', percentage: '0.84%', amount: '$42,000' },
    { assets: '$10,000,000', percentage: '0.69%', amount: '$69,000' },
    { assets: '$20,000,000', percentage: '0.65%', amount: '$130,000' },
  ]

  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px',
    };

    const makeObserver = (
      el: Element | null,
      setter: (v: boolean) => void
    ): IntersectionObserver | null => {
      if (!el) return null;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setter(true);
          obs.unobserve(entry.target);
        }
      }, options);
      obs.observe(el);
      return obs;
    };

    const o1 = makeObserver(group1Ref.current, setVisibleGroup1);
    const o2 = makeObserver(group2Ref.current, setVisibleGroup2);
    const o3 = makeObserver(group3Ref.current, setVisibleGroup3);

    return () => {
      o1?.disconnect();
      o2?.disconnect();
      o3?.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-[#F1F0EA] pb-20 md:pb-32">
      <style>{cardAnimations}</style>
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full space-y-4">
          
          {/* Title Section */}
          <div className="text-center py-8 md:py-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-black font-medium leading-tight tracking-tight mt-12 mb-6">
            A better way to
                  <br />
                  pay for advice
            </h2>
          </div>
          
          {/* Staggered Text Sections */}
          <div className="space-y-20 md:space-y-40 py-8 md:py-16">
            
            
            {/* Section 1: How Our Fee Works - Left Aligned */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="space-y-4 order-1">
                <h2 className="text-3xl md:text-5xl text-black font-medium leading-tight tracking-tight">
                  
                  How our flat 
              <br />
              fee works

                </h2>
                <p className="text-base md:text-lg text-black/80 tracking-tight mb-6">
                  Lindy assess an annual fee of $5,000 per year, paid quarterly. One fee covers an entire household and all services.
                </p>
                <p className="text-base md:text-lg text-black/70 tracking-tight">
                  And because I serve as fiduciary, I receive no commissions, kick-backs, sales charges, or hidden fees.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end order-2 lg:order-2">
                <div ref={group1Ref} className="space-y-6 w-[28rem]">
                  {/* Pill 1 */}
                  <div className={`pill bg-white pl-4 pr-2 py-4 rounded-full flex items-center justify-between mr-12 ${visibleGroup1 ? 'animate-spring-in-right animate-delay-1' : ''} opacity-0`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5BD363' }}>
                        <IoMdCheckmark className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-base text-black">$5,000/year</div>
                        <div className="text-sm text-black/50">Fixed annual fee</div>
                      </div>
                    </div>
                  </div>

                  {/* Pill 2 */}
                  <div className={`pill bg-white pl-4 pr-2 py-4 rounded-full flex items-center justify-between ml-12 ${visibleGroup1 ? 'animate-spring-in-right animate-delay-2' : ''} opacity-0`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#17A7FF' }}>
                        <IoMdCheckmark className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-base text-black">No Asset Limits</div>
                        <div className="text-sm text-black/50">Entire household covered</div>
                      </div>
                    </div>
                  </div>

                  {/* Pill 3 */}
                  <div className={`pill bg-white pl-4 pr-2 py-4 rounded-full flex items-center justify-between mr-12 ${visibleGroup1 ? 'animate-spring-in-right animate-delay-3' : ''} opacity-0`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9893A5' }}>
                        <IoMdCheckmark className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-base text-black">Fee-Only Fiduciary</div>
                        <div className="text-sm text-black/50">No commissions or kickbacks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider between sections */}
            <div className="h-px bg-black/10" />

            {/* Section 2: How Much Did You Pay - Right Aligned */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div ref={group2Ref} className="space-y-6 w-[28rem]">
                  
                  {/* Fee Table */}
                  <div className={`pill bg-white p-6  ${visibleGroup2 ? 'animate-spring-in-left animate-delay-1' : ''} opacity-0`}>
                    <h4 className="text-lg font-medium text-black mb-4">Industry Average AUM Fees</h4>
                    <div className="space-y-3">
                      {feeData.map((row, index) => (
                        <div key={index} className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-black">{row.assets}</div>
                          <div className="text-black text-center">{row.percentage}</div>
                          <div className="text-black text-right font-medium">{row.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl text-black font-medium leading-tight tracking-tight">
                  How Much Did You Pay
                  <br />
                  Your Advisor Last Year?
                </h2>
                <p className="text-base md:text-lg text-black/80 tracking-tight">
                  Most financial advisors hide their true costs behind confusing percentage fees. Instead of telling you exactly what you'll pay, they charge a percentage of your total assets—meaning your fees grow every year as your wealth grows.
                </p>
              </div>
            </div>

            {/* Divider between sections */}
            <div className="h-px bg-black/10" />

            {/* Section 3: Are AUM Fees Destroying Your Wealth - Left Aligned */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
              <div className="space-y-6 order-1">
                <h2 className="text-3xl md:text-5xl text-black font-medium leading-tight tracking-tight">
                  Are AUM Fees
                  <br />
                  Destroying Your Wealth?
                </h2>
                <p className="text-base md:text-lg text-black/80 tracking-tight">
                  These seemingly small numbers are destroying your wealth. For many HNW investors their largest discretionary expense is the fee they pay their advisor.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end order-2">
                <div ref={group3Ref} className="space-y-6 w-[28rem]">
                  
                  {/* Problem Pills */}
                  <div className={`pill bg-white pl-4 pr-2 py-4 rounded-full flex items-center justify-between mr-12 ${visibleGroup3 ? 'animate-spring-in-right animate-delay-1' : ''} opacity-0`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FB651F' }}>
                        <span className="text-white text-lg">!</span>
                      </div>
                      <div>
                        <div className="text-base text-black">Fees compound against you</div>
                        <div className="text-sm text-black/50">Higher assets = higher fees forever</div>
                      </div>
                    </div>
                  </div>

                  <div className={`pill bg-white pl-4 pr-2 py-4 rounded-full flex items-center justify-between ml-12 ${visibleGroup3 ? 'animate-spring-in-right animate-delay-2' : ''} opacity-0`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FB651F' }}>
                        <span className="text-white text-lg">!</span>
                      </div>
                      <div>
                        <div className="text-base text-black">Your success costs you more</div>
                        <div className="text-sm text-black/50">Penalized for growing wealth</div>
                      </div>
                    </div>
                  </div>

                  <div className={`pill bg-white pl-4 pr-2 py-4 rounded-full flex items-center justify-between mr-12 ${visibleGroup3 ? 'animate-spring-in-right animate-delay-3' : ''} opacity-0`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FB651F' }}>
                        <span className="text-white text-lg">!</span>
                      </div>
                      <div>
                        <div className="text-base text-black">Same advice, higher price</div>
                        <div className="text-sm text-black/50">Work doesn't scale with assets</div>
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
