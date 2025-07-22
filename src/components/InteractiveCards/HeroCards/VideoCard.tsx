import React from 'react'
import { CardWrapper } from '../../ui/CardWrapper'

export function VideoCard() {
  return (
    <CardWrapper 
      className="col-start-3 col-span-3 row-start-1 row-span-3 aspect-square" 
      innerClassName="h-full flex flex-col justify-center items-center bg-blue-100" 
      padding="xl"
    >
      {/* Video Area - Centered */}
      <div className="relative w-full bg-blue-100 overflow-hidden rounded-2xl">
        <video 
          className="w-full h-full object-cover"
          poster="/api/placeholder/800/450"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-black">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}
