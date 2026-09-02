'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, X } from 'lucide-react';

export const OculusBanner: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/53y03d4zZl0';

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-shell mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0E004B] text-white p-8 sm:p-14 lg:p-20 overflow-hidden border border-indigo-900/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 z-10">
              <span className="inline-block rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
                Special Feature
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
                Oculus VR
              </h2>

              <p className="text-slate-200 text-base sm:text-lg max-w-xl leading-relaxed">
                Step into next-generation virtual and mixed reality. Crystal-clear visuals, intuitive spatial controls, and immersion like never before.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
                <Link
                  href="/products/meta-quest-3"
                  className="px-8 py-3.5 bg-white hover:bg-slate-100 text-indigo-950 font-semibold rounded-xl transition-colors"
                >
                  View Offer
                </Link>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="flex items-center space-x-3 px-6 py-3.5 text-white/90 hover:text-white font-semibold rounded-xl hover:bg-white/10 transition-colors group border border-white/20"
                >
                  <div className="w-9 h-9 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors">
                    <Play className="w-4 h-4 text-white fill-white translate-x-0.5" />
                  </div>
                  <span>Watch Video</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80"
                  alt="Oculus VR Headset"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden bg-black">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src={`${videoUrl}?autoplay=1`}
              title="Oculus VR Product Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
