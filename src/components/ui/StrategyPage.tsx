'use client'

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import { BackButton } from "@/components/ui/BackButton";
import { StrategiesList } from "@/components/ui/StrategiesList";
import { strategies } from "@/lib/strategies";

interface StrategyPageProps {
  strategySlug: string;
  children: React.ReactNode; // Just the content paragraph
}

export function StrategyPage({ strategySlug, children }: StrategyPageProps) {

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1">
        <div className="max-w-lg mx-auto px-4">
          {/* Back Button */}
          <div className="mt-8 mb-8">
            <BackButton href="/planning" />
          </div>

          {/* Header Section */}
          <div className="space-y-6 mb-8">
            <h1 className="text-2xl font-medium text-black">
              Planning
            </h1>
          </div>

          {/* Strategies List */}
          <StrategiesList 
            strategies={strategies} 
            expandedStrategy={strategySlug}
          >
            {children}
          </StrategiesList>

        </div>
      </div>
      <div className="h-16"></div>
      <FooterSection />
    </div>
  )
}
