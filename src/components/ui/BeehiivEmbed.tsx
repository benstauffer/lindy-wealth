'use client'

import Script from 'next/script'

export function BeehiivEmbed() {
    return (
        <div className="w-full flex justify-center mt-8 mb-8">
            <Script async src="https://subscribe-forms.beehiiv.com/embed.js" />
            <iframe 
                src="https://subscribe-forms.beehiiv.com/b838089a-71e5-47b9-bab7-cdfd44a8de85" 
                className="beehiiv-embed" 
                data-test-id="beehiiv-embed" 
                frameBorder="0" 
                scrolling="no" 
                style={{ 
                    width: '100%', 
                    height: '158px', 
                    margin: 0, 
                    borderRadius: '0px 0px 0px 0px', 
                    backgroundColor: 'transparent', 
                    boxShadow: '0 0 #0000', 
                    maxWidth: '100%' 
                }}
            />
        </div>
    )
}
