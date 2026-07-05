'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function PricingPackages() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  const packages = [
    {key: 'marketing', featured: false},
    {key: 'performance', featured: true},
    {key: 'allInclusive', featured: false},
  ];

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

        {/* Mobile: swipeable snap carousel · Desktop: 3-up grid */}
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-auto md:grid md:max-w-6xl md:snap-none md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {packages.map((pkg) => {
            const features = Array.from({length: 5}, (_, i) =>
              t(`${pkg.key}.features.${i}`)
            );

            return (
              <div
                key={pkg.key}
                className={`relative flex min-w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl sm:min-w-[55%] md:min-w-0 md:shrink ${
                  pkg.featured
                    ? 'border-2 border-[#2861AD] shadow-lg md:-my-3'
                    : 'border border-[#EBECE2] shadow-sm'
                }`}
              >
                {pkg.featured && (
                  <div className="bg-[#F7DD6E] px-4 py-2 text-center text-sm font-bold text-[#122F5A]">
                    {t('performance.popular')}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-3 text-2xl font-bold text-[#1F2D26]">
                    {t(`${pkg.key}.title`)}
                  </h3>

                  <div className="mb-6">
                    <span className="text-3xl font-bold tabular-nums text-[#2861AD]">
                      {t(`${pkg.key}.percentage`)}
                    </span>
                  </div>

                  <ul className="mb-8 flex-1 space-y-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#00A569]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm leading-relaxed text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${locale}/list-property`}
                    className={`block w-full rounded-full px-6 py-3 text-center font-bold transition-colors ${
                      pkg.featured
                        ? 'bg-[#2861AD] text-white shadow-md hover:bg-[#1D4A85]'
                        : 'border-2 border-[#2861AD] bg-white text-[#2861AD] hover:bg-[#2861AD] hover:text-white'
                    }`}
                  >
                    {t('getStarted')}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
