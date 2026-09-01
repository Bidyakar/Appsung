'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Layers,
  Tablet,
  Glasses,
  ArrowRight,
} from 'lucide-react';
import { featuredProduct } from '../../data/products';
import { formatPrice } from '../../utils/format';

// 3D Imports
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const categoryItems = [
  {
    icon: Smartphone,
    title: 'Flagship Phones',
    desc: 'iPhone 17 & Galaxy S24 Ultra',
    href: '/products?category=Phones',
  },
  {
    icon: Layers,
    title: 'Foldables',
    desc: 'Galaxy Z Fold6 & Flip6 Series',
    href: '/products?category=Foldables',
  },
  {
    icon: Tablet,
    title: 'Pro Tablets',
    desc: 'iPad Pro M4 & Galaxy Tab S9',
    href: '/products?category=Tablets',
  },
  {
    icon: Glasses,
    title: 'VR & Spatial',
    desc: 'Meta Quest 3 & Vision Pro',
    href: '/products?category=VR+Headsets',
  },
];

// Component to render and spin the 3D phone model standing 100% straight and upright
function PhoneModel() {
  const { scene } = useGLTF('/iphone_17_pro_max.glb');
  const modelRef = useRef<THREE.Group>(null);

  // Pure vertical in-place Y-axis rotation (Zero tilt/bow)
  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={modelRef}>
      <primitive
        object={scene}
        scale={1.65}
        position={[0, 0.05, 0]}
        rotation={[0, 0, 0.032]}
      />
    </group>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0E004B] text-white flex flex-col justify-between">
      {/* --- MAIN HERO CONTENT GRID --- */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 relative z-20 w-full flex-1 flex flex-col justify-start pt-10 pb-0 lg:pt-12 lg:pb-1">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center ">

          {/* LEFT COLUMN: Large Editorial Typography & Clean Flat CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative z-30 space-y-6 sm:space-y-7 pointer-events-auto"
          >
            {/* Editorial Serif Headline */}
            <h1 className="font-serif text-[44px] sm:text-[58px] lg:text-[70px] xl:text-[78px] font-bold text-[#F8F4EE] leading-[0.98] tracking-tight">
              Phones That <br />
              Defy Your Every <br />
              day Look
            </h1>

            {/* Subtitle / Product Specs Line */}
            <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-indigo-100/90 font-sans font-normal leading-relaxed max-w-xl">
              {featuredProduct.name} • Forged in Grade 5 Titanium with Apple A19 Pro silicon. Available same-day in Dubai from <span className="font-bold text-white tracking-tight">{formatPrice(featuredProduct.price)}</span>.
            </p>

            {/* Clean Flat Minimal CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/products/${featuredProduct.id}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#F8F4EE] px-9 py-4 font-display text-[16px] font-bold text-[#0E004B] transition-colors duration-150 hover:bg-white"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-display text-[16px] font-semibold text-white transition-colors duration-150 hover:bg-white/10 hover:border-white/30"
              >
                Explore Collection
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D Phone Model Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative z-10 w-full h-[480px] sm:h-[540px] lg:h-[600px] xl:h-[640px] flex items-center justify-center lg:-translate-x-[440px] xl:-translate-x-[520px]"
          >
            {/* 3D Canvas */}
            {mounted && (
              <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                <Canvas
                  camera={{ position: [0, 0, 5.2], fov: 36 }}
                  className="w-full h-full"
                >
                  <ambientLight intensity={0.95} />
                  <directionalLight position={[5, 10, 5]} intensity={1.6} color="#ffffff" />
                  <directionalLight position={[-5, -2, -3]} intensity={0.7} color="#818cf8" />
                  <Environment preset="city" />

                  {/* Gentle, ultra-slow studio vertical float (Zero tilt) */}
                  <Suspense fallback={null}>
                    <Float speed={0.8} rotationIntensity={0} floatIntensity={0.06} floatingRange={[-0.015, 0.015]}>
                      <PhoneModel />
                    </Float>
                    <ContactShadows
                      position={[0, -1.9, 0]}
                      opacity={0.35}
                      scale={9}
                      blur={2}
                      far={4}
                      color="#000000"
                    />
                  </Suspense>

                  {/* Interactive Drag Controls (Locked Upright) */}
                  <OrbitControls
                    makeDefault
                    enableZoom={false}
                    enableDamping
                    dampingFactor={0.05}
                    minPolarAngle={Math.PI / 2.05}
                    maxPolarAngle={Math.PI / 1.95}
                  />
                </Canvas>
              </div>
            )}
          </motion.div>

        </div>
      </div>

      {/* --- FLOATING CATEGORIES CAPSULE BAR --- */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-10 w-full pb-8 pt-0 -mt-4 sm:-mt-6 lg:-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-white/15 bg-black/60 px-8 sm:px-12 py-6 sm:py-7 lg:py-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-between">
            {categoryItems.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-center gap-4 text-white transition-opacity hover:opacity-90"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Icon className="h-6 w-6 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-display text-[15px] sm:text-[16px] font-bold text-white tracking-tight leading-tight group-hover:text-indigo-200 transition-colors">
                    {title}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-gray-300/85 mt-1 leading-snug">
                    {desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}