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
    src: 'https://picsum.photos/seed/kite1/800/800',
    alt: 'Kitesurfing action shot',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/kite2/800/800',
    alt: 'Beach and ocean view',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/kite3/800/800',
    alt: 'Kite in the sky',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/kite4/800/800',
    alt: 'Sunset kitesurfing',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/kite5/800/800',
    alt: 'Group of riders',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/kite6/800/800',
    alt: 'Wave action',
  },
  {
    id: 7,
    src: 'https://picsum.photos/seed/kite7/800/800',
    alt: 'Coastal landscape',
  },
  {
    id: 8,
    src: 'https://picsum.photos/seed/kite8/800/800',
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
