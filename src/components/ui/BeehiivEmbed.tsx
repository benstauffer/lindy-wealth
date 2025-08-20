'use client'

import React, { useState, useEffect } from 'react'
import Script from 'next/script'

export function BeehiivEmbed() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div className="w-full flex justify-center mt-8 mb-8">
            <Script src="https://subscribe-forms.beehiiv.com/embed.js" strategy="afterInteractive" />
            <iframe
                src="https://subscribe-forms.beehiiv.com/b838089a-71e5-47b9-bab7-cdfd44a8de85"
                className="beehiiv-embed"
                data-test-id="beehiiv-embed"
                frameBorder={0}
                style={{ 
                    width: '400px',
                    height: '309px',
                    maxWidth: '100%',
                    borderRadius: 0, 
                    backgroundColor: 'transparent', 
                    boxShadow: '0 0 #0000'
                }}
            />
        </div>
    )
}
