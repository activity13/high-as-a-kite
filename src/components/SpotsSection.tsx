import { useTranslations } from 'next-intl';

export const SpotsSection = () => {
  const t = useTranslations('translation.translations');
  const cards = t.raw('spots.cards') as {
    name: string;
    level: string;
    wind: string;
    highlight: string;
  }[];
  return (
    <section className="py-16 px-6">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">{t('spots.title')}</h2>
        <p className="text-neutral-600">{t('spots.subtitle')}</p>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article
            key={c.name}
            className="p-5 rounded-lg border bg-white shadow-sm">
            <h3 className="font-semibold text-lg">{c.name}</h3>
            <ul className="text-xs mt-2 space-y-1">
              <li>
                <strong>Level:</strong> {c.level}
              </li>
              <li>
                <strong>Wind:</strong> {c.wind}
              </li>
            </ul>
            <p className="mt-3 text-sm text-neutral-600">{c.highlight}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
