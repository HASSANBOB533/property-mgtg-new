'use client';

import {useRef, useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import CarouselDots from '../CarouselDots';

const PACKAGES = [
  {key: 'marketing', featured: false},
  {key: 'performance', featured: true},
  {key: 'allInclusive', featured: false},
] as const;

export default function PricingPackages() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const onTrackScroll = () => {
    const el = trackRef.current;
    if (!el?.children.length) return;
    const step = (el.children[0] as HTMLElement).offsetWidth + 16;
    setActiveCard(Math.min(PACKAGES.length - 1, Math.round(Math.abs(el.scrollLeft) / step)));
  };

  const scrollToCard = (i: number) => {
    (trackRef.current?.children[i] as HTMLElement | undefined)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-12">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD]">
            BOB Manage · Packages
          </p>
          <h2 className="mb-3 text-3xl font-bold text-[#1F2D26] md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </div>

        {/* Mobile: swipeable snap carousel · Desktop: one rate-card panel, three columns */}
        <div
          ref={trackRef}
          onScroll={onTrackScroll}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-auto md:grid md:max-w-6xl md:snap-none md:grid-cols-3 md:gap-0 md:overflow-visible md:rounded-3xl md:px-0 md:pb-0 md:shadow-lg md:ring-1 md:ring-[#EBECE2]"
        >
          {PACKAGES.map((pkg) => {
            const features = Array.from({length: 5}, (_, i) =>
              t(`${pkg.key}.features.${i}`)
            );
            const dark = pkg.featured;

            return (
              <div
                key={pkg.key}
                className={`relative flex min-w-[78%] shrink-0 snap-center flex-col rounded-2xl p-7 sm:min-w-[55%] md:min-w-0 md:shrink md:rounded-none md:p-9 ${
                  dark
                    ? 'bg-gradient-to-b from-[#2861AD] to-[#1D4A85] text-white shadow-lg ring-1 ring-[#2861AD] md:rounded-2xl md:shadow-2xl md:ring-0 md:[transform:scale(1.03)]'
                    : 'bg-white ring-1 ring-[#EBECE2] md:ring-0'
                }`}
              >
                {/* Column header */}
                <div className="mb-1 flex items-center justify-between gap-2">
                  <p
                    className={`text-[13px] font-semibold uppercase tracking-[0.2em] ${
                      dark ? 'text-[#F7DD6E]' : 'text-[#2861AD]'
                    }`}
                  >
                    {t(`${pkg.key}.title`)}
                  </p>
                  {dark && (
                    <span className="rounded-full bg-[#F7DD6E] px-3 py-1 text-xs font-bold text-[#122F5A]">
                      {t('performance.popular')}
                    </span>
                  )}
                </div>

                {/* Rate */}
                <div className="mb-6 mt-3">
                  <span
                    dir="ltr"
                    className={`block w-fit text-5xl font-bold leading-none tabular-nums ${
                      dark ? 'text-white' : 'text-[#1F2D26]'
                    }`}
                  >
                    {t(`${pkg.key}.rate`)}
                  </span>
                  <span className={`mt-2 block text-sm font-medium ${dark ? 'text-white/70' : 'text-gray-500'}`}>
                    {t(`${pkg.key}.basis`)}
                  </span>
                </div>

                <div className={`mb-6 h-px w-full ${dark ? 'bg-white/20' : 'bg-[#EBECE2]'}`} />

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-3.5">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? 'text-[#F7DD6E]' : 'text-[#00A569]'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm leading-relaxed ${dark ? 'text-white/90' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/list-property`}
                  className={`block w-full rounded-full px-6 py-3 text-center font-bold transition-colors ${
                    dark
                      ? 'bg-[#F7DD6E] text-[#122F5A] shadow-md hover:bg-[#EBCB4E]'
                      : 'border-2 border-[#2861AD] bg-white text-[#2861AD] hover:bg-[#2861AD] hover:text-white'
                  }`}
                >
                  {t('getStarted')}
                </Link>
              </div>
            );
          })}
        </div>

        <CarouselDots
          count={PACKAGES.length}
          active={activeCard}
          onSelect={scrollToCard}
          className="text-[#2861AD]"
        />
      </div>
    </section>
  );
}
