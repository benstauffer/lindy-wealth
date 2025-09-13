"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import { BackButton } from "@/components/ui/BackButton";
import { StrategiesList } from "@/components/ui/StrategiesList";
import { strategies } from "@/lib/strategies";

export default function Strategies() {

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <div className="flex-1">
        <div className="w-full px-6">
          <div className="max-w-lg mx-auto">
            {/* Back Button */}
            <div className="mt-8 mb-8">
              <BackButton href="/" />
            </div>
            
            {/* Header Section */}
            <div className="space-y-6 mb-8">
              <h1 className="text-2xl font-medium text-white">Planning</h1>
            </div>

            {/* Strategies List */}
            <StrategiesList strategies={strategies} />

          </div>
        </div>
      </div>
      <div className="h-16"></div>
      <FooterSection />
    </div>
  )
}
