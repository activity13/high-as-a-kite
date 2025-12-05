import React from 'react';
import { SportsSection, HowItWorksSection, SafetySection } from '@/components';
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
    namespace: 'translation.translations.SEO.sports',
  });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function LessonsPage() {
  return (
    <div>
      <SportsSection />
      <HowItWorksSection />
      {/* <MethodologySection /> */} {/* // todo Temporarily removed */}
      <SafetySection />
    </div>
  );
}
