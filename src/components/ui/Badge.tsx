'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'error'
    | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Badge - Etiqueta pequeña para destacar información
 * Usa las variantes de DaisyUI con colores consistentes
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { children, variant = 'neutral', size = 'md', className, ...props },
    ref,
  ) => {
    const variantMap = {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      accent: 'badge-accent',
      success: 'badge-success',
      warning: 'badge-warning',
      error: 'badge-error',
      neutral: 'badge-neutral',
    };

    const sizeMap = {
      sm: 'badge-sm',
      md: '',
      lg: 'badge-lg',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'badge',
          variantMap[variant],
          size !== 'md' && sizeMap[size],
          className,
        )}
        {...props}>
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
