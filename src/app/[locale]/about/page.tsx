import Ract from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

interface MyFunctionProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params,
}: MyFunctionProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'translation.translations.SEO',
  });

  return {
    title: t('about.title'),
    description: t('about.description'),
    alternates: {
      canonical: `https://tu-dominio.com/${locale}`,
      languages: {
        en: 'https://tu-dominio.com/en',
        es: 'https://tu-dominio.com/es',
      },
    },
  };
}

export default function About() {
  const t = useTranslations('translation.translations');
  return (
    <>
      <div className="h-screen pt-[96px]">
        <h1>{t('About.title')}</h1>
        <h3>{t('About.description')}</h3>
      </div>
    </>
  );
}
