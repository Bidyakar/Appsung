import React from 'react';
import Link from 'next/link';
import { STORE_INFO } from '@/data/constants';
import { Button } from '@/components/ui';

export function AboutCTA() {
  return (
    <section className="border-t border-gray-200 bg-gray-50/70">
      <div className="mx-auto flex max-w-shell flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[34px]">
            Ready to inspect your next flagship in person?
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
            Walk into our store inside Al Ghubaiba Metro Station, or speak directly with our specialists on WhatsApp for live pricing, reserved stock, and same-day delivery.
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Store directions &amp; hours
            </Button>
          </Link>
          <a
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
