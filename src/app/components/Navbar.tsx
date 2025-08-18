import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
export default function Navbar() {
  const t = useTranslations('translation.translations');
  return (
    <div className="drawer">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />

      {/* Contenido principal */}
      <div className="drawer-content">
        <nav
          className="
        navbar 
        fixed inset-x-0 top-0 z-20 
        w-full 
        px-4 md:px-12 
        py-4 md:py-6 
        flex items-center justify-between
        text-white 
        bg-black/30 backdrop-blur-md 
        border-b border-white/10
      ">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-semibold">
            <Link href="/">{t('common.companyName')}</Link>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-white/90 hover:text-white hover:scale-105 transition">
              {t('Navbar.about')}
            </Link>
            <Link
              href="/trips"
              className="text-white/90 hover:text-white hover:scale-105 transition">
              {t('Navbar.trips')}
            </Link>
            <Link
              href="/book"
              className="text-white/90 hover:text-white hover:scale-105 transition">
              {t('Navbar.book')}
            </Link>
            <Link
              href="/terms-conditions"
              className="text-white/90 hover:text-white hover:scale-105 transition">
              {t('Navbar.terms')}
            </Link>
          </div>

          {/* Idiomas + Hamburguesa */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {/* Botón hamburguesa solo en mobile */}
            <label
              htmlFor="navbar-drawer"
              className="md:hidden btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </nav>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side z-30">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-black/90 text-white">
          <li>
            <Link href="/about">{t('Navbar.about')}</Link>
          </li>
          <li>
            <Link href="/trips">{t('Navbar.trips')}</Link>
          </li>
          <li>
            <Link href="/book">{t('Navbar.book')}</Link>
          </li>
          <li>
            <Link href="/blog">{t('Navbar.blog')}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
