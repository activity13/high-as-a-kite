'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, Bell } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { haakDesign } from '@/lib/design-system';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

const EmailForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations('translation.translations.Newsletter');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const name = formRef.current.user_name.value;
    const email = formRef.current.user_email.value;

    if (!name || !email) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_wlrahqv',
        'template_cyruobb',
        formRef.current,
        'TRtyI8tzw0gMhCajE',
      );
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setTimeout(() => {
        setIsSubmitted(true);
        setLoading(false);
      }, 1000);
      formRef.current.reset();
    }
  };

  if (isSubmitted) {
    return (
      <Section background="accent">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-accent-content/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-8 h-8 text-accent-content" />
          </div>
          <h3 className="text-xl font-semibold text-accent-content mb-2">
            {t('success')}
          </h3>
          <p className={`${haakDesign.typography.body} text-accent-content/90`}>
            {t('successMessage')}
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section background="secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Columna texto */}
        <div>
          <h2
            className={`${haakDesign.typography.h2} text-secondary-content mb-2`}>
            {t('title')}
          </h2>
          <p
            className={`${haakDesign.typography.body} text-secondary-content/80`}>
            {t('description')}
          </p>
        </div>

        {/* Columna formulario */}
        <div>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/50 z-10" />
                <input
                  type="text"
                  placeholder={t('namePlaceholder')}
                  name="user_name"
                  className="input input-bordered w-full pl-10 bg-base-100 text-base-content"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/50 z-10" />
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  name="user_email"
                  className="input input-bordered w-full pl-10 bg-base-100 text-base-content"
                  required
                />
              </div>
            </div>

            {/* Checkbox políticas */}
            <div className="flex items-start gap-3 bg-base-100 rounded-lg border border-base-300 p-3">
              <input
                type="checkbox"
                id="terms"
                className="checkbox checkbox-sm mt-1"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
              />
              <label
                htmlFor="terms"
                className="text-sm leading-relaxed text-base-content cursor-pointer">
                {t('agreePolicy1')}{' '}
                <Link
                  href={'/terms-conditions'}
                  className="link link-primary hover:underline">
                  {t('agreePolicy2')}
                </Link>
                .
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={loading || !acceptTerms}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  {t('loading')}
                </div>
              ) : (
                <>{t('button')}</>
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default EmailForm;
