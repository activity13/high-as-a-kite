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
    namespace: 'translation.translations.SEO.privacy-policy',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function PrivacyPage() {
  const t = useTranslations('translation.translations.PrivacyPolicy');

  return (
    <>
      <h1>{t('title')}</h1>
      <p className="text-sm text-base-content/60">
        {t('lastUpdated', { date: new Date().toLocaleDateString() })}
      </p>

      <p dangerouslySetInnerHTML={{ __html: t.raw('intro') }} />

      <h2>{t('sections.infoCollected.title')}</h2>
      <p>{t('sections.infoCollected.content')}</p>
      <ul>
        {t
          .raw('sections.infoCollected.list')
          .map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
      </ul>

      <h2>{t('sections.purpose.title')}</h2>
      <p>{t('sections.purpose.content')}</p>
      <ul>
        {t.raw('sections.purpose.list').map((item: string, index: number) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>

      <h2>{t('sections.cookies.title')}</h2>
      <p>{t('sections.cookies.content')}</p>

      <h2>{t('sections.sharing.title')}</h2>
      <p>{t('sections.sharing.content')}</p>

      <h2>{t('sections.rights.title')}</h2>
      <p>{t('sections.rights.content')}</p>

      <h2>{t('sections.contact.title')}</h2>
      <p>{t('sections.contact.content')}</p>
    </>
  );
}
