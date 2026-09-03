import React from 'react';
import {
  AboutDestination,
  AboutMetrics,
  AboutHistory,
  AboutGuarantees,
  AboutCategories,
  AboutLocationTransit,
  AboutCTA,
} from '@/components/about';
import { STORE_INFO } from '@/data/constants';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      <div className="mx-auto max-w-shell px-5 pt-12 pb-4 sm:px-8 sm:pt-16">
        <header className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
            About APPSUNG
          </p>
          <h1 className="mt-3 font-display text-[36px] sm:text-[44px] font-bold leading-tight tracking-tight text-gray-900">
            Genuine flagships, trusted in Dubai and across the UAE.
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
            Founded in 2016, {STORE_INFO.name} brings factory-sealed Apple, Samsung, and next-generation VR hardware directly to consumers with zero middleman markup and complete transparency.
          </p>
        </header>
      </div>

      <AboutDestination />
      <AboutMetrics />
      <AboutHistory />
      <AboutGuarantees />
      <AboutCategories />
      <AboutLocationTransit />
      <AboutCTA />
    </div>
  );
}
