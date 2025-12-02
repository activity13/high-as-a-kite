import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-3xl mx-auto">
        {/* Cabecera simple para volver al home */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:underline flex items-center gap-2">
            ← Volver al inicio
          </Link>
        </div>

        {/* Contenedor del texto legal */}
        <article
          className={cn(
            'prose prose-slate lg:prose-lg dark:prose-invert max-w-none', // Tailwind Typography / DaisyUI prose
            'bg-base-100 p-8 rounded-xl shadow-sm border border-base-200',
          )}>
          {children}
        </article>

        <div className="mt-8 text-center text-sm text-base-content/60 border-t border-base-200 pt-4">
          <p>
            © {new Date().getFullYear()} Haak. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
