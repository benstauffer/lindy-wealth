import React, { useState } from 'react'
import { CardWrapper } from '../../ui/CardWrapper'

const cardContent = [
  { // index 0 (Top/Smallest card)
    step: "1",
    title: "Discovery",
    description: `We start by understanding\nyour unique financial situation and goals.`
  },
  { // index 1 (Middle card)
    step: "2",
    title: "Strategize",
    description: `We craft a tailored\nfinancial plan to help you achieve your goals.`
  },
  { // index 2 (Bottom/Largest card)
    step: "3",
    title: "Management",
    description: `We implement your plan and manage the day-to-day details so you can focus on what matters most.`
  }
];

// Defines the visual properties of the stack, from front to back.
const cardStack = [
    { index: 0, top: '4rem', right: '4rem' }, // Smallest
    { index: 1, top: '2rem', right: '2rem' }, // Middle
    { index: 2, top: '0', right: '0' } // Largest
];

export function ProcessCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CardWrapper 
      className="col-start-6 col-span-2 row-start-2 row-span-2 aspect-square relative" 
      innerClassName="h-full bg-white relative cursor-pointer" 
      padding="none"
    >
      <div className="absolute inset-0 p-6" onMouseLeave={() => setActiveIndex(0)}>
        
        {/* Visual Stack & Content - Renders the cards and their content */}
        {cardStack.map(card => (
          <div
            key={`visual-${card.index}`}
            className="absolute inset-0 border border-dashed rounded-3xl transition-all duration-500 ease-out pointer-events-none flex flex-col justify-between p-6"
            style={{
              top: card.top,
              right: card.right,
              borderColor: activeIndex === card.index ? 'rgb(156 163 175)' : 'rgb(229 231 235)',
              backgroundColor: activeIndex === card.index ? 'rgb(255 255 255)' : 'rgb(249 250 251)',
              transform: activeIndex === card.index ? 'scale(1)' : 'scale(1)',
              boxShadow: card.index < 2 ? '4px -4px 10px 0px rgb(0 0 0 / 0.015)' : 'none',
              // Hide cards that are visually in front of the active one
              opacity: card.index < activeIndex ? 0 : 1,
              zIndex: cardStack.length - card.index,
            }}
          >
            {/* Content with smooth transitions */}
            <div 
              className="flex justify-between items-start transition-opacity duration-300 ease-out"
              style={{
                opacity: activeIndex === card.index ? 1 : 0,
                transitionDelay: activeIndex === card.index ? '100ms' : '0ms'
              }}
            >
              <h3 className="text-xl font-light text-neutral-400">
                {cardContent[card.index].title}
              </h3>
              <span className="text-xl font-light text-neutral-400">
                {cardContent[card.index].step}
              </span>
            </div>
            <div 
              className="transition-opacity duration-300 ease-out"
              style={{
                opacity: activeIndex === card.index ? 1 : 0,
                transitionDelay: activeIndex === card.index ? '150ms' : '0ms'
              }}
            >
              <p className="text-2xl text-neutral-600 ">
                {cardContent[card.index].description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < cardContent[card.index].description.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}

        {/* Hover Triggers - Invisible divs stacked to capture mouse events correctly */}
        {cardStack.map(card => (
            <div
                key={`trigger-${card.index}`}
                onMouseEnter={() => setActiveIndex(card.index)}
                className="absolute inset-0"
                style={{
                    top: card.top,
                    right: card.right,
                    // Stacking context for hover: smallest card (index 0) has highest zIndex
                    zIndex: cardStack.length - card.index + 1
                }}
            />
        ))}
      </div>
    </CardWrapper>
  )
} 