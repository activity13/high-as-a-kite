'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="next-section"
      className="relative w-full h-screen bg-base-content scrollbar-none overflow-x-auto flex flex-nowrap">
      {sports.map((sport, i) => {
        const isActive = active === i;
        return (
          <motion.div
            key={i}
            onClick={() => setActive(isActive ? null : i)}
            className="relative h-full cursor-pointer flex-shrink-0 mr-1"
            animate={{
              width: isActive
                ? '60%'
                : typeof window !== 'undefined' && window.innerWidth >= 1024
                  ? '12%'
                  : '40%',
              rotate: 0,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}>
            {/* Fondo */}
            <Image
              src={sport.img}
              alt={sport.name}
              fill
              className={`object-cover ${sport.img_fit}`}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            {/* todo Contenido */}
            {/* // todo Mejorar en como el contenido se muestra, los deportes
             con titulos y descripciones largas se ven mal, es como si el contenido
            quedara por debajo del borde. Debería tener un padding inferior
            mayor o un margen interno para que tena una separación por orden al borde
            inferior y podria ser más alto sin importar que ocupe un poco más de
            altura en su contenedor padre. */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent mt-20" />
            <motion.div
              className="absolute bottom-0 h-full left-0 right-0 text-white z-10 bg-black/60 backdrop-blur-sm"
              animate={{
                height: isActive ? '180px' : '80px',
                padding: isActive ? '24px' : '16px',
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}>
              <h2 className="text-xl md:text-2xl font-bold">{sport.name}</h2>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 space-y-4">
                  <p className="text-sm md:text-base text-white/90 line-clamp-2">
                    {sport.description}
                  </p>
                  <Link
                    href={`/sports?sport=${sport.id}`}
                    className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}>
                    Ver deporte →
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
