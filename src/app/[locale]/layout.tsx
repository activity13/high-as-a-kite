// Obligatorios
import React from 'react';
// Estilos y fuentes
import './globals.css';
import localFont from 'next/font/local';
// Internacionalización
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
// Navegación
import { notFound } from 'next/navigation';
// SEO Y ANALYTICS
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
// Componentes
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const primaryFont = localFont({
  src: '../../../public/fonts/StretchPro.otf',
});

interface MyFunctionProps {
  params: Promise<{ locale: string }>;
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
    title: t('home.title'),
    description: t('home.description'),
    alternates: {
      canonical: `https://tu-dominio.com/${locale}`,
      languages: {
        en: 'https://tu-dominio.com/en',
        es: 'https://tu-dominio.com/es',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${primaryFont.className} bg-amber-600 antialiased h-screen`}>
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
