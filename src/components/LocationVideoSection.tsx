'use client';

import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import { Section, SectionTitle } from './ui/Section';

export const LocationVideoSection = () => {
  const t = useTranslations('translation.translations.Home.thePlace');

  return (
    <Section background="base-200">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-xl aspect-video bg-base-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4Pp6K5lhS4U"
              title="High as a Kite - Location Video"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <SectionTitle as="h2" className="mb-4">
            {t('title')}
          </SectionTitle>
          <p className={`${haakDesign.typography.body} text-base-content/70`}>
            {t('description')}
          </p>
        </div>
      </div>
    </Section>
  );
};
