import React from 'react';
import { cn } from '@/utils/cn';

export interface OptionPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  size?: 'sm' | 'md';
}

export function OptionPill({
  className,
  selected = false,
  size = 'md',
  children,
  ...props
}: OptionPillProps) {
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
  };

  return (
    <button
      type="button"
      className={cn(
        'rounded-lg border font-medium transition-all duration-150 select-none active:scale-[0.98]',
        sizes[size],
        selected
          ? 'border-[#0E004B] bg-[#0E004B] text-white font-semibold shadow-xs'
          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
