'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { AppsungLogo } from './AppsungLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Categories', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBgClass = isHome
    ? isScrolled
      ? 'fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#0E004B]/95 backdrop-blur-md transition-colors duration-200'
      : 'absolute top-0 left-0 right-0 z-40 border-b border-white/10 bg-transparent transition-colors duration-200'
    : 'sticky top-0 z-40 border-b border-white/10 bg-[#0E004B]';

  return (
    <header className={`${headerBgClass} text-white`}>
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity duration-150 hover:opacity-85"
        >
          <AppsungLogo size="sm" isDarkBg={true} />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14.5px] font-medium transition-colors duration-150 ${isActive
                    ? 'text-white font-bold'
                    : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <Link
            href="/products"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Search className="h-5 w-5 stroke-[1.75]" />
          </Link>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Cart, ${count} item${count === 1 ? '' : 's'}`}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ShoppingBag className="h-5 w-5 stroke-[1.75]" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-extrabold text-[#0E004B]">
                {count}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 hover:bg-white/10 md:hidden transition-colors"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-white/10 bg-[#0E004B] px-6 py-4 md:hidden space-y-1"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block py-2.5 text-[15px] font-medium transition-colors ${isActive ? 'text-white font-bold' : 'text-white/75 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}