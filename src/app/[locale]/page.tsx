'use client';
import React from 'react';
import Hero from '../../components/ui/Hero';
import SportsSection from '../../components/ui/SportSection';
import EmailNewsletters from '../../components/ui/EmailNewsletters';
import LandingSections from '../../components/ui/HomeComponent';
export default function Home() {
  return (
    <>
      <Hero />
      <SportsSection />
      <LandingSections />
      <EmailNewsletters />
    </>
  );
}
