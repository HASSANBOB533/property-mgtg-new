'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import BrandIcon from '../BrandIcon';

const ROWS = [
  {key: 'technology', icon: 'cpu'},
  {key: 'pricing', icon: 'trendingUp'},
  {key: 'support', icon: 'headphones'},
  {key: 'transparency', icon: 'fileText'},
  {key: 'multiOTA', icon: 'megaphone'},
  {key: 'superhost', icon: 'star'},
] as const;

export default function ComparisonTable() {
  const t = useTranslations('comparison');

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center text-3xl font-bold text-[#1F2D26] md:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600 md:mb-12">
          {t('subtitle')}
        </p>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-lg ring-1 ring-[#EBECE2]">
          {/* Header — hidden on mobile (labels repeat inside each cell there) */}
          <div className="hidden md:grid md:grid-cols-[1fr_1.5fr_1.5fr]">
            <div className="bg-[#EEF0DC]/60 px-6 py-4" />
            <div className="flex items-center gap-2.5 bg-[#2861AD] px-6 py-4">
              <Image
                src="/logo/bob-logo-6-white.svg"
                alt=""
                width={38}
                height={21}
                className="h-6 w-auto"
              />
              <span className="font-bold text-white">{t('bob')}</span>
            </div>
            <div className="bg-[#EEF0DC]/60 px-6 py-4 font-semibold text-gray-500">
              {t('typical')}
            </div>
          </div>

          {ROWS.map((row) => (
            <div
              key={row.key}
              className="grid border-t border-[#EBECE2] md:grid-cols-[1fr_1.5fr_1.5fr]"
            >
              {/* Feature */}
              <div className="flex items-center gap-3 px-5 pt-4 md:px-6 md:py-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#2861AD]/[0.07] text-[#2861AD]">
                  <BrandIcon name={row.icon} className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-bold text-[#1F2D26]">{t(`rows.${row.key}.title`)}</h3>
              </div>

              {/* Best of Bedz */}
              <div className="flex items-start gap-3 bg-[#2861AD]/[0.04] px-5 py-3 md:px-6 md:py-5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#F7DD6E]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#122F5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2861AD] md:hidden">
                    {t('bob')}
                  </p>
                  <p className="text-sm leading-relaxed text-[#1F2D26]">
                    {t(`rows.${row.key}.bob`)}
                  </p>
                </div>
              </div>

              {/* Typical agency */}
              <div className="flex items-start gap-3 px-5 py-3 pb-4 md:px-6 md:py-5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gray-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" className="h-3 w-3">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                <div>
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 md:hidden">
                    {t('typical')}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {t(`rows.${row.key}.typical`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
