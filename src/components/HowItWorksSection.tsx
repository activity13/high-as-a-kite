'use client';

import { useTranslations } from 'next-intl';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardBody, CardTitle } from './ui/Card';
import Image from 'next/image';
export const HowItWorksSection = () => {
  const t = useTranslations('translation.translations.Home.howItWorks');

  const steps = [
    {
      number: '01',
      title: t('step1.title'),
      icon: '/images/wave.svg',
      description: t('step1.description'),
      alt: 'Water element - Wave icon',
    },
    {
      number: '02',
      title: t('step2.title'),
      icon: '/images/air.svg',
      description: t('step2.description'),
      alt: 'Air element - Wind icon',
    },
    {
      number: '03',
      title: t('step3.title'),
      icon: '/images/fire.svg',
      description: t('step3.description'),
      alt: 'Fire element - Flame icon',
    },
  ];

  return (
    <Section background="base-100">
      <SectionTitle as="h2" className="text-center mb-12">
        {t('title')}
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <Card key={step.number} variant="bordered">
            <CardBody className="text-center items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Image
                  src={step.icon}
                  alt={step.alt}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <CardTitle as="h3" className="mb-3 justify-center">
                {step.title}
              </CardTitle>
              <p className="text-base-content/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};
