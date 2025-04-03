'use client'

import Link from 'next/link'

export function CTA() {
    return (
        <div className="w-full bg-neutral-50 rounded-3xl p-8">
          <div className="w-full text-left">
            <p className="text-xl md:text-3xl leading-tight font-semibold mb-6">
              Less guesswork. More peace of mind.
            </p>
            <button 
                  className="inline-flex items-center px-5 py-3 text-sm font-medium text-black bg-white border border-black hover:bg-neutral-800 hover:text-white rounded-full transition-colors duration-200"
                  onClick={() => window.location.href = 'mailto:ben@lindywealth.com'}
            >
              See if you're a fit
            </button>
          </div>
        </div>
    )
}