import React from 'react';
import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardBody, CardTitle } from './ui/Card';
import { CTAButton } from './ui/CTAButton';

export const ExperienceSection = () => {
  const t = useTranslations('translation.translations');
  const pillars = t.raw('experience.pillars') as {
    title: string;
    text: string;
  }[];

  return (
    <Section background="base-200">
      <SectionTitle as="h2" className="mb-2">
        {t('experience.title')}
      </SectionTitle>

      <p
        className={`${haakDesign.typography.body} mb-8 max-w-xl text-base-content/70`}>
        {t('experience.intro')}
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <Card key={p.title} variant="bordered">
            <CardBody>
              <CardTitle as="h3">{p.title}</CardTitle>
              <p className={haakDesign.typography.body}>{p.text}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <CTAButton
          variant="primary"
          size="lg"
          onClick={() => window.open('https://wa.me/51986677979', '_blank')}>
          {t('experience.cta')}
        </CTAButton>
      </div>
    </Section>
  );
};
