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
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F63AD]/90 via-[#2F63AD]/70 to-[#2F63AD]/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-white/95 drop-shadow-md">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
