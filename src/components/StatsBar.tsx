import React from 'react';
import { useTranslations } from 'next-intl';

export const StatsBar = () => {
  const t = useTranslations('translation.translations');
  const items =
    (t.raw('statsBar.items') as { label: string; value: string }[]) || [];

  return (
    <section className="grid sm:grid-cols-5 grid-cols-2 gap-4 py-8 text-center">
      {items.map((it, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-xl font-semibold">{it.value}</span>
          <span className="text-xs uppercase tracking-wide text-neutral-600">
            {it.label}
          </span>
        </div>
      ))}
    </section>
  );
};
