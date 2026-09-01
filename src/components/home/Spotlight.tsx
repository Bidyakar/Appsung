import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { products } from '../../data/products';
import { formatPrice } from '../../utils/format';

const spotlight = products.find((product) => product.id === 'samsung-galaxy-s24-ultra') ?? products[1];

export function Spotlight() {
  return (
    <section className="border-t border-gray-200 bg-gray-50/70">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <img
              src={spotlight.image}
              alt={spotlight.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">Spotlight</p>
            <h2 className="mt-3 font-display text-[34px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[40px]">
              {spotlight.name}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-gray-600">
              {spotlight.description}
            </p>
            <ul className="mt-8 space-y-3.5">
              {spotlight.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-[15px] text-gray-700"
                >
                  <CheckIcon
                    className="mt-1 h-4 w-4 shrink-0 text-[#0E004B]"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href={`/products/${spotlight.id}`}
                className="flex items-center gap-2 rounded-lg bg-[#0E004B] px-6 py-3 font-display text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
              >
                <span>Explore {spotlight.name}</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <p className="font-display text-[20px] font-bold text-gray-900">
                {formatPrice(spotlight.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}