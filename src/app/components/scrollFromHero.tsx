'use client';

import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';
import { useTranslations } from 'next-intl';
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
    <button
      onClick={handleScroll}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xl text-primary-content hover:text-white hover:cursor-pointer transition-colors duration-300">
      <span className="underline mb-1">{t('discover')}</span>
      <ChevronDown className="animate-bounce" size={28} />
    </button>
  );
}
