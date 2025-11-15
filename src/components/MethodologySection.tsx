import { useTranslations } from 'next-intl';

export const MethodologySection = () => {
  const t = useTranslations('translation.translations');
  const steps = t.raw('methodology.steps') as {
    id: number;
    title: string;
    text: string;
  }[];
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-700">
        {t('methodology.title')}
      </h2>
      <ol className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {steps.map((s) => (
          <li
            key={s.id}
            className="p-6 rounded-lg border bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
              {s.id}
            </div>
            <h3 className="font-semibold text-lg mt-8 text-center">
              {s.title}
            </h3>
            <p className="text-sm text-neutral-600 mt-4 text-center">
              {s.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
