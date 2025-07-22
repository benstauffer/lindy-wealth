import React from 'react'
import { CardWrapper } from '../../ui/CardWrapper'
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from '../../ui/carousel'
import { ArrowRight } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"

const quotes = [
  {
    quote: "Lindy Wealth is an independent financial planning firm founded by Ben Stauffer, CFP®",
  },
  {
    quote: "Helping you achieve your financial goals and bringing you peace of mind.",
  },
  {
    quote: "And we're here to help you every step of the way.",
  }
]

export function QuotesCard() {
  return (
    <CardWrapper 
      className="col-start-1 col-span-2 row-start-1 row-span-2 aspect-square" 
      innerClassName="h-full p-0 overflow-hidden" 
      padding="none"
    >
      <Carousel 
        orientation="horizontal" 
        className="h-full w-full relative"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 h-full">
          {quotes.map((quote, index) => (
            <CarouselItem key={index} className="pl-1 basis-full">
              <div className="p-1 h-full">
                <div className="h-full flex flex-col justify-start p-6 bg-white">
                  <div>
                    <p className="text-3xl text-neutral-600">
                      {quote.quote}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>
    </CardWrapper>
  )
} 