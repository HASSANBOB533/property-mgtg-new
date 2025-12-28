'use client';

import {useTranslations} from 'next-intl';

export default function DesignHero() {
  const t = useTranslations('design.hero');

  return (
    <section className="relative bg-gradient-to-br from-[#2F63AD]/5 via-white to-[#F9DE6A]/10 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F63AD] mb-4 leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-[#2F63AD]/70">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
