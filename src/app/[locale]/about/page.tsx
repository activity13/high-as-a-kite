import React from 'react';

import { MethodologySection } from '@/components/MethodologySection';
import { TeamSection } from '@/components/TeamSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('translation.translations');

  return (
    <div className="h-full pt-[96px]">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-b from-teal-500 to-teal-700 text-white py-16">
        <h1 className="text-5xl font-bold drop-shadow-lg animate-fade-in">
          {t('About.title')}
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto animate-fade-in delay-200">
          {t('About.subtitle')}
        </p>
      </section>

      {/* Methodology Section */}
      <MethodologySection />

      {/* Team Section */}
      <TeamSection />

      {/* Final Call to Action */}
      <FinalCTASection />
    </div>
  );
}
