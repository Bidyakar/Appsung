'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { MinusIcon, PlusIcon, ShoppingBagIcon, XIcon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/format';

export function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, setQuantity, removeItem } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-50 flex justify-end">
          <motion.button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.aside
            role="dialog"
            aria-label="Shopping cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex h-full w-full max-w-[420px] flex-col border-l border-gray-200 bg-white text-gray-900"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <h2 className="font-display text-[17px] font-bold text-gray-900">
                Your bag
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors duration-150 ease-premium hover:bg-gray-100 hover:text-gray-900"
              >
                <XIcon className="h-[18px] w-[18px]" />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <ShoppingBagIcon
                  className="h-8 w-8 text-gray-300"
                  aria-hidden="true"
                />

                <p className="mt-5 font-display text-[16px] font-bold text-gray-900">
                  Your bag is empty
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
                  Browse the collection and add something worth keeping.
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="mt-6 rounded-lg bg-[#0E004B] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
                >
                  Shop all products
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-gray-200 overflow-y-auto px-6">
                  {lines.map((line) => (
                    <li
                      key={`${line.product.id}-${line.color}`}
                      className="flex gap-4 py-5"
                    >
                      <img
                        src={line.product.image}
                        alt={line.product.name}
                        className="h-20 w-20 shrink-0 rounded-lg bg-gray-100 border border-gray-200 object-cover"
                      />

                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex justify-between gap-3">
                          <p className="truncate font-display text-[15px] font-semibold text-gray-900">
                            {line.product.name}
                          </p>
                          <p className="shrink-0 font-semibold text-[15px] text-gray-900">
                            {formatPrice(line.product.price * line.quantity)}
                          </p>
                        </div>
                        <p className="mt-1 text-[13px] text-gray-500">
                          {line.color}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50">
                            <button
                              type="button"
                              aria-label={`Decrease ${line.product.name} quantity`}
                              onClick={() =>
                                setQuantity(
                                  line.product.id,
                                  line.color,
                                  line.quantity - 1
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center text-gray-600 transition-colors duration-150 ease-premium hover:bg-gray-200 hover:text-gray-900"
                            >
                              <MinusIcon className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-6 text-center text-[14px] font-medium text-gray-900">
                              {line.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase ${line.product.name} quantity`}
                              onClick={() =>
                                setQuantity(
                                  line.product.id,
                                  line.color,
                                  line.quantity + 1
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center text-gray-600 transition-colors duration-150 ease-premium hover:bg-gray-200 hover:text-gray-900"
                            >
                              <PlusIcon className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(line.product.id, line.color)
                            }
                            className="text-[13px] text-gray-400 transition-colors duration-150 ease-premium hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 bg-gray-50/50 px-6 py-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] text-gray-500">Subtotal</span>
                    <span className="font-display text-[20px] font-bold text-gray-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] text-gray-500">
                    Free express shipping and 30-day returns included.
                  </p>
                  <button
                    type="button"
                    className="mt-5 w-full rounded-lg bg-[#0E004B] py-3 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}