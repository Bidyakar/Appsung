'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Star,
  Store,
  Clock,
  ShoppingBag,
  ChevronRight,
  Check,
  Sparkles,
} from 'lucide-react';
import { products } from '@/data/products';
import { STORE_INFO } from '@/data/constants';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/format';
import { ProductCard } from '@/components/ProductCard';
import {
  Button,
  Card,
  CardTitle,
  Badge,
  QuantityStepper,
  OptionPill,
  TrustBadges,
} from '@/components/ui';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((item) => item.id === (params?.id as string));
  const { addItem } = useCart();

  const [color, setColor] = useState(product?.colors[0] ?? '');
  const [storage, setStorage] = useState(product?.storage?.[0] ?? '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="bg-white min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-xl font-bold text-gray-900">Product Not Found</h1>
        <Link href="/products" className="mt-4">
          <Button variant="primary" size="sm">
            <ArrowLeft className="h-4 w-4" /> Back to Catalog
          </Button>
        </Link>
      </div>
    );
  }

  const selectedColor = color || product.colors[0];
  const selectedStorage = storage || product.storage?.[0];

  const whatsappInquiryUrl = `${STORE_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hello APPSUNG Dubai! Inquiring about ${product.name} (${selectedColor}${selectedStorage ? `, ${selectedStorage}` : ''}) x${quantity} — AED ${(product.price * quantity).toLocaleString()}. Availability?`
  )}`;

  const related = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);

  return (
    <div className="bg-white text-gray-900">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 px-5 sm:px-8 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <Link href="/products" className="hover:text-gray-900">Products</Link>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
        <Link href="/products" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 mb-4">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all products
        </Link>

        {/* TOP SECTION: EXACT 50/50 EQUAL HEIGHT ALIGNMENT */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          {/* LEFT: Image & Badges (Stretches to exact matching height) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <Card variant="subtle" className="flex-1 flex items-center justify-center p-6 min-h-[320px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[300px] w-full object-contain"
              />
            </Card>
            <TrustBadges className="mt-3" />
          </div>

          {/* RIGHT: Buy Console (Stretches to exact matching height) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0E004B]">
                {product.brand ? `${product.brand} • ` : ''}{product.category}
              </span>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-snug">{product.tagline}</p>

              {/* Rating & Stock */}
              <div className="mt-2.5 flex items-center gap-2.5 text-xs">
                <div className="flex items-center gap-1 font-semibold text-gray-900">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating.toFixed(1)}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500">{product.reviews.toLocaleString()} reviews</span>
                <span className="text-gray-300">•</span>
                <Badge variant={product.inStock ? 'success' : 'default'} size="sm">
                  {product.inStock ? 'In Stock in Dubai' : 'Out of Stock'}
                </Badge>
              </div>

              {/* Price */}
              <div className="mt-3.5 flex items-baseline gap-2.5 border-y border-gray-100 py-2.5">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                {product.compareAt && (
                  <span className="text-sm text-gray-400 line-through">{formatPrice(product.compareAt)}</span>
                )}
                {product.compareAt && product.compareAt > product.price && (
                  <Badge variant="success" size="sm">Save AED {(product.compareAt - product.price).toLocaleString()}</Badge>
                )}
              </div>

              {/* Finish Options */}
              <div className="mt-3.5">
                <span className="block text-xs font-semibold text-gray-700">Finish: <strong className="text-gray-900">{selectedColor}</strong></span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {product.colors.map((c) => (
                    <OptionPill key={c} size="sm" selected={c === selectedColor} onClick={() => setColor(c)}>
                      {c}
                    </OptionPill>
                  ))}
                </div>
              </div>

              {/* Storage Options */}
              {product.storage && product.storage.length > 0 && (
                <div className="mt-3">
                  <span className="block text-xs font-semibold text-gray-700">Storage: <strong className="text-gray-900">{selectedStorage}</strong></span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {product.storage.map((s) => (
                      <OptionPill key={s} size="sm" selected={s === selectedStorage} onClick={() => setStorage(s)}>
                        {s}
                      </OptionPill>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTAs (Flush with bottom of left column) */}
            <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
              <div className="flex items-center gap-2">
                <QuantityStepper value={quantity} onChange={setQuantity} size="sm" className="w-28" />
                <Button variant="primary" size="sm" fullWidth onClick={() => addItem(product, selectedColor, quantity, selectedStorage)} className="py-2.5">
                  <ShoppingBag className="h-4 w-4" /> Add to Bag — {formatPrice(product.price * quantity)}
                </Button>
              </div>
              <a href={whatsappInquiryUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" size="sm" fullWidth className="py-2 text-xs">
                  <svg className="h-3.5 w-3.5 fill-emerald-600 shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>Order or Inquire via WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* SECONDARY ROW: 50/50 EQUAL TIERS */}
        <div className="mt-8 grid gap-4 lg:grid-cols-12 items-stretch">
          <Card variant="subtle" className="lg:col-span-6 p-5 flex flex-col justify-between">
            <div className="flex items-start gap-3">
              <Store className="h-5 w-5 text-[#0E004B] shrink-0 mt-0.5" />
              <div>
                <CardTitle className="text-sm">Visit Our Physical Store in Bur Dubai</CardTitle>
                <p className="mt-1 text-xs text-gray-600">Inside <strong>Al Ghubaiba Metro Station</strong> concourse level. Unbox and test in person before payment.</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> 10:00 AM – 11:00 PM Daily</span>
              <Link href="/contact" className="font-semibold text-[#0E004B] hover:underline">Directions &rarr;</Link>
            </div>
          </Card>

          <Card variant="subtle" className="lg:col-span-6 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Sparkles className="h-4 w-4 text-[#0E004B]" />
                <CardTitle className="text-xs uppercase tracking-wider">Key Capabilities</CardTitle>
              </div>
              <ul className="space-y-1.5 text-xs text-gray-600">
                {product.highlights?.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#0E004B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200/60 text-xs text-gray-500">
              <span>Authentic UAE TRA Certified Stock</span>
            </div>
          </Card>
        </div>

        {/* TECHNICAL SPECS */}
        {product.specs && product.specs.length > 0 && (
          <section className="mt-10 border-t border-gray-100 pt-8">
            <h2 className="text-lg font-bold text-gray-900">Technical Specifications</h2>
            <dl className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {product.specs.map((s) => (
                <Card key={s.label} variant="subtle" className="p-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">{s.label}</dt>
                  <dd className="mt-0.5 text-xs font-semibold text-gray-900">{s.value}</dd>
                </Card>
              ))}
            </dl>
          </section>
        )}

        {/* RELATED */}
        {related.length > 0 && (
          <section className="mt-10 border-t border-gray-100 pt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Related Devices</h2>
              <Link href="/products" className="text-xs font-semibold text-[#0E004B] hover:underline">View all &rarr;</Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
