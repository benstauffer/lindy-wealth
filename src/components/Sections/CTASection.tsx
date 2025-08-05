"use client"

import React, { useEffect } from 'react'
import Cal, { getCalApi } from "@calcom/embed-react"

export function CTASection({ variant = 'default' }: { variant?: 'default' | 'pricing' }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <section className={`w-full ${variant === 'pricing' ? 'bg-white' : 'bg-[#2A2C33]'}`}>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 font-['Georgia'] ${variant === 'pricing' ? 'text-black' : 'text-white'}`}>
            Schedule an intro call
          </h2>
          <p className={`text-xl max-w-md mx-auto ${variant === 'pricing' ? 'text-black' : 'text-white'}`}>
          See if We’re a Fit
          </p>
        </div>
        
        {/* Cal.com embed */}
        <div className="w-full max-w-4xl mx-auto">
          <Cal 
            namespace="30min"
            calLink="ben-stauffer-ysbawo/30min"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view"}}
          />
        </div>
      </div>
    </section>
  )
} 