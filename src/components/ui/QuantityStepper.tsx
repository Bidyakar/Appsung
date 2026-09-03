import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
  size?: 'sm' | 'md';
}

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  className,
  size = 'md',
}: QuantityStepperProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const isSm = size === 'sm';

  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50/80',
        isSm ? 'h-8 px-1 text-xs' : 'h-11 px-2 text-sm',
        className
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={handleDecrement}
        disabled={value <= min}
        className={cn(
          'flex items-center justify-center rounded text-gray-600 transition-colors hover:bg-gray-200/80 hover:text-gray-900 disabled:opacity-30 disabled:pointer-events-none',
          isSm ? 'h-6 w-6' : 'h-7 w-7'
        )}
      >
        <Minus className={isSm ? 'h-3 w-3' : 'h-3.5 w-3.5'} />
      </button>

      <span
        className={cn(
          'font-semibold text-gray-900 text-center select-none',
          isSm ? 'w-6' : 'w-8'
        )}
      >
        {value}
      </span>

      <button
        type="button"
        aria-label="Increase quantity"
        onClick={handleIncrement}
        disabled={value >= max}
        className={cn(
          'flex items-center justify-center rounded text-gray-600 transition-colors hover:bg-gray-200/80 hover:text-gray-900 disabled:opacity-30 disabled:pointer-events-none',
          isSm ? 'h-6 w-6' : 'h-7 w-7'
        )}
      >
        <Plus className={isSm ? 'h-3 w-3' : 'h-3.5 w-3.5'} />
      </button>
    </div>
  );
}
