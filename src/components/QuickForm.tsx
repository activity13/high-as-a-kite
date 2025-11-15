import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { track } from '../utils/track';

export const QuickForm = () => {
  const t = useTranslations('translation.translations');
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // placeholder send
      track(t('events.tracking.form_submit'));
      setStatus('ok');
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    }
  };

  const levels = t.raw('form.fields.level.options') as Record<string, string>;

  return (
    <section id="form" className="py-16">
      <h2 className="text-3xl font-bold mb-8">{t('form.title')}</h2>
      <form onSubmit={submit} className="max-w-md space-y-4">
        <div>
          <label className="text-xs font-medium">
            {t('form.fields.name.label')}
          </label>
          <input
            name="name"
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
            name="email"
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
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px' }}>
          <label>{t('form.fields.honeypot.label')}</label>
          <input name="extra" tabIndex={-1} />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded bg-teal-600 text-white text-sm font-medium">
          {t('form.submit')}
        </button>
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
