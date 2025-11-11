import React from 'react';
import {
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Waves,
  Ship,
  Wind,
  Compass,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Fire from '@/../public/images/fire.svg';
import Air from '@/../public/images/air.svg';
import Water from '@/../public/images/wave.svg';
import Haak from '@/../public/images/HAAKAir.png';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('translation.translations');

  return (
    <footer className="relative w-full overflow-hidden bg-slate-50">
      {/* Contenido del footer */}
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Columna 1: Branding & Social */}
            <div className="lg:col-span-1">
              <div className="flex flex-col  gap-3 mb-6">
                <div className="w-24 h-24 rounded-xl flex  items-center justify-center ">
                  <Image
                    src="/images/HaakAir.png"
                    alt="HAAK Logo"
                    width={120}
                    height={60}
                    className="mb-3"
                  />
                </div>
                <div>
                  <h3 className="text-base-content tracking-wider">
                    {t('common.companyNameShort')}
                  </h3>
                  <p className="text-xs text-info"> {t('common.slogan')}</p>
                </div>
              </div>

              <p className="text-neutral text-sm mb-6 leading-relaxed">
                {t('Footer.texts.caption')}
              </p>

              {/* Social Media */}
              <div className="space-y-3 mb-6">
                <p className="text-slate-700 text-sm">
                  {t('Footer.texts.follow')}
                </p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.instagram.com/haak.academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm border-2 border-slate-300 hover:border-pink-500 flex items-center justify-center transition-all duration-300 group">
                    <Instagram className="w-5 h-5 text-neutral group-hover:text-pink-500 group-hover:scale-110 transition-all" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm border-2 border-slate-300 hover:border-red-600 flex items-center justify-center transition-all duration-300 group">
                    <Youtube className="w-5 h-5 text-neutral group-hover:text-red-600 group-hover:scale-110 transition-all" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Columna 2: Explora */}
            <div>
              <h4 className="text-base-content mb-6 flex items-center gap-2">
                <Compass className="w-4 h-4 text-info" />
                {t('Footer.explore.title')}
              </h4>
              <nav className="space-y-3">
                <Link
                  href="/"
                  className="block text-neutral hover:text-info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.explore.about')}
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="block text-neutral hover:text-info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.explore.lessons')}
                  </span>
                </Link>
                <Link
                  href="/sports"
                  className="block text-neutral hover:text-info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.explore.trips')}
                  </span>
                </Link>
                <Link
                  href="/marine-adventure"
                  className="block text-neutral hover:text-info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.explore.rentals')}
                  </span>
                </Link>
                <Link
                  href="/gallery"
                  className="block text-neutral hover:text-info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.explore.spots')}
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="block text-neutral hover:info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.explore.prices')}
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="block text-neutral hover:info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.explore.gallery')}
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="block text-neutral hover:info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.explore.contact')}
                  </span>
                </Link>
              </nav>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h4 className="text-base-content mb-6 flex items-center gap-2">
                <Mail className="w-4 h-4 text-info" />
                {t('Footer.contact.title')}
              </h4>
              <div className="space-y-4">
                <a
                  href="https://wa.me/51986677979"
                  className="flex items-start gap-3 text-neutral hover:text-info transition-colors group">
                  <div className="w-9 h-9 rounded-sm border-2 border-slate-300 flex items-center justify-center flex-shrink-0 group-hover:border-info transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral mb-1">
                      {t('Footer.contact.call')}
                    </p>
                    <p className="text-sm">{t('common.contactNumber')}</p>
                  </div>
                </a>

                <a
                  href="mailto:highasakiteperu@gmail.com"
                  className="flex items-start gap-3 text-neutral hover:text-info transition-colors group">
                  <div className="w-9 h-9 rounded-sm border-2 border-slate-300 flex items-center justify-center flex-shrink-0 group-hover:border-info transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral mb-1">
                      {t('Footer.contact.email')}
                    </p>
                    <p className="text-sm">{t('common.companyEmail')}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-neutral group">
                  <div className="w-9 h-9 rounded-sm border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-info" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral mb-1">
                      {t('Footer.contact.address')}
                    </p>
                    <p className="text-sm">{t('common.address')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 4: Legal & Info */}
            <div>
              <h4 className="text-base-content mb-6 flex items-center gap-2">
                <Ship className="w-4 h-4 text-info" />
                {t('Footer.legal.title')}
              </h4>
              <nav className="space-y-3 mb-6">
                <Link
                  href="/terms-conditions"
                  className="block text-neutral hover:text-info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.legal.termsAndConditions')}
                  </span>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block text-neutral hover:text-info transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-info opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.legal.privacyPolicies')}
                  </span>
                </Link>
              </nav>

              {/* Badge/Certificación - Minimalista */}
              <div className="border-l-2 border-info pl-3">
                <p className="text-xs text-base-content mb-1">
                  {t('Footer.certificated.title')}
                </p>
                <p className="text-xs text-neutral">
                  {t('Footer.certificated.since')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-neutral">
                <Image
                  src={Haak}
                  alt="High as a kite logotype"
                  width={20}
                  height={20}
                  style={{ animationDelay: '1s' }}
                />
                <p>
                  © {currentYear} {t('Footer.legal.rights')}
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  Hecho con <span className="text-red-500">❤</span> en Perú
                </span>
                <span className="hidden sm:block">|</span>
                <span className="flex items-center gap-1">
                  <Image src={Air} alt="Air" width={20} height={20} />

                  <Image src={Fire} alt="Fire" width={20} height={20} />
                  <Image
                    src={Water}
                    alt="haak LoGO"
                    width={20}
                    height={20}
                    style={{ animationDelay: '1s' }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de olas animadas en el borde superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </footer>
  );
}
