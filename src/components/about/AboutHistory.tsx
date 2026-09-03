import React from 'react';
import { MILESTONES } from '@/data/constants';

export function AboutHistory() {
  return (
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
  );
}
