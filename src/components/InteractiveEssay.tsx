'use client';

import React, { useState } from 'react';

const Callout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
    <h3 className="font-medium text-zinc-900">{title}</h3>
    <div className="mt-2 text-sm text-zinc-700">{children}</div>
  </div>
);

export default function InteractiveEssay() {
  const [income, setIncome] = useState(250000);
  const [stateTax, setStateTax] = useState(5);
  
  // Simple calculation for educational purposes
  const estSavings = Math.round(income * 0.12);

  return (
    <div className="space-y-6 text-sm text-zinc-700">
      <p className="text-base">
        Dear creator,
      </p>

      <p>
        Your income is irregular, your revenue streams are diverse, and tax season doesn't feel simple. 
        Many traditional approaches to planning assume a single paycheck. We take a different approach—tailored 
        to creative work and entrepreneurship.
      </p>

      <Callout title="The challenge">
        Irregular income, unclear entity structures, and quarterly taxes create financial friction. 
        Our role is to help reduce that friction while keeping you compliant.
      </Callout>

      <section>
        <h2 className="text-lg font-medium text-zinc-900">What we do together</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 text-sm text-zinc-700">
          <li className="rounded-xl border border-zinc-200 p-4">
            <strong>Entity & compensation</strong><br />
            LLC/S‑Corp setup, reasonable comp guidance.
          </li>
          <li className="rounded-xl border border-zinc-200 p-4">
            <strong>Tax coordination</strong><br />
            Calendar, estimates, and CPA coordination.
          </li>
          <li className="rounded-xl border border-zinc-200 p-4">
            <strong>Cashflow design</strong><br />
            Buffers, distributions, contractor cadence.
          </li>
          <li className="rounded-xl border border-zinc-200 p-4">
            <strong>Retirement planning</strong><br />
            Solo‑401k, SEP, or other creator‑friendly options.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-medium text-zinc-900">Illustrative savings example</h2>
        <p className="mt-2 text-xs text-zinc-600">
          This tool is for <strong>educational purposes only</strong>. It shows how structural and tax planning 
          might impact outcomes. Actual results vary and are not guaranteed.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-zinc-600">Annual creator income</label>
            <input
              type="range"
              min={50000}
              max={1000000}
              step={5000}
              value={income}
              onChange={(e) => setIncome(parseInt(e.target.value))}
              className="mt-2 w-full accent-zinc-900"
            />
            <div className="mt-1 text-sm tabular-nums text-zinc-700">${income.toLocaleString()}</div>

            <label className="mt-6 block text-xs font-medium text-zinc-600">State + local tax %</label>
            <input
              type="range"
              min={0}
              max={15}
              step={1}
              value={stateTax}
              onChange={(e) => setStateTax(parseInt(e.target.value))}
              className="mt-2 w-full accent-zinc-900"
            />
            <div className="mt-1 text-sm tabular-nums text-zinc-700">{stateTax}%</div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-xs uppercase tracking-wide text-zinc-600">Hypothetical savings</div>
            <div className="mt-2 text-3xl font-semibold">${estSavings.toLocaleString()}</div>
            <div className="mt-3 text-xs text-zinc-500">
              Based on simple assumptions. Does not represent actual or guaranteed client results.
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium text-zinc-900">Fees</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Fees are set forth in our Form ADV Part 2A. They may be negotiable depending on complexity. 
          Common arrangements include:
        </p>
        <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700">
          <li>Wealth management: AUM-based, 1.00%–0.30% tiered schedule</li>
          <li>Ongoing financial planning: Flat annual fee ($5,000–$20,000+)</li>
          <li>Project-based planning: Fixed fee ($5,000–$20,000+)</li>
        </ul>
        <p className="mt-3 text-xs text-zinc-500">
          See our Form ADV Part 2A for details. Fees from third-party professionals (e.g., attorneys, CPAs) are separate.
        </p>
      </section>

      <div className="border-t border-zinc-200 my-8"></div>

      <footer className="space-y-3 text-xs text-zinc-500">
        <p>Lindy Wealth, LLC is a registered investment adviser in California. Registration does not imply a certain level of skill or training.</p>
        <p>All investments involve risk, including possible loss of principal. Past performance is not indicative of future results.</p>
        <p>Hypothetical projections are for illustrative purposes only, based on assumptions, and should not be relied upon as guarantees.</p>
        <p>Custody and brokerage services are provided by independent custodians (e.g., Schwab, Altruist).</p>
        <p>See our Form ADV Part 2A/2B for full disclosures, available at <a href="http://www.adviserinfo.sec.gov" className="underline">adviserinfo.sec.gov</a>.</p>
      </footer>
    </div>
  );
}