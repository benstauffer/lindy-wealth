'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface ProcessCardProps {
  variant: 'step' | 'outcome' | 'benefit'
  number?: string
  title: string
  description: string | string[]
  index?: number
}

export function ProcessCard({ variant, number, title, description, index }: ProcessCardProps) {
  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <div className="space-y-2">
          {description.map((item, itemIndex) => (
            <p key={itemIndex} className="text-neutral-400 text-sm leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      )
    }
    return <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
  }

  const IconDisplay = () => {
    switch (variant) {
      case 'benefit':
        return <Check className="w-8 h-8 text-orange-600" strokeWidth={2.5} />;
      default:
        const displayNumber = (variant === 'step' && index !== undefined) ? index + 1 : number;
        return <span className="text-3xl font-bold text-black">{displayNumber}</span>;
    }
  };

  const squareBgClass = variant === 'benefit' ? 'bg-white' : 'bg-gray-50';

  return (
    <div className="bg-black p-6 flex items-center gap-6 h-full border border-gray-200 shadow-sm rounded-3xl">
      {/* Left Side: Indicator Square */}
      <div className={`w-20 h-24 flex-shrink-0 flex items-center justify-center ${squareBgClass} rounded-full`}>
        <IconDisplay />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        {renderDescription()}
      </div>
    </div>
  )
} 