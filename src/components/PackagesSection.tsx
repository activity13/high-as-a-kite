import { useTranslations } from 'next-intl';
import { track } from '../utils/track';

export const PackagesSection = () => {
  const t = useTranslations('translation.translations');
  const cards = t.raw('packages.cards') as {
    id: string;
    name: string;
    hours: number;
    sessions: number;
    includes: string[];
    focus: string;
    price: number;
  }[];
  const addons = t.raw('packages.addons') as {
    id: string;
    name: string;
    price: number;
    note: string;
  }[];
  const currency = t('packages.currency');
  return (
    <section className="py-16 bg-neutral-50" id="packages">
      <h2 className="text-3xl font-bold mb-8">{t('packages.title')}</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-10">
        {cards.map((c) => (
          <article
            key={c.id}
            className="p-5 rounded-lg border bg-white shadow-sm hover:border-teal-500 transition"
            onMouseEnter={() =>
              track(t('events.tracking.package_view'), {
                id: c.id,
              })
            }>
            <h3 className="font-semibold text-lg">{c.name}</h3>
            <p className="text-xs text-neutral-500">{c.focus}</p>
            <ul className="mt-3 text-sm space-y-1">
              {c.includes.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-2xl font-bold">${c.price}</span>
              <span className="text-xs text-neutral-500">{currency}</span>
            </div>
            <div className="text-xs text-neutral-500 mt-1">
              {c.hours}h / {c.sessions} sesiones
            </div>
          </article>
        ))}
      </div>
      <h4 className="text-sm font-semibold uppercase tracking-wide mb-3">
        {t('packages.addonsTitle')}
      </h4>
      <div className="flex flex-wrap gap-4">
        {addons.map((a) => (
          <div
            key={a.id}
            className="px-4 py-3 rounded border bg-white shadow-sm text-sm">
            <span className="font-medium">{a.name}</span> · ${a.price}
            <div className="text-xs text-neutral-500">{a.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="#form"
          className="px-6 py-3 rounded bg-teal-600 text-white text-sm inline-block"
          onClick={() =>
            track(t('events.tracking.cta_click'), {
              source: 'packages',
            })
          }>
          {t('packages.cta')}
        </a>
      </div>
    </section>
  );
};
