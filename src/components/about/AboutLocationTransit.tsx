import React from 'react';
import { Navigation, Clock } from 'lucide-react';
import { Card } from '@/components/ui';

export function AboutLocationTransit() {
  return (
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

            <Card variant="subtle" className="p-6 space-y-4 text-[14px] text-gray-700">
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
            </Card>
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
  );
}
