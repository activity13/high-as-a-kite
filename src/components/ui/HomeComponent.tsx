'use client';

import React from 'react';
import { WhyChooseUsSection } from '../WhyChooseUsSection';
import { StatsBar } from '../StatsBar';
import { LocationVideoSection } from '../LocationVideoSection';
import { HowItWorksSection } from '../HowItWorksSection';

/**
 * HomeComponent - Página principal con secciones segmentadas
 * Cada sección ahora es un componente independiente con el sistema de diseño aplicado
 */
export default function HomeComponent() {
  return (
    <div className="flex flex-col">
      <WhyChooseUsSection />
      <StatsBar />
      <LocationVideoSection />
      <HowItWorksSection />
    </div>
  );
}
