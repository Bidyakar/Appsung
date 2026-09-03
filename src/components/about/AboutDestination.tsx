import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
import { STORE_INFO } from '@/data/constants';

export function AboutDestination() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <img
              src="/hero-iphone-dual.jpg"
              alt="APPSUNG Flagship Mobile Counter"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
              Our Physical Destination
            </p>
            <h2 className="mt-3 font-display text-[30px] sm:text-[38px] font-bold leading-tight tracking-tight text-gray-900">
              Inside Al Ghubaiba Metro Station, Bur Dubai.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-gray-600">
              {STORE_INFO.name} was established with one foundational principle: buying flagship electronics should be accompanied by total confidence. Located conveniently inside the air-conditioned concourse of <strong>{STORE_INFO.address}</strong>, our walk-in location provides a comfortable environment where customers can test devices on our dedicated testing bench before completing their purchase.
            </p>

            <div className="mt-8 space-y-3.5 border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3 text-[14.5px] text-gray-700">
                <MapPin className="h-4 w-4 shrink-0 text-[#0E004B]" />
                <span>{STORE_INFO.address}, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-[14.5px] text-gray-700">
                <Clock className="h-4 w-4 shrink-0 text-[#0E004B]" />
                <span>{STORE_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-3 text-[14.5px] text-gray-700">
                <Phone className="h-4 w-4 shrink-0 text-[#0E004B]" />
                <span>Direct counter line: {STORE_INFO.phone}</span>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-[#0E004B] px-6 py-3 font-display text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
              >
                Visit our store
              </Link>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-display text-[15px] font-semibold text-gray-800 transition-colors duration-150 hover:bg-gray-50 hover:border-gray-400"
              >
                WhatsApp a specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
