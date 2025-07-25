'use client'

import React from 'react'
import { Check } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function PricingTableSection() {
  return (
    <section className="w-full pt-36" data-section="pricing">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-5xl font-medium text-black mb-4">Pricing & Services</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mb-6">
            No commissions. No product sales. No bank or insurance ties. Just simple, straightforward advice with transparent pricing.
          </p>
        </div>
        
        {/* Pricing Table */}
        <div className="max-w-5xl border-gray-200 overflow-hidden">
          {/* Header with Pricing */}
          <div className="grid grid-cols-3 border-b border-[#E7E6E4]">
            <div className="p-6"></div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-medium text-black mb-1">Flat Fee</h3>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-medium text-black mb-1">AUM Fee</h3>
            </div>
          </div>

          {/* Asset Requirements */}
          <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-4">
            <div className="text-black">Asset Requirements</div>
            <div className="text-center text-sm text-gray-600">Under $2M in assets</div>
            <div className="text-center text-sm text-gray-600">Over $2M in assets</div>
          </div>

          {/* Fee */}
          <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-4">
            <div className="text-black">Fee</div>
            <div className="text-center text-sm text-gray-600">Starts at $5,000 per year</div>
            <div className="text-center text-sm text-gray-600">
              Under 1% AUM{" "}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium underline cursor-pointer">
                    (view schedule)
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-medium text-black mb-2">AUM Fee Schedule</DialogTitle>
                    <DialogDescription className="text-base text-black/80">
                      Our asset-based fee structure with transparent pricing tiers.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-neutral-200 bg-neutral-50">
                            <th className="text-left font-medium p-4 text-base">Assets Under Management</th>
                            <th className="text-right font-medium p-4 text-base">Annual Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-neutral-200">
                            <td className="p-4 text-black text-sm">$0 - $1M</td>
                            <td className="text-right p-4 text-black text-sm font-medium">1.00%</td>
                          </tr>
                          <tr className="border-b border-neutral-200">
                            <td className="p-4 text-black text-sm">$1M - $5M</td>
                            <td className="text-right p-4 text-black text-sm font-medium">0.75%</td>
                          </tr>
                          <tr className="border-b border-neutral-200">
                            <td className="p-4 text-black text-sm">$5M - $10M</td>
                            <td className="text-right p-4 text-black text-sm font-medium">0.50%</td>
                          </tr>
                          <tr className="border-b border-neutral-200">
                            <td className="p-4 text-black text-sm">$10M - $25M</td>
                            <td className="text-right p-4 text-black text-sm font-medium">0.40%</td>
                          </tr>
                          <tr>
                            <td className="p-4 text-black text-sm">Above $25M</td>
                            <td className="text-right p-4 text-black text-sm font-medium">0.30%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-black/80 text-sm mt-4 text-center">
                      All fees are billed quarterly in advance
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Service Rows - Starting with Investment management */}
          <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
            <div className="text-black">Investment management</div>
            <div className="text-center text-sm text-gray-600">Optional (+0.3% AUM fee)</div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
            <div className="text-black">Ongoing financial advice</div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
            <div className="text-black">Tax strategy</div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
            <div className="text-black">Estate planning</div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
            <div className="text-black">Insurance reviews</div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-[#E7E6E4] py-3">
            <div className="text-black">Cash flow planning</div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
            <div className="text-center">
              <Check className="h-5 w-5 text-black mx-auto" />
            </div>
          </div>

          {/* Billing */}
          <div className="grid grid-cols-3 py-4">
            <div className="text-black">Billing</div>
            <div className="text-center text-sm text-gray-600">Billed quarterly in advance</div>
            <div className="text-center text-sm text-gray-600">Billed quarterly in advance</div>
          </div>
        </div>
      </div>
    </section>
  )
} 