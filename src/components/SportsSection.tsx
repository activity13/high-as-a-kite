'use client';
// Componente SportsSlider - Muestra un slider de deportes con detalles e información de precios

//Librerias de react para funcionalidades del componente
import React, { useState, useRef, useMemo, useEffect } from 'react';

// Librerias de adicionales para soporte de estilo, imagenes, animaciones y traducciones
import { haakDesign } from '@/lib/design-system';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

//Libreria de next para manejo de parametros en la URL
import { useSearchParams } from 'next/navigation';
// Datos de deportes con información de precios e imágenes
import sportsData from '@/data/sports.json';

// Tipo para las traducciones de deportes
interface SportTranslation {
  id: string;
  name: string;
  description?: string;
  includes?: string[];
  location?: string;
  schedule?: string;
  duration?: string;
  capacity?: string;
  modalities?: Array<{ id: string; name: string }>;
  rental?: { id: string; name: string };
  addons?: Array<{ id: string; name: string }>;
  boats?: Array<{ id: string; name: string }>;
  transport?: { id: string; name: string };
}

// Merged type with both price and name information
interface Sport {
  id: string;
  thumbnail: string;
  image: string;
  pricingType: string;
  name: string; //en teoria no va
  description?: string; //en teoria no va
  includes?: string[]; //en teoria no va
  location?: string; //en teoria no va
  schedule?: string; //en teoria no va
  duration?: string; //en teoria no va
  capacity?: string; //en teoria no va
  price?: number;
  prices?: Array<{ people: number; price: number }>;
  modalities?: Array<{ id: string; price: number; name: string }>;
  rental?: { id: string; price: number; name: string };
  addons?: Array<{ id: string; price: number; name: string }>;
  boats?: Array<{
    id: string;
    price: number;
    shared?: number;
    perPerson?: boolean;
    name: string;
  }>;
  transport?: { id: string; price: number; name: string };
}

const PricingComponent = ({ sport }: { sport: Sport }) => {
  const t = useTranslations('translation.translations.sportsInfo');
  switch (sport.pricingType) {
    case 'fixed':
      return (
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">
              ${sport.price}
            </span>
            <span className="text-base-100 text-xs">
              {t('section.perPerson')}
            </span>
          </div>
        </div>
      );
    case 'full_fixed':
      return (
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">
              ${sport.price}
            </span>
          </div>
        </div>
      );
    case 'by_person':
      return (
        <div>
          <h4 className="font-semibold text-base-100 text-xl">
            {t('section.prices')}:
          </h4>
          <ul className="space-y-1 mt-1 4xl">
            {sport.prices?.map((p, i) => (
              <li key={i} className="text-base-100/80 text-xl">
                {p.people} {t('section.people')}
                {p.people > 1 ? 's' : ''}: ${p.price}
              </li>
            ))}
          </ul>
        </div>
      );
    case 'modalities':
      return (
        <div>
          <h4 className="font-semibold text-base-100 text-xl">
            {t('section.modalities')}
          </h4>
          <ul className="space-y-1 mt-1">
            {sport.modalities?.map((m, i) => (
              <li key={i} className="text-base-100/80 text-xl">
                {m.name}: ${m.price}
              </li>
            ))}
          </ul>
        </div>
      );
    case 'by_person_optional_addons':
      return (
        <div>
          <h4 className="font-semibold uppercase text-base-100 text-xl">
            {t('section.prices')}:
          </h4>
          <ul className="space-y-1 mt-1">
            {sport.prices?.map((p, i) => (
              <li key={i} className="text-base-100/80 text-xl">
                {p.people} {t('section.people')}
                {p.people > 1 ? 's' : ''}: ${p.price}
              </li>
            ))}
          </ul>
          {sport.addons && sport.addons.length > 0 && (
            <div className="mt-2 pt-2 border-t border-white/20">
              <p className="text-lg text-base-100/60 mb-1 mt-1">
                {t('section.addons')}:
              </p>
              <ul className="space-y-1">
                {sport.addons.map((a, i) => (
                  <li key={i} className="text-lg text-base-100">
                    {a.name}: ${a.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    case 'by_person_optional_transport':
      return (
        <div>
          <h4 className="font-semibold text-base-100 text-xl">
            {t('section.pricePerPerson')}:
          </h4>
          <ul className="space-y-1 mt-1">
            {sport.prices?.map((p, i) => (
              <li key={i} className="text-base-100/80 text-xl">
                {p.people} {t('section.people')}
                {p.people > 1 ? 's' : ''}: ${p.price}
              </li>
            ))}
          </ul>
          {sport.transport && (
            <div className="mt-2 pt-2 border-t border-white/20">
              <p className="text-lg text-base-100 mt-1">
                {sport.transport.name}: ${sport.transport.price}
              </p>
            </div>
          )}
        </div>
      );
    case 'by_person_optional_rental':
      return (
        <div>
          <h4 className="font-semibold uppercase text-base-100 text-xl">
            {t('section.prices')}:
          </h4>
          <ul className="space-y-1 mt-1">
            {sport.prices?.map((p, i) => (
              <li key={i} className="text-base-100/80 text-xl">
                {p.people} {t('section.people')}
                {p.people > 1 ? 's' : ''}: ${p.price}
              </li>
            ))}
          </ul>
          {sport.rental && (
            <div className="mt-2">
              <h4 className="font-semibold text-base-100 text-lg">
                {t('section.optRent')}:
              </h4>
              <p className="text-base-100/80 text-lg">
                {sport.rental.name}: ${sport.rental.price}
              </p>
            </div>
          )}
        </div>
      );
    case 'by_boat_type':
      return (
        <div>
          <h4 className="font-semibold text-base-100 text-xl">
            {t('section.boats')}:
          </h4>
          <ul className="space-y-1 mt-1">
            {sport.boats?.map((b, i) => (
              <li key={i} className="text-base-100/80 text-xl">
                <div className="font-medium">{b.name}</div>
                <div className="text-xl mt-1">
                  {b.perPerson ? (
                    <span>
                      ${b.price} {t('section.perPerson')}
                    </span>
                  ) : (
                    <>
                      <span>${b.price}</span>
                      {b.shared && (
                        <span className="text-base-100/60 ml-2 text-lg">
                          (${b.shared} {t('section.ppShared')})
                        </span>
                      )}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return <p className="text-xs">{t('section.noPrice')}</p>;
  }
};

export default function SportsSection() {
  // *traducciones de items generales de la UI
  const t = useTranslations('translation.translations');

  // * SISTEMA DE CANALIZACIÓN Y TRADUCCIONES DE DEPORTES

  //* Arreglo de traducciones de cada deporte/aventura.
  const translations: SportTranslation[] = t.raw('sportsInfo.items');
  // * Obtener el parámetro de deporte de la URL
  const searchParams = useSearchParams();
  // * Lectura del parámetro sport de la URL
  const sportParam = searchParams?.get('sport');
  // * asass
  const mergedSports: Sport[] = useMemo(() => {
    return sportsData
      .map((sportData) => {
        const sportTranslation = translations.find(
          (translation) => translation.id === sportData.id,
        );
        if (!sportTranslation) {
          console.error(`Missing translation for sport: ${sportData.id}`);
          return null;
        }
        // *Merge data carefully to preserve both price and translation info
        const merged: Sport = {
          ...sportData,
          name: sportTranslation.name,
          description: sportTranslation.description,
          includes: sportTranslation.includes,
          location: sportTranslation.location,
          schedule: sportTranslation.schedule,
          duration: sportTranslation.duration,
          capacity: sportTranslation.capacity,
          // For nested arrays, merge price data with translations
          modalities: sportData.modalities?.map((mod) => ({
            ...mod,
            name:
              sportTranslation.modalities?.find((t) => t.id === mod.id)?.name ||
              mod.id,
          })),
          rental: sportData.rental
            ? {
                ...sportData.rental,
                name: sportTranslation.rental?.name || sportData.rental.id,
              }
            : undefined,
          addons: sportData.addons?.map((addon) => ({
            ...addon,
            name:
              sportTranslation.addons?.find((t) => t.id === addon.id)?.name ||
              addon.id,
          })),
          boats: sportData.boats?.map((boat) => ({
            ...boat,
            name:
              sportTranslation.boats?.find((t) => t.id === boat.id)?.name ||
              boat.id,
          })),
          transport: sportData.transport
            ? {
                ...sportData.transport,
                name:
                  sportTranslation.transport?.name || sportData.transport.id,
              }
            : undefined,
        };
        return merged;
      })
      .filter((sport): sport is Sport => sport !== null);
  }, [translations]);

  if (mergedSports.length === 0) {
    return <div>{t('section.loading')}</div>;
  }

  // Determine initial sport based on URL parameter
  const initialSport = useMemo(() => {
    if (sportParam) {
      const foundSport = mergedSports.find((s) => s.id === sportParam);
      return foundSport || mergedSports[0];
    }
    return mergedSports[0];
  }, [sportParam, mergedSports]);

  const [selectedSport, setSelectedSport] = useState<Sport>(initialSport);

  // Update selected sport when URL parameter changes
  useEffect(() => {
    if (sportParam) {
      const foundSport = mergedSports.find((s) => s.id === sportParam);
      if (foundSport) {
        setSelectedSport(foundSport);
      }
    }
  }, [sportParam, mergedSports]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSelectSport = (sport: Sport) => {
    setSelectedSport(sport);
  };

  // Simple rotating palette (3 colors). Replace these with brand colors later.
  const palette = [
    { bg: 'oklch(0.7567 0.0564 220.04)', fg: 'oklch(1 0.0044 220.38)' }, // warm sand / dark text
    { bg: 'oklch(0.6931 0.1582 30.41)', fg: 'oklch(1 0.0044 220.38)' }, // light cyan / dark blue
    { bg: 'oklch(0.9175 0.090055 85.5145)', fg: 'oklch(55% 0.3 240)' }, // soft rose / dark maroon
  ];
  const selectedIndex = mergedSports.findIndex(
    (s) => s.id === selectedSport.id,
  );
  const pal = palette[selectedIndex >= 0 ? selectedIndex % palette.length : 0];

  return (
    <>
      {/* Desktop Layout */}
      <section className="hidden lg:flex h-screen bg-base-300 text-base-content mt-14">
        {/* Barra deslizable horizontal, permite seleccionar el deporte y darle una mirada a su página.  */}
        <div className="w-1/4 bg-base-200 p-4 scrollbar-none overflow-y-auto border-r border-base-300">
          <h2 className={`${haakDesign.typography.h2} mb-6`}>
            {t('sportsInfo.section.sports')}
          </h2>
          <ul className="space-y-2">
            {mergedSports.map((sport) => (
              <li
                key={sport.id}
                className={`cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                  selectedSport.id === sport.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'hover:bg-base-300'
                }`}
                onClick={() => handleSelectSport(sport)}>
                <div className="flex items-center">
                  <Image
                    src={sport.thumbnail}
                    alt={sport.name!}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                  <span className="ml-4 font-semibold">{sport.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Sección de información del deporte seleccionado */}
        <div className="w-3/4 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSport.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full relative">
              {/* Image cover del deporte seleccionado */}
              <Image
                src={selectedSport.image}
                alt={selectedSport.name!}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 p-8 flex flex-col justify-start">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2">
                  <h1
                    className={`${haakDesign.typography.h1} text-white leading-tight`}>
                    {selectedSport.name}
                  </h1>
                  {selectedSport.description && (
                    <p className="text-sm text-white/90 leading-snug max-w-3xl">
                      {selectedSport.description}
                    </p>
                  )}
                  {selectedSport.includes &&
                    selectedSport.includes.length > 0 && (
                      <div className="mt-4">
                        <h3 className="font-semibold text-base-100 text-md">
                          {t('sportsInfo.section.includes')}
                        </h3>
                        <ul
                          className={`text-white/80 h-[400px] text-md mt-1 space-y-1 list-disc list-inside ${selectedSport.includes.length > 6 ? 'columns-2 gap-4' : ''}`}>
                          {selectedSport.includes.map((item, index) => (
                            <li key={index} className="break-inside-avoid">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  {selectedSport.capacity && (
                    <div className="mt-3">
                      <p className="text-xl text-white/90">
                        👥 {selectedSport.capacity}
                      </p>
                    </div>
                  )}
                  <div className="absolute bottom-16 pt-3 border-t border-white/20 text-xs space-y-1">
                    <PricingComponent sport={selectedSport} />
                  </div>
                  {/* valida si la locacion existe */}
                  {selectedSport.location && (
                    <p className="absolute top-5 text-sm text-base-100 font-semibold justify-self-end">
                      📍 {selectedSport.location}
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden flex flex-col h-screen bg-base-300 text-base-content">
        {/* Image Section - Top */}
        <div className="relative h-2/5 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSport.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full">
              <Image
                src={selectedSport.image}
                alt={selectedSport.name!}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Horizontal Slider - Middle */}
        {/* // todo Considerar si este scroll control es necesario
        // o se mejora el diseño a un estilo más minimalista sen o se quita.*/}
        <div className="bg-base-200 p-3 border-y border-base-300">
          <div className="flex items-center">
            <div
              ref={sliderRef}
              className="w-full overflow-x-auto scrollbar-hide flex gap-3">
              {mergedSports.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => handleSelectSport(sport)}
                  className={`flex-shrink-0 transition-all duration-300 rounded-lg overflow-hidden ring-2 ${
                    selectedSport.id === sport.id
                      ? 'ring-primary'
                      : 'ring-transparent hover:ring-primary/50'
                  }`}>
                  <Image
                    src={sport.thumbnail}
                    alt={sport.name!}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section - Bottom with Image Background */}
        <div className="relative flex-1 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSport.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full relative">
              <div
                className="absolute inset-0 p-4 flex flex-col justify-start overflow-y-auto"
                style={{ backgroundColor: pal.bg, color: pal.fg }}>
                <div className="space-y-2">
                  {selectedSport.location && (
                    <p className="text-xs font-semibold">
                      📍 {selectedSport.location}
                    </p>
                  )}
                  <h2 className="text-lg font-bold leading-tight">
                    {selectedSport.name}
                  </h2>
                  {selectedSport.description && (
                    <p className="text-xs leading-snug opacity-90">
                      {selectedSport.description}
                    </p>
                  )}
                  {selectedSport.includes &&
                    selectedSport.includes.length > 0 && (
                      <div className="mt-3">
                        <h3 className="font-semibold text-xs">
                          {t('sportsInfo.section.includes')}
                        </h3>
                        <ul className="list-disc list-inside text-xs mt-1 space-y-1 opacity-80">
                          {selectedSport.includes.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  {selectedSport.capacity && (
                    <div className="mt-2">
                      <p className="text-xs opacity-90">
                        👥 {selectedSport.capacity}
                      </p>
                    </div>
                  )}
                  <div
                    className="pt-2 border-t text-xs mt-3 "
                    style={{ borderColor: `${pal.fg}33` }}>
                    <PricingComponent sport={selectedSport} />
                  </div>

                  {/* <div className="mt-4">
                    <Link
                      href={`/sports?sport=${selectedSport.id}`}
                      className="inline-block px-3 py-2 rounded-md text-sm font-medium"
                      style={{ backgroundColor: pal.fg, color: pal.bg }}>
                      {t('sportsInfo.section.moreDetails') || 'Más detalles'}
                    </Link>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
