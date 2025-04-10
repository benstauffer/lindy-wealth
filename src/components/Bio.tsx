'use client'

import { ContactCard } from "@/components/ContactCard";

export function Bio() {
  return (
    <div className="space-y-6 mt-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-lg text-neutral-900" >About Me</h2>
          <p className="text-base text-neutral-700 leading-[1.5]">
          I'm Ben, a Certified Financial Planner™ and the founder of Lindy Wealth. I created Lindy Wealth to empower people through thoughtful, actionable financial planning. I've worked with clients from diverse backgrounds, from individuals just starting their financial journeys to ultra-high-net-worth multigenerational families.
          </p>
        </div>
        <ContactCard />
      </div>
    </div>
  )
}
