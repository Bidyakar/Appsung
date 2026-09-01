import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { Spotlight } from '../components/home/Spotlight';
import { Reviews } from '../components/home/Reviews';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

const categoryRail = [
  { name: 'Phones', count: 8 },
  { name: 'Foldables', count: 2 },
  { name: 'Tablets', count: 3 },
  { name: 'VR Headsets', count: 2 },
  { name: 'Wearables', count: 3 },
  { name: 'Audio & Power', count: 4 },
];

const featured = products.slice(1, 5);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <ul className="grid grid-cols-2 divide-gray-200 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x">
            {categoryRail.map((category) => (
              <li key={category.name}>
                <Link
                  href="/products"
                  className="group flex items-baseline justify-between gap-3 px-0 py-6 transition-colors duration-150 lg:px-6"
                >
                  <span className="font-display text-[15px] font-semibold text-gray-800 group-hover:text-[#0E004B] transition-colors">
                    {category.name}
                  </span>
                  <span className="text-[13px] font-medium text-gray-400 group-hover:text-[#0E004B] transition-colors">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-xl">
              <h2 className="font-display text-[30px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[36px]">
                This season’s shortlist
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
                Four products our specialists keep recommending — stocked,
                tested and shipped from our own facility.
              </p>
            </div>
            <Link
              href="/products"
              className="group flex items-center gap-2 text-[15px] font-semibold text-[#0E004B] transition-opacity duration-150 hover:opacity-80"
            >
              <span>View all products</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Spotlight />
      <Reviews />

      <section className="border-t border-gray-200 bg-gray-50/70">
        <div className="mx-auto flex max-w-shell flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[34px]">
              Not sure which device fits?
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
              Book fifteen minutes with a specialist. They will ask what you
              actually do with it, then tell you the cheaper option if it is the
              right one.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[#0E004B] px-6 py-3 font-display text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
            >
              Talk to a specialist
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-display text-[15px] font-semibold text-gray-800 transition-colors duration-150 hover:bg-gray-50 hover:border-gray-400"
            >
              Browse the catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
