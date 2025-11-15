import { useTranslations } from 'next-intl';

export const TeamSection = () => {
  const t = useTranslations('translation.translations');
  const members = t.raw('team.members') as {
    name: string;
    role: string;
    tags: string[];
    bio: string;
  }[];
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-700">
        {t('team.title')}
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {members.map((m) => (
          <article
            key={m.name}
            className="p-6 rounded-lg border bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
              {m.name[0]}
            </div>
            <h3 className="font-semibold text-lg mt-8 text-center">{m.name}</h3>
            <p className="text-sm uppercase tracking-wide text-teal-600 text-center">
              {m.role}
            </p>
            <ul className="flex flex-wrap justify-center gap-2 mt-4">
              {m.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                  {tag}
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-600 mt-4 text-center">{m.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
