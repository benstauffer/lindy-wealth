'use client'

import Link from 'next/link'

export function CTA() {
    return (
        <div className="min-h-screen flex items-center justify-center w-full">
          <div className="w-full max-w-xl mx-auto text-center">
            <p className="text-3xl sm:text-4xl lg:text-6xl leading-tight font-semibold mb-8">
              Less guesswork. More peace of mind.
            </p>
            <button 
                  className="inline-flex items-center px-6 py-4 text-sm font-medium text-black bg-white border border-black hover:bg-neutral-800 hover:text-white rounded-full transition-colors duration-200"
                  onClick={() => window.location.href = 'mailto:ben@lindywealth.com'}
            >
              See if you're a fit
            </button>
          </div>
        </div>
    )
}