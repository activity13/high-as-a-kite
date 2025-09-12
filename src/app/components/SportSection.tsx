'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sports = [
  {
    name: 'Surf',
    description: 'Clases y alquiler con equipo incluido.',
    img: '/images/surf.webp',
    img_fit: 'object-[30%_0%]',
  },
  {
    name: 'Kite Surf',
    description: 'Cursos certificados IKO.',
    img: '/images/kite.jpg',
    img_fit: 'object-[-190px_0]',
  },
  {
    name: 'Wake Surf',
    description: 'Adrenalina en el mar con instructor.',
    img: '/images/wake.webp',
    img_fit: 'object-[80%_0%]',
  },
  {
    name: 'Stand Up Paddle',
    description: 'Paddle en el mar y tours guiados.',
    img: '/images/paddle.webp',
    img_fit: '',
  },
  {
    name: 'Jetsky',
    description: 'Alquiler y clases de motos acuáticas.',
    img: '/images/jetsky.webp',
    img_fit: 'object-[35%_0%]',
  },
  {
    name: 'Kayak',
    description:
      'Equipo deportivo, Equipo de seguridad, Instructor certificado 1hora en el agua',
    img: '/images/kayak.webp',
    img_fit: '-300px_0',
  },
  {
    name: 'Skim Board',
    description:
      'Equipo deportivo, Equipo de seguridad, Instructor certificado, 30min de clase y 30min de práctica',
    img: '/images/skim.webp',
    img_fit: '',
  },
];

export default function SportsDeck() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="next-section"
      className="relative w-full h-screen bg-neutral scrollbar-none overflow-x-auto flex flex-nowrap">
      {sports.map((sport, i) => {
        const isActive = active === i;
        return (
          <motion.div
            key={i}
            onClick={() => setActive(isActive ? null : i)}
            className="relative md:max-w-[400px] h-full cursor-pointer flex-shrink-0 mr-1"
            animate={{
              width: isActive ? '60%' : '40%',
              rotate: 0,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}>
            {/* Fondo */}
            <img
              src={sport.img}
              alt={sport.name}
              className={`absolute inset-0 w-full h-full object-cover ${sport.img_fit} `}
            />

            {/* Contenido */}
            <motion.div
              className="absolute bottom-10 left-6 right-6 text-white"
              animate={{ opacity: isActive ? 1 : 0.8 }}
              transition={{ delay: 0.2 }}>
              <h2 className="text-2xl md:text-3xl font-bold">{sport.name}</h2>
              {isActive && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-base">
                  {sport.description}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
