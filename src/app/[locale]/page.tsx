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
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col [&>section]:flex-1 [&>section]:flex [&>section]:flex-col [&>section]:justify-center">
          <WhyChooseUsSection />
        </div>
        <div className="shrink-0">
          <StatsBar />
        </div>
      </div>
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
