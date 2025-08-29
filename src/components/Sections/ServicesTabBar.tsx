'use client'

import React from 'react'
import { Heart, FileText, Calculator, Shield, TrendingUp, Calendar } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Life & Goals Planning',
    description: 'Gain clarity on your priorities and align your financial decisions with what matters most to you and your family'
  },
  {
    icon: FileText,
    title: 'Retirement Planning',
    description: 'Get confidence in your retirement timeline with Monte Carlo projections showing multiple scenarios for your financial independence'
  },
  {
    icon: Calculator,
    title: 'Investment Management',
    description: 'Sleep better with a diversified, low-cost portfolio strategy designed for your risk tolerance and time horizon'
  },
  {
    icon: Shield,
    title: 'Tax Strategy',
    description: 'Optimize your tax efficiency through strategic asset location, harvesting techniques, and planning for major financial decisions'
  },
  {
    icon: TrendingUp,
    title: 'Estate Planning',
    description: 'Protect your family\'s future with appropriate estate planning strategies and ensure your wishes are clearly documented'
  },
  {
    icon: Calendar,
    title: 'Insurance Review',
    description: 'Review your coverage to ensure you have appropriate protection without paying for unnecessary policies or coverage gaps'
  }
]

export function ServicesTabBar() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="space-y-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              {React.createElement(service.icon, { className: "w-6 h-6 text-white", strokeWidth: 1.5 })}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
