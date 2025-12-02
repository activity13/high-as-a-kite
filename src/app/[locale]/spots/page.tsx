import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { CTAButton } from '@/components/ui/CTAButton';
import { Section, SectionHeader } from '@/components/ui/Section';
import {
  MapPin,
  Wind,
  Waves,
  Compass,
  Car,
  Bus,
  Hotel,
  Tent,
  Camera,
  Binoculars,
} from 'lucide-react';
import { SpotsShowcase } from '@/components/SpotsShowcase';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'translation.translations.ParacasPage.seo',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ParacasPage() {
  const t = useTranslations('translation.translations.ParacasPage');

  // Helper to get raw array safely
  const features = t.raw('theSpot.features') as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/kitesurf-parcas-header.jpg" // Placeholder, ideally /images/paracas.jpg
          alt="Paracas Kitesurf"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 drop-shadow-md">
            {t('hero.subtitle')}
          </p>
          <CTAButton variant="primary" size="lg">
            <Link href="/contact">{t('hero.cta')}</Link>
          </CTAButton>
        </div>
      </div>

      {/* The Spot Section */}
      <Section background="base-100">
        <SectionHeader
          title={t('theSpot.title')}
          subtitle={t('theSpot.description')}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                {index === 0 && (
                  <Waves className="w-12 h-12 text-primary mb-4" />
                )}
                {index === 1 && (
                  <Wind className="w-12 h-12 text-primary mb-4" />
                )}
                {index === 2 && (
                  <Compass className="w-12 h-12 text-primary mb-4" />
                )}
                <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                <p className="text-base-content/80">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Guide Section */}
      <Section background="base-200">
        <SectionHeader title={t('guide.title')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Getting There */}
          <div className="bg-base-100 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold">
                {t('guide.gettingThere.title')}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Bus className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>{t('guide.gettingThere.bus')}</p>
              </div>
              <div className="flex gap-4">
                <Car className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>{t('guide.gettingThere.car')}</p>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="bg-base-100 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Hotel className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold">
                {t('guide.accommodation.title')}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Hotel className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>{t('guide.accommodation.luxury')}</p>
              </div>
              <div className="flex gap-4">
                <Tent className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>{t('guide.accommodation.budget')}</p>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="bg-base-100 p-8 rounded-2xl shadow-lg lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Camera className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold">
                {t('guide.activities.title')}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Binoculars className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>{t('guide.activities.islands')}</p>
              </div>
              <div className="flex gap-4">
                <Compass className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>{t('guide.activities.reserve')}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Lista de otros sitios donde opera o ha operado la marca */}
      <SpotsShowcase />
    </main>
  );
}
