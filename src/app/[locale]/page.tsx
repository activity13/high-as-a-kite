'use client';
import React from 'react';
import {
  Hero,
  WhyChooseUsSection,
  StatsBar,
  SportsShowcase,
  MainSpotShowcase,
  SpotsShowcase,
  GallerySection,
  PackagesSection,
  AdventuresSection,
  TestimonialsSection,
  FinalCTASection,
} from '@/components';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUsSection />
      <StatsBar />
      <SportsShowcase />
      <MainSpotShowcase />
      <SpotsShowcase /> // todo considerar si debo añadir este componente.
      <GallerySection />
      <PackagesSection />
      <AdventuresSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
