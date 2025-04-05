'use client'

import { FaArrowRight } from "react-icons/fa6";

type FAQCardProps = {
  title: string;
  description: string;
}

export function FAQCard({ title, description }: FAQCardProps) {
  return (
    <div 
      className="group relative rounded-2xl p-6 transition-all bg-white border border-neutral-100 shadow-[0_0_30px_rgba(0,0,0,0.08)] cursor-pointer"
    >
      <div className="flex flex-col h-full space-y-2">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-medium text-neutral-600 group-hover:text-[#FB651F] group-hover:underline transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-base text-neutral-600">
          {description}
        </p>

        <div className="flex items-center space-x-2 text-[#FB651F] font-medium pt-2">
          <span>Review FAQs</span>
          <FaArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}
