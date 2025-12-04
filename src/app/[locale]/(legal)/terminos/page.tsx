import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'translation.translations.SEO.terms-and-conditions',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function TermsPage() {
  const t = useTranslations(
    'translation.translations.TermsAndConditionsSimple',
  );

  return (
    <>
      <h1>{t('title')}</h1>
      <p className="text-sm text-base-content/60">
        {t('lastUpdated', { date: new Date().toLocaleDateString() })}
      </p>

      <h2>{t('sections.acceptance.title')}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: t.raw('sections.acceptance.content'),
        }}
      />

      <h2>{t('sections.usage.title')}</h2>
      <p>{t('sections.usage.content')}</p>

      <h2>{t('sections.intellectualProperty.title')}</h2>
      <p>{t('sections.intellectualProperty.content')}</p>

      <h2>{t('sections.liability.title')}</h2>
      <p>{t('sections.liability.content')}</p>

      <h2>{t('sections.modifications.title')}</h2>
      <p>{t('sections.modifications.content')}</p>
    </>
  );
}
