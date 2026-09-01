import React from 'react';
import {
  BadgeCheckIcon,
  HeadphonesIcon,
  ShieldCheckIcon,
  TruckIcon,
} from 'lucide-react';

const items = [
  {
    icon: TruckIcon,
    title: 'Free express shipping',
    detail: 'On every order, no minimum',
  },
  {
    icon: BadgeCheckIcon,
    title: '30-day returns',
    detail: 'Unopened or not, no questions',
  },
  {
    icon: HeadphonesIcon,
    title: 'Specialists on call',
    detail: 'Real product experts, 24/7',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure payment',
    detail: 'Encrypted, PCI-DSS compliant',
  },
];

export function TrustBar() {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-7 rounded-2xl border border-gray-200 bg-gray-50/90 p-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4">
      {items.map(({ icon: Icon, title, detail }) => (
        <li key={title} className="flex items-start gap-3.5">
          <Icon
            className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[#0E004B]"
            aria-hidden="true"
          />
          <div>
            <p className="font-display text-[14px] font-semibold leading-snug text-gray-900">
              {title}
            </p>
            <p className="mt-1 text-[13px] leading-snug text-gray-500">{detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}