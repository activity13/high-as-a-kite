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
import { WhatsAppFloatingButton } from '@/components/ui';
import { Navbar, Footer } from '@/components';
import { WhatsAppProvider } from '@/context/WhatsAppContext';

export const ArchivoBlack = localFont({
  src: [
    {
      path: '../../../public/fonts/ArchivoBlack.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-archivo-black',
});

export const helvetica = localFont({
  src: [
    {
      path: '../../../public/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-helvetica',
});

interface MyFunctionProps {
  params: Promise<{ locale: string }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://highasakite.pe';

export async function generateMetadata({
  params,
}: MyFunctionProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'translation.translations.SEO',
  });

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t('home.title'),
      template: `%s | ${t('home.title')}`,
    },
    description: t('home.description'),
    keywords: t('home.keywords'),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
      },
    },
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      url: `${BASE_URL}/${locale}`,
      siteName: 'High As A Kite | HAAK',
      images: [
        {
          url: '/images/og-image.jpg', // Asegúrate de tener esta imagen en public/images/
          width: 1200,
          height: 630,
          alt: t('home.title'),
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: ['/images/twitter-image.jpg'], // Asegúrate de tener esta imagen
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
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
    <html lang={locale} data-theme="mytheme">
      <body
        className={`${ArchivoBlack.variable} ${helvetica.variable} font-helvetica bg-amber-600 antialiased h-screen`}>
        <NextIntlClientProvider>
          <WhatsAppProvider>
            <Navbar />
            {children}
            <WhatsAppFloatingButton />
            <Footer />
          </WhatsAppProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
