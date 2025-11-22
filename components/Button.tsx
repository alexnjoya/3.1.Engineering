'use client'

import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  children: ReactNode
  showIcon?: boolean
  customIcon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
}

export function Button({
  variant = 'primary',
  href,
  children,
  showIcon = true,
  customIcon,
  iconPosition = 'right',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-full transition-all hover:scale-105 group'
  
  const variantClasses = {
    primary: 'bg-[var(--accent-green)] hover:bg-[var(--accent-green-hover)] text-white',
    secondary: 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-foreground dark:text-white border-2 border-[var(--border-color)] hover:border-[var(--accent-green)]/50',
    outline: 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-foreground border border-[var(--border-color)]'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  const defaultIcon = (
    <svg 
      className="w-5 h-5 transition-transform group-hover:translate-x-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )

  const iconElement = customIcon || (showIcon ? defaultIcon : null)

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}

