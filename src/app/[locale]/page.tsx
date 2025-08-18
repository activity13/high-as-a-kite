import React from 'react';
import { useTranslations } from 'next-intl';
import Hero from '../components/Hero';
export default function Home() {
  const t = useTranslations('translation.translations');
  return (
    <>
      <Hero
        image="/images/nomade.jpeg"
        title={t('Hero.title')}
        description={t('Hero.description')}
      />
    </>
  );
}
