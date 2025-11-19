'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { haakDesign } from '@/lib/design-system';
import { Section, SectionTitle } from './ui/Section';
import { Button } from './ui/Button';

export const FAQSection = () => {
  const t = useTranslations('translation.translations');
  const items = (t.raw('faqs.items') as { q: string; a: string }[]) || [];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section background="base-100">
      <SectionTitle as="h2" className="mb-8">
        {t('faqs.title')}
      </SectionTitle>

      <ul className="space-y-4 max-w-3xl mx-auto">
        {items.map((it) => (
          <li
            key={it.q}
            className="border border-base-300 rounded-lg bg-base-100">
            <Button
              variant="ghost"
              className="w-full text-left px-4 py-3 font-medium flex justify-between items-center hover:bg-base-200"
              onClick={() => setOpen((o) => (o === it.q ? null : it.q))}
              aria-expanded={open === it.q}>
              <span className="text-base-content">{it.q}</span>
              <span className="text-xl text-base-content/70">
                {open === it.q ? '−' : '+'}
              </span>
            </Button>
            {open === it.q && (
              <div
                className={`px-4 pb-4 py-2 ${haakDesign.typography.body} text-base-content/70`}>
                {it.a}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
};
