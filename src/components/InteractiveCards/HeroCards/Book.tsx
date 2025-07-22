import React from 'react'
import { CardWrapper } from '../../ui/CardWrapper'
import { LuArrowUpRight } from "react-icons/lu";

export function BookCard() {
  return (
    <CardWrapper 
      className="col-start-6 col-span-1 row-start-1 row-span-1 aspect-square" 
      innerClassName="h-full bg-blue-400 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
      padding="none"
    >
      <div className="flex justify-end w-full">
        <LuArrowUpRight className="m-4 h-8 w-8 text-neutral-950" />
      </div>
      <div className="p-4">
        <span className="text-2xl font-medium text-neutral-950 leading-tight">
          Get Started
        </span>
      </div>
    </CardWrapper>
  )
} 