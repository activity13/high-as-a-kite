'use client';

import React from 'react';
import { haakDesign } from '@/lib/design-system';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

/**
 * CTAButton - Botón de Call-to-Action
 * Usar SOLO para acciones principales/críticas:
 * - "Reservar Ahora"
 * - "Contactar"
 * - "Ver Paquetes"
 *
 * Características especiales:
 * - Tamaños más grandes (md o lg)
 * - Variantes limitadas (primary, secondary, accent)
 * - Soporte para íconos
 * - Animación sutil en hover
 */
export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'lg',
      className,
      icon,
      loading = false,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          haakDesign.components.button[variant],
          haakDesign.components.button.sizes[size],
          'gap-2 transition-transform hover:scale-105 active:scale-95',
          loading && 'loading',
          className,
        )}
        disabled={disabled || loading}
        {...props}>
        {icon && <span className="inline-flex">{icon}</span>}
        {children}
      </button>
    );
  },
);

CTAButton.displayName = 'CTAButton';
