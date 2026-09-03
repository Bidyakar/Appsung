import React from 'react';
import { Card } from '@/components/ui';

const achievements = [
  {
    number: '25,000+',
    label: 'Orders Fulfilled',
    detail: 'Verified flagship devices delivered to clients across Dubai and the UAE.',
  },
  {
    number: '8+ Years',
    label: 'Serving Dubai',
    detail: 'Operating continuously in Bur Dubai since our founding in 2016.',
  },
  {
    number: '100%',
    label: 'TRA Certified',
    detail: 'Clean IMEI credentials with active manufacturer warranty coverage.',
  },
  {
    number: '7 Days',
    label: 'Open Every Week',
    detail: 'Walk-in testing counter open daily from 10:00 AM to 11:00 PM.',
  },
];

export function AboutMetrics() {
  return (
    <section className="border-y border-gray-200 bg-gray-50/70 py-16 sm:py-20">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
            Proven Track Record
          </p>
          <h2 className="mt-3 font-display text-[30px] sm:text-[38px] font-bold leading-tight tracking-tight text-gray-900">
            Key achievements and store metrics.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <Card
              key={item.label}
              variant="default"
              className="p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-[36px] sm:text-[42px] font-bold text-[#0E004B] leading-none">
                  {item.number}
                </span>
                <h3 className="mt-3 font-display text-[16px] font-bold text-gray-900">
                  {item.label}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                  {item.detail}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
