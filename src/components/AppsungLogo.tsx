import React from 'react';

interface AppsungLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  isDarkBg?: boolean;
}

export function AppsungLogo({
  className = '',
  showText = true,
  size = 'md',
  isDarkBg = false,
}: AppsungLogoProps) {
  const sizeMap = {
    sm: 'h-10 w-10 min-w-[40px]',
    md: 'h-12 w-12 min-w-[48px]',
    lg: 'h-16 w-16 min-w-[64px]',
  };

  const titleSizeMap = {
    sm: 'text-[18px]',
    md: 'text-[21px]',
    lg: 'text-[26px]',
  };

  const subtitleSizeMap = {
    sm: 'text-[8.5px]',
    md: 'text-[9.5px]',
    lg: 'text-[11px]',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.jpg"
        alt="APPSUNG Mobile Phones Trading LLC Logo"
        className={`${sizeMap[size]} rounded-full object-cover border ${isDarkBg ? 'border-white/20 bg-black/40' : 'border-gray-200 bg-white'}`}
      />

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-display font-bold tracking-tight leading-none ${
              isDarkBg ? 'text-white' : 'text-slate-900'
            } ${titleSizeMap[size]}`}
          >
            APPSUNG
          </span>
          <span
            className={`font-semibold tracking-[0.14em] uppercase mt-1 leading-none ${
              isDarkBg ? 'text-gray-300' : 'text-gray-700'
            } ${subtitleSizeMap[size]}`}
          >
            Mobile Phones Trading LLC
          </span>
        </div>
      )}
    </div>
  );
}
