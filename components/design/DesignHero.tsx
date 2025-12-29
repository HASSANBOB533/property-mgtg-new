'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function DesignHero() {
  const t = useTranslations('design.hero');

  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-hero.jpg"
          alt="Interior Design"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Light Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40"></div>
      </div>

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
    </section>
  );
}
