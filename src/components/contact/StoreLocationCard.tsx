import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { STORE_INFO } from '@/data/constants';
import { Card } from '@/components/ui';

export function StoreLocationCard() {
  return (
    <div className="space-y-6">
      <Card variant="default" className="p-6">
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
      </Card>

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
  );
}
