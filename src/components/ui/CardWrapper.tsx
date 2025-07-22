import React from 'react'
import { cn } from '@/lib/utils'

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  borderClassName?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  onClick?: () => void
}

const paddingClasses = {
  none: '',
  sm: 'p-2',
  md: 'p-4 lg:p-6',
  lg: 'p-6 lg:p-8',
  xl: 'p-8 lg:p-12'
}

export function CardWrapper({ 
  children, 
  className,
  innerClassName,
  borderClassName,
  padding = 'md',
  onClick
}: CardWrapperProps) {
  return (
    <div
      className={cn(
        'relative bg-white rounded-3xl border border-gray-200 shadow-sm',
        paddingClasses[padding],
        className,
        innerClassName
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
} 