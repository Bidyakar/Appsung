'use client';

import React, { useMemo, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { categories, products } from '@/data/products';
import { ProductsTrustBar, ProductsFilterBar, type Sort } from '@/components/products';
import { Button } from '@/components/ui';

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
        <header className="max-w-2xl">
          <h1 className="font-display text-[36px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[44px]">
            All products
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
            Certified flagships, foldables, tablets, and VR headsets — verified, tested and stocked at our Al Ghubaiba store in Dubai.
          </p>
        </header>

        <ProductsTrustBar />

        <ProductsFilterBar
          categories={categories}
          category={category}
          onSelectCategory={setCategory}
          sort={sort}
          onSelectSort={setSort}
        />

        <div className="mt-8 flex items-center justify-between text-[14px] text-gray-500">
          <p>
            Showing <span className="font-semibold text-gray-900">{visible.length}</span>{' '}
            {visible.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {visible.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-[18px] font-semibold text-gray-900">
              No products in this category yet.
            </p>
            <div className="mt-4">
              <Button variant="primary" onClick={() => setCategory('All')}>
                Show all products
              </Button>
            </div>
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
