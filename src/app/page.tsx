import React from 'react';
import {
  Hero,
  CategoryRail,
  SeasonShortlist,
  AboutSection,
  Spotlight,
  Reviews,
  ConsultationCTA,
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryRail />
      <SeasonShortlist />
      <AboutSection />
      <Spotlight />
      <Reviews />
      <ConsultationCTA />
    </>
  );
}
