import React from 'react';
import Link from 'next/link';

export const categoryRail = [
  { name: 'Phones', count: 8 },
  { name: 'Foldables', count: 2 },
  { name: 'Tablets', count: 3 },
  { name: 'VR Headsets', count: 2 },
  { name: 'Wearables', count: 3 },
  { name: 'Audio & Power', count: 4 },
];

export function CategoryRail() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <ul className="grid grid-cols-2 divide-gray-200 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x">
          {categoryRail.map((category) => (
            <li key={category.name}>
              <Link
                href={`/products?category=${encodeURIComponent(category.name)}`}
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
  );
}
