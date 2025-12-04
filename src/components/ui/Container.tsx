'use client';

import React from 'react';
import { haakDesign } from '@/lib/design-system';
import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container - Wrapper para centrar contenido con padding responsivo
 * Usa el espaciado estándar del design system
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(haakDesign.spacing.container, className)}
        {...props}>
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';
