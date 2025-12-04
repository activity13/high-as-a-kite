'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { forwardRef, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'primary' | 'bordered';
  textareaSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  label?: string;
  helperText?: string;
}

/**
 * Textarea - Campo de texto multilínea
 * Usa los estilos de DaisyUI con soporte para label y mensajes de error
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'default',
      textareaSize = 'md',
      error = false,
      label,
      helperText,
      className,
      ...props
    },
    ref,
  ) => {
    const variantMap = {
      default: 'textarea-bordered',
      primary: 'textarea-bordered textarea-primary',
      bordered: 'textarea-bordered',
    };

    const sizeMap = {
      sm: 'textarea-sm',
      md: '',
      lg: 'textarea-lg',
    };

    return (
      <div className="form-control w-full">
        {label && (
          <label className="label">
            <span className="label-text text-base-content">{label}</span>
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'textarea',
            variantMap[variant],
            textareaSize !== 'md' && sizeMap[textareaSize],
            error && 'textarea-error',
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

Textarea.displayName = 'Textarea';
