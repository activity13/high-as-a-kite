'use client';

import { useTranslations } from 'next-intl';
import { track } from '../utils/track';
import { QuickFormModal } from './QuickFormModal';

export const FinalCTASection = () => {
  const t = useTranslations('translation.translations');
  return (
    <section className="py-20 bg-teal-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-3">{t('finalCta.title')}</h2>
      <p className="max-w-xl mx-auto mb-8 text-sm opacity-90">
        {t('finalCta.text')}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/000000000"
          className="px-6 py-3 rounded bg-white text-teal-700 text-sm font-medium"
          onClick={() => track(t('events.tracking.whatsapp_click'))}>
          {t('finalCta.buttons.whatsapp')}
        </a>
        <QuickFormModal
          onOpen={() =>
            track(t('events.tracking.cta_click'), {
              source: 'final',
            })
          }
        />
      </div>
    </section>
  );
};
