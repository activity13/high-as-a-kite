'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, Music } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-primary min-h-screen flex flex-col md:flex-row items-center justify-center text-primary-content px-6 py-12 gap-10">
      {/* Columna 1 - Logo */}
      <div className="flex justify-center md:justify-start">
        <picture>
          <source srcSet="/images/HAAKFire.png" media="(max-width: 768px)" />
          <Image
            src="/images/HAAKHAir.png"
            alt="HAAK Logo"
            width={220}
            height={120}
            className="w-32 sm:w-40 md:w-lg h-auto object-contain"
          />
        </picture>
      </div>

      {/* Columna 2 - Datos */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold font-stretch">
          Contáctanos
        </h2>

        {/* Teléfono y correo */}
        <div className="flex flex-col md:flex-row gap-6 text-lg">
          <div>
            <p className="font-semibold">Teléfono</p>
            <p className="text-sm">+51 999 999 999</p>
          </div>
          <div>
            <p className="font-semibold">Correo</p>
            <p className="text-sm">info@haak.com</p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6">
          <Link href="https://instagram.com" target="_blank">
            <Instagram className="w-7 h-7 hover:text-white transition" />
          </Link>
          <Link href="https://tiktok.com" target="_blank">
            <Music className="w-7 h-7 hover:text-white transition" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Youtube className="w-7 h-7 hover:text-white transition" />
          </Link>
        </div>
      </div>
    </section>
  );
}
