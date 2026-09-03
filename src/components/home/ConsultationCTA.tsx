import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';

export function ConsultationCTA() {
  return (
    <section className="border-t border-gray-200 bg-gray-50/70">
      <div className="mx-auto flex max-w-shell flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[34px]">
            Not sure which device fits?
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
            Speak directly with our specialists. They will understand what you
            actually do with it, then recommend the ideal option with official UAE warranty.
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Talk to a specialist
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" size="lg">
              Browse the catalog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
