'use client';
import React from 'react';
import Hero from '../components/Hero';
import SportsSection from '../components/SportSection';
import EmailNewsletters from '../components/EmailNewsletters';
import LandingSections from '../components/HomeComponent';
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
