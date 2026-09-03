'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag, X, Trash2, Truck, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/format';
import { STORE_INFO } from '@/data/constants';
import { Button, Badge, QuantityStepper } from '@/components/ui';

const FREE_SHIPPING_THRESHOLD = 1000;

export function CartDrawer() {
  const { isOpen, closeCart, lines, count, subtotal, setQuantity, removeItem } =
    useCart();

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const whatsappMessage = encodeURIComponent(
    `Hello APPSUNG Dubai! I would like to order:\n\n` +
      lines
        .map(
          (l, i) =>
            `${i + 1}. ${l.product.name} (${l.color}${l.storage ? `, ${l.storage}` : ''}) x${l.quantity} — AED ${(l.product.price * l.quantity).toLocaleString()}`
        )
        .join('\n') +
      `\n\nTotal: AED ${subtotal.toLocaleString()}\nPlease confirm same-day delivery / store pickup.`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
          <motion.div
            aria-label="Close backdrop"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          />

          <motion.aside
            role="dialog"
            aria-label="Shopping Cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="relative flex h-full w-full max-w-[390px] flex-col border-l border-gray-200 bg-white text-gray-900 shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-gray-900">Shopping Bag</h2>
                <Badge variant="default" size="sm">
                  {count}
                </Badge>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="p-1 rounded-md text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            {lines.length > 0 && (
              <div className="border-b border-gray-100 bg-gray-50/60 px-5 py-2.5">
                <div className="flex items-center justify-between text-[11.5px] mb-1">
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <Truck className="h-3.5 w-3.5 text-[#0E004B]" />
                    {remaining === 0 ? (
                      <strong className="text-emerald-700">Free UAE Delivery Unlocked!</strong>
                    ) : (
                      <span>Add <strong>AED {remaining.toLocaleString()}</strong> for free delivery</span>
                    )}
                  </span>
                  <span className="font-semibold text-gray-500">{progress}%</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-[#0E004B] transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Item List */}
            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-3">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Your bag is empty</h3>
                <p className="mt-1 text-xs text-gray-500">Discover authentic Dubai flagships.</p>
                <Link href="/products" onClick={closeCart} className="mt-4">
                  <Button variant="primary" size="sm">Shop Collection</Button>
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-gray-100 overflow-y-auto px-5 py-1">
                  {lines.map((l) => (
                    <li key={`${l.product.id}-${l.color}-${l.storage || ''}`} className="flex gap-3 py-3.5 items-center">
                      {/* Compact Controlled Image (56x56px) */}
                      <div className="h-14 w-14 min-w-[56px] min-h-[56px] max-h-[56px] max-w-[56px] shrink-0 rounded-lg border border-gray-100 bg-gray-50 p-1 flex items-center justify-center overflow-hidden">
                        <img src={l.product.image} alt={l.product.name} className="h-full w-full object-contain" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline gap-1">
                          <h4 className="text-xs font-semibold text-gray-900 truncate">{l.product.name}</h4>
                          <span className="text-xs font-bold text-gray-900 shrink-0">
                            {formatPrice(l.product.price * l.quantity)}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {l.color}{l.storage ? ` • ${l.storage}` : ''}
                        </p>

                        <div className="mt-2 flex items-center justify-between">
                          <QuantityStepper
                            value={l.quantity}
                            onChange={(val) => setQuantity(l.product.id, l.color, val, l.storage)}
                            size="sm"
                            className="w-20 h-7"
                          />
                          <button
                            type="button"
                            onClick={() => removeItem(l.product.id, l.color, l.storage)}
                            className="text-gray-400 hover:text-rose-600 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="border-t border-gray-200 bg-gray-50/60 p-4 space-y-3">
                  <div className="flex justify-between items-baseline text-sm">
                    <span className="text-gray-600 text-xs">Total</span>
                    <span className="text-lg font-bold text-gray-900">{formatPrice(subtotal)}</span>
                  </div>

                  <a href={`${STORE_INFO.whatsappUrl}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="whatsapp" fullWidth size="sm" className="py-2.5">
                      <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                      <span>Checkout on WhatsApp</span>
                    </Button>
                  </a>

                  <Link href="/contact" onClick={closeCart} className="block">
                    <Button variant="outline" fullWidth size="sm" className="py-2 text-xs">
                      <span>Reserve for Store Pickup</span>
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}