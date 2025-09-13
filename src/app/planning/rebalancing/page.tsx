"use client"

import { StrategyPage } from "@/components/ui/StrategyPage";

export default function Rebalancing() {
  return (
    <StrategyPage strategySlug="rebalancing">
      <p className="text-base leading-relaxed text-white/80">
        Systematic buy low, sell high. Captures volatility premium adding 0.5-1.5% annually while maintaining target risk.
      </p>
    </StrategyPage>
  )
}