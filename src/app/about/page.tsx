import React from 'react';
import Link from 'next/link';
import { lifestyleImage } from '../../data/products';
import { MILESTONES, STORE_INFO } from '../../data/constants';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-20">
        <header className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
            About {STORE_INFO.name}
          </p>
          <h1 className="mt-4 font-display text-[38px] font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-[52px]">
            Genuine flagships, trusted in Dubai and across the UAE.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-gray-600">
            Located inside <strong>{STORE_INFO.address}</strong>, {STORE_INFO.name} is the premier destination for certified iPhones, Samsung flagships, smartwatches, and Meta Quest VR headsets. Follow our daily unboxings, new arrivals, and special promotions on our official{' '}
            <a
              href={STORE_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E004B] font-bold underline hover:opacity-80"
            >
              Facebook page
            </a>.
          </p>
        </header>

        <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200">
          <img
            src={lifestyleImage}
            alt="A specialist testing devices"
            className="aspect-[21/9] w-full object-cover"
          />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[34px]">
            How we got here
          </h2>
          <ol className="relative border-l border-gray-200">
            {MILESTONES.map((milestone) => (
              <li key={milestone.year} className="relative pb-10 pl-8 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-[#0E004B] ring-4 ring-indigo-100"
                  aria-hidden="true"
                />

                <p className="text-[13px] font-semibold text-gray-400">{milestone.year}</p>
                <h3 className="mt-1.5 font-display text-[18px] font-bold text-gray-900">
                  {milestone.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  {milestone.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <section className="mt-20 flex flex-col gap-6 rounded-2xl border border-gray-200 bg-gradient-to-r from-indigo-50/70 via-slate-50/40 to-indigo-50/70 px-8 py-12 sm:items-center sm:text-center">
          <h2 className="max-w-2xl font-display text-[26px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[32px]">
            Come see the catalogue we would recommend to a friend.
          </h2>
          <Link
            href="/products"
            className="rounded-lg bg-[#0E004B] px-6 py-3 font-display text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
          >
            Browse all products
          </Link>
        </section>
      </div>
    </div>
  );
}
