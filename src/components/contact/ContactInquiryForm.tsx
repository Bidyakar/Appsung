import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { STORE_INFO } from '@/data/constants';
import { Button, Card } from '@/components/ui';

export function ContactInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: 'iPhone 17 Pro Max',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Card variant="subtle" className="p-7 sm:p-8">
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

          <Button variant="primary" fullWidth size="lg" type="submit">
            <Send className="h-4 w-4 mr-2" />
            <span>Send Inquiry</span>
          </Button>
        </form>
      )}

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
    </Card>
  );
}
