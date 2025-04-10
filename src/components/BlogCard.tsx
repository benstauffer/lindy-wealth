'use client'

export function BlogCard() {
  return (
<div className="w-full">
  <div 
      className="group relative rounded-2xl p-6 transition-all bg-neutral-50 border border-neutral-200 "
    >
      <div className="flex flex-col h-full space-y-1">
        <div className="flex items-center space-x-2">
          <h3 className="flex items-center space-x-3 text-base font-medium text-neutral-700">
            <span>Subscribe to my newsletter</span>
          </h3>
        </div>
        
        <p className="text-base text-neutral-700">
        Irregular essays and frameworks on wealth and financial planning. Short-term commentary and predictions excluded.
        </p>
        </div>
        
        <div className="mt-4">
        <iframe 
          src="https://embeds.beehiiv.com/886d101b-12e1-438b-9c0e-0b06f7c1f176?slim=true" 
          data-test-id="beehiiv-embed" 
          height="52" 
          frameBorder="0" 
          scrolling="no" 
          style={{ 
            margin: 0, 
            borderRadius: '0px !important', 
            backgroundColor: 'transparent',
            width: '100%'
          }}
        />
        </div>
      </div>    
    </div>
  )
}
