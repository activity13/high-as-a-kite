'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section, SectionTitle } from './ui/Section';
import { motion } from 'framer-motion';
import { Target, Heart, Shield, Users } from 'lucide-react';

export const MissionValues = () => {
  const t = useTranslations('translation.translations.About.values');

  const values = [
    {
      id: 'passion',
      icon: <Heart className="w-8 h-8" />,
      title: t('passion.title'),
      text: t('passion.text'),
    },
    {
      id: 'safety',
      icon: <Shield className="w-8 h-8" />,
      title: t('safety.title'),
      text: t('safety.text'),
    },
    {
      id: 'community',
      icon: <Users className="w-8 h-8" />,
      title: t('community.title'),
      text: t('community.text'),
    },
    {
      id: 'progression',
      icon: <Target className="w-8 h-8" />,
      title: t('progression.title'),
      text: t('progression.text'),
    },
  ];

  return (
    <Section background="base-100">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <SectionTitle as="h2" className="mb-6">
          {t('title')}
        </SectionTitle>
        <p className="text-lg text-base-content/70 leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
            <p className="text-base-content/70 text-sm leading-relaxed">
              {value.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
