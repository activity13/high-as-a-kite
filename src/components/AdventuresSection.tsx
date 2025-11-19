import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Section,
  SectionTitle,
} from '@/components/ui';

export const AdventuresSection = () => {
  const t = useTranslations('translation.translations');
  const items = t.raw('adventures.items') as {
    name: string;
    text: string;
    duration: string;
  }[];

  return (
    <Section background="secondary">
      <SectionTitle as="h2" className="mb-8">
        {t('adventures.title')}
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((a) => (
          <Card key={a.name} variant="bordered">
            <CardBody>
              <CardTitle as="h3">{a.name}</CardTitle>
              <p className={haakDesign.typography.body}>{a.text}</p>
              <Badge variant="primary">{a.duration}</Badge>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};
