'use client';
import React from 'react';
import {
  Hero,
  WhyChooseUsSection,
  StatsBar,
  SportsShowcase,
  MainSpotShowcase,
  GallerySection,
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
      <GallerySection />
      {/* // todo revisar los paquetes que tendrá. <PackagesSection /> */}
      {/* // todo Revisar las aventuras que ofrecerá para darle forma o ver si es necesario. <AdventuresSection /> */}
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
