'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

// === Iconos de banderas ===
function FlagUS({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <rect width="640" height="480" fill="#b22234" />
      <g fill="#fff">
        <rect width="640" height="36.9" y="36.9" />
        <rect width="640" height="36.9" y="110.7" />
        <rect width="640" height="36.9" y="184.6" />
        <rect width="640" height="36.9" y="258.4" />
        <rect width="640" height="36.9" y="332.3" />
        <rect width="640" height="36.9" y="406.1" />
      </g>
      <rect width="256" height="185" fill="#3c3b6e" />
    </svg>
  );
}
function FlagES({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 2" className={className}>
      <rect width="3" height="2" fill="#c60b1e" />
      <rect width="3" height="1" y="0.5" fill="#ffc400" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const t = useTranslations('translation.LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const options = [
    { key: 'en', label: t('english'), Icon: FlagUS },
    { key: 'es', label: t('spanish'), Icon: FlagES },
  ] as const;

  const handleLanguageChange = (newLocale: string) => {
    const newPath =
      pathname?.replace(/^\/[a-z]{2}/, `/${newLocale}`) ?? `/${newLocale}`;
    router.push(newPath, { scroll: false });
    setOpen(false);
  };

  // cerrar al hacer click fuera
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const current = options.find((o) => o.key === locale) ?? options[0];

  return (
    <div ref={ref} className="relative inline-block text-left">
      {/* Botón principal */}
      <Button
        variant="primary"
        size={'sm'}
        className="rounded-full"
        onClick={() => setOpen((v) => !v)}>
        <current.Icon />
        <span className="text-sm md:text-base font-medium">
          {current.label}
        </span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>

      {/* Opciones */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-white/95 shadow-lg ring-1 ring-black/5 z-50">
          <ul className="py-1">
            {options.map(({ key, label, Icon }) => (
              <li key={key}>
                <p
                  onClick={() => handleLanguageChange(key)}
                  className={`w-full items-start px-3 py-2 flex gap-3 text-sm ${
                    locale === key
                      ? 'bg-sky-50 text-sky-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                  <Icon />
                  {label}
                  {locale === key && <span className="ml-auto">✓</span>}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
