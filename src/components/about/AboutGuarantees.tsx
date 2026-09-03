import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui';

const corePillars = [
  {
    title: 'Physical Walk-in Security',
    description:
      'We are not an anonymous online warehouse. Our store is located directly inside Al Ghubaiba Metro Station in Bur Dubai. You can inspect seals, unbox, and test display quality before payment.',
  },
  {
    title: 'Zero Gray-Market Uncertainty',
    description:
      'Direct relationships with verified USA and international distributors ensure every iPhone, Samsung Galaxy, and Meta Quest headset is 100% factory-sealed with authentic packaging.',
  },
  {
    title: 'Full IMEI & Warranty Verification',
    description:
      'Every device sold includes clean IMEI documentation and valid manufacturer or store warranty, verifiable immediately on official Apple or Samsung coverage check portals.',
  },
];

export function AboutGuarantees() {
  return (
    <section className="border-t border-gray-200 bg-gray-50/70 py-16 sm:py-20">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
            Our Guarantees
          </p>
          <h2 className="mt-3 font-display text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight text-gray-900">
            Built on standards you can rely on.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar) => (
            <Card
              key={pillar.title}
              variant="default"
              className="p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E004B] text-white mb-5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-[18px] font-bold text-gray-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-gray-600">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
