import React from 'react';
import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import { Section, SectionTitle } from './ui/Section';
import { TestimonialCard } from './ui/TestimonialCard';

export const TestimonialsSection = () => {
  const t = useTranslations('translation.translations');
  const items = t.raw('testimonials.items') as {
    name: string;
    origin: string;
    rating: number;
    text: string;
  }[];

  return (
    <Section background="base-100" aria-label={t('testimonials.sliderAria')}>
      <SectionTitle as="h2" className="mb-8">
        {t('testimonials.title')}
      </SectionTitle>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {items.map((it) => (
          <TestimonialCard
            key={it.name}
            quote={it.text}
            author={it.name}
            location={it.origin}
            rating={it.rating}
          />
        ))}
      </div>
    </Section>
  );
};
