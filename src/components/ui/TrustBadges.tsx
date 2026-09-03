import React from 'react';
import { ShieldCheck, Store, Truck } from 'lucide-react';
import { Card } from './Card';
import { cn } from '@/utils/cn';

const items = [
  { icon: ShieldCheck, title: 'Official Warranty', subtitle: 'UAE TRA Stock' },
  { icon: Store, title: 'Store Pickup', subtitle: 'Al Ghubaiba Metro' },
  { icon: Truck, title: 'Express Delivery', subtitle: 'Same-day Dubai' },
];

export function TrustBadges({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-3 gap-2.5 text-center', className)}>
      {items.map(({ icon: Icon, title, subtitle }) => (
        <Card key={title} variant="default" className="p-2.5">
          <Icon className="h-4 w-4 text-[#0E004B] mx-auto mb-1" />
          <p className="text-xs font-semibold text-gray-900">{title}</p>
          <p className="text-[11px] text-gray-500 mt-0.5">{subtitle}</p>
        </Card>
      ))}
    </div>
  );
}
