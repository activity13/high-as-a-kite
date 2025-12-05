import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionTitle } from './ui/Section';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

// Imágenes de Picsum con dimensiones específicas para kitesurfing
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/kite.jpg',
    alt: 'Kitesurfing action  shot',
  },
  {
    id: 2,
    src: '/images/jump.webp',
    alt: 'Beach and ocean view',
  },
  {
    id: 3,
    src: '/images/down-wind.webp',
    alt: 'Kite in the sky',
  },
  {
    id: 4,
    src: '/images/jetsky.webp',
    alt: 'Sunset kitesurfing',
  },
  {
    id: 5,
    src: '/images/sunset.webp',
    alt: 'Group of riders',
  },
  {
    id: 6,
    src: '/images/haakfire.png',
    alt: 'Wave action',
  },
  {
    id: 7,
    src: '/images/kayak_2.webp',
    alt: 'Coastal landscape',
  },
  {
    id: 8,
    src: '/images/surf.webp',
    alt: 'Equipment closeup',
  },
];

export const GallerySection = () => {
  const t = useTranslations('translation.translations');

  return (
    <Section background="base-200" aria-label={t('gallery.ariaGrid')}>
      <SectionTitle as="h2" className="mb-8">
        {t('gallery.title')}
      </SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img) => (
          <figure
            key={img.id}
            className="aspect-square overflow-hidden rounded-lg bg-base-300 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={800}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
};
