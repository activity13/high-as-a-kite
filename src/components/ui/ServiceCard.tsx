'use client';

import { haakDesign } from '@/lib/design-system';
import { cn } from '@/lib/utils';
import { Card, CardBody, CardTitle } from './Card';
import { Button } from './Button';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  ctaText?: string;
  onCtaClick?: () => void;
  variant?: 'default' | 'horizontal';
  className?: string;
}

/**
 * ServiceCard - Tarjeta para mostrar servicios
 * Soporta imagen o ícono
 * Dos variantes: default (vertical) o horizontal
 */
export function ServiceCard({
  title,
  description,
  image,
  icon: Icon,
  ctaText,
  onCtaClick,
  variant = 'default',
  className,
}: ServiceCardProps) {
  if (variant === 'horizontal') {
    return (
      <Card variant="bordered" className={cn('card-side', className)}>
        {image && (
          <figure className="w-48 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </figure>
        )}

        <CardBody>
          <div className="flex items-start gap-3">
            {Icon && !image && (
              <div className="p-3 rounded-lg bg-primary/10">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            )}
            <div className="flex-1">
              <CardTitle as="h3">{title}</CardTitle>
              <p className={cn(haakDesign.typography.body, 'mt-2')}>
                {description}
              </p>
            </div>
          </div>

          {ctaText && onCtaClick && (
            <div className="card-actions justify-end mt-4">
              <Button variant="ghost" size="sm" onClick={onCtaClick}>
                {ctaText}
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
    );
  }

  return (
    <Card variant="default" className={className}>
      {image && (
        <figure>
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
        </figure>
      )}

      <CardBody>
        {Icon && !image && (
          <div className="p-3 rounded-lg bg-primary/10 w-fit">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}

        <CardTitle as="h3">{title}</CardTitle>

        <p className={haakDesign.typography.body}>{description}</p>

        {ctaText && onCtaClick && (
          <div className="card-actions justify-end mt-4">
            <Button variant="primary" size="md" onClick={onCtaClick}>
              {ctaText}
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
