'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import DiscoverButton from './scrollFromHero';
import Link from 'next/link';
import { CTAButton } from '@/components/ui/CTAButton';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const t = useTranslations('translation.translations.Hero');

  const titles = useMemo(
    () => [
      t('titles.adventure'),
      t('titles.freedom'),
      t('titles.discover'),
      t('titles.haak'),
    ],
    [t],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative min-h-screen overflow-hidden isolate">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/caida.mp4" type="video/mp4" />
        {/* Fallback accesible si el navegador no soporta video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlays para legibilidad */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              {/* Contenedor con altura mínima para evitar saltos al animar */}
              <div className="min-h-[3.25rem] sm:min-h-[4.25rem] lg:min-h-[5.5rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titles[index]}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 20 }
                    }
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0 }
                    }
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                    className="block">
                    {titles[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              {t('caption')}
            </p>

            <div className="mt-2 md:mt-4">
              <CTAButton variant="primary" size="lg" icon={<ChevronRight />}>
                <Link href={'https://wa.me/51986677979'} target="_blank">
                  {t('cta')}
                </Link>
              </CTAButton>
            </div>
          </div>
          {/* Columna derecha vacía en desktop para dar respiro visual sobre el video */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>

      {/* Botón descubrir anclado abajo, conservando clics */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <DiscoverButton />
        </div>
      </div>
    </section>
  );
}
