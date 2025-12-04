'use client';

import React from 'react';
import { haakDesign } from '@/lib/design-system';
import { cn } from '@/lib/utils';
import { Card, CardBody } from './Card';
import Image from 'next/image';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  location?: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

/**
 * TestimonialCard - Tarjeta para testimonios de clientes
 * Incluye quote, autor, avatar opcional y rating de estrellas
 */
export function TestimonialCard({
  quote,
  author,
  role,
  location,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <Card variant="bordered" className={className}>
      <CardBody className="gap-4">
        <div className="flex justify-between items-start">
          <Quote className="w-8 h-8 text-primary/20" />
        </div>

        <blockquote className={cn(haakDesign.typography.body, 'italic')}>
          &quot;{quote}&quot;
        </blockquote>

        <div className="flex items-center gap-3 mt-2">
          {avatar ? (
            <Image
              src={avatar}
              alt={author}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">
                {author.charAt(0)}
              </span>
            </div>
          )}

          <div>
            <p className="font-semibold text-base-content">{author}</p>
            {(role || location) && (
              <p className={haakDesign.typography.small}>
                {role && <span>{role}</span>}
                {role && location && <span> · </span>}
                {location && <span>{location}</span>}
              </p>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
