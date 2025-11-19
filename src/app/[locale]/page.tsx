'use client';
import React from 'react';
import Hero from '../../components/Hero';
import SportsSection from '../../components/SportSection';
import EmailNewsletters from '../../components/EmailNewsletters';
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
      <FAQSection />
      <EmailNewsletters />
      <FinalCTASection />
    </>
  );
}
