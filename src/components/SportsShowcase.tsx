'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const sports = [
  {
    id: 'surf',
    name: 'Surf',
    description: 'Clases y alquiler con equipo incluido.',
    img: '/images/surf.webp',
    img_fit: 'object-[30%_0%]',
  },
  {
    id: 'kitesurf',
    name: 'Kite Surf',
    description: 'Cursos certificados IKO.',
    img: '/images/kite.jpg',
    img_fit: 'object-[-190px_0]',
  },
  {
    id: 'wakesurf',
    name: 'Wake Surf',
    description: 'Adrenalina en el mar con instructor.',
    img: '/images/wake.webp',
    img_fit: 'object-[80%_0%]',
  },
  {
    id: 'stand-up-paddle',
    name: 'Stand Up Paddle',
    description: 'Paddle en el mar y tours guiados.',
    img: '/images/paddle.webp',
    img_fit: '',
  },
  {
    id: 'jetsky',
    name: 'Jetsky',
    description: 'Alquiler y clases de motos acuáticas.',
    img: '/images/jetsky.webp',
    img_fit: 'object-[35%_0%]',
  },
  {
    id: 'kayak',
    name: 'Kayak',
    description:
      'Equipo deportivo, Equipo de seguridad, Instructor certificado 1hora en el agua',
    img: '/images/kayak.webp',
    img_fit: '-300px_0',
  },
  {
    id: 'skimboard',
    name: 'Skim Board',
    description:
      'Equipo deportivo, Equipo de seguridad, Instructor certificado, 30min de clase y 30min de práctica',
    img: '/images/skim.webp',
    img_fit: '',
  },
];

export default function SportsShowcase() {
  const t = useTranslations('translation.translations.Home.sportsShowCase');
  const [active, setActive] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const total = sports.length;
  const activeWidth = 60; // percent when active (desktop)
  const defaultBasis = `${100 / total}%`;

  useEffect(() => {
    const onResize = () =>
      setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section
      id="next-section"
      className="relative w-full h-screen bg-base-content scrollbar-none overflow-x-auto flex flex-nowrap">
      {sports.map((sport, i) => {
        const isActive = active === i;
        // compute basis depending on viewport
        // Desktop: distribute space so active takes `activeWidth%` and others share remaining
        // Mobile: preserve original behavior (active 60%, others 40%) to avoid layout regressions
        let basis: string;
        if (isDesktop) {
          const inactiveBasis =
            active === null
              ? defaultBasis
              : `${(100 - activeWidth) / (total - 1)}%`;
          basis = isActive ? `${activeWidth}%` : inactiveBasis;
        } else {
          basis = isActive ? '60%' : '40%';
        }

        const childClass = `${isDesktop ? '' : 'flex-shrink-0'} relative h-full cursor-pointer mr-1 overflow-hidden`;

        return (
          <motion.div
            key={i}
            onClick={() => setActive(isActive ? null : i)}
            className={childClass}
            initial={
              isDesktop ? { flexBasis: defaultBasis } : { width: defaultBasis }
            }
            animate={isDesktop ? { flexBasis: basis } : { width: basis }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}>
            {/* Fondo */}
            <Image
              src={sport.img}
              alt={sport.name}
              fill
              className={`object-cover ${sport.img_fit}`}
              sizes="(max-width: 768px) 100vw, 60vw"
            />

            {/* Fondo degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent mt-20" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 text-white z-10 bg-black/60 backdrop-blur-sm"
              animate={{
                height: isActive ? '200px' : '80px',
                padding: isActive ? '30px' : '16px',
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}>
              <h2
                title={sport.name}
                className={
                  isActive
                    ? 'text-xl md:text-2xl font-bold break-words'
                    : 'text-xl md:text-2xl font-bold truncate max-w-full'
                }>
                {sport.name}
              </h2>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 space-y-4">
                  <p className="text-sm  md:text-base text-white/90 line-clamp-2">
                    {sport.description}
                  </p>
                  <Link
                    href={`/sports?sport=${sport.id}`}
                    className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}>
                    {t('disoverButton')}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
