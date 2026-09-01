'use client';

import React from 'react';
import Link from 'next/link';
import { AppsungLogo } from './AppsungLogo';
import { STORE_INFO } from '../data/constants';

const columns = [
  {
    title: 'Shop',
    items: ['Phones', 'Foldables', 'Tablets', 'VR Headsets', 'Wearables', 'Audio'],
  },
  {
    title: 'Company',
    items: ['About us', 'Store Location', 'Daily Unboxings', 'Quality Guarantee'],
  },
  {
    title: 'Support',
    items: ['Order status', 'Express Shipping', 'Store Warranty', 'Contact Specialists'],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50/90 text-gray-600">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <AppsungLogo size="md" />
            </Link>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
              A curated shop for certified flagship devices. Every phone, tablet, and VR headset is stocked,
              tested, and dispatched from our Bur Dubai facility — no middlemen.
            </p>
            <form
              className="mt-7 flex gap-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Email address"
                className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3.5 text-[14px] text-gray-900 placeholder:text-gray-400 focus:border-[#0E004B] focus:outline-none focus:ring-1 focus:ring-[#0E004B]"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-lg bg-[#0E004B] px-5 text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-display text-[13px] font-bold uppercase tracking-wider text-gray-900">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="/products"
                      className="text-[14px] text-gray-600 transition-colors duration-150 hover:text-[#0E004B]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-gray-200 pt-7 text-[13px] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {STORE_INFO.shortName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href={STORE_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0E004B] transition-colors"
            >
              Facebook
            </a>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0E004B] transition-colors"
            >
              WhatsApp
            </a>
            <Link href="/contact" className="hover:text-[#0E004B] transition-colors">
              Contact & Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}