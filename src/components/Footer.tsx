import React from 'react';
import {
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Compass,
  Ship,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { haakDesign } from '@/lib/design-system';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('translation.translations');

  return (
    <footer className="relative w-full overflow-hidden bg-base-200">
      <div className="relative">
        {/* Main Footer Content */}
        <div className={`${haakDesign.spacing.container} py-12 lg:py-16`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Columna 1: Branding & Social */}
            <div className="lg:col-span-1">
              <div className="flex flex-col gap-3 mb-6">
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src="/images/HaakAir.png"
                    alt="HAAK Logo"
                    width={120}
                    height={60}
                    className="mb-3"
                  />
                </div>
                <div>
                  <h3 className="text-base-content tracking-wider font-semibold">
                    {t('common.companyNameShort')}
                  </h3>
                  <p className="text-xs text-primary">{t('common.slogan')}</p>
                </div>
              </div>

              <p
                className={`${haakDesign.typography.body} text-base-content/70 mb-6`}>
                {t('Footer.texts.caption')}
              </p>

              {/* Social Media */}
              <div className="space-y-3 mb-6">
                <p className="text-base-content text-sm font-medium">
                  {t('Footer.texts.follow')}
                </p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.instagram.com/haak.academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border-2 border-base-300 hover:border-pink-500 hover:bg-pink-50 flex items-center justify-center transition-all duration-300 group">
                    <Instagram className="w-5 h-5 text-base-content group-hover:text-pink-500 transition-colors" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border-2 border-base-300 hover:border-red-600 hover:bg-red-50 flex items-center justify-center transition-all duration-300 group">
                    <Youtube className="w-5 h-5 text-base-content group-hover:text-red-600 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Columna 2: Explora */}
            <div>
              <h4 className="text-base-content font-semibold mb-6 flex items-center gap-2">
                <Compass className="w-4 h-4 text-primary" />
                {t('Footer.explore.title')}
              </h4>
              <nav className="space-y-3">
                {[
                  { href: '/', label: t('Footer.explore.about') },
                  { href: '/about', label: t('Footer.explore.lessons') },
                  { href: '/sports', label: t('Footer.explore.trips') },
                  {
                    href: '/marine-adventure',
                    label: t('Footer.explore.rentals'),
                  },
                  { href: '/gallery', label: t('Footer.explore.spots') },
                  { href: '/contact', label: t('Footer.explore.prices') },
                  { href: '/contact', label: t('Footer.explore.gallery') },
                  { href: '/contact', label: t('Footer.explore.contact') },
                ].map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="block text-base-content/70 hover:text-primary transition-colors text-sm group">
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h4 className="text-base-content font-semibold mb-6 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                {t('Footer.contact.title')}
              </h4>
              <div className="space-y-4">
                <a
                  href="https://wa.me/51986677979"
                  className="flex items-start gap-3 text-base-content/70 hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-lg border-2 border-base-300 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/60 mb-1">
                      {t('Footer.contact.call')}
                    </p>
                    <p className="text-sm">{t('common.contactNumber')}</p>
                  </div>
                </a>

                <a
                  href="mailto:highasakiteperu@gmail.com"
                  className="flex items-start gap-3 text-base-content/70 hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-lg border-2 border-base-300 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/60 mb-1">
                      {t('Footer.contact.email')}
                    </p>
                    <p className="text-sm">{t('common.companyEmail')}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-base-content/70">
                  <div className="w-9 h-9 rounded-lg border-2 border-base-300 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/60 mb-1">
                      {t('Footer.contact.address')}
                    </p>
                    <p className="text-sm">{t('common.address')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 4: Legal & Info */}
            <div>
              <h4 className="text-base-content font-semibold mb-6 flex items-center gap-2">
                <Ship className="w-4 h-4 text-primary" />
                {t('Footer.legal.title')}
              </h4>
              <nav className="space-y-3 mb-6">
                <Link
                  href="/terms-conditions"
                  className="block text-base-content/70 hover:text-primary transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.legal.termsAndConditions')}
                  </span>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block text-base-content/70 hover:text-primary transition-colors text-sm group">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t('Footer.legal.privacyPolicies')}
                  </span>
                </Link>
              </nav>

              {/* Badge/Certificación */}
              <div className="border-l-2 border-primary pl-3">
                <p className="text-xs text-base-content font-semibold mb-1">
                  {t('Footer.certificated.title')}
                </p>
                <p className="text-xs text-base-content/70">
                  {t('Footer.certificated.since')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300">
          <div className={`${haakDesign.spacing.container} py-6`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-base-content/70">
                <Image
                  src="/images/HaakAir.png"
                  alt="High as a kite logotype"
                  width={20}
                  height={20}
                />
                <p>
                  © {currentYear} {t('Footer.legal.rights')}
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs text-base-content/60">
                <span className="flex items-center gap-1">
                  Hecho con <span className="text-error">❤</span> en Perú
                </span>
                <span className="hidden sm:block">|</span>
                <span className="flex items-center gap-1">
                  <Image
                    src="/images/air.svg"
                    alt="Air"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/fire.svg"
                    alt="Fire"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/wave.svg"
                    alt="Water"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de línea superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
    </footer>
  );
}
