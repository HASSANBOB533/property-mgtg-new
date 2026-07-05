'use client';

import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';

const SLIDES = [
  '/images/carousel-1.jpg',
  '/images/carousel-2.jpg',
  '/images/carousel-3.jpg',
  '/images/carousel-4.jpg',
  '/images/carousel-5.jpg',
  '/images/carousel-6.jpg',
];

export default function DesignHero() {
  const t = useTranslations('design.hero');
  const ts = useTranslations('services');
  const tn = useTranslations('nav');
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-[460px] items-center justify-center overflow-hidden md:h-[600px]">
      {/* Carousel images */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide}
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

      {/* Overlay for text readability — brand ink, not plain black */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#122F5A]/85 via-[#122F5A]/35 to-[#122F5A]/45 z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#F7DD6E] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            <span className="inline-block h-px w-8 bg-[#F7DD6E]/70" aria-hidden />
            Best of Bedz · BOB Designs
            <span className="inline-block h-px w-8 bg-[#F7DD6E]/70" aria-hidden />
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] md:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mb-2 text-lg italic text-[#F7DD6E] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:text-xl">
            {ts('designs.slogan')}
          </p>
          <p className="mb-7 text-base text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:text-lg">
            {t('subtitle')}
          </p>
          <Link
            href={`/${locale}/list-property`}
            className="inline-block rounded-full bg-[#F7DD6E] px-8 py-3.5 text-base font-bold text-[#122F5A] shadow-xl transition-colors hover:bg-[#EBCB4E]"
          >
            {tn('listProperty')}
          </Link>
        </div>
      </div>

      {/* Carousel indicators — 32px hit areas around the small visual dots */}
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide}
            onClick={() => setCurrentSlide(index)}
            className="flex h-8 min-w-8 items-center justify-center px-1"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-[#F7DD6E]' : 'w-2 bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
