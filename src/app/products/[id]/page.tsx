'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeftIcon,
  CheckIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
  TruckIcon,
} from 'lucide-react';
import { products } from '../../../data/products';
import { STORE_INFO } from '../../../data/constants';
import { useCart } from '../../../contexts/CartContext';
import { formatPrice } from '../../../utils/format';
import { ProductCard } from '../../../components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = products.find((item) => item.id === id);
  const { addItem } = useCart();
  const [color, setColor] = useState(product?.colors[0] ?? '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-shell px-5 py-24 text-center sm:px-8">
          <h1 className="font-display text-[28px] font-bold text-gray-900">
            Product not found
          </h1>
          <p className="mt-3 text-gray-600">
            We could not find the device you are looking for.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-[#0E004B] px-6 py-3 font-display text-[14px] font-semibold text-white hover:bg-[#1a087a]"
          >
            Back to catalogue
          </Link>
        </div>
      </div>
    );
  }

  const selectedColor = color || product.colors[0];
  const related = products
    .filter((item) => item.id !== product.id && (item.category === product.category || item.brand === product.brand))
    .slice(0, 4);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 lg:py-16">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to all products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#0c0e14] p-8 flex items-center justify-center min-h-[420px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[480px] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
              {product.category}
            </p>
            <h1 className="mt-2 font-display text-[32px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[40px]">
              {product.name}
            </h1>
            <p className="mt-3 text-[17px] text-gray-600">{product.tagline}</p>

            <div className="mt-4 flex items-center gap-3">
              <span className="flex items-center gap-1 text-[14px] font-semibold text-gray-900">
                <StarIcon
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
                {product.rating.toFixed(1)}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-[14px] text-gray-500">
                {product.reviews} customer reviews
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-[13px] font-medium text-emerald-600">
                {product.inStock ? 'In stock in Dubai' : 'Out of stock'}
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-[30px] font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.compareAt && (
                <span className="text-[16px] text-gray-400 line-through">
                  {formatPrice(product.compareAt)}
                </span>
              )}
            </div>

            <div className="mt-8">
              <label className="block text-[13px] font-semibold uppercase tracking-wider text-gray-900">
                Select Finish: <span className="text-gray-600 font-normal">{selectedColor}</span>
              </label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {product.colors.map((c) => {
                  const active = c === selectedColor;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={`rounded-xl border px-4 py-2 text-[14px] font-medium transition-all ${
                        active
                          ? 'border-[#0E004B] bg-[#0E004B] text-white font-semibold'
                          : 'border-gray-300 bg-white text-gray-800 hover:border-gray-400'
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex h-12 items-center rounded-xl border border-gray-300 bg-gray-50">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-full w-10 items-center justify-center text-gray-600 hover:text-gray-900"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-[15px] font-semibold text-gray-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-full w-10 items-center justify-center text-gray-600 hover:text-gray-900"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => addItem(product, selectedColor, quantity)}
                className="flex-1 rounded-xl bg-[#0E004B] px-8 py-3.5 font-display text-[15px] font-bold text-white transition-colors duration-150 hover:bg-[#1a087a]"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={STORE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-[#1877F2]/30 bg-[#1877F2]/10 px-4 text-[14px] font-semibold text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors duration-150"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Inquire on Facebook
              </a>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-[#25D366]/30 bg-[#25D366]/10 px-4 text-[14px] font-semibold text-[#25D366] hover:bg-[#25D366]/20 transition-colors duration-150"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            <p className="mt-5 flex items-center gap-2 text-[13px] text-gray-500">
              <TruckIcon className="h-4 w-4 text-[#0E004B]" aria-hidden="true" />
              Free express delivery across UAE — order today, delivered same-day in Dubai.
            </p>

            <ul className="mt-8 space-y-3 border-t border-gray-200 pt-7">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-[14px] text-gray-700"
                >
                  <CheckIcon
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0E004B]"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="font-display text-[22px] font-bold text-gray-900">
            Technical Specifications
          </h2>
          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-xl border border-gray-200 bg-gray-50/70 p-4"
              >
                <dt className="text-[12px] font-semibold uppercase tracking-wider text-gray-500">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-[15px] font-semibold text-gray-900">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {related.length > 0 && (
          <section className="mt-20 border-t border-gray-200 pt-16">
            <h2 className="font-display text-[26px] font-bold text-gray-900">
              Recommended Alternatives
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
