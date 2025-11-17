'use client';

import { haakDesign } from '@/lib/design-system';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

/**
 * HaakButton - Botón estándar basado en DaisyUI
 * Usar para acciones normales en la UI
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
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
          size !== 'md' && haakDesign.components.button.sizes[size],
          loading && 'loading',
          className,
        )}
        disabled={disabled || loading}
        {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
