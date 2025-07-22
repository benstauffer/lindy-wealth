'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface TextLinkProps {
  href?: string
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'default' | 'muted'
}

export function TextLink({ 
  href, 
  children, 
  onClick, 
  className = '', 
  variant = 'muted' 
}: TextLinkProps) {
  const baseStyles = 'text-base underline transition-colors'
  const variantStyles = {
    default: 'text-neutral-900 hover:text-neutral-700',
    muted: 'text-neutral-500 hover:text-neutral-700'
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button 
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  )
} 