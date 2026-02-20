'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './ui/LanguageSwitcher';
import sportsData from '@/data/sports.json';

export default function Navbar() {
  const t = useTranslations('translation.translations');
  const rawPath = usePathname();
  const pathname =
    rawPath || (typeof window !== 'undefined' ? window.location.pathname : '/');

  // Quita solo el prefijo de locale válido y normaliza la ruta
  const stripLocale = (p: string) => {
    if (!p) return '/';
    // asegúrate de que empiece por '/'
    const path = p.startsWith('/') ? p : `/${p}`;
    const parts = path.split('/');
    // parts[0] = '', parts[1] = primer segmento
    const first = parts[1] || '';
    // locales tipo: en, es, en-US, pt-BR, fr, de-AT, etc.
    const isLocale = /^[a-z]{2}(?:-[A-Z]{2})?$/.test(first);
    const rest = isLocale ? `/${parts.slice(2).join('/')}` : path;
    // quitar slashes repetidos y trailing slash (salvo raíz)
    const cleaned = rest.replace(/\/{2,}/g, '/');
    return cleaned !== '/' && cleaned.endsWith('/')
      ? cleaned.slice(0, -1)
      : cleaned;
  };

  const normalize = (s: string) => {
    if (!s || s === '/') return '/';
    const withSlash = s.startsWith('/') ? s : `/${s}`;
    return withSlash !== '/' && withSlash.endsWith('/')
      ? withSlash.slice(0, -1)
      : withSlash;
  };

  const current = React.useMemo(
    () => normalize(stripLocale(pathname)),
    [pathname],
  );

  const isActive = (href: string) => {
    const target = normalize(href);
    if (target === '/') return current === '/';
    return current === target || current.startsWith(`${target}/`);
  };

  const links = [
    { href: '/', label: t('Navbar.home') },
    { href: '/about', label: t('Navbar.about') },
    { href: '/spots', label: t('Navbar.spots') },
    { href: '/faq', label: t('Navbar.faq') },
    { href: '/contact', label: t('Navbar.contact') },
  ];

  // Obtener lista de deportes desde traducciones
  const sportsTranslations = t.raw('sportsInfo.items') as Array<{
    id: string;
    name: string;
    category?: string;
  }>;

  // Filtrar solo los deportes que existen en sportsData
  const sportsList = sportsTranslations.filter((sport) =>
    sportsData.some((data) => data.id === sport.id),
  );

  // Agrupar deportes por categoría
  const waterSports = sportsList.filter(
    (s) =>
      s.category === t('sportsInfo.section.categories.waterSports') ||
      !s.category, // Fallback por si no tiene categoría
  );
  const marineAdventures = sportsList.filter(
    (s) => s.category === t('sportsInfo.section.categories.marineAdventure'),
  );

  const closeDrawer = () => {
    const el = document.getElementById(
      'navbar-drawer',
    ) as HTMLInputElement | null;
    if (el) el.checked = false;
  };

  const sportsActive = isActive('/sports');

  return (
    <div className="drawer">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />

      {/* Desktop Navbar*/}
      <div className="drawer-content">
        <nav className="fixed inset-x-0 top-0 z-20 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/60 border-b border-primary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            {/* Logo */}
            <div className="flex pt-2 mb-1">
              <Link
                href="/"
                aria-label="HAAK Home"
                className="inline-flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="HAAK Logo"
                  width={150}
                  height={86}
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <ul className="hidden mdd:flex items-center gap-6">
              {/* Dropdown Deportes */}
              <li>
                <div className="dropdown dropdown-hover">
                  <button
                    className={[
                      'text-sm transition-colors border-b-2 pb-1 mt-2 inline-flex items-center gap-1',
                      sportsActive
                        ? 'text-white border-white'
                        : 'text-neutral-100 border-transparent hover:text-white hover:border-neutral-500',
                    ].join(' ')}
                    aria-haspopup="menu"
                    aria-expanded={sportsActive ? 'true' : 'false'}>
                    {t('Navbar.services')}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 opacity-80"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.96a.75.75 0 111.08 1.04l-4.24 4.53a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
                    </svg>
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-4 mt-1 shadow-xl bg-primary/90 rounded-b-md min-w-[500px] w-auto grid grid-cols-2 gap-6 border-t-[3px] border-white/20">
                    {/* Columna 1: Deportes Acuáticos */}
                    <div className="flex flex-col gap-2">
                      <li className="menu-title text-white/60 font-semibold uppercase tracking-wider text-xs border-b border-white/10 pb-1 mb-1">
                        {t('sportsInfo.section.categories.waterSports')}
                      </li>
                      {waterSports.map((sport) => (
                        <li key={sport.id}>
                          <Link
                            href={`/sports?sport=${sport.id}`}
                            className={[
                              'text-sm transition-colors border-b-2 pb-[2px] hover:bg-white/10 rounded-lg px-2 py-1.5',
                              isActive(`/sports?sport=${sport.id}`)
                                ? 'text-white border-white bg-white/10'
                                : 'text-neutral-100 border-transparent hover:text-white hover:border-transparent',
                            ].join(' ')}
                            aria-current={
                              isActive(`/sports?sport=${sport.id}`)
                                ? 'page'
                                : undefined
                            }>
                            {sport.name}
                          </Link>
                        </li>
                      ))}
                    </div>

                    {/* Columna 2: Aventura Marina */}
                    <div className="flex flex-col gap-2">
                      <li className="menu-title text-white/60 font-semibold uppercase tracking-wider text-xs border-b border-white/10 pb-1 mb-1">
                        {t('sportsInfo.section.categories.marineAdventure')}
                      </li>
                      {marineAdventures.map((sport) => (
                        <li key={sport.id}>
                          <Link
                            href={`/sports?sport=${sport.id}`}
                            className={[
                              'text-sm transition-colors border-b-2 pb-[2px] hover:bg-white/10 rounded-lg px-2 py-1.5',
                              isActive(`/sports?sport=${sport.id}`)
                                ? 'text-white border-white bg-white/10'
                                : 'text-neutral-100 border-transparent hover:text-white hover:border-transparent',
                            ].join(' ')}
                            aria-current={
                              isActive(`/sports?sport=${sport.id}`)
                                ? 'page'
                                : undefined
                            }>
                            {sport.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </li>
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={[
                      'text-sm transition-colors border-b-2 pb-1',
                      isActive(l.href)
                        ? 'text-white border-white'
                        : 'text-neutral-100 border-transparent hover:text-white hover:border-neutral-500',
                    ].join(' ')}
                    aria-current={isActive(l.href) ? 'page' : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              {/* Burger (mobile) */}
              <label
                htmlFor="navbar-drawer"
                className="mdd:hidden btn btn-ghost btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </nav>
      </div>

      {/* Drawer Side (mobile) */}
      <div className="drawer-side z-30">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="menu relative p-5 w-72 min-h-full text-white font-stretch-pro gap-2 bg-accent shadow-2xl border-r border-white/10 backdrop-blur">
          <li className="mb-3 px-2 py-1 pb-3 border-b border-white/15">
            <Link
              href="/"
              onClick={closeDrawer}
              className="inline-flex items-center gap-2">
              <Image
                src="/images/haakcompress.png"
                alt="HAAK Logo"
                width={90}
                height={40}
              />
            </Link>
          </li>

          {/* Otros links */}
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={closeDrawer}
                className={[
                  'rounded-lg border px-3 py-2 uppercase tracking-wide text-[0.95rem] font-stretch transition-all duration-200',
                  isActive(l.href)
                    ? 'bg-white/15 text-white border-white/30 shadow-sm'
                    : 'text-white/85 border-white/5 bg-white/5 hover:text-white hover:border-white/20 hover:bg-white/10 hover:translate-x-0.5',
                ].join(' ')}
                aria-current={isActive(l.href) ? 'page' : undefined}>
                <h6>{l.label}</h6>
              </Link>
            </li>
          ))}
          {/* Deportes Dropdown Mobile */}
          <li>
            <details className="group">
              <summary
                className={[
                  ` border px-3 py-2 uppercase tracking-wide text-[0.95rem] font-stretch transition-all duration-200 flex items-center justify-between cursor-pointer w-full list-none`,
                  sportsActive
                    ? 'bg-white/15 text-white border-white/30 shadow-sm'
                    : 'text-white/85 border-white/5 bg-white/5 hover:text-white hover:border-white/20 hover:bg-white/10',
                ].join(' ')}>
                <h6>{t('Navbar.services')}</h6>
              </summary>
              <div className="mt-1 pl-2 ml-2 space-y-1 pb-2 border-l border-white/10">
                {/* Categoría: Deportes Acuáticos */}
                <details className="group/sub">
                  <summary className="rounded-lg px-3 py-2 text-[0.9rem] font-medium text-white/60 uppercase tracking-wide cursor-pointer hover:text-white transition-colors flex items-center justify-between list-none">
                    <h6>{t('sportsInfo.section.categories.waterSports')}</h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 transition-transform duration-200 group-open/sub:rotate-180 opacity-60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="mt-1 pl-3 space-y-1 border-l border-white/5 ml-2">
                    {waterSports.map((sport) => (
                      <li key={sport.id}>
                        <Link
                          href={`/sports?sport=${sport.id}`}
                          onClick={closeDrawer}
                          className={[
                            'rounded-lg border-transparent px-3 py-1.5 text-[0.85rem] transition-all duration-200 block border hover:border-white/10',
                            isActive(`/sports?sport=${sport.id}`)
                              ? 'text-white font-medium bg-white/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5',
                          ].join(' ')}>
                          <h6>{sport.name}</h6>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>

                {/* Categoría: Aventura Marina */}
                <details className="group/sub mt-1">
                  <summary className="rounded-lg px-3 py-2 text-[0.9rem] font-medium text-white/60 uppercase tracking-wide cursor-pointer hover:text-white transition-colors flex items-center justify-between list-none">
                    <h6>
                      {t('sportsInfo.section.categories.marineAdventure')}
                    </h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 transition-transform duration-200 group-open/sub:rotate-180 opacity-60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="mt-1 pl-3 space-y-1 border-l border-white/5 ml-2">
                    {marineAdventures.map((sport) => (
                      <li key={sport.id}>
                        <Link
                          href={`/sports?sport=${sport.id}`}
                          onClick={closeDrawer}
                          className={[
                            'rounded-lg border-transparent px-3 py-1.5 text-[0.85rem] transition-all duration-200 block border hover:border-white/10',
                            isActive(`/sports?sport=${sport.id}`)
                              ? 'text-white font-medium bg-white/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5',
                          ].join(' ')}>
                          <h6>{sport.name}</h6>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
