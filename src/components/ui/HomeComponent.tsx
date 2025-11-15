'use client';
import React from 'react';
import { CheckCircle, StepForward } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { StatsBar } from '../StatsBar';
export default function LandingSections() {
  const t = useTranslations('translation.translations.Home');
  return (
    <div className="flex flex-col">
      {/* Por qué elegirnos */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-stretch font-bold mb-8">
            {t('whyHaak.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <CheckCircle className="mx-auto mb-4 w-10 h-10 text-sky-600" />
              <h3 className="font-semibold">
                {t('whyHaak.instructorsIKO.title')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('whyHaak.instructorsIKO.description')}
              </p>
            </div>
            <div>
              <CheckCircle className="mx-auto mb-4 w-10 h-10 text-sky-600" />
              <h3 className="font-semibold"> {t('whyHaak.equipment.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('whyHaak.equipment.description')}
              </p>
            </div>
            <div>
              <CheckCircle className="mx-auto mb-4 w-10 h-10 text-sky-600" />
              <h3 className="font-semibold"> {t('whyHaak.location.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('whyHaak.location.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <StatsBar />

      {/* El lugar */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4Pp6K5lhS4U"
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-stretch font-bold mb-4">
              {t('thePlace.title')}
            </h2>
            <p className="text-sm text-gray-600">{t('thePlace.description')}</p>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-stretch font-bold mb-8">
            {t('howItWorks.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <StepForward className="mx-auto mb-4 w-10 h-10 text-sky-600" />
              <h3 className="font-semibold"> {t('howItWorks.step1.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('howItWorks.step1.description')}
              </p>
            </div>
            <div>
              <StepForward className="mx-auto mb-4 w-10 h-10 text-sky-600" />
              <h3 className="font-semibold">{t('howItWorks.step2.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('howItWorks.step2.description')}
              </p>
            </div>
            <div>
              <StepForward className="mx-auto mb-4 w-10 h-10 text-sky-600" />
              <h3 className="font-semibold">{t('howItWorks.step3.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('howItWorks.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
