import { cn } from '@/lib/utils'
import Image from 'next/image'
import type React from 'react'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn('relative overflow-hidden', className)} {...props}>
      <Image
        src="/images/nullbox-logo-transparent.png"
        alt="Null Box Ltd Logo"
        width={24}
        height={24}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
