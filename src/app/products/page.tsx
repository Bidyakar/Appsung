'use client';

import React, { useMemo, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { categories, products } from '../../data/products';
import {
  Truck,
  RotateCcw,
  Clock,
  CreditCard,
} from 'lucide-react';

type Sort = 'featured' | 'price-asc' | 'price-desc' | 'rating';

const sortOptions: { value: Sort; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Highest rated' },
];

const trustItems = [
  {
    icon: Truck,
    title: 'Free Shipping',
    desc: 'Free shipping on all UAE orders',
  },
  {
    icon: RotateCcw,
    title: '100% Money Back',
    desc: 'You have 14 days to return',
  },
  {
    icon: Clock,
    title: 'Support 24/7',
    desc: 'Contact us 24 hours a day',
  },
  {
    icon: CreditCard,
    title: '100% Payment Secure',
    desc: 'Your payment are safe with us',
  },
];

export default function ProductsPage() {
  const [category, setCategory] = useState<string>('All');
  const [sort, setSort] = useState<Sort>('featured');

  const visible = useMemo(() => {
    const filtered =
      category === 'All'
        ? products
        : products.filter((product) => product.category === category);

    const sorted = [...filtered];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [category, sort]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 lg:py-16">
        
        {/* PAGE HEADER */}
        <header className="max-w-2xl">
          <h1 className="font-display text-[36px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[44px]">
            All products
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
            Certified flagships, foldables, tablets, and VR headsets — verified, tested and stocked at our Al Ghubaiba store in Dubai.
          </p>
        </header>

        {/* TRUST & GUARANTEES BAR */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-[#0E004B] p-6 text-white sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-between">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3.5">
                <Icon className="h-6 w-6 text-white shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="font-display text-[14px] sm:text-[15px] font-bold text-white tracking-tight leading-tight">
                    {title}
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-indigo-200/80 mt-0.5 leading-snug">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY FILTER & SORTING */}
        <div className="mt-10 flex flex-col gap-5 border-y border-gray-200 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter by category"
            className="flex flex-wrap gap-2"
          >
            {categories.map((option) => {
              const active = option === category;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(option)}
                  className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-[#0E004B] text-white font-semibold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="text-[14px] font-medium text-gray-600"
            >
              Sort by
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-[14px] text-gray-800 focus:border-[#0E004B] focus:outline-none focus:ring-1 focus:ring-[#0E004B]"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* RESULTS COUNT */}
        <div className="mt-8 flex items-center justify-between text-[14px] text-gray-500">
          <p>
            Showing <span className="font-semibold text-gray-900">{visible.length}</span>{' '}
            {visible.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* PRODUCT GRID */}
        {visible.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-[18px] font-semibold text-gray-900">
              No products in this category yet.
            </p>
            <button
              type="button"
              onClick={() => setCategory('All')}
              className="mt-4 rounded-lg bg-[#0E004B] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#1a087a]"
            >
              Show all products
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
