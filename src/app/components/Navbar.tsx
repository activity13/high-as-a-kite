import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
export default function Navbar() {
  const t = useTranslations('translation.translations');
  return (
    <nav
      className="navbar w-full px-6 py-4 flex items-center  fixed inset-x-0 top-0 z-10 text-white"
      style={{
        backdropFilter: 'blur(2px)',
      }}>
      {/* Logo */}
      <div className="navbar-start text-2xl font-semibold">
        <Link href={'/'}>{t('common.companyName')}</Link>
      </div>

      {/* Menú de navegación */}
      <div className="navbar-center items-center text-center gap-8">
        <button className="text-foreground hover:text-primary transition-colors">
          Nosotros
        </button>
        <button className="text-foreground hover:text-primary transition-colors">
          Próximos Viajes
        </button>
        <button className="px-6">Reserva</button>
        <Link href={'/terms-conditions'}>T&C</Link>
      </div>
      <div className="navbar-end">
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
