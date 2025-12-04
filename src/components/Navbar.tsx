'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './ui/LanguageSwitcher';

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
    { href: '/about', label: t('Navbar.about') },
    { href: '/sports', label: t('Navbar.sports') },
    // { href: '/trips', label: t('Navbar.trips') },
    // { href: '/rentals', label: t('Navbar.rentals') },
    { href: '/spots', label: t('Navbar.spots') },
    { href: '/faq', label: t('Navbar.faq') },
    // { href: '/packs', label: t('Navbar.packs') },
    // { href: '/gallery', label: t('Navbar.gallery') },
    { href: '/contact', label: t('Navbar.contact') },
  ];

  const closeDrawer = () => {
    const el = document.getElementById(
      'navbar-drawer',
    ) as HTMLInputElement | null;
    if (el) el.checked = false;
  };

  // Agrupar: sports, trips, rentals
  const groupedHrefs = ['/sports', '/trips', '/rentals'];
  const groupedLinks = links.filter((l) => groupedHrefs.includes(l.href));
  const mainLinks = links.filter((l) => !groupedHrefs.includes(l.href));
  const servicesActive = groupedLinks.some((l) => isActive(l.href));

  return (
    <div className="drawer">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />

      {/* Topbar */}
      <div className="drawer-content">
        <nav className="fixed inset-x-0 top-0 z-20 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/60 border-b border-primary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-col items-center pt-2 mb-1">
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
              <div className="font-stretch-semi-condensed text-base-100">
                <h5 className="font-helvetica">{t('common.academy')}</h5>
              </div>
            </div>

            {/* Desktop nav */}
            <ul className="hidden mdd:flex items-center gap-6">
              {/* Dropdown Servicios */}
              <li>
                <div className="dropdown dropdown-hover">
                  <button
                    className={[
                      'text-sm transition-colors border-b-2 pb-1 mt-2 inline-flex items-center gap-1',
                      servicesActive
                        ? 'text-white border-white'
                        : 'text-neutral-100 border-transparent hover:text-white hover:border-neutral-500',
                    ].join(' ')}
                    aria-haspopup="menu"
                    aria-expanded={servicesActive ? 'true' : 'false'}>
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
                    className="dropdown-content menu p-2 mt-1 shadow bg-primary rounded-b-md min-w-35">
                    {groupedLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className={[
                            'text-sm transition-colors border-b-2 pb-[2px]',
                            isActive(l.href)
                              ? 'text-white border-white'
                              : 'text-neutral-100 border-transparent hover:text-white hover:border-base-100',
                          ].join(' ')}
                          aria-current={isActive(l.href) ? 'page' : undefined}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {mainLinks.map((l) => (
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
        <ul
          className="menu p-4 w-72 min-h-full bg-primary
         text-white gap-1">
          <li className="mb-2 px-2 py-1">
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
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={closeDrawer}
                className={[
                  'rounded-md border-b-2',
                  isActive(l.href)
                    ? 'bg-neutral-800 text-white border-white'
                    : 'text-neutral-100 border-transparent hover:text-white hover:border-neutral-100',
                ].join(' ')}
                aria-current={isActive(l.href) ? 'page' : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
