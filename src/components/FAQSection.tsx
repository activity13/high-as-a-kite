'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const FAQSection = () => {
  const t = useTranslations('translation.translations');
  const items = (t.raw('faqs.items') as { q: string; a: string }[]) || [];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="p-16">
      <h2 className="text-3xl font-bold mb-8">{t('faqs.title')}</h2>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.q} className="border rounded">
            <button
              className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
              onClick={() => setOpen((o) => (o === it.q ? null : it.q))}
              aria-expanded={open === it.q}>
              <span>{it.q}</span>
              <span className="text-xs">{open === it.q ? '−' : '+'}</span>
            </button>
            {open === it.q && (
              <div className="px-4 pb-4 text-sm text-neutral-600">{it.a}</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
