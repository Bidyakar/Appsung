import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export function SeasonShortlist() {
  const featured = products.slice(1, 5);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-xl">
            <h2 className="font-display text-[30px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[36px]">
              This season’s shortlist
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
              Four products our specialists keep recommending — stocked, tested,
              and shipped directly from our Bur Dubai flagship store.
            </p>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 text-[15px] font-semibold text-[#0E004B] transition-opacity duration-150 hover:opacity-80"
          >
            <span>View all products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
