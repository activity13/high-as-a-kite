import { useTranslations } from 'next-intl';
import { haakDesign } from '@/lib/design-system';
import { Section, SectionTitle } from './ui/Section';
import { Card, CardBody, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';

export const TeamSection = () => {
  const t = useTranslations('translation.translations');
  const members = t.raw('team.members') as {
    name: string;
    role: string;
    tags: string[];
    bio: string;
  }[];

  return (
    <Section background="base-200" className="flex justify-center">
      <SectionTitle as="h2" className="text-center mb-12">
        {t('team.title')}
      </SectionTitle>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {members.map((m) => (
          <Card
            key={m.name}
            variant="default"
            className="relative hover:shadow-xl transition-shadow duration-300">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold shadow-md">
              {m.name[0]}
            </div>

            <CardBody className="text-center items-center pt-8">
              <CardTitle as="h3" className="mt-2 mb-1 justify-center">
                {m.name}
              </CardTitle>

              <p className="text-sm uppercase tracking-wide text-primary mb-4">
                {m.role}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {m.tags.map((tag) => (
                  <Badge key={tag} variant="primary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <p
                className={`${haakDesign.typography.body} text-base-content/70`}>
                {m.bio}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};
