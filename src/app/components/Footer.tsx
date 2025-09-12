import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Instagram, Youtube, Music } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('translation.translations');

  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-primary-content p-10 font-helvetica">
      {/* Marca */}
      <aside>
        <Image
          src="/images/HaakAir.png"
          alt="HAAK Logo"
          width={120}
          height={60}
          className="mb-3"
        />
        <p className="text-sm text-white/80 max-w-xs">
          Escuela de deportes acuáticos y experiencias marinas en Perú
        </p>
        <div className="flex gap-4 mt-4">
          <Link href="https://instagram.com" target="_blank">
            <Instagram className="w-6 h-6 hover:text-white" />
          </Link>
          <Link href="https://tiktok.com" target="_blank">
            <Music className="w-6 h-6 hover:text-white" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Youtube className="w-6 h-6 hover:text-white" />
          </Link>
        </div>
      </aside>

      {/* Navegación */}
      <nav>
        <h6 className="footer-title">{t('Footer.explore.title')}</h6>
        <Link href="/" className="link link-hover">
          {t('Footer.explore.home')}
        </Link>
        <Link href="/about" className="link link-hover">
          {t('Footer.explore.aboutUs')}
        </Link>
        <Link href="/sports" className="link link-hover">
          {t('Footer.explore.sports')}
        </Link>
        <Link href="/marine-adventure" className="link link-hover">
          {t('Footer.explore.marineAdventure')}
        </Link>
        <Link href="/gallery" className="link link-hover">
          {t('Footer.explore.gallery')}
        </Link>
        <Link href="/contact" className="link link-hover">
          {t('Footer.explore.contact')}
        </Link>
      </nav>

      {/* Contacto */}
      <nav>
        <h6 className="footer-title">{t('Footer.contact.title')}</h6>
        <p className="text-sm">📞 +51 999 999 999</p>
        <p className="text-sm">📧 info@haak.com</p>
      </nav>

      {/* Legales */}
      <nav>
        <h6 className="footer-title">{t('Footer.legal.title')}</h6>
        <Link href="/terms-conditions" className="link link-hover">
          {t('Footer.legal.termsAndConditions')}
        </Link>
        <Link href="/trip-policies" className="link link-hover">
          {t('Footer.legal.tripPolicies')}
        </Link>
      </nav>
    </footer>
  );
}
