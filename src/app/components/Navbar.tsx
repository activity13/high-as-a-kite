'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('translation.translations');
  const [openMenu, setOpenMenu] = useState<'sports' | 'services' | null>(null);

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
        text-bold
        px-4 md:px-12 
        py-1 md:py-2
        flex items-center justify-between
        text-white 
        bg-black/30 backdrop-blur-md 
        border-b border-white/10
      ">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-semibold">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="HAAK, High as a Kite Logo company"
                width={125}
                height={75}
              />
            </Link>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white hover:scale-105 transition">
              {t('Navbar.home')}
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white hover:scale-105 transition">
              {t('Navbar.about')}
            </Link>
            <div
              className="dropdown dropdown-hover"
              onMouseEnter={() => setOpenMenu('sports')}
              onMouseLeave={() => setOpenMenu(null)}>
              {/* Botón Deportes */}
              <div
                tabIndex={0}
                role="button"
                className="flex items-center  py-2 cursor-pointer">
                <span>{t('Navbar.sports')}</span>
                <ChevronRight
                  className={` transform transition-transform duration-100 ${
                    openMenu?.includes('sports') ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </div>

              {/* Dropdown */}
              <ul
                tabIndex={0}
                className="dropdown-content absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg">
                <li>
                  <Link
                    href="/curses"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('Navbar.curses')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rent"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('Navbar.rent')}
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="dropdown dropdown-hover"
              onMouseEnter={() => setOpenMenu('services')}
              onMouseLeave={() => setOpenMenu(null)}>
              {/* Botón Deportes */}
              <div
                tabIndex={0}
                role="button"
                className="flex items-center  py-2 cursor-pointer">
                <span>{t('Navbar.services')}</span>
                <ChevronRight
                  className={` transform transition-transform duration-300 ${
                    openMenu?.includes('services') ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </div>

              {/* Dropdown */}
              <ul
                tabIndex={0}
                className="dropdown-content absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg">
                <li>
                  <Link
                    href="/curses"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('Navbar.curses')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rent"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('Navbar.rent')}
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white hover:scale-105 transition">
              {t('Navbar.contact')}
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
            <Link href="/">{t('Navbar.home')}</Link>
          </li>
          <li>
            <Link href="/about">{t('Navbar.about')}</Link>
          </li>
          <li>
            <div className="collapse px-0 py-0 ">
              <input type="checkbox" />
              <div className="collapse-title flex h-[10px]">
                <span>{t('Navbar.sports')}</span>
                <ChevronRight
                  size={20}
                  className={` transform transition-transform duration-100 ${
                    openMenu?.includes('sports') ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </div>
              <div className="collapse-content text-sm">
                <li>
                  <Link href="/curses">{t('Navbar.curses')}</Link>
                </li>
                <li>
                  <Link href="/rent">{t('Navbar.rent')}</Link>
                </li>
              </div>
            </div>
          </li>
          <li>
            <div className="collapse px-0 py-0 ">
              <input type="checkbox" className="p-0" />
              <div className="collapse-title flex h-[10px]">
                <span>{t('Navbar.services')}</span>
                <ChevronRight
                  size={20}
                  className={` transform transition-transform duration-100 ${
                    openMenu?.includes('sports') ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </div>
              <div className="collapse-content text-sm">
                <li>
                  <Link href="/curses">{t('Navbar.curses')}</Link>
                </li>
                <li>
                  <Link href="/rent">{t('Navbar.rent')}</Link>
                </li>
              </div>
            </div>
          </li>

          <li>
            <Link href="/contact">{t('Navbar.contact')}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
