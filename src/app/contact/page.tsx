'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
  Send,
  CheckCircle,
} from 'lucide-react';
import { STORE_INFO } from '../../data/constants';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: 'iPhone 17 Pro Max',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* HEADER HERO */}
      <section className="border-b border-gray-200 bg-[#0E004B] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <p className="text-[13px] font-bold uppercase tracking-wider text-indigo-300">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-[38px] sm:text-[50px] font-bold tracking-tight text-white leading-tight">
            Visit our Bur Dubai Flagship Store or contact us online.
          </h1>
          <p className="mt-4 text-[16px] sm:text-[18px] text-indigo-100/85 max-w-2xl leading-relaxed">
            Real specialists on-site 7 days a week. Test, inspect, and unbox genuine UAE stock in person, or get instant same-day dispatch across Dubai.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-14 sm:py-20">
        
        {/* TOP CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Phone */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E004B] text-white mb-4">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="font-display text-[16px] font-bold text-gray-900">
                Call Store Directly
              </h3>
              <p className="mt-1 text-[13px] text-gray-600">
                Direct counter support
              </p>
            </div>
            <a
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="mt-5 text-[15px] font-bold text-[#0E004B] hover:underline"
            >
              {STORE_INFO.phone}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white mb-4">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="font-display text-[16px] font-bold text-gray-900">
                WhatsApp Live Chat
              </h3>
              <p className="mt-1 text-[13px] text-gray-600">
                Instant reply for quotes & orders
              </p>
            </div>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-[15px] font-bold text-emerald-700 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E004B] text-white mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-display text-[16px] font-bold text-gray-900">
                Email Support
              </h3>
              <p className="mt-1 text-[13px] text-gray-600">
                Invoices, warranties & bulk orders
              </p>
            </div>
            <a
              href={`mailto:${STORE_INFO.email}`}
              className="mt-5 text-[15px] font-bold text-[#0E004B] hover:underline break-all"
            >
              {STORE_INFO.email}
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E004B] text-white mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-display text-[16px] font-bold text-gray-900">
                Store Hours
              </h3>
              <p className="mt-1 text-[13px] text-gray-600">
                Open 7 days a week
              </p>
            </div>
            <p className="mt-5 text-[14px] font-semibold text-gray-900">
              {STORE_INFO.workingHours}
            </p>
          </div>
        </div>

        {/* MAP & INQUIRY FORM ROW */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: MAP & PHYSICAL STORE ADDRESS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#0E004B]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-[20px] font-bold text-gray-900">
                    {STORE_INFO.name}
                  </h2>
                  <p className="mt-1 text-[15px] text-gray-700 font-medium leading-relaxed">
                    {STORE_INFO.address}, Dubai, United Arab Emirates
                  </p>
                  <p className="mt-2 text-[13px] text-gray-500">
                    Located conveniently inside the station concourse — air-conditioned, direct metro access.
                  </p>
                </div>
              </div>

              {/* Transit Tips */}
              <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-gray-600">
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-[#0E004B] shrink-0" />
                  <span><strong>Metro:</strong> Green Line (Al Ghubaiba Station)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-[#0E004B] shrink-0" />
                  <span><strong>Bus:</strong> Al Ghubaiba Main Bus Station (1 min)</span>
                </div>
              </div>
            </div>

            {/* EMBEDDED GOOGLE MAP */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 h-[380px] w-full bg-gray-100">
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

          {/* RIGHT: DIRECT MESSAGE / INQUIRY FORM */}
          <div className="lg:col-span-5 rounded-2xl border border-gray-200 bg-gray-50/60 p-7 sm:p-8">
            <h2 className="font-display text-[22px] font-bold text-gray-900">
              Send an Inquiry
            </h2>
            <p className="mt-1 text-[14px] text-gray-600">
              Ask about current stock, reservations, or trade-in valuations.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                <CheckCircle className="h-10 w-10 text-emerald-600 mx-auto" />
                <h3 className="mt-3 font-display text-[17px] font-bold text-emerald-950">
                  Inquiry Received!
                </h3>
                <p className="mt-1 text-[13.5px] text-emerald-800 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our Bur Dubai team will WhatsApp/call you shortly regarding the <strong>{formData.device}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-[13px] font-semibold text-emerald-700 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rashid Al Nuaimi"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-[14px] text-gray-900 focus:border-[#0E004B] focus:outline-none focus:ring-1 focus:ring-[#0E004B]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-[14px] text-gray-900 focus:border-[#0E004B] focus:outline-none focus:ring-1 focus:ring-[#0E004B]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                    Interested Device
                  </label>
                  <select
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-[14px] text-gray-900 focus:border-[#0E004B] focus:outline-none focus:ring-1 focus:ring-[#0E004B]"
                  >
                    <option value="iPhone 17 Pro Max">iPhone 17 Pro Max</option>
                    <option value="Samsung Galaxy S24 Ultra">Samsung Galaxy S24 Ultra</option>
                    <option value="Samsung Galaxy Z Fold6">Samsung Galaxy Z Fold6</option>
                    <option value="iPad Pro M4">iPad Pro M4</option>
                    <option value="Meta Quest 3">Meta Quest 3</option>
                    <option value="Apple Watch Ultra 2">Apple Watch Ultra 2</option>
                    <option value="Other / General Question">Other / General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                    Message / Question
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify storage (256GB/512GB/1TB), color, or pickup timing..."
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-[14px] text-gray-900 focus:border-[#0E004B] focus:outline-none focus:ring-1 focus:ring-[#0E004B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0E004B] py-3.5 font-display text-[15px] font-bold text-white transition-colors duration-150 hover:bg-[#1a087a]"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}

            {/* Social link */}
            <div className="mt-6 pt-5 border-t border-gray-200 text-center text-[13px] text-gray-600">
              <span>Follow our daily store unboxings on </span>
              <a
                href={STORE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#1877F2] hover:underline"
              >
                Facebook Page
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
