'use client'

import { GuidesCard } from './GuidesCard'
import Link from 'next/link'

const guidesData = [
  {
    title: "Financial Planning Checklist",
    description: "A comprehensive checklist to help CA residents.",
    href: "/guides/001"
  },
  {
    title: "Tax Optimization Checklist",
    description: "A checklist to help CA residents optimize their taxes.",
    href: "/guides/002"
  },
  {
    title: "Investment Guide",
    description: "A guide to portfolio construction and management.",
    href: "/guides/003"
  }
]

export function GuidesSection() {
  return (
    <section id="guides" className="w-full">
      <div className="flex items-center justify-between mb-4 bg-white">
        <div>
          <h2 className="text-base font-semibold text-neutral-500">
            Guides & Resources
          </h2>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full">
        {guidesData.map((guide, index) => (
          <Link key={index} href={guide.href}>
            <GuidesCard
              title={guide.title}
              description={guide.description}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
