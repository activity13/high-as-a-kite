import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FAQSection } from '@/components/FAQSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'translation.translations.SEO.faq',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-base-100">
      <FAQSection />
    </main>
  );
}
