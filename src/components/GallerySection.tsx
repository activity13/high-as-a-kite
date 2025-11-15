import { useTranslations } from 'next-intl';
import { useState, useMemo } from 'react';
import { track } from '../utils/track';
import Image from 'next/image';

type Img = { id: string; category: string; src: string; alt: string };

const mockImages: Img[] = [
  {
    id: '1',
    category: 'action',
    src: '/images/action1.jpg',
    alt: 'Rider maniobra',
  },
  {
    id: '2',
    category: 'community',
    src: '/images/community1.jpg',
    alt: 'Grupo en playa',
  },
  {
    id: '3',
    category: 'nature',
    src: '/images/nature1.jpg',
    alt: 'Costa norte',
  },
  {
    id: '4',
    category: 'action',
    src: '/images/action2.jpg',
    alt: 'Salto controlado',
  },
];

export const GallerySection = () => {
  const t = useTranslations('translation.translations');
  const [filter, setFilter] = useState<
    'all' | 'action' | 'community' | 'nature'
  >('all');
  const filters = t.raw('gallery.filters') as Record<string, string>;

  const data = useMemo(
    () =>
      filter === 'all'
        ? mockImages
        : mockImages.filter((i) => i.category === filter),
    [filter],
  );

  return (
    <section className="py-16 px-6" aria-label={t('gallery.ariaGrid')}>
      <h2 className="text-3xl font-bold mb-6">{t('gallery.title')}</h2>
      <div className="flex gap-2 overflow-auto mb-6">
        {Object.entries(filters).map(([key, label]) => (
          <button
            key={key}
            onClick={() => {
              setFilter(key as any);
              track(t('events.tracking.gallery_filter'), {
                filter: key,
              });
            }}
            className={`px-4 py-2 rounded text-sm border ${
              filter === key
                ? 'bg-teal-600 text-white border-teal-600'
                : 'bg-white'
            }`}>
            {label}
          </button>
        ))}
      </div>
      {data.length === 0 ? (
        <p className="text-sm text-neutral-500">{t('gallery.empty')}</p>
      ) : (
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          {data.map((img) => (
            <figure
              key={img.id}
              className="aspect-square overflow-hidden rounded bg-neutral-100">
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      )}
    </section>
  );
};
