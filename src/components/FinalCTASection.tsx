'use client';

import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import { track } from '../utils/track';
import { Section, SectionTitle } from './ui/Section';
import { CTAButton } from './ui/CTAButton';
import { QuickFormModal } from './ui/QuickFormModal';
import { FaWhatsapp } from 'react-icons/fa';

export const FinalCTASection = () => {
  const t = useTranslations('translation.translations');

  return (
    <Section background="primary" className="text-center">
      <SectionTitle as="h2" className="mb-3 text-primary-content">
        {t('finalCta.title')}
      </SectionTitle>

      <p
        className={`${haakDesign.typography.body} max-w-xl mx-auto mb-8 text-primary-content/90`}>
        {t('finalCta.text')}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <CTAButton
          variant="accent"
          size="lg"
          icon={<FaWhatsapp />}
          onClick={() => {
            track(t('events.tracking.whatsapp_click'));
            window.open('https://wa.me/51986677979', '_blank');
          }}>
          {t('finalCta.buttons.whatsapp')}
        </CTAButton>

        <QuickFormModal
          onOpen={() =>
            track(t('events.tracking.cta_click'), {
              source: 'final',
            })
          }
        />
      </div>
    </Section>
  );
};
