'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'primary' | 'bordered';
  inputSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  label?: string;
  helperText?: string;
}

/**
 * Input - Campo de entrada de texto
 * Usa los estilos de DaisyUI con soporte para label y mensajes de error
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      inputSize = 'md',
      error = false,
      label,
      helperText,
      className,
      ...props
    },
    ref,
  ) => {
    const variantMap = {
      default: 'input-bordered',
      primary: 'input-bordered input-primary',
      bordered: 'input-bordered',
    };

    const sizeMap = {
      sm: 'input-sm',
      md: '',
      lg: 'input-lg',
    };

    return (
      <div className="form-control w-full">
        {label && (
          <label className="label">
            <span className="label-text text-base-content">{label}</span>
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'input',
            variantMap[variant],
            inputSize !== 'md' && sizeMap[inputSize],
            error && 'input-error',
            className,
          )}
          {...props}
        />
        {helperText && (
          <label className="label">
            <span className={cn('label-text-alt', error && 'text-error')}>
              {helperText}
            </span>
          </label>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
