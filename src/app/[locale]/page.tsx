'use client';
import React from 'react';
import Hero from '../../components/ui/Hero';
import SportsSection from '../../components/ui/SportSection';
import EmailNewsletters from '../../components/ui/EmailNewsletters';
import LandingSections from '../../components/ui/HomeComponent';
import {
  FAQSection,
  GallerySection,
  FinalCTASection,
  SpotsSection,
  ExperienceSection,
  AdventuresSection,
  PackagesSection,
  MethodologySection,
  SafetySection,
  TeamSection,
  TestimonialsSection,
} from '@/components';
export default function Home() {
  return (
    <>
      <Hero />
      <SportsSection />
      <LandingSections />
      <SpotsSection />
      <ExperienceSection />
      <AdventuresSection />
      <GallerySection />
      <PackagesSection />
      <MethodologySection />
      <SafetySection />
      <TeamSection />
      <TestimonialsSection />
      <EmailNewsletters />
      <FinalCTASection />
    </>
  );
}
