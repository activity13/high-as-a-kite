'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'service_wlrahqv',
        'template_cyruobb',
        formRef.current,
        'TRtyI8tzw0gMhCajE',
      );
      formRef.current.reset();
      setStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="absolute bottom-0 max-w-screen mx-auto bg-gray-900 p-3 shadow-lg border border-amber-500">
      <h2 className="text-md font-bold text-white mb-2 ">
        Suscríbete a nuestras novedades
      </h2>
      <form ref={formRef} onSubmit={sendEmail} className="flex flex-row gap-2">
        <input
          type="email"
          name="user_email"
          placeholder="Tu email"
          className="input input-bordered w-full bg-gray-800 text-white border-amber-500 focus:outline-none focus:border-amber-400"
          required
        />
        <input
          type="text"
          name="user_name"
          placeholder="Tu nombre"
          className="input input-bordered w-full bg-gray-800 text-white border-amber-500 focus:outline-none focus:border-amber-400"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`btn  font-bold ${
            loading
              ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
              : 'bg-amber-500 hover:bg-amber-400 text-gray-900'
          }`}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {status === 'success' && (
        <div className="alert alert-success mt-4 bg-gray-800 border border-amber-400 text-amber-300 transition-all duration-300">
          <span>¡Tu mensaje fue enviado con éxito!</span>
        </div>
      )}

      {status === 'error' && (
        <div className="alert alert-error mt-4 bg-gray-800 border border-red-500 text-red-300 transition-all duration-300">
          <span>Hubo un problema al enviar tu mensaje.</span>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
