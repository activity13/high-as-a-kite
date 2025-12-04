'use client';

import React from 'react';
import { haakDesign } from '@/lib/design-system';
import { Card, CardBody, CardTitle } from './Card';
import { Badge } from './Badge';
import { Wind, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface SpotCardProps {
  name: string;
  level: string;
  wind: string;
  highlight: string;
  image?: string;
  className?: string;
}

/**
 * SpotCard - Tarjeta para mostrar spots de kitesurf
 * Incluye nombre, nivel, viento y descripción destacada
 */
export function SpotCard({
  name,
  level,
  wind,
  highlight,
  image,
  className,
}: SpotCardProps) {
  // Determinar color del badge según nivel
  const getLevelVariant = (level: string) => {
    const lowerLevel = level.toLowerCase();
    if (
      lowerLevel.includes('beginner') ||
      lowerLevel.includes('principiante')
    ) {
      return 'success';
    }
    if (
      lowerLevel.includes('intermediate') ||
      lowerLevel.includes('intermedio')
    ) {
      return 'success';
    }
    if (lowerLevel.includes('todos') || lowerLevel.includes('all')) {
      return 'secondary';
    }
    if (lowerLevel.includes('advanced') || lowerLevel.includes('avanzado')) {
      return 'warning';
    }
    return 'error';
  };

  return (
    <Card variant="bordered" className={`overflow-hidden ${className || ''}`}>
      {image && (
        <div className="relative h-48 w-full bg-base-300">
          <Image
            src={image}
            alt={`Spot ${name}`}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      )}
      <CardBody>
        <CardTitle as="h3">{name}</CardTitle>
        <p
          className={`${haakDesign.typography.body} mt-4 text-base-content/70`}>
          {highlight}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant={getLevelVariant(level)} size="sm">
            <TrendingUp className="w-3 h-3 mr-1" />
            {level}
          </Badge>
          <Badge variant="primary" size="sm">
            <Wind className="w-3 h-3 mr-1" />
            {wind}
          </Badge>
        </div>
      </CardBody>
    </Card>
  );
}
