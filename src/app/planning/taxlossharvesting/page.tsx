"use client"

import { StrategyPage } from "@/components/ui/StrategyPage";

export default function TaxLossHarvesting() {
  return (
    <StrategyPage strategySlug="taxlossharvesting">
      <p className="text-base leading-relaxed text-white/80">
        Sell losers, buy similar assets, offset gains. Saves thousands annually while maintaining your portfolio allocation.
      </p>
    </StrategyPage>
  )
}
