import { useTranslations } from 'next-intl';

export const AdventuresSection = () => {
  const t = useTranslations('translation.translations');
  const items = t.raw('adventures.items') as {
    name: string;
    text: string;
    duration: string;
  }[];
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">{t('adventures.title')}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((a) => (
          <article
            key={a.name}
            className="p-5 rounded-lg border bg-white shadow-sm">
            <h3 className="font-semibold">{a.name}</h3>
            <p className="text-sm text-neutral-600 mt-2">{a.text}</p>
            <span className="text-xs mt-3 inline-block bg-neutral-100 px-2 py-1 rounded">
              {a.duration}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};
