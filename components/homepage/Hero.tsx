'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import BrandIcon from '../BrandIcon';

const PROOF = [
  {key: 'superhost', icon: 'award'},
  {key: 'rating', icon: 'star'},
  {key: 'properties', icon: 'home'},
  {key: 'support', icon: 'headphones'},
] as const;

export default function Hero() {
  const t = useTranslations('hero');
  const tb = useTranslations('trustBadges');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative flex min-h-[540px] flex-col overflow-hidden md:min-h-[680px]">
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
        className={`pointer-events-none absolute -top-16 z-[1] w-[240px] opacity-[0.08] md:w-[400px] ${
          isRTL ? '-left-20' : '-right-20'
        }`}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-1 items-center px-4 py-14 md:py-20">
        <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="mb-4 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#F7DD6E]">
            <span className="inline-block h-px w-8 bg-[#F7DD6E]/70" aria-hidden />
            Best of Bedz · Owners
          </p>
          <h1 className="mb-5 text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-6xl">
            {t('headlineArt')}
            <br />
            <strong className="font-bold text-[#F7DD6E]">{t('headlineScience')}</strong>
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/85 md:text-xl">
            {t('support')}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href={`/${locale}/list-property`}
              className="rounded-full bg-[#F7DD6E] px-8 py-3.5 text-center text-base font-bold text-[#122F5A] shadow-xl transition-colors hover:bg-[#EBCB4E] md:py-4 md:text-lg"
            >
              {t('ctaPrimary')}
            </Link>
            <a
              href="https://cal.com/hassan-ahmed-27rg6z/property-owner-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/60 bg-white/10 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20 md:py-4 md:text-lg"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      {/* Proof strip — fused into the hero base */}
      <div className="relative z-10 border-t border-white/15 bg-[#122F5A]/45 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-4 md:grid-cols-4 md:py-5">
            {PROOF.map((p) => (
              <div key={p.key} className="flex items-center justify-center gap-2.5">
                <BrandIcon name={p.icon} className="h-5 w-5 shrink-0 text-[#F7DD6E]" />
                <span className="text-[13px] font-semibold text-white/90 md:text-sm">
                  {tb(p.key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
