'use client'

import React, { useMemo, useState } from 'react'
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

type YearPoint = { year: number; aum: number; flat: number }

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value)
}

function formatCurrencyNoDecimals(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatCurrencyCompact(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}

function clamp(min: number, value: number): number {
  return Math.max(min, value)
}

export function AumCalculator(): React.ReactElement {
  const [initialValueInput, setInitialValueInput] = useState<string>('1000000')
  const [avgReturn, setAvgReturn] = useState<number>(0.06)
  const flatStartFee = 5000 // $5,000 per year start
  const years = 30

  const initialValue = clamp(500000, Number(initialValueInput || 0))

  // Industry standard AUM fee rates based on AdvisoryHQ data
  const getAumFeeRate = (assets: number): number => {
    if (assets <= 50000) return 0.0118     // 1.18%
    if (assets <= 100000) return 0.0112    // 1.12%
    if (assets <= 150000) return 0.0109    // 1.09%
    if (assets <= 250000) return 0.0107    // 1.07%
    if (assets <= 500000) return 0.0105    // 1.05%
    if (assets <= 1000000) return 0.0102   // 1.02%
    if (assets <= 1500000) return 0.0094   // 0.94%
    if (assets <= 2000000) return 0.0091   // 0.91%
    if (assets <= 2500000) return 0.0088   // 0.88%
    if (assets <= 5000000) return 0.0084   // 0.84%
    if (assets <= 7500000) return 0.0077   // 0.77%
    if (assets <= 10000000) return 0.0069  // 0.69%
    if (assets <= 20000000) return 0.0065  // 0.65%
    if (assets <= 30000000) return 0.0059  // 0.59%
    return 0.0059 // 0.59% for portfolios above $30M
  }

  const computeAnnualAumFeeDollars = (value: number): number => {
    return value * getAumFeeRate(value)
  }

  const getTieredAumRate = (value: number): number => {
    if (value <= 0) return 0
    return computeAnnualAumFeeDollars(value) / value
  }

  const series: YearPoint[] = useMemo(() => {
    const points: YearPoint[] = []
    let aum = initialValue
    let flat = initialValue
    const quarterlyReturn = Math.pow(1 + avgReturn, 1 / 4) - 1

    // Charge initial fees at start
    const initialFlatFee = flatStartFee / 4
    const initialAumFee = computeAnnualAumFeeDollars(aum) / 4
    aum = aum - initialAumFee
    flat = flat - initialFlatFee

    points.push({ year: 0, aum, flat })

    for (let y = 1; y <= years; y += 1) {
      const feeThisYearFlat = flatStartFee * Math.pow(1.03, y - 1)
      for (let q = 0; q < 4; q += 1) {
        // Apply growth first
        aum = aum * (1 + quarterlyReturn)
        flat = flat * (1 + quarterlyReturn)
        
        // Then charge quarterly fees
        const aumQuarterlyFee = computeAnnualAumFeeDollars(aum) / 4
        const flatQuarterlyFee = feeThisYearFlat / 4
        
        aum = aum - aumQuarterlyFee
        flat = flat - flatQuarterlyFee
      }
      points.push({ year: y, aum, flat })
    }
    return points
  }, [initialValue, years, avgReturn])

  const end = series[series.length - 1]
  const diff = end.flat - end.aum

  // Simple SVG render
  const chartConfig = {
    aum: { label: 'Traditional AUM fee', color: '#9CA3AF' },
    flat: { label: 'Flat fee', color: '#17A7FF' },
  } as const

  // Tighter Y-domain to better highlight the gap between lines
  const yDomain = useMemo<[number, number]>(() => {
    const startMin = Math.min(series[0]?.aum ?? 0, series[0]?.flat ?? 0)
    const allValues = series.flatMap((p) => [p.aum, p.flat])
    const max = Math.max(...allValues)
    const lower = startMin * 0.9 // start a bit below initial value to compress range
    const upper = max * 1.05 // small headroom above max
    return [lower, upper]
  }, [series])

  // all selects below use the Radix Select UI from ui/select

  return (
    <div className="mt-16">
      {/* Headline copy */}

            {/* Controls + KPIs with right-side Lindy Difference */}
      <div className="grid gap-4 max-w-4xl mx-auto md:grid-cols-3 mt-4 items-stretch">
        {/* Left column: selects stacked */}
        <div className="grid gap-0 bg-white p-8 h-full">
          <div className="mb-8">
            <label className="block text-sm text-black/60 mb-2">Account value</label>
            <Select value={initialValueInput} onValueChange={setInitialValueInput}>
              <SelectTrigger className="w-full bg-[#DCDCDC] border-0 text-xl h-14 px-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[
                  500000,
                  750000,
                  1000000,
                  2500000,
                  5000000,
                  10000000,
                  25000000,
                ].map((v) => (
                  <SelectItem key={v} value={v.toString()}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {Number(initialValueInput || 0) < 500000 && (
              <div className="text-[11px] text-[#B45309] mt-2">The value should not be less than $500,000</div>
            )}
          </div>

          <div>
            <label className="block text-sm text-black/60 mb-2">Average annual return</label>
            <Select value={avgReturn.toString()} onValueChange={(v) => setAvgReturn(Number(v))}>
              <SelectTrigger className="w-full bg-[#DCDCDC] border-0 text-xl h-14 px-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1].map((r) => (
                  <SelectItem key={r} value={r.toString()}>{`${Math.round(r * 100)}%`}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Middle column: KPIs stacked */}
        <div className="grid gap-0 bg-white p-8 h-full">
          <div className="mb-8">
            <div className="text-sm text-black/60 mb-2">AUM Fee Ending Portfolio</div>
            <div className="text-xl text-black tracking-tight bg-[#DCDCDC] h-14 flex items-center px-3">{formatCurrency(end.aum)}</div>
          </div>
          <div>
            <div className="text-sm text-black/60 mb-2">Flat Fee Ending Portfolio</div>
            <div className="text-xl text-black tracking-tight bg-[#DCDCDC] h-14 flex items-center px-3">{formatCurrency(end.flat)}</div>
          </div>
        </div>

        {/* Right: Lindy Difference */}
        <div className=" p-4 bg-[#17A7FF] flex flex-col items-start justify-start h-full">
          <div className="p-4 w-full">
            <div className="text-sm text-white/90 mb-2">Lindy Difference</div>
            <div className="text-2xl tracking-tight h-14 flex items-center text-white">{formatCurrency(diff)}</div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className=" bg-white overflow-hidden">
          <ChartContainer config={chartConfig} className="h-[500px] w-full">
            <LineChart data={series} margin={{ left: 0, right: 40, top: 40, bottom: 28 }}>
              <CartesianGrid horizontal={false} vertical={false} />
              <XAxis
                dataKey="year"
                ticks={[0, 5, 10, 15, 20, 25, 30]}
                interval={0}
                tickFormatter={(v) => `${v}`}
                tick={{ fontSize: 10, fill: '#6B7280' }}
              />
              <YAxis
                tickFormatter={(v) => formatCurrencyCompact(v as number)}
                tick={{ fontSize: 10, fill: '#6B7280' }}
                width={84}
                domain={yDomain}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    hideLabel
                    formatter={(value, name, item) => {
                      const showName = String(name) !== 'Traditional AUM fee'
                      return (
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="inline-block w-2.5 h-2.5"
                            style={{ backgroundColor: (item as any)?.color as string }}
                          />
                          {showName ? (
                            <span className="text-muted-foreground">{String(name)}</span>
                          ) : null}
                          <span className="font-mono font-medium tabular-nums">{formatCurrency(Number(value))}</span>
                        </span>
                      )
                    }}
                  />
                }
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Line type="monotone" dataKey="aum" stroke="#9CA3AF" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="flat" stroke="#17A7FF" strokeWidth={3} dot={false} />
            </LineChart>
          </ChartContainer>
        </div>
        <div className="text-[11px] text-black/60 mt-2 px-1">
          Chart shows the impact of fees over a 30-year period. Assumes no contributions or distributions. Both fee models are billed quarterly in advance. Flat fee starts at $5,000 and increases 3% annually. AUM fee is calculated using industry average rates across asset brackets. Returns are illustrative only. Investing involves risk. No guarantee of outcomes. Source: <a href="https://www.advisoryhq.com/articles/financial-advisor-fees-wealth-managers-planners-and-fee-only-advisors/#Percentage-AUM" target="_blank" rel="noopener noreferrer" className="text-[#17A7FF] hover:underline">AdvisoryHQ Financial Advisor Fees Study</a>.
        </div>
      </div>
    </div>
  )
}

