'use client';

import React from 'react';
import { haakDesign } from '@/lib/design-system';
import { cn } from '@/lib/utils';
import { Card, CardBody, CardTitle } from './Card';
import { Button } from './Button';
import { Check } from 'lucide-react';

interface PackageFeature {
  text: string;
  included: boolean;
}

interface PackageCardProps {
  title: string;
  description?: string;
  price: number;
  currency?: string;
  period?: string;
  features: PackageFeature[];
  highlighted?: boolean;
  ctaText: string;
  onCtaClick: () => void;
  className?: string;
}

/**
 * PackageCard - Tarjeta para mostrar paquetes/precios
 * Diseñada específicamente para pricing tables
 *
 * @param highlighted - Si es true, usa accent color para destacar
 */
export function PackageCard({
  title,
  description,
  price,
  currency = '$',
  period = 'por persona',
  features,
  highlighted = false,
  ctaText,
  onCtaClick,
  className,
}: PackageCardProps) {
  return (
    <Card
      variant={highlighted ? 'bordered' : 'default'}
      className={cn(
        'relative',
        highlighted && 'border-primary border-2 shadow-xl',
        className,
      )}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="badge badge-primary badge-lg">Popular</span>
        </div>
      )}

      <CardBody className="gap-6">
        <div>
          <CardTitle as="h3">{title}</CardTitle>
          {description && (
            <p className={cn(haakDesign.typography.small, 'mt-2')}>
              {description}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-base-content/70">{currency}</span>
            <span className="text-4xl font-bold text-base-content">
              {price}
            </span>
          </div>
          <p className={haakDesign.typography.small}>{period}</p>
        </div>

        <ul className="space-y-3 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-3 items-start">
              <Check
                className={cn(
                  'w-5 h-5 flex-shrink-0 mt-0.5',
                  feature.included ? 'text-success' : 'text-base-content/30',
                )}
              />
              <span
                className={cn(
                  'text-sm',
                  feature.included
                    ? 'text-base-content'
                    : 'text-base-content/50 line-through',
                )}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Button
          variant={highlighted ? 'primary' : 'outline'}
          size="lg"
          onClick={onCtaClick}
          className="w-full">
          {ctaText}
        </Button>
      </CardBody>
    </Card>
  );
}
