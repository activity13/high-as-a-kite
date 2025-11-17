'use client';

import { haakDesign } from '@/lib/design-system';
import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'compact';
  className?: string;
}

/**
 * Card - Contenedor base para tarjetas
 * Usa las variantes de DaisyUI:
 * - default: Con sombra
 * - bordered: Con borde
 * - compact: Espaciado reducido
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(haakDesign.components.card[variant], className)}
        {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * CardBody - Contenedor de contenido de la card
 * Usa el espaciado estándar de DaisyUI
 */
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(haakDesign.components.card.body, className)}
        {...props}>
        {children}
      </div>
    );
  },
);

CardBody.displayName = 'CardBody';

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4';
  className?: string;
}

/**
 * CardTitle - Título de la card
 * Por defecto usa h3 del design system
 */
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, as: Component = 'h3', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('card-title', haakDesign.typography.h3, className)}
        {...props}>
        {children}
      </Component>
    );
  },
);

CardTitle.displayName = 'CardTitle';
