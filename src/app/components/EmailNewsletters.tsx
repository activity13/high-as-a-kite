'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, Bell } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
// import TermsConditionsPage from '../[locale]/terms-conditions/page';

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
      // Simular envío
      setTimeout(() => {
        setIsSubmitted(true);
        setLoading(false);
      }, 1000);
      formRef.current.reset();
    }
  };

  if (isSubmitted) {
    return (
      <div className="absolute bottom-0 w-full">
        <div className="w-full mx-auto bg-success text-success-content p-8 text-center shadow-lg">
          <div className="w-12 h-12 bg-success-content/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-6 h-6 text-success-content" />
          </div>
          <h3 className="mb-2 font-semibold text-lg">{t('success')}</h3>
          <p className="opacity-90 text-sm">{t('successMessage')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-0 w-full bg-base-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Columna texto */}
          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-3">
              <div>
                {/*Titulo de la tarjeta de newsletter */}
                <h2 className="font-helvetica text-lg font-bold">
                  {t('title')}
                </h2>{' '}
                <p className="text-sm opacity-80 mt-1 leading-relaxed">
                  {t('description')}
                </p>
              </div>
            </div>
          </div>

          {/* Columna formulario */}
          <div>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 " />
                  <input
                    type="text"
                    placeholder={t('namePlaceholder')}
                    name="user_name"
                    className="input input-bordered w-full pl-10 h-11 text-sm"
                    required
                  />
                </label>

                <label className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/70" />
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    name="user_email"
                    className="input input-bordered w-full pl-10 h-11 text-sm"
                    required
                  />
                </label>
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
                  className="text-xs leading-relaxed cursor-pointer">
                  {t('agreePolicy1')}{' '}
                  <Link
                    href={'/terms-conditions'}
                    className="link link-primary hover:underline">
                    {t('agreePolicy2')}
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full h-11 text-sm normal-case"
                disabled={loading || !acceptTerms}>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    {t('loading')}
                  </div>
                ) : (
                  <>{t('button')}</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
