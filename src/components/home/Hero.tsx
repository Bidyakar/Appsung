'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag, Truck, HandCoins, Clock } from 'lucide-react';
import { featuredProduct } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Phone3DModel() {
  const { scene } = useGLTF('/iphone_17_pro_max.glb');
  const modelRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.075;
    }
  });

  return (
    <group ref={modelRef} rotation={[0, 0, 0]}>
      <primitive object={scene} scale={1.30} position={[0, 0.05, 0]} />
    </group>
  );
}

function TopographyLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <svg
        className="w-full h-full object-cover opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 180 C320 120, 480 460, 840 340 C1200 220, 1380 540, 1650 460"
          stroke="url(#topo-gradient-cyan)"
          strokeWidth="1.2"
          strokeDasharray="8 6"
        />
        <path
          d="M-60 230 C360 170, 520 510, 880 390 C1240 270, 1420 590, 1690 510"
          stroke="url(#topo-gradient-cyan)"
          strokeWidth="1"
        />
        <path
          d="M-220 110 C220 40, 440 370, 800 250 C1160 130, 1320 450, 1600 370"
          stroke="url(#topo-gradient-blue)"
          strokeWidth="1.4"
        />
        <path
          d="M-80 680 C260 520, 580 820, 980 700 C1340 590, 1460 840, 1680 770"
          stroke="url(#topo-gradient-blue)"
          strokeWidth="1.2"
        />
        <path
          d="M40 820 C380 690, 720 930, 1120 830 C1380 770, 1540 930, 1720 870"
          stroke="url(#topo-gradient-cyan)"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        <path
          d="M850 -60 C1020 160, 1180 230, 1580 170"
          stroke="url(#topo-gradient-cyan)"
          strokeWidth="1.2"
        />
        <path
          d="M930 -60 C1090 130, 1250 190, 1630 130"
          stroke="url(#topo-gradient-blue)"
          strokeWidth="1"
        />
        <ellipse
          cx="720"
          cy="420"
          rx="540"
          ry="290"
          stroke="url(#topo-gradient-center-blue)"
          strokeWidth="0.8"
          strokeDasharray="4 8"
        />
        <defs>
          <linearGradient id="topo-gradient-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="topo-gradient-blue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="topo-gradient-center-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [addedEffect, setAddedEffect] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    addItem(featuredProduct, featuredProduct.colors[0], 1, featuredProduct.storage?.[0]);
    setAddedEffect(true);
    setTimeout(() => setAddedEffect(false), 1500);
  };

  const handleBuyNow = () => {
    addItem(featuredProduct, featuredProduct.colors[0], 1, featuredProduct.storage?.[0]);
    router.push(`/products/${featuredProduct.id}`);
  };

  return (
    <section className="relative min-h-screen w-full overflow-x-clip bg-[#0E004B] bg-gradient-to-b from-[#0E004B] via-[#090038] to-[#07002C] text-white flex flex-col justify-between pt-[54px] sm:pt-[58px]">
      <TopographyLines />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display text-[150px] sm:text-[220px] md:text-[280px] lg:text-[340px] xl:text-[400px] font-black tracking-tighter text-blue-100/[0.035] uppercase leading-none whitespace-nowrap">
          APPSUNG
        </span>
      </div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[650px] rounded-full blur-[140px] pointer-events-none z-0"
        style={{ backgroundColor: 'rgba(56, 189, 248, 0.22)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center pt-3 pb-2 sm:pt-5 sm:pb-4 -translate-y-4 sm:-translate-y-7 lg:-translate-y-10">
        <div className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:absolute lg:inset-0 flex items-center justify-center lg:translate-x-4 xl:translate-x-6 pointer-events-none z-10 my-2 lg:my-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full max-w-[500px] sm:max-w-[620px] lg:max-w-[750px] xl:max-w-[850px] h-[440px] sm:h-[520px] lg:h-[620px] xl:h-[680px] pointer-events-auto flex items-center justify-center"
            >
              {mounted ? (
                <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                  <Canvas
                    camera={{ position: [0, 0, 5.2], fov: 35 }}
                    className="w-full h-full"
                  >
                    <ambientLight intensity={0.95} />
                    <directionalLight
                      position={[5, 10, 5]}
                      intensity={2.2}
                      color="#ffffff"
                    />
                    <directionalLight
                      position={[-6, -2, -3]}
                      intensity={1.8}
                      color="#60a5fa"
                    />
                    <directionalLight
                      position={[0, 4, 3]}
                      intensity={1.2}
                      color="#38bdf8"
                    />
                    <Environment preset="city" />
                    <Suspense fallback={null}>
                      <Float
                        speed={0.6}
                        rotationIntensity={0}
                        floatIntensity={0.08}
                        floatingRange={[-0.015, 0.015]}
                      >
                        <Phone3DModel />
                      </Float>
                      <ContactShadows
                        position={[0, -1.85, 0]}
                        opacity={0.45}
                        scale={8}
                        blur={2.4}
                        far={3.8}
                        color="#000000"
                      />
                    </Suspense>
                    <OrbitControls
                      makeDefault
                      enableZoom={false}
                      enableDamping
                      dampingFactor={0.05}
                      minPolarAngle={0}
                      maxPolarAngle={Math.PI}
                    />
                  </Canvas>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 pointer-events-auto flex flex-col items-start text-left max-w-md lg:max-w-[440px] xl:max-w-[500px] lg:-translate-x-14 xl:-translate-x-20"
          >
            <h1 className="font-display inline-block pr-2 sm:pr-4 lg:pr-6 text-[38px] sm:text-[58px] md:text-[74px] lg:text-[80px] xl:text-[94px] font-black italic tracking-tighter text-transparent bg-clip-text bg-[#FFB800] leading-[0.92] uppercase">
              Quality
            </h1>
            <p className="font-tech mb-5 text-white/90 uppercase tracking-[0.28em] text-[11px] sm:text-[13px] md:text-[14px] font-bold mt-2 sm:mt-3">
              Smartphones
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={handleAddToCart}
                className="relative inline-flex items-center justify-center gap-2.5 rounded-none bg-white px-7 sm:px-9 py-3.5 sm:py-4 font-display text-[14px] sm:text-[15px] font-black uppercase tracking-wider text-black transition-all duration-150 hover:bg-gray-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.5)] active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4 text-black stroke-[2.5]" />
                <span>{addedEffect ? 'ADDED TO CART!' : 'ADD TO CART'}</span>
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="inline-flex items-center justify-center rounded-none border border-white/60 bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 font-display text-[14px] sm:text-[15px] font-extrabold uppercase tracking-wider text-white transition-all duration-150 hover:bg-white/15 hover:border-white active:scale-[0.98]"
              >
                BUY NOW
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 pointer-events-auto flex flex-col items-start text-left max-w-sm lg:max-w-[360px] xl:max-w-[410px] lg:ml-auto mt-4 lg:mt-0 lg:translate-x-[75px] xl:translate-x-[110px]"
          >
            <h1 className="font-display text-[38px] sm:text-[58px] md:text-[74px] lg:text-[84px] xl:text-[98px] font-black italic tracking-tighter text-white leading-[0.88] uppercase drop-shadow-[0_4px_30px_rgba(255,255,255,0.2)]">
              17 Pro
            </h1>
            <div className="mt-4 sm:mt-5 flex items-center gap-3.5 sm:gap-4 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/[0.06] border border-cyan-400/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col">
                <span className="font-tech text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
                  OFFICIAL PRICE
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-tech text-[13px] sm:text-[15px] font-black text-[#FFB800]">AED</span>
                  <span className="font-display text-[24px] sm:text-[30px] lg:text-[34px] font-black tracking-tight text-white leading-none">
                    4,999
                  </span>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/35 to-transparent" />
              <div className="flex flex-col justify-center">
                <span className="font-tech text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-widest text-cyan-200/90">
                  APPLE DUBAI
                </span>
                <span className="font-display text-[11.5px] sm:text-[12.5px] lg:text-[13px] font-black uppercase tracking-wider text-white leading-tight">
                  IPHONE 17 PRO MAX
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 w-full pb-8 -mt-10 sm:-mt-14 lg:-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="rounded-2xl sm:rounded-3xl border border-white/15 bg-transparent backdrop-blur-md px-6 sm:px-8 lg:px-10 py-5 sm:py-5.5 lg:py-6 shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-between">
            <div className="flex items-center gap-4">
              <Truck className="h-7 w-7 text-white stroke-[1.75] shrink-0" />
              <div>
                <h4 className="font-display text-[14.5px] sm:text-[15px] font-bold text-white tracking-tight leading-snug">
                  Free Shipping
                </h4>
                <p className="text-[11.5px] sm:text-[12px] text-gray-400 mt-0.5 leading-snug">
                  Free shipping on all UAE orders
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HandCoins className="h-7 w-7 text-white stroke-[1.75] shrink-0" />
              <div>
                <h4 className="font-display text-[14.5px] sm:text-[15px] font-bold text-white tracking-tight leading-snug">
                  100% Money Back
                </h4>
                <p className="text-[11.5px] sm:text-[12px] text-gray-400 mt-0.5 leading-snug">
                  You have 10 days to return
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="h-7 w-7 text-white stroke-[1.75] shrink-0" />
              <div>
                <h4 className="font-display text-[14.5px] sm:text-[15px] font-bold text-white tracking-tight leading-snug">
                  Support 24/7
                </h4>
                <p className="text-[11.5px] sm:text-[12px] text-gray-400 mt-0.5 leading-snug">
                  Contact us 24 hours a day
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-white shrink-0"
              >
                <rect x="2" y="5" width="16" height="11" rx="2" />
                <path d="M2 9h16" />
                <rect x="13" y="12" width="9" height="8" rx="1.5" />
                <path d="M15.5 12v-2a2 2 0 0 1 4 0v2" />
              </svg>
              <div>
                <h4 className="font-display text-[14.5px] sm:text-[15px] font-bold text-white tracking-tight leading-snug">
                  100% Payment Secure
                </h4>
                <p className="text-[11.5px] sm:text-[12px] text-gray-400 mt-0.5 leading-snug">
                  Your payment are safe with us
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}