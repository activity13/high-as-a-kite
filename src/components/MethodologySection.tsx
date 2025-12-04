import React from 'react';
import { useTranslations } from 'next-intl';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardBody, CardTitle } from './ui/Card';
import { haakDesign } from '@/lib/design-system';

export const MethodologySection = () => {
  const t = useTranslations('translation.translations');
  const steps = t.raw('methodology.steps') as {
    id: number;
    title: string;
    text: string;
  }[];
  return (
    <Section background="base-200" contained>
      <SectionTitle className="text-center">
        {t('methodology.title')}
      </SectionTitle>
      <ol className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {steps.map((s) => (
          <li key={s.id} className="relative">
            <Card
              variant="bordered"
              className="hover:shadow-xl hover:border-primary transition-all duration-300 h-full">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                {s.id}
              </div>
              <CardBody className="items-center text-center pt-10">
                <CardTitle as="h3" className="mb-4">
                  {s.title}
                </CardTitle>
                <p
                  className={`${haakDesign.typography.body} text-base-content/70`}>
                  {s.text}
                </p>
              </CardBody>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
};
