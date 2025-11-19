import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardBody, CardTitle } from './ui/Card';

export const SafetySection = () => {
  const t = useTranslations('translation.translations');
  const items = t.raw('safety.items') as {
    title: string;
    text: string;
  }[];

  return (
    <Section background="base-200">
      <SectionTitle as="h2" className="mb-2">
        {t('safety.title')}
      </SectionTitle>

      <p
        className={`${haakDesign.typography.body} mb-8 max-w-xl text-base-content/70`}>
        {t('safety.intro')}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <Card key={i.title} variant="bordered">
            <CardBody>
              <CardTitle as="h3" className="mb-2">
                {i.title}
              </CardTitle>
              <p
                className={`${haakDesign.typography.body} text-base-content/70`}>
                {i.text}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};
