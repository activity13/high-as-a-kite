'use client';

import React, { useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function DiscoverButton() {
  const t = useTranslations('translation.translations.Hero');
  const handleScroll = useCallback(() => {
    // Buscar la siguiente sección
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="md"
        onClick={handleScroll}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center text-xl text-primary-content hover:text-white hover:cursor-pointer transition-colors duration-300">
        <span>{t('discover')}</span>
        <ChevronDown className="animate-bounce" />
      </Button>
    </>
  );
}
