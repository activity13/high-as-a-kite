import { useTranslations } from 'next-intl';

export const SafetySection = () => {
  const t = useTranslations('translation.translations');
  const items = t.raw('safety.items') as {
    title: string;
    text: string;
  }[];
  return (
    <section className="py-16 bg-neutral-50">
      <h2 className="text-3xl font-bold mb-2">{t('safety.title')}</h2>
      <p className="mb-8 text-neutral-700 max-w-xl">{t('safety.intro')}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <article key={i.title} className="p-5 rounded-lg border bg-white">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">{i.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
