'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import BrandIcon from '../BrandIcon';

const POINTS = [
  {key: 'point1', icon: 'mapPin'},
  {key: 'point2', icon: 'lineChart'},
  {key: 'point3', icon: 'wallet'},
] as const;

export default function ResearchSection() {
  const t = useTranslations('researchSection');
  const ts = useTranslations('services');
  const locale = useLocale();

  return (
    <section id="research" className="scroll-mt-24 bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD]">
              BOB Research
            </p>
            <h2 className="mb-3 text-3xl font-bold text-[#1F2D26] md:text-4xl">
              {t('title')}
            </h2>
            <p className="mb-4 text-lg italic text-[#2861AD]">{ts('research.slogan')}</p>
            <p className="mb-8 max-w-xl leading-relaxed text-gray-600">{t('description')}</p>
            <Link
              href={`/${locale}/list-property`}
              className="inline-block rounded-full bg-[#2861AD] px-8 py-3.5 font-bold text-white shadow-md transition-colors hover:bg-[#1D4A85]"
            >
              {t('cta')}
            </Link>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            {POINTS.map((p, idx) => (
              <div
                key={p.key}
                className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#EBECE2] bg-[#EEF0DC]/40 p-4 md:p-5"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-4xl font-bold leading-none text-[#2861AD]/[0.08]"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2861AD] text-white">
                  <BrandIcon name={p.icon} className="h-5.5 w-5.5" />
                </span>
                <p className="font-semibold text-[#1F2D26]">{t(p.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
