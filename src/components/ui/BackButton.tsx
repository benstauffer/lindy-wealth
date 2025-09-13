'use client'

import Link from "next/link"

interface BackButtonProps {
  href?: string
  onClick?: () => void
  className?: string
}

export function BackButton({ href, onClick, className = "" }: BackButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 text-sm text-white/50 bg-black hover:bg-neutral-900 border border-white/20 rounded-lg shadow-sm hover:text-white/80 transition-colors"
  
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${className}`}
      >
        ← Go Back
      </button>
    )
  }

  return (
    <Link
      href={href || "/"}
      className={`${baseClasses} ${className}`}
    >
      ← Go Back
    </Link>
  )
}
