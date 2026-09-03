'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { CartLine, Product } from '../types/product';

interface CartContextValue {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, color: string, quantity?: number, storage?: string) => void;
  removeItem: (id: string, color: string, storage?: string) => void;
  setQuantity: (id: string, color: string, quantity: number, storage?: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback(
    (product: Product, color: string, quantity = 1, storage?: string) => {
      setLines((current) => {
        const existing = current.find(
          (line) =>
            line.product.id === product.id &&
            line.color === color &&
            line.storage === storage
        );
        if (existing) {
          return current.map((line) =>
            line === existing
              ? { ...line, quantity: line.quantity + quantity }
              : line
          );
        }
        return [...current, { product, color, storage, quantity }];
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback((id: string, color: string, storage?: string) => {
    setLines((current) =>
      current.filter(
        (line) =>
          !(
            line.product.id === id &&
            line.color === color &&
            line.storage === storage
          )
      )
    );
  }, []);

  const setQuantity = useCallback(
    (id: string, color: string, quantity: number, storage?: string) => {
      setLines((current) =>
        current.flatMap((line) => {
          if (
            line.product.id !== id ||
            line.color !== color ||
            line.storage !== storage
          ) {
            return [line];
          }
          if (quantity < 1) return [];
          return [{ ...line, quantity }];
        })
      );
    },
    []
  );

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((total, line) => total + line.quantity, 0);
    const subtotal = lines.reduce(
      (total, line) => total + line.quantity * line.product.price,
      0
    );
    return {
      lines,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      setQuantity,
    };
  }, [lines, isOpen, addItem, removeItem, setQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside a CartProvider');
  }
  return context;
}