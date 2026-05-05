'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface MediaItem {
  type: 'video' | 'image';
  src: string;
  thumbnail?: string;
  alt: string;
}

interface SportMediaSliderProps {
  media: MediaItem[];
  className?: string;
}

export default function SportMediaSlider({
  media,
  className = '',
}: SportMediaSliderProps) {
  const t = useTranslations('translation.translations.sportsInfo.section');
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Pause all videos when slide changes
  useEffect(() => {
    const videos = document.querySelectorAll('.sport-slider-video');
    videos.forEach((video) => {
      if (video instanceof HTMLVideoElement) {
        video.pause();
      }
    });
  }, [selectedIndex]);

  if (!media || media.length === 0) {
    return null;
  }

  return (
    <div className={`relative ${className} group h-full`}>
      {/* Embla viewport with floating effect */}
      <div
        className="overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_80px_-15px_rgba(0,0,0,0.4)] hover:scale-[1.02] lg:rounded-3xl h-full"
        ref={emblaRef}
        style={{
          transform: 'perspective(1000px) translateZ(0)',
        }}>
        <div className="flex h-full">
          {media.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full">
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    controls
                    playsInline
                    muted
                    autoPlay
                    loop
                    preload="metadata"
                    poster={item.thumbnail}
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-contain bg-black sport-slider-video pointer-events-auto z-20 relative"
                    aria-label={item.alt}>
                    <source src={item.src} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>
              ) : (
                <div
                  className="w-full h-full relative"
                  onContextMenu={(e) => e.preventDefault()}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain bg-black pointer-events-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {media.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-md hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100 lg:left-6 lg:p-4"
            aria-label={t('slidePrev')}>
            <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-md hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100 lg:right-6 lg:p-4"
            aria-label={t('slideNext')}>
            <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 px-4 py-2.5 bg-black/30 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 hover:bg-black/40 lg:bottom-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-white w-10 h-2.5 lg:w-12'
                    : 'bg-white/40 hover:bg-white/60 w-2.5 h-2.5'
                }`}
                aria-label={`${t('slideOf')} ${index + 1} ${t('slideOf')} ${scrollSnaps.length}`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="absolute top-6 right-6 z-10 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-black/40 lg:top-8 lg:right-8">
            {selectedIndex + 1} / {media.length}
          </div>
        </>
      )}
    </div>
  );
}
