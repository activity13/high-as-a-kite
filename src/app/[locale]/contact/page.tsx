import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, Music } from 'lucide-react';
import { QuickForm } from '@/components';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'translation.translations.SEO.contact',
  });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ContactSection({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'translation.translations',
  });

  return (
    <section className="bg-primary min-h-screen flex flex-col lg:flex-row items-center justify-center text-primary-content px-6 py-12 gap-10 lg:gap-20">
      {/* Columna 1 - Info y Logo */}
      <div className="flex flex-col items-center lg:items-start gap-8 max-w-md">
        <div className="flex mt-20 justify-center lg:justify-start">
          <picture>
            <source srcSet="/images/HAAKFire.png" media="(max-width: 768px)" />
            <Image
              src="/images/logo.png"
              alt="HAAK Logo"
              width={220}
              height={120}
              className="w-32 sm:w-40 md:w-lg h-auto object-contain"
            />
          </picture>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <h2 className="text-3xl md:text-4xl font-bold font-stretch">
            {t('miselaneous.contactUs')}
          </h2>

          <div className="flex flex-col gap-4 text-lg">
            <div>
              <p className="font-semibold opacity-80">
                {t('miselaneous.telephone')}
              </p>
              <p className="text-xl font-medium">{t('common.contactNumber')}</p>
            </div>
            <div>
              <p className="font-semibold opacity-80">
                {t('miselaneous.email')}
              </p>
              <p className="text-xl font-medium">{t('common.companyEmail')}</p>
            </div>
          </div>

          <div className="flex gap-6 mt-2">
            <Link
              href={t('common.instagram')}
              target="_blank"
              className="hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8" />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              className="hover:scale-110 transition-transform">
              <Music className="w-8 h-8" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="hover:scale-110 transition-transform">
              <Youtube className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>

      {/* Columna 2 - Formulario */}
      <div className="w-full max-w-md bg-base-100 text-base-content p-6 mt-4 rounded-2xl shadow-xl">
        <QuickForm />
      </div>
    </section>
  );
}
