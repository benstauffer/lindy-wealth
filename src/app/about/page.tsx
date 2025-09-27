"use client"

import SwipeablePages from "@/components/ui/SwipeablePages";
import AnimatedVennDiagram from "@/components/ui/AnimatedVennDiagram";

export default function About() {
  return (
    <SwipeablePages selectedService={null} showExpandedToolbar={false}>
      {/* Section 1: Hero */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div className="mb-2">
          <p style={{ lineHeight: 1.1 }} className="text-5xl leading-tight text-black/80 font-suisse tracking-tight">
            Financial Planning 
            <br/>
            That Makes Sense
          </p>
        </div>
      </div>

      {/* Section 2: Venn Diagram */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <AnimatedVennDiagram />
        <div className="flex justify-center mt-8">
          <p className="text-base leading-normal text-black/70 max-w-md text-center font-suisse tracking-tight">
            Lindy Wealth provides comprehensive financial guidance to make your life and your money work better together.
          </p>
        </div>
      </div>

      {/* Section 3: Essay */}
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full pl-4 text-left space-y-8 text-lg text-black/80">
          <p className="text-base text-black/90">
            Keep it simple. Your life is complex enough.
          </p>
          
          <p className="text-base text-black/90">
            The financial services industry often adds layers of complexity through high fees, products, and market predictions to justify its existence. But complexity doesn't mean better results.
          </p>

          <p className="text-base text-black/90">
            Good financial planning comes down to the fundamentals: define your goals, save consistently, invest in low-cost, diversified funds, adapt as tax laws change, protect against major risks, and plan intentionally for retirement and legacy.
          </p>

          <p className="text-base text-black/90">
            At Lindy Wealth, I provide flat-fee financial planning that starts with your goals, not market predictions. Strategies stay simple unless complexity clearly improves after-tax, after-fee results. We build a tailored asset mix, review plans periodically, and always question whether complexity adds value.
          </p>

          <p className="text-base text-black/90">
            My goal is to help you reach your objectives, make tax-smart decisions, and bring clarity to your financial plan.
          </p>

          <p className="text-base text-black/90">
            Flat fees + proven tax strategies + custom planning = the Lindy way.
          </p>

          <p className="text-base text-black/90">
            One takeaway: Keep It Simple.
          </p>
          
          <p className="text-base text-black/90">
            - Ben Stauffer
          </p>
        </div>
      </div>
    </SwipeablePages>
  )
}