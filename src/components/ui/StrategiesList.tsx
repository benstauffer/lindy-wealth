'use client'

import Link from "next/link"

interface Strategy {
  id: string;
  number: string;
  title: string;
  slug: string;
}

interface StrategiesListProps {
  strategies: Strategy[];
  expandedStrategy?: string; // Which strategy should show expanded content
  children?: React.ReactNode; // Content to show below the expanded strategy
}

export function StrategiesList({ strategies, expandedStrategy, children }: StrategiesListProps) {
  return (
    <div className="space-y-1">
      {strategies.map((strategy) => (
        <div key={strategy.id} className="">
          <div className="">
            <div className="flex items-start gap-2">
              <span className="text-base text-black/60">
                {strategy.number}.
              </span>
              <Link 
                href={`/planning/${strategy.slug}`}
                className="text-base text-black/80 hover:text-black/60 transition-colors"
              >
                {strategy.title}
              </Link>
            </div>
            
            {/* Expanded content for the specified strategy */}
            {expandedStrategy && strategy.slug === expandedStrategy && children && (
              <div className="mt-6 ml-6 mb-6">
                {children}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
