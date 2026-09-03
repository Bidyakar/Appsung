'use client';

import React from 'react';
import {
  ContactMethods,
  StoreLocationCard,
  ContactInquiryForm,
} from '@/components/contact';

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-4 sm:px-10 sm:pt-16">
        <header className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-[36px] sm:text-[44px] font-bold tracking-tight text-gray-900 leading-tight">
            Visit our Bur Dubai Flagship Store or contact us online.
          </h1>
          <p className="mt-4 text-[16px] text-gray-600 leading-relaxed">
            Real specialists on-site 7 days a week. Test, inspect, and unbox genuine UAE stock in person, or get instant same-day dispatch across Dubai.
          </p>
        </header>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-10 sm:py-14">
        <ContactMethods />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <StoreLocationCard />
          </div>

          <div className="lg:col-span-5">
            <ContactInquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
