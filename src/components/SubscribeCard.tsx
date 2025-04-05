'use client'

export function BlogCard() {
  return (
<div className="w-full">
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
  )
}
