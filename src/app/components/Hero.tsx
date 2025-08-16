import React from 'react';

import { useTranslations } from 'next-intl';
import { MessageCircle, Facebook, Instagram } from 'lucide-react';
interface i18nProps {
  title: string;
  image: string;
  description: string;
}
export default function Hero({ title, image, description }: i18nProps) {
  const t = useTranslations('translation.translations');
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${image})` }}>
      {/* overlay global */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to black/20" />
      {/* contenido central */}
      <main className="relative z-10 flex-1 flex items-center justify-center md:justify-end px-4 md:px-12 pt-[96px]">
        <div className="max-w-md md:max-w-lg bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
          <h1 className="text-2xl md:text-4xl text-white mb-4 font-bold leading-relaxed">
            {title}
          </h1>
          <p className="text-white/90 text-base md:text-l mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <button className="border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-transform hover:scale-105">
              {t('HomePage.description')}
            </button>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 hover:text-black transition-transform hover:scale-105">
              <div>{t('HomePage.cta')}</div>
            </button>
          </div>
        </div>
      </main>
      <footer className="relative z-10 w-full px-6 md:px-12 py-4 flex items-center justify-between border-t border-white/20 mt-auto">
        <div className="flex items-center gap-4">
          <span className="text-white/90 text-xs md:text-sm">
            {t('HomePage.follow')}
          </span>
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <Facebook size={20} />
          </button>
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <Instagram size={20} />
          </button>
        </div>
        {/* cta */}
        <div className="flex items-center text-white/90 text-xs md:text-sm">
          <span className="invisible md:visible">{t('HomePage.chat')}</span>
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <MessageCircle />
          </button>
        </div>
      </footer>
    </section>
  );
}
