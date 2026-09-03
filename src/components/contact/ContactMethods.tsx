import React from 'react';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { STORE_INFO } from '@/data/constants';
import { Card } from '@/components/ui';

export function ContactMethods() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <Card variant="subtle" className="p-6 flex flex-col justify-between">
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
      </Card>

      <Card variant="subtle" className="p-6 flex flex-col justify-between">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white mb-4">
            <MessageCircle className="h-5 w-5" />
          </div>
          <h3 className="font-display text-[16px] font-bold text-gray-900">
            WhatsApp Live Chat
          </h3>
          <p className="mt-1 text-[13px] text-gray-600">
            Instant reply for quotes &amp; orders
          </p>
        </div>
        <a
          href={STORE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-[15px] font-bold text-emerald-700 hover:underline"
        >
          Chat on WhatsApp &rarr;
        </a>
      </Card>

      <Card variant="subtle" className="p-6 flex flex-col justify-between">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E004B] text-white mb-4">
            <Mail className="h-5 w-5" />
          </div>
          <h3 className="font-display text-[16px] font-bold text-gray-900">
            Email Support
          </h3>
          <p className="mt-1 text-[13px] text-gray-600">
            Invoices, warranties &amp; bulk orders
          </p>
        </div>
        <a
          href={`mailto:${STORE_INFO.email}`}
          className="mt-5 text-[15px] font-bold text-[#0E004B] hover:underline break-all"
        >
          {STORE_INFO.email}
        </a>
      </Card>

      <Card variant="subtle" className="p-6 flex flex-col justify-between">
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
      </Card>
    </div>
  );
}
