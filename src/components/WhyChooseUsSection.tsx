'use client';

import { useTranslations } from 'next-intl';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardBody, CardTitle } from './ui/Card';
import Image from 'next/image';

export const WhyChooseUsSection = () => {
  const t = useTranslations('translation.translations.Home.whyHaak');

  const features = [
    {
      title: t('instructorsIKO.title'),
      description: t('instructorsIKO.description'),
      icon: '/images/wave.svg',
      alt: 'Water element - Wave icon',
    },
    {
      title: t('equipment.title'),
      description: t('equipment.description'),
      icon: '/images/air.svg',
      alt: 'Air element - Wind icon',
    },
    {
      title: t('location.title'),
      description: t('location.description'),
      icon: '/images/fire.svg',
      alt: 'Fire element - Flame icon',
    },
  ];

  return (
    <Section background="primary">
      <SectionTitle as="h2" className="text-center text-primary-content mb-12">
        {t('title')}
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} variant="bordered">
            <CardBody className="text-center items-center">
              <div className="mb-4 w-12 h-12 relative">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <CardTitle as="h3" className="mb-3 justify-center">
                {feature.title}
              </CardTitle>
              <p className="text-base-content/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};
