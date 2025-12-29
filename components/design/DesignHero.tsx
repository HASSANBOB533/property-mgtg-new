'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {useState, useEffect} from 'react';

export default function DesignHero() {
  const t = useTranslations('design.hero');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/carousel-1.jpg',
    '/images/carousel-2.jpg',
    '/images/carousel-3.jpg',
    '/images/carousel-4.jpg',
    '/images/carousel-5.jpg',
    '/images/carousel-6.jpg',
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide}
            alt={`Interior Design ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={85}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40 z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
