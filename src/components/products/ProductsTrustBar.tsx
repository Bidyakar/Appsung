import React from 'react';
import { Truck, RotateCcw, Clock, CreditCard } from 'lucide-react';

const trustItems = [
  { icon: Truck, title: 'Free Shipping', desc: 'Free shipping on all UAE orders' },
  { icon: RotateCcw, title: '100% Money Back', desc: 'You have 14 days to return' },
  { icon: Clock, title: 'Support 24/7', desc: 'Contact us 24 hours a day' },
  { icon: CreditCard, title: '100% Payment Secure', desc: 'Your payments are safe with us' },
];

export function ProductsTrustBar() {
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-[#0E004B] p-6 text-white sm:p-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-between">
        {trustItems.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-3.5">
            <Icon className="h-6 w-6 text-white shrink-0 stroke-[1.5]" />
            <div>
              <h4 className="font-display text-[14px] sm:text-[15px] font-bold text-white tracking-tight leading-tight">
                {title}
              </h4>
              <p className="text-[11px] sm:text-[12px] text-indigo-200/80 mt-0.5 leading-snug">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
