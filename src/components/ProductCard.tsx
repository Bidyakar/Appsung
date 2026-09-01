import React from 'react';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';
import { Product } from '../types/product';
import { formatPrice } from '../utils/format';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 text-gray-900 transition-colors duration-150 hover:border-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E004B]"
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />

        {!product.inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-black/80 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white">
            Out of stock
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <p className="text-[12px] font-bold uppercase tracking-wider text-[#0E004B]">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-[17px] font-bold text-gray-900 group-hover:text-[#0E004B] transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[14px] leading-relaxed text-gray-600">
          {product.tagline}
        </p>

        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <p className="font-display text-[18px] font-black text-[#0E004B]">
              {formatPrice(product.price)}
            </p>
            {product.compareAt && (
              <p className="text-[13px] text-gray-400 line-through">
                {formatPrice(product.compareAt)}
              </p>
            )}
          </div>
          <span className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-700">
            <StarIcon
              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
              aria-hidden="true"
            />
            {product.rating.toFixed(1)}
            <span className="text-gray-400 font-normal">({product.reviews})</span>
          </span>
        </div>
      </div>
    </Link>
  );
}