'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden md:min-h-[680px]">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: 'url(/hero-background.jpg)'}}
        />
        {/* Cinematic brand gradient — ink from the text side, photo breathes on the other */}
        <div
          className={`absolute inset-0 ${
            isRTL
              ? 'bg-gradient-to-l from-[#122F5A]/95 via-[#1D4A85]/60 to-[#2861AD]/10'
              : 'bg-gradient-to-r from-[#122F5A]/95 via-[#1D4A85]/60 to-[#2861AD]/10'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122F5A]/60 via-transparent to-[#122F5A]/30" />
      </div>

      {/* Brand swirl watermark */}
      <Image
        src="/logo/bob-swirl-white.svg"
        alt=""
        aria-hidden
        width={420}
        height={420}
        className={`pointer-events-none absolute -top-16 z-[1] w-[280px] opacity-[0.08] md:w-[400px] ${
          isRTL ? '-left-20' : '-right-20'
        }`}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#F7DD6E]">
            Best of Bedz · Owners
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-[1.12] text-white sm:text-5xl md:text-6xl">
            {t('headlineArt')}
            <br />
            <span className="text-[#F7DD6E]">{t('headlineScience')}</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            {t('support')}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${locale}/list-property`}
              className="rounded-full bg-[#F7DD6E] px-8 py-4 text-center text-lg font-bold text-[#122F5A] shadow-xl transition-colors hover:bg-[#EBCB4E]"
            >
              {t('ctaPrimary')}
            </Link>
            <a
              href="https://cal.com/hassan-ahmed-27rg6z/property-owner-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/60 bg-white/10 px-8 py-4 text-center text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
