'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export default function NotFound() {
  const t = useTranslations('translation.translations');
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden ">
      {/* Fondo con video temático */}
      <Image
        src="/images/kite.jpg"
        alt="404"
        width={1280}
        height={720}
        className="absolute inset-0 w-full h-full object-cover object-[5px_50px] md:object-[center_50px]"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6">
        <h1 className="text-8xl md:text-9xl font-stretch font-bold mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-helvetica">
          {t('NotFound.title')}
          <br />
          {t('NotFound.description')}
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-content rounded-full font-semibold hover:bg-primary/90 transition">
          {t('NotFound.button')}
        </Link>
      </motion.div>
    </div>
  );
}
