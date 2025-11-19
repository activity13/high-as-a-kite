'use client';

import { haakDesign } from '@/lib/design-system';
import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?:
    | 'base-100'
    | 'base-200'
    | 'base-300'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral';
  contained?: boolean;
  className?: string;
}

/**
 * Section - Wrapper para secciones de página
 *
 * @param background - Color de fondo de la sección
 * @param contained - Si true, aplica container automáticamente
 *
 * Uso:
 * <Section background="base-200" contained>
 *   <SectionTitle>Mi Título</SectionTitle>
 *   <div>Contenido...</div>
 * </Section>
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      background = 'base-100',
      contained = true,
      className,
      ...props
    },
    ref,
  ) => {
    const bgMap = {
      'base-100': 'bg-base-100',
      'base-200': 'bg-base-200',
      'base-300': 'bg-base-300',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
      neutral: 'bg-neutral',
    };

    return (
      <section
        ref={ref}
        className={cn(haakDesign.spacing.section, bgMap[background], className)}
        {...props}>
        {contained ? (
          <div className={haakDesign.spacing.container}>{children}</div>
        ) : (
          children
        )}
      </section>
    );
  },
);

Section.displayName = 'Section';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

/**
 * SectionHeader - Header de sección con título y subtítulo opcional
 *
 * @param title - Título de la sección (h2)
 * @param subtitle - Subtítulo descriptivo opcional
 * @param align - Alineación del texto (left, center, right)
 */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, subtitle, align = 'center', className, ...props }, ref) => {
    const alignMap = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    return (
      <div
        ref={ref}
        className={cn('mb-12', alignMap[align], className)}
        {...props}>
        <h2 className={haakDesign.typography.h2}>{title}</h2>
        {subtitle && (
          <p
            className={cn(
              haakDesign.typography.body,
              'mt-4 text-base-content/70',
            )}>
            {subtitle}
          </p>
        )}
      </div>
    );
  },
);

SectionHeader.displayName = 'SectionHeader';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

/**
 * SectionTitle - Título standalone para secciones
 * Usar cuando no necesitas SectionHeader completo
 */
export const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ children, as = 'h2', className, ...props }, ref) => {
    const Component = as;
    const typographyMap = {
      h1: haakDesign.typography.h1,
      h2: haakDesign.typography.h2,
      h3: haakDesign.typography.h3,
    };

    return (
      <Component
        ref={ref}
        className={cn(typographyMap[as], className)}
        {...props}>
        {children}
      </Component>
    );
  },
);

SectionTitle.displayName = 'SectionTitle';
