'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Hero from '../components/Hero';
import EmailNewsletters from '../components/EmailNewsletters';

export default function Home() {
  const t = useTranslations('translation.translations');
  return (
    <>
      <Hero
        image="/images/kite.jpg"
        title={t('Hero.title')}
        description={t('Hero.description')}
      />
      <div className="min-h-screen bg-base-100 text-base-content space-y-6 relative">
        <h1 className=" font-stretch text-3xl font-bold text-primary">
          Vista previa de mytheme
        </h1>

        <div className="flex flex-wrap gap-4">
          <button className="btn btn-primary">Botón Primario</button>
          <button className="btn btn-secondary">Botón Secundario</button>
          <button className="btn btn-accent">Botón Acento</button>
          <button className="btn btn-neutral">Botón Neutral</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Éxito</button>
          <button className="btn btn-warning">Alerta</button>
          <button className="btn btn-error">Error</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card bg-base-200 shadow-md p-4">
            <h2 className="text-lg font-semibold">Card Base-200</h2>
            <p>Texto de ejemplo con color base-content.</p>
          </div>
          <div className="card bg-base-300 shadow-md p-4">
            <h2 className="text-lg font-semibold">Card Base-300</h2>
            <p>Texto de ejemplo con color base-content.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Input con theme"
            className="input input-bordered w-full max-w-xs"
          />
          <select className="select select-bordered w-full max-w-xs">
            <option>Opción 1</option>
            <option>Opción 2</option>
          </select>
        </div>
        <EmailNewsletters />
      </div>
    </>
  );
}
