import React from 'react';
import { TeamSection, FinalCTASection } from '@/components';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('translation.translations');

  return (
    <div className="min-h-screen mt-14">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-b from-teal-500 to-teal-700 text-white py-16">
        <h1 className="text-5xl font-bold drop-shadow-lg animate-fade-in">
          {t('About.title')}
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto animate-fade-in delay-200">
          {t('About.subtitle')}
        </p>
      </section>

      <TeamSection />
      <FinalCTASection />
    </div>
  );
}
