'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import DiscoverButton from './scrollFromHero';
export default function Hero() {
  const [index, setIndex] = useState(0);

  const t = useTranslations('translation.translations.Hero');

  const titles = [
    t('titles.adventure'),
    t('titles.freedom'),
    t('titles.discover'),
    t('titles.haak'),
  ];

  // Cambiar título cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Fondo video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/lol.mp4" type="video/mp4" />
        Not Supported
      </video>

      {/* Overlay para mejorar contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative flex-col z-10 text-center md:text-left w-full px-4">
        <h1 className="relative md:left-20 mt-5 text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-xl h-[120px] md:h-[180px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={titles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={clsx('block')}>
              {titles[index]}
            </motion.span>
          </AnimatePresence>
        </h1>
        <p className="relative md:left-20 md:max-w-md mt-50 md:mt-5 text-lg md:text-xl text-white/90 ">
          {t('caption')}
        </p>
        <button className="relative md:mt-5 md:left-20 px-6 py-3 bg-sky-600 text-white rounded-lg font-medium shadow hover:bg-sky-700 transition delay-150 duration-300 ease-in-out hover:-rotate-y-1 hover:rotate-90">
          {t('cta')}
        </button>
      </div>
      <DiscoverButton />
    </section>
  );
}
