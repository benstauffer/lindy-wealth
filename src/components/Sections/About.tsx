'use client'

import React from 'react'

export function FullPlan() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-lg mx-auto px-4">
        
        {/* Centered title section */}
        <div className="mb-2">
          <h2 className="text-left text-2xl md:text-3xl text-white mb-4 font-medium">
            Keep it simple.
            <br />
            Keep it smart.
          </h2>
        </div>

        {/* Financial Planning Philosophy Content */}
        <div className="mb-12">
          <div className="w-full text-left text-white/90 leading-relaxed">
            <p className="text-xl">
              This should be your financial planning philosophy.<br/><br/>
              Financial planning has become unnecessarily complicated. Much of the complexity has been created by advisors, fintech companies, and the wealth management industry to justify their existence.<br/><br/>
              Most people's financial lives can be addressed with straightforward strategies: save consistently, invest in low-cost diversified funds, optimize taxes, protect against major risks, have a clear retirement plan, and handle estate matters.<br/><br/>
              Instead, advisors recommend complex products, charge expensive AUM fees, and pitch that their sophisticated approach will deliver better outcomes.<br/><br/>
              And guess what? They don't. Over and over again. Why?<br/><br/>
              Because high fees and overcomplicated strategies aren't a winning formula. They eat at your wealth over time.<br/><br/>
              The truth is that simple works. Boring works.<br/><br/>
              Your financial planning philosophy should look like this:<br/><br/>
              1. Build a plan based on your actual goals, not market predictions.<br/><br/>
              2. Stick to simple strategies unless there's compelling evidence something complex will deliver better after-tax, after-fee results.<br/><br/>
              3. Review your plan periodically, not constantly, and question whether complexity is adding value.<br/><br/>
              Financial planning should be simple. Human behavior is typically the problem, not the lack of sophisticated strategies.<br/><br/>
              My goal as a financial planner is to help with what I believe moves the needle:<br/><br/>
              1. Clear roadmap to your financial goals.<br/>
              2. Smart tax planning and education as laws change.<br/>
              3. Keeping you disciplined when markets get volatile.<br/>
              4. Simple strategies that actually work.<br/><br/>
              The increasingly noisy financial media makes us think we need something more complex. We don't.<br/><br/>
              The formula for better financial outcomes = flat fees + simple strategies + comprehensive custom planning.<br/><br/>
              If you take away one thing: Keep It Simple.
            </p>
          </div>
        </div>

        {/* Signature section */}
        <div className="max-w-lg mx-auto text-left">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src="/images/BenHeadshot.png" 
                alt="Ben Stauffer - Financial Planner" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-mono font-medium text-white mb-1">Ben Stauffer, CFP®</p>
              <p className="text-base font-mono leading-tight tracking-tight text-white/80 ">Financial Planner <br />Owner of Lindy Wealth</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
} 