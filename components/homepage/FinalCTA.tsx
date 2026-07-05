'use client';

import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';

export default function FinalCTA() {
  const t = useTranslations('finalCTA');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2861AD] via-[#1D4A85] to-[#122F5A] py-16 text-white md:py-20">
      <Image
        src="/logo/bob-swirl-white.svg"
        alt=""
        aria-hidden
        width={380}
        height={380}
        className={`pointer-events-none absolute -bottom-24 w-[320px] opacity-[0.07] md:w-[420px] ${
          isRTL ? '-left-16' : '-right-16'
        }`}
      />
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">{t('title')}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/85">{t('subtitle')}</p>
        <a
          href="https://cal.com/hassan-ahmed-27rg6z/property-owner-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[#F7DD6E] px-10 py-4 text-lg font-bold text-[#122F5A] shadow-xl transition-colors hover:bg-[#EBCB4E]"
        >
          {t('button')}
        </a>
      </div>
    </section>
  );
}
