import React from 'react';
import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import { Section, SectionTitle } from './ui/Section';
import { SpotCard } from './ui/SpotCard';

const spotImages: Record<string, string> = {
  Máncora: '/images/mancora.jpg',
  'Los Órganos': '/images/los-organos.jpg',
  'Cabo Blanco': '/images/cabo-blanco.jpg',
  Vichayito: '/images/vichayito.jpg',
  Lobitos: '/images/lobitos.jpg',
};

export const SpotsShowcase = () => {
  const t = useTranslations('translation.translations');
  const cards = t.raw('spots.cards') as {
    name: string;
    level: string;
    wind: string;
    highlight: string;
  }[];

  return (
    <Section background="base-200">
      <header className="mb-8">
        <SectionTitle as="h2">{t('spots.title')}</SectionTitle>
        <p
          className={`${haakDesign.typography.body} text-base-content/70 mt-2`}>
          {t('spots.subtitle')}
        </p>
      </header>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
        {cards.map((c) => (
          <div
            key={c.name}
            className="snap-center shrink-0 w-[85vw] sm:w-[350px]">
            <SpotCard
              name={c.name}
              level={c.level}
              wind={c.wind}
              highlight={c.highlight}
              image={spotImages[c.name] || '/images/haakfire.png'}
              className="h-full"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
