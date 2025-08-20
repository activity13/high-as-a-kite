'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Hero from '../components/Hero';
import EmailNewsletters from '../components/EmailNewsletters';
export default function Home() {
  const t = useTranslations('translation.translations');
  return (
    <>
      <Hero
        image="/images/nomade.jpeg"
        title={t('Hero.title')}
        description={t('Hero.description')}
      />
      <div className="min-h-screen relative">
        <EmailNewsletters />
      </div>
    </>
  );
}
