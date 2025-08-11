'use client'

import React from 'react'

export function Disclaimer(): React.ReactElement {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-[11px] md:text-xs text-black/60">
          Investment advisory services offered by Lindy Wealth. Nothing on this page is personalized investment, tax, or legal advice. Past results do not guarantee future outcomes. Please review our <a href="/disclosure" className="underline">Disclosures</a> and <a href="/documents/Privacy.pdf" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}

