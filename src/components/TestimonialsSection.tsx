import { useTranslations } from 'next-intl';

export const TestimonialsSection = () => {
  const t = useTranslations('translation.translations');
  const items = t.raw('testimonials.items') as {
    name: string;
    origin: string;
    rating: number;
    text: string;
  }[];
  return (
    <section className="py-16" aria-label={t('testimonials.sliderAria')}>
      <h2 className="text-3xl font-bold mb-8">{t('testimonials.title')}</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {items.map((it) => (
          <blockquote
            key={it.name}
            className="p-5 rounded-lg border bg-white shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{it.name}</span>
              <span className="text-xs text-neutral-500">{it.origin}</span>
            </div>
            <div className="text-yellow-500 text-xs mb-2">
              {'★'.repeat(it.rating)}
            </div>
            <p className="text-sm text-neutral-600">{it.text}</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
};
