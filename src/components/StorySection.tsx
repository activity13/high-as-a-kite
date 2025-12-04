'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const StorySection = () => {
  const t = useTranslations('translation.translations.About.story');

  return (
    <Section background="base-200">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/sunset.webp"
            alt="HAAK Kitesurf School"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t('title')}
          </h2>
          <div className="space-y-4 text-lg text-base-content/80 leading-relaxed">
            {t('p1')
              .split('\n\n')
              .map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
