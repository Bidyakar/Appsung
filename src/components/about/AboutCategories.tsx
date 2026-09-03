import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categoryItems = [
  {
    title: 'Flagship Smartphones',
    desc: 'iPhone 17 Pro Max, 16 Pro, and Galaxy S24 Ultra sealed sets.',
    image: '/6cc48cfd-3f53-4249-a0c0-4890efc12177.jpg',
    href: '/products?category=Phones',
    linkText: 'Browse phones',
  },
  {
    title: 'Tablets & Creative Gear',
    desc: 'M4 iPad Pros, Apple Pencils, and Magic Keyboards in stock.',
    image: '/ff3110f3-9d5c-41a3-ad7c-49a53f15d2c0.jpg',
    href: '/products?category=Tablets',
    linkText: 'Browse tablets',
  },
  {
    title: 'Smartwatches & Wearables',
    desc: 'Apple Watch Ultra 2, Series 10, and Galaxy Watch Ultra.',
    image: '/c6bb5906-58ab-4204-9761-4b6a0f57ef24.jpg',
    href: '/products?category=Wearables',
    linkText: 'Browse wearables',
  },
  {
    title: 'Audio & Accessories',
    desc: 'AirPods Pro 2, AirPods Max, and certified GaN charging adapters.',
    image: '/bbeddbcc-f882-4d71-94cf-8343bb498c35.jpg',
    href: '/products?category=Audio%20%26%20Power',
    linkText: 'Browse audio',
  },
];

export function AboutCategories() {
  return (
    <section className="py-16 sm:py-20 border-b border-gray-200">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
            Curated Hardware Categories
          </p>
          <h2 className="mt-3 font-display text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight text-gray-900">
            Authentic devices in stock at our counter.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
            Every unit is factory sealed, imported with clean IMEI credentials, and backed by active manufacturer or store warranty.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryItems.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs hover:border-[#0E004B]/30 transition-colors"
            >
              <div className="aspect-square bg-gray-950 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-[16px] font-bold text-gray-900">
                  {cat.title}
                </h3>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  {cat.desc}
                </p>
                <Link
                  href={cat.href}
                  className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0E004B] hover:underline"
                >
                  <span>{cat.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
