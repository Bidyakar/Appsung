'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'I have bought flagship phones from every major retailer in the UAE and none match the personal care of APPSUNG. Ordered my iPhone 17 Pro Max with same-day delivery to Downtown Dubai — authentic TRA-certified stock, sealed, and verified on the spot.',
    author: 'Rashid Al Nuaimi',
    role: 'Verified Buyer • Downtown Dubai',
  },
  {
    quote:
      'Incredible pricing and 100% genuine products. The WhatsApp consultation was instantaneous, helping me choose the exact storage tier for my Galaxy S24 Ultra. Picked up in Bur Dubai within 30 minutes.',
    author: 'Jonas Weber',
    role: 'Software Engineer • Dubai Marina',
  },
  {
    quote:
      'The Meta Quest 3 package was completely brand new and packaged with supreme care. Next-day dispatch straight to Abu Dhabi. Their 24/7 customer support via WhatsApp is unmatched in the Emirates.',
    author: 'Priya Raman',
    role: 'Verified Buyer • Abu Dhabi, UAE',
  },
  {
    quote:
      'We equipped our entire executive team with iPad Pros and iPhone flagships through APPSUNG. Clean official invoices, official UAE warranty, and unmatched corporate rates. Highly recommended.',
    author: 'Mohammed Al Hashimi',
    role: 'Corporate Client • Deira, Dubai',
  },
  {
    quote:
      'Finding authentic global and Middle East spec smartphones at competitive prices in Dubai can be tricky, but APPSUNG is the gold standard. 10/10 service, transparent warranty, and warm customer care.',
    author: 'Sarah Jenkins',
    role: 'Verified Buyer • Palm Jumeirah',
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeTestimonial = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-20 sm:py-28 border-t border-gray-200/80">
      <div className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-16">
        <div className="text-center">
          <h2 className="font-serif text-[32px] sm:text-[42px] font-bold tracking-tight text-gray-900 leading-tight">
            Our Clients Say
          </h2>
        </div>

        <div className="relative mt-8 sm:mt-12 min-h-[360px] sm:min-h-[320px] flex flex-col items-center justify-center text-center px-8 sm:px-16">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#0E004B] text-white shadow-md shadow-[#0E004B]/25 transition-all duration-150 hover:bg-[#1a087a] hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#0E004B] text-white shadow-md shadow-[#0E004B]/25 transition-all duration-150 hover:bg-[#1a087a] hover:scale-105 active:scale-95"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
          </button>


          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[#FFB800] text-[#FFB800]"
                aria-hidden="true"
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="max-w-2xl flex flex-col items-center"
            >
              <p className="text-[15px] sm:text-[17px] leading-relaxed text-gray-600 font-normal italic">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>

              <div className="mt-6">
                <h3 className="font-serif text-[18px] sm:text-[21px] font-bold text-gray-900 tracking-tight">
                  {activeTestimonial.author}
                </h3>
                <p className="text-[12.5px] sm:text-[13.5px] font-medium text-gray-500 mt-1">
                  {activeTestimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === current
                  ? 'w-6 bg-[#0E004B]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}