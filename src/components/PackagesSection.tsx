import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { track } from '../utils/track';
import { Section, SectionTitle } from './ui/Section';
import { PackageCard } from './ui/PackageCard';
import { CTAButton } from './ui/CTAButton';
import { Badge } from './ui/Badge';
import { haakDesign } from '@/lib/design-system';
import { Card, CardBody, CardTitle } from './ui/Card';

export const PackagesSection = () => {
  const t = useTranslations('translation.translations');
  const cards = t.raw('packages.cards') as {
    id: string;
    name: string;
    hours: number;
    sessions: number;
    includes: string[];
    focus: string;
    price: number;
  }[];
  const addons = t.raw('packages.addons') as {
    id: string;
    name: string;
    price: number;
    note: string;
  }[];
  const currency = t('packages.currency');
  return (
    <Section background="base-100" contained id="packages">
      <SectionTitle>{t('packages.title')}</SectionTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-10">
        {cards.map((c) => (
          <Card
            key={c.id}
            variant="bordered"
            className="hover:border-primary hover:shadow-lg transition-all duration-300"
            onMouseEnter={() =>
              track(t('events.tracking.package_view'), {
                id: c.id,
              })
            }>
            <CardBody className="gap-4">
              <div>
                <CardTitle as="h3">{c.name}</CardTitle>
                <p
                  className={`${haakDesign.typography.small} text-base-content/70 mt-1`}>
                  {c.focus}
                </p>
              </div>

              <ul className="space-y-2 flex-1">
                {c.includes.map((i, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 items-start text-sm text-base-content/80">
                    <span className="text-primary">•</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-base-300 pt-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-primary">
                    ${c.price}
                  </span>
                  <span
                    className={`${haakDesign.typography.small} text-base-content/60`}>
                    {currency}
                  </span>
                </div>
                <p
                  className={`${haakDesign.typography.small} text-base-content/60`}>
                  {c.hours}h · {c.sessions} sesiones
                </p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <h4
        className={`${haakDesign.typography.body} font-semibold uppercase tracking-wide mb-6 mt-8 text-base-content`}>
        {t('packages.addonsTitle')}
      </h4>
      <div className="flex flex-wrap gap-4">
        {addons.map((a) => (
          <div
            key={a.id}
            className="px-4 py-3 rounded-lg border-2 border-base-300 bg-base-100 shadow-sm hover:border-primary hover:shadow-md transition-all duration-300">
            <span className="font-medium text-base-content">{a.name}</span>
            <span className="text-primary font-semibold"> · ${a.price}</span>
            <div
              className={`${haakDesign.typography.small} text-base-content/60 mt-1`}>
              {a.note}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="#form">
          <CTAButton
            onClick={() =>
              track(t('events.tracking.cta_click'), {
                source: 'packages',
              })
            }>
            {t('packages.cta')}
          </CTAButton>
        </Link>
      </div>
    </Section>
  );
};
