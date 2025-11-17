'use client';

import { useTranslations } from 'next-intl';
import { track } from '../utils/track';
import { QuickFormModal } from './QuickFormModal';
import { CTAButton } from '@/components/ui/CTAButton';
import { FaWhatsapp } from 'react-icons/fa';
export const FinalCTASection = () => {
  const t = useTranslations('translation.translations');
  return (
    <section className="py-20 bg-teal-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-3">{t('finalCta.title')}</h2>
      <p className="max-w-xl mx-auto mb-8 text-sm opacity-90">
        {t('finalCta.text')}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <CTAButton variant="ghost" size="lg" icon={<FaWhatsapp />}>
          <a
            href="https://wa.me/000000000"
            target="_blank"
            onClick={() => track(t('events.tracking.whatsapp_click'))}>
            {t('finalCta.buttons.whatsapp')}
          </a>
        </CTAButton>
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
