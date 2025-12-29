'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function PricingPackages() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  const packages = [
    {
      key: 'marketing',
      featured: false,
    },
    {
      key: 'performance',
      featured: true,
    },
    {
      key: 'allInclusive',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#2F63AD] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const features = Array.from({length: 5}, (_, i) =>
              t(`${pkg.key}.features.${i}`)
            );

            return (
              <div
                key={pkg.key}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  pkg.featured ? 'ring-2 ring-[#2F63AD] scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="bg-[#2F63AD] text-white text-center py-2 px-4 text-sm font-semibold">
                    {t('performance.popular')}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#2F63AD] mb-3">
                    {t(`${pkg.key}.title`)}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#2F63AD]">
                      {t(`${pkg.key}.percentage`)}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-6 min-h-[240px]">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[#2F63AD] flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${locale}/list-property`}
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      pkg.featured
                        ? 'bg-[#2F63AD] text-white hover:bg-[#2F63AD]/90 shadow-md'
                        : 'bg-white text-[#2F63AD] border-2 border-[#2F63AD] hover:bg-[#2F63AD] hover:text-white'
                    }`}
                  >
                    Get Started
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
