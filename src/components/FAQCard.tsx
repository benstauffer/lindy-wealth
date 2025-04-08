'use client'

import { FiArrowRight } from "react-icons/fi";

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
          <h3 className="font-['Georgia'] flex items-center space-x-3 text-lg font-medium text-neutral-700 group-hover:text-red-500 group-hover:underline transition-colors">
            <span>{title}</span>
          </h3>
        </div>
        
        <p className="text-base text-neutral-700 font-['Georgia']">
          {description}
        </p>
      </div>
    </div>
  )
}
