'use client';

import {useTranslations} from 'next-intl';
import BrandIcon from '../BrandIcon';

/** BOB Manage — everything included in full management. */
const INCLUSIONS = [
  {key: 'design', icon: 'palette'},
  {key: 'listing', icon: 'camera'},
  {key: 'revenue', icon: 'trendingUp'},
  {key: 'guest', icon: 'users'},
  {key: 'property', icon: 'wrench'},
  {key: 'financial', icon: 'fileText'},
  {key: 'legal', icon: 'scale'},
] as const;

export default function ManageSection() {
  const t = useTranslations('manageSection');
  const ts = useTranslations('services');

  return (
    <section id="manage" className="scroll-mt-24 bg-[#EEF0DC]/50 py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Intro — sticky beside the list on desktop */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD]">
              BOB Manage
            </p>
            <h2 className="mb-3 text-3xl font-bold text-[#1F2D26] md:text-4xl">
              {t('title')}
            </h2>
            <p className="mb-3 text-lg italic text-[#2861AD]">{ts('manage.slogan')}</p>
            <p className="max-w-md text-gray-600">{t('intro')}</p>
            <a
              href="#pricing"
              className="mt-6 hidden items-center gap-2 text-sm font-bold text-[#2861AD] transition-colors hover:text-[#1D4A85] lg:inline-flex"
            >
              {t('seePackages')} ↓
            </a>
          </div>

          {/* Desktop: full rows with hairline dividers */}
          <div className="hidden divide-y divide-[#1F2D26]/10 md:block">
            {INCLUSIONS.map((item) => (
              <div key={item.key} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#2861AD] shadow-sm ring-1 ring-[#EBECE2]">
                  <BrandIcon name={item.icon} className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1F2D26]">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {t(`${item.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: compact tap-to-expand rows */}
          <div className="divide-y divide-[#1F2D26]/10 md:hidden">
            {INCLUSIONS.map((item) => (
              <details key={item.key} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-3 py-3.5 [&::-webkit-details-marker]:hidden">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-[#2861AD] shadow-sm ring-1 ring-[#EBECE2]">
                    <BrandIcon name={item.icon} className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="flex-1 text-[15px] font-bold text-[#1F2D26]">
                    {t(`${item.key}.title`)}
                  </h3>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-[#2861AD] transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-4 ps-12 text-sm leading-relaxed text-gray-600">
                  {t(`${item.key}.description`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
