'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { STORE_INFO, SUPPORT_FAQS } from '../../data/constants';

const channels = [
  {
    icon: MessageCircleIcon,
    title: 'Facebook Messenger',
    detail: 'Message our official Facebook page directly.',
    action: 'Open Facebook Page',
    href: STORE_INFO.facebookUrl,
  },
  {
    icon: PhoneIcon,
    title: 'WhatsApp & Call',
    detail: `${STORE_INFO.phone} — ${STORE_INFO.address}`,
    action: 'Chat on WhatsApp',
    href: STORE_INFO.whatsappUrl,
  },
  {
    icon: MailIcon,
    title: 'Email',
    detail: `${STORE_INFO.email}, reply within hours.`,
    action: 'Send email',
    href: `mailto:${STORE_INFO.email}`,
  },
];

export default function SupportPage() {
  const [open, setOpen] = useState<string | null>(SUPPORT_FAQS[0].question);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-20">
        <header className="max-w-2xl">
          <h1 className="font-display text-[36px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[44px]">
            Support
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
            Real specialists, no scripts, no commission. Pick whichever channel
            suits you.
          </p>
        </header>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ icon: Icon, title, detail, action, href }) => (
            <li
              key={title}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50/80 p-7 text-gray-900 transition-colors hover:border-gray-400"
            >
              <Icon className="h-5 w-5 text-[#0E004B]" aria-hidden="true" />
              <h2 className="mt-5 font-display text-[17px] font-bold text-gray-900">
                {title}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                {detail}
              </p>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="mt-6 inline-flex items-center text-[14px] font-semibold text-[#0E004B] hover:opacity-80 transition-opacity"
              >
                {action} →
              </a>
            </li>
          ))}
        </ul>

        <section className="mt-20 border-t border-gray-200 pt-16">
          <h2 className="font-display text-[26px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[32px]">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
            {SUPPORT_FAQS.map((faq) => {
              const isOpen = open === faq.question;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    onClick={() =>
                      setOpen((current) =>
                        current === faq.question ? null : faq.question
                      )
                    }
                    className="flex w-full items-center justify-between text-left font-display text-[17px] font-semibold text-gray-900"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-gray-900' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 pr-8 text-[15px] leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
