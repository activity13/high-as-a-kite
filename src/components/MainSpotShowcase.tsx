'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { haakDesign } from '@/lib/design-system';
import { CTAButton } from '@/components/ui/CTAButton';
import { Section, SectionTitle } from './ui/Section';
import { Wind, ShieldCheck, Sun, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const MainSpotShowcase = () => {
  const t = useTranslations('translation.translations.Home.thePlace');
  const tHero = useTranslations('translation.translations.Hero');
  const actualPlace: string = 'paracas'; // Aquí puedes cambiar el spot principal si es necesario
  const features = [
    {
      id: 'consistentWind',
      title: t(`features.${actualPlace}.consistentWind.title`),
      text: t(`features.${actualPlace}.consistentWind.description`),
      icon: <Wind size={18} aria-hidden />,
    },
    {
      id: 'protectedWaters',
      title: t(`features.${actualPlace}.protectedWaters.title`),
      text: t(`features.${actualPlace}.protectedWaters.description`),
      icon: <ShieldCheck size={18} aria-hidden />,
    },
    {
      id: 'sandyBeach',
      title: t(`features.${actualPlace}.sandyBeach.title`),
      text: t(`features.${actualPlace}.sandyBeach.description`),
      icon: <Sun size={18} aria-hidden />,
    },
    {
      id: 'calmVillage',
      title: t(`features.${actualPlace}.calmVillage.title`),
      text: t(`features.${actualPlace}.calmVillage.description`),
      icon: <HomeIcon size={18} aria-hidden />,
    },
  ];

  return (
    <Section background="base-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-center">
        {/* Media */}
        <div className="w-full">
          <div className="rounded-lg overflow-hidden shadow-xl aspect-video bg-base-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/n0zRQC0QYv8"
              title="High as a Kite - Location Video"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full">
          <SectionTitle as="h2" className="mb-4">
            {t('title')}
          </SectionTitle>

          <p
            className={`${haakDesign.typography.body} text-base-content/80 mb-6 max-w-xl`}>
            {t('description')}
          </p>

          <div className="bg-base-100/60 p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold mb-3 uppercase">
              {t('features.title')}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <motion.li
                  key={f.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.36 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3">
                  <motion.div
                    className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 18,
                    }}>
                    {f.icon}
                  </motion.div>
                  <div className="min-w-0 h-9 flex items-center">
                    <div
                      className="text-sm font-semibold truncate max-w-full text-foreground leading-tight"
                      title={f.title}>
                      {f.title}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <CTAButton variant="primary">
              <Link href="/spots">{tHero('discover')}</Link>
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
};
