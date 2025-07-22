'use client'

import React from 'react'

interface StepCardProps {
  step: number
  title: string
  description: string
  isActive: boolean
}

export const StepCard: React.FC<StepCardProps> = ({ step, title, description, isActive }) => {
  return (
    <div
      className={`p-6 rounded-2xl border transition-all duration-300 ${
        isActive
          ? 'bg-white border-neutral-300 shadow-lg'
          : 'bg-neutral-50 border-neutral-200 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
            isActive
              ? 'bg-lindy-orange-500 text-white'
              : 'bg-neutral-200 text-neutral-600'
          }`}
        >
          {step}
        </div>
        <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
      </div>
      <p className="mt-4 text-neutral-600">{description}</p>
    </div>
  )
} 