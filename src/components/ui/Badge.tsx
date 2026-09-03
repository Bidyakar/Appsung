import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'primary' | 'warning' | 'outline';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800 border border-gray-200/60',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-semibold',
    primary: 'bg-[#0E004B]/10 text-[#0E004B] font-semibold',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200/60 font-semibold',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md font-medium leading-none select-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
