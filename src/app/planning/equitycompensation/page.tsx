"use client"

import { StrategyPage } from "@/components/ui/StrategyPage";

export default function EquityCompensation() {
  return (
    <StrategyPage strategySlug="equitycompensation">
      <p className="text-base leading-relaxed text-black/80">
        Max ESPP (15-30% guaranteed). Time option exercises for taxes. Diversify RSUs at vesting. Don't die rich on paper.
      </p>
    </StrategyPage>
  )
}