import React from 'react';
import { StarIcon } from 'lucide-react';

const lead = {
  quote:
    'I have bought hardware from every large retailer and none of them get the details right. APPSUNG shipped the same day, packed it with care, and verified the warranty on the spot.',
  name: 'Rashid Al Nuaimi',
  role: 'Customer, Dubai',
};

const supporting = [
  {
    quote:
      'The product pages actually answer the questions I have. I ordered the iPhone 17 Pro Max without having to second-guess.',
    name: 'Jonas Weber',
    role: 'Software engineer, Dubai',
  },
  {
    quote:
      'Ordered via WhatsApp and picked up at the Bur Dubai store in 20 minutes. Flawless experience.',
    name: 'Priya Raman',
    role: 'Producer, UAE',
  },
];

export function Reviews() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-lg font-display text-[30px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[36px]">
            18,400 orders shipped. 4.9 average.
          </h2>
          <p className="flex items-center gap-2 text-[14px] text-gray-500">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </span>
            Verified across 6,213 reviews
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <figure className="flex flex-col rounded-2xl border border-indigo-900/30 bg-[#0E004B] p-8 lg:p-10 text-white">
            <blockquote className="font-display text-[22px] font-medium leading-snug text-white lg:text-[26px]">
              “{lead.quote}”
            </blockquote>
            <figcaption className="mt-auto pt-8 text-[14px]">
              <span className="block font-bold text-white">
                {lead.name}
              </span>
              <span className="text-indigo-200/80">{lead.role}</span>
            </figcaption>
          </figure>

          <div className="grid gap-6">
            {supporting.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50/80 p-7 transition-colors hover:border-gray-400"
              >
                <blockquote className="text-[15px] leading-relaxed text-gray-700 font-medium">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-6 text-[13px]">
                  <span className="block font-bold text-gray-900">
                    {item.name}
                  </span>
                  <span className="text-gray-500">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}