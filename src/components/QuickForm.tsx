'use client';

import React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { track } from '../utils/track';
import { Button } from '@/components/ui/Button';
// todo mejorar la accesibilidad del formulario, mejorar el diseño.

export const QuickForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const t = useTranslations('translation.translations');
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  // Estados para los checkboxes
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedMarketing, setAcceptedMarketing] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!acceptedTerms) {
      alert(
        t('form.validation.terms') ||
          'Debes aceptar los términos y condiciones.',
      );
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      // Track event
      track(t('events.tracking.form_submit'));

      // Send email
      await emailjs.sendForm(
        'service_wlrahqv',
        'template_cyruobb',
        formRef.current,
        'TRtyI8tzw0gMhCajE',
      );

      setStatus('ok');
      formRef.current.reset();
      setAcceptedTerms(false);
      setAcceptedMarketing(false);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const levels = t.raw('form.fields.level.options') as Record<string, string>;

  return (
    <section id="form" className="py-1">
      <h2 className="text-3xl font-bold mb-8">{t('form.title')}</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md space-y-4">
        <div>
          <label className="text-xs font-medium">
            {t('form.fields.name.label')}
          </label>
          <input
            name="user_name"
            required
            placeholder={t('form.fields.name.placeholder')}
            className="mt-1 w-full px-3 py-2 border rounded text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-medium">
            {t('form.fields.email.label')}
          </label>
          <input
            name="user_email"
            type="email"
            required
            placeholder={t('form.fields.email.placeholder')}
            className="mt-1 w-full px-3 py-2 border rounded text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-medium">
            {t('form.fields.level.label')}
          </label>
          <select
            name="level"
            className="mt-1 w-full px-3 py-2 border rounded text-sm">
            {Object.entries(levels).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium">
            {t('form.fields.message.label')}
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder={t('form.fields.message.placeholder')}
            className="mt-1 w-full px-3 py-2 border rounded text-sm"
          />
        </div>

        {/* Checkboxes Legales */}
        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              name="legal_consent"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 checkbox checkbox-xs checkbox-primary"
              required
            />
            <label
              htmlFor="terms"
              className="text-xs text-base-content/80 leading-tight">
              {t('form.fields.termsAndConditions.label')}{' '}
              <Link
                href="/privacidad"
                className="underline hover:text-primary"
                target="_blank">
                {t('form.fields.termsAndConditions.linkPrivacy')}
              </Link>{' '}
              {t('form.fields.termsAndConditions.and')}{' '}
              <Link
                href="/terminos"
                className="underline hover:text-primary"
                target="_blank">
                {t('form.fields.termsAndConditions.linkTerms')}
              </Link>
              .
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="marketing"
              name="marketing_consent"
              checked={acceptedMarketing}
              onChange={(e) => setAcceptedMarketing(e.target.checked)}
              className="mt-1 checkbox checkbox-xs checkbox-primary"
              value={acceptedMarketing ? 'yes' : 'no'}
            />
            <label
              htmlFor="marketing"
              className="text-xs text-base-content/80 leading-tight">
              Deseo recibir información sobre novedades, eventos y ofertas
              exclusivas de Haak.
            </label>
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px' }}>
          <label>{t('form.fields.honeypot.label')}</label>
          <input name="extra" tabIndex={-1} />
        </div>

        <Button type="submit" size="md" disabled={loading}>
          {loading ? 'Enviando...' : t('form.submit')}
        </Button>

        {status === 'ok' && (
          <p className="text-sm text-teal-600">{t('form.success')}</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600">{t('form.error')}</p>
        )}
      </form>
    </section>
  );
};
