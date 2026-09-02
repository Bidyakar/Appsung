import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Navigation,
  ArrowRight,
} from 'lucide-react';
import { STORE_INFO, MILESTONES } from '../../data/constants';

const achievements = [
  {
    number: '25,000+',
    label: 'Orders Fulfilled',
    detail: 'Verified flagship devices delivered to clients across Dubai and the UAE.',
  },
  {
    number: '8+ Years',
    label: 'Serving Dubai',
    detail: 'Operating continuously in Bur Dubai since our founding in 2016.',
  },
  {
    number: '100%',
    label: 'TRA Certified',
    detail: 'Clean IMEI credentials with active manufacturer warranty coverage.',
  },
  {
    number: '7 Days',
    label: 'Open Every Week',
    detail: 'Walk-in testing counter open daily from 10:00 AM to 11:00 PM.',
  },
];

const corePillars = [
  {
    title: 'Physical Walk-in Security',
    description:
      'We are not an anonymous online warehouse. Our store is located directly inside Al Ghubaiba Metro Station in Bur Dubai. You can inspect seals, unbox, and test display quality before payment.',
  },
  {
    title: 'Zero Gray-Market Uncertainty',
    description:
      'Direct relationships with verified USA and international distributors ensure every iPhone, Samsung Galaxy, and Meta Quest headset is 100% factory-sealed with authentic packaging.',
  },
  {
    title: 'Full IMEI & Warranty Verification',
    description:
      'Every device sold includes clean IMEI documentation and valid manufacturer or store warranty, verifiable immediately on official Apple or Samsung coverage check portals.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      <div className="mx-auto max-w-shell px-5 pt-12 pb-4 sm:px-8 sm:pt-16">
        <header className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
            About APPSUNG
          </p>
          <h1 className="mt-3 font-display text-[36px] sm:text-[44px] font-bold leading-tight tracking-tight text-gray-900">
            Genuine flagships, trusted in Dubai and across the UAE.
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
            Founded in 2016, {STORE_INFO.name} brings factory-sealed Apple, Samsung, and next-generation VR hardware directly to consumers with zero middleman markup and complete transparency.
          </p>
        </header>
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <img
                src="/hero-iphone-dual.jpg"
                alt="APPSUNG Flagship Mobile Counter"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
                Our Physical Destination
              </p>
              <h2 className="mt-3 font-display text-[30px] sm:text-[38px] font-bold leading-tight tracking-tight text-gray-900">
                Inside Al Ghubaiba Metro Station, Bur Dubai.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-gray-600">
                {STORE_INFO.name} was established with one foundational principle: buying flagship electronics should be accompanied by total confidence. Located conveniently inside the air-conditioned concourse of <strong>{STORE_INFO.address}</strong>, our walk-in location provides a comfortable environment where customers can test devices on our dedicated testing bench before completing their purchase.
              </p>

              <div className="mt-8 space-y-3.5 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3 text-[14.5px] text-gray-700">
                  <MapPin className="h-4 w-4 shrink-0 text-[#0E004B]" />
                  <span>{STORE_INFO.address}, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3 text-[14.5px] text-gray-700">
                  <Clock className="h-4 w-4 shrink-0 text-[#0E004B]" />
                  <span>{STORE_INFO.workingHours}</span>
                </div>
                <div className="flex items-center gap-3 text-[14.5px] text-gray-700">
                  <Phone className="h-4 w-4 shrink-0 text-[#0E004B]" />
                  <span>Direct counter line: {STORE_INFO.phone}</span>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#0E004B] px-6 py-3 font-display text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
                >
                  Visit our store
                </Link>
                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-display text-[15px] font-semibold text-gray-800 transition-colors duration-150 hover:bg-gray-50 hover:border-gray-400"
                >
                  WhatsApp a specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
              Proven Track Record
            </p>
            <h2 className="mt-3 font-display text-[30px] sm:text-[38px] font-bold leading-tight tracking-tight text-gray-900">
              Key achievements and store metrics.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-[36px] sm:text-[42px] font-bold text-[#0E004B] leading-none">
                    {item.number}
                  </span>
                  <h3 className="mt-3 font-display text-[16px] font-bold text-gray-900">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
                Our History
              </p>
              <h2 className="mt-3 font-display text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight text-gray-900">
                How we got here.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                A decade of consistent service, authentic sourcing, and community trust in Dubai’s vibrant electronics district.
              </p>
            </div>

            <ol className="relative border-l border-gray-200">
              {MILESTONES.map((milestone) => (
                <li key={milestone.year} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-[#0E004B] ring-4 ring-indigo-100"
                    aria-hidden="true"
                  />
                  <p className="text-[13px] font-semibold text-gray-400">{milestone.year}</p>
                  <h3 className="mt-1 font-display text-[18px] font-bold text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    {milestone.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
              Our Guarantees
            </p>
            <h2 className="mt-3 font-display text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight text-gray-900">
              Built on standards you can rely on.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E004B] text-white mb-5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-display text-[18px] font-bold text-gray-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-gray-200">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
              Curated Hardware Categories
            </p>
            <h2 className="mt-3 font-display text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight text-gray-900">
              Authentic devices in stock at our counter.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              Every unit is factory sealed, imported with clean IMEI credentials, and backed by active manufacturer or store warranty.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs hover:border-[#0E004B]/30 transition-colors">
              <div className="aspect-square bg-gray-950 overflow-hidden">
                <img
                  src="/6cc48cfd-3f53-4249-a0c0-4890efc12177.jpg"
                  alt="Flagship Smartphones"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-[16px] font-bold text-gray-900">
                  Flagship Smartphones
                </h3>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  iPhone 17 Pro Max, 16 Pro, and Galaxy S24 Ultra sealed sets.
                </p>
                <Link
                  href="/products"
                  className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0E004B] hover:underline"
                >
                  <span>Browse phones</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs hover:border-[#0E004B]/30 transition-colors">
              <div className="aspect-square bg-gray-950 overflow-hidden">
                <img
                  src="/ff3110f3-9d5c-41a3-ad7c-49a53f15d2c0.jpg"
                  alt="Tablets and Creative Gear"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-[16px] font-bold text-gray-900">
                  Tablets &amp; Creative Gear
                </h3>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  M4 iPad Pros, Apple Pencils, and Magic Keyboards in stock.
                </p>
                <Link
                  href="/products"
                  className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0E004B] hover:underline"
                >
                  <span>Browse tablets</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs hover:border-[#0E004B]/30 transition-colors">
              <div className="aspect-square bg-gray-950 overflow-hidden">
                <img
                  src="/c6bb5906-58ab-4204-9761-4b6a0f57ef24.jpg"
                  alt="Smartwatches and Wearables"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-[16px] font-bold text-gray-900">
                  Smartwatches &amp; Wearables
                </h3>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  Apple Watch Ultra 2, Series 10, and Galaxy Watch Ultra.
                </p>
                <Link
                  href="/products"
                  className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0E004B] hover:underline"
                >
                  <span>Browse wearables</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs hover:border-[#0E004B]/30 transition-colors">
              <div className="aspect-square bg-gray-950 overflow-hidden">
                <img
                  src="/bbeddbcc-f882-4d71-94cf-8343bb498c35.jpg"
                  alt="Audio and Accessories"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-[16px] font-bold text-gray-900">
                  Audio &amp; Accessories
                </h3>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  AirPods Pro 2, AirPods Max, and certified GaN charging adapters.
                </p>
                <Link
                  href="/products"
                  className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0E004B] hover:underline"
                >
                  <span>Browse audio</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-wider text-[#0E004B]">
                  Location &amp; Transit
                </p>
                <h2 className="mt-3 font-display text-[28px] sm:text-[34px] font-bold leading-tight tracking-tight text-gray-900">
                  Easy to find, right inside the metro.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                  Our store is located directly on the main concourse level of Al Ghubaiba Metro Station. You do not need to exit into the street heat to visit our counter.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 space-y-4 text-[14px] text-gray-700">
                <div className="flex items-start gap-3">
                  <Navigation className="h-4 w-4 text-[#0E004B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Dubai Metro:</strong> Green Line to Al Ghubaiba Station. Exit toward Concourse Level.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="h-4 w-4 text-[#0E004B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Bus &amp; Marine:</strong> 1-minute walk from Al Ghubaiba Main Bus Terminal and Al Ghubaiba Marine Transport Station.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#0E004B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Open Hours:</strong> 10:00 AM – 11:00 PM (Open 7 Days a week including holidays).
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-gray-200 h-[380px] w-full bg-gray-100">
              <iframe
                title="APPSUNG Store Location Map"
                src="https://maps.google.com/maps?q=Al%20Ghubaiba%20Metro%20Station%2C%20Bur%20Dubai%2C%20Dubai%2C%20United%20Arab%20Emirates&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50/70">
        <div className="mx-auto flex max-w-shell flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[34px]">
              Ready to inspect your next flagship in person?
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
              Walk into our store inside Al Ghubaiba Metro Station, or speak directly with our specialists on WhatsApp for live pricing, reserved stock, and same-day delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[#0E004B] px-6 py-3 font-display text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#1a087a]"
            >
              Store directions &amp; hours
            </Link>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-display text-[15px] font-semibold text-gray-800 transition-colors duration-150 hover:bg-gray-50 hover:border-gray-400"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
