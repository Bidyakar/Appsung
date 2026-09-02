import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Store,
  Truck,
  ArrowRight,
} from 'lucide-react';

export function AboutSection() {
  return (
    <section className="bg-white py-20 sm:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-stretch">
          
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
              Why Choose APPSUNG
            </p>
            <h2 className="mt-3 font-display text-[32px] sm:text-[42px] font-bold text-gray-900 leading-[1.15] tracking-tight">
              The only flagship store you’ll ever need. Simple.
            </h2>

            <p className="mt-4 text-[16px] leading-relaxed text-gray-600 font-normal max-w-xl">
              Buy authentic, avoid gray-market uncertainty, test devices on-site before payment, and unlock priority same-day delivery across Dubai and the UAE.
            </p>

            <div className="mt-10 space-y-8 max-w-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[#0E004B]">
                  <ShieldCheck className="h-5 w-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-bold text-gray-900 leading-snug">
                    100% Genuine TRA Stock
                  </h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-gray-600 font-normal">
                    Direct factory-sealed Apple &amp; Samsung flagships. Clean IMEI credentials, untouched factory seals, and verified manufacturer warranty.
                  </p>
                  <Link
                    href="/about"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0E004B] hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[#0E004B]">
                  <Store className="h-5 w-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-bold text-gray-900 leading-snug">
                    In-Store Testing &amp; Unboxing
                  </h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-gray-600 font-normal">
                    Step into our air-conditioned Bur Dubai store inside Al Ghubaiba Metro Station. Unbox, test display fidelity, check cameras, and verify coverage.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0E004B] hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[#0E004B]">
                  <Truck className="h-5 w-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-bold text-gray-900 leading-snug">
                    Express Same-Day Dispatch
                  </h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-gray-600 font-normal">
                    Order before 4:00 PM for rapid doorstep delivery across Dubai. UAE-wide deliveries arrive within 24 to 48 hours with insured door-to-door tracking.
                  </p>
                  <Link
                    href="/about"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0E004B] hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white h-full min-h-[420px] sm:min-h-[480px]">
              <img
                src="/hero-iphone-dual.jpg"
                alt="APPSUNG Flagship Mobile Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
