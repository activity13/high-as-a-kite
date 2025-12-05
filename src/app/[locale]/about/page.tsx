import React from 'react';
import {
  TeamSection,
  FinalCTASection,
  MissionValues,
  StorySection,
} from '@/components';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'translation.translations.SEO.about',
  });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function About() {
  const t = useTranslations('translation.translations');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kite.jpg"
            alt="About HAAK"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {t('About.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
            {t('About.subtitle')}
          </p>
        </div>
      </section>

      <MissionValues />
      <StorySection />
      <TeamSection />
      <FinalCTASection />
    </div>
  );
}
