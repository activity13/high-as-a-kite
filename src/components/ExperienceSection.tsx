import { useTranslations } from 'next-intl';

export const ExperienceSection = () => {
  const t = useTranslations('translation.translations');
  const pillars = t.raw('experience.pillars') as {
    title: string;
    text: string;
  }[];
  return (
    <section className="py-16 p-6">
      <h2 className="text-3xl font-bold mb-2">{t('experience.title')}</h2>
      <p className="mb-8 max-w-xl text-neutral-700">{t('experience.intro')}</p>
      <div className="grid card md:grid-cols-4 sm:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <article
            key={p.title}
            className="p-4 card-body rounded-lg border bg-white shadow-sm">
            <h3 className="font-semibold mb-1 card-title">{p.title}</h3>
            <p className="text-sm text-neutral-600">{p.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href="https://wa.me/51986677979"
          target="_blank"
          className="px-6 py-3 rounded bg-teal-600 text-white text-sm font-medium inline-block">
          {t('experience.cta')}
        </a>
      </div>
    </section>
  );
};
