import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import { Section, SectionTitle } from './ui/Section';
import { SpotCard } from './ui/SpotCard';

export const SpotsSection = () => {
  const t = useTranslations('translation.translations');
  const cards = t.raw('spots.cards') as {
    name: string;
    level: string;
    wind: string;
    highlight: string;
  }[];

  return (
    <Section background="base-200">
      <header className="mb-8">
        <SectionTitle as="h2">{t('spots.title')}</SectionTitle>
        <p
          className={`${haakDesign.typography.body} text-base-content/70 mt-2`}>
          {t('spots.subtitle')}
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <SpotCard
            key={c.name}
            name={c.name}
            level={c.level}
            wind={c.wind}
            highlight={c.highlight}
          />
        ))}
      </div>
    </Section>
  );
};
