import React from 'react'
import { CardWrapper } from '../../ui/CardWrapper'

export function AboutCard() {
  return (
    <CardWrapper 
      className="col-start-2 col-span-1 row-start-3 row-span-1 aspect-square" 
      innerClassName="h-full bg-neutral-200 flex flex-col justify-end items-start cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
      padding="none"
    >
      <span className="text-2xl font-medium text-neutral-950/50 text-left p-4 leading-tight">
        About
        <br />
        Lindy Wealth
      </span>
      
    </CardWrapper>
  )
} 