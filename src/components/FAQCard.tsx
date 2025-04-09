'use client'

import { FiArrowRight } from "react-icons/fi";

type FAQCardProps = {
  title: string;
  description: string;
}

export function FAQCard({ title, description }: FAQCardProps) {
  return (
    <div 
      className="group relative rounded-2xl p-6 transition-all bg-white border border-neutral-100 shadow-[0_0_20px_rgba(0,0,0,0.06)] cursor-pointer"
    >
      <div className="flex flex-col h-full space-y-1">
        <div className="flex items-center space-x-2">
          <h3 className="flex items-center space-x-3 text-base font-medium text-neutral-700 group-hover:text-red-500 group-hover:underline transition-colors">
            <span>{title}</span>
          </h3>
        </div>
        
        <p className="text-base text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  )
}
