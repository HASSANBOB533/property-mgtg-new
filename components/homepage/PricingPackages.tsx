'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function PricingPackages() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  const packages = [
    {
      key: 'marketing',
      color: 'border-[#2F63AD]',
      bgColor: 'bg-white',
      buttonColor: 'bg-[#2F63AD] text-white hover:bg-[#2F63AD]/90',
    },
    {
      key: 'performance',
      color: 'border-[#2F63AD]',
      bgColor: 'bg-[#2F63AD]/5',
      popular: true,
      buttonColor: 'bg-[#2F63AD] text-white hover:bg-[#2F63AD]/90',
    },
    {
      key: 'allInclusive',
      color: 'border-[#F9DE6A]',
      bgColor: 'bg-white',
      buttonColor: 'bg-[#2F63AD] text-white hover:bg-[#2F63AD]/90',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F63AD] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[#2F63AD]/70">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const features = Array.from({length: 5}, (_, i) =>
              t(`${pkg.key}.features.${i}`)
            );

            return (
              <div
                key={pkg.key}
                className={`relative border-2 ${pkg.color} ${pkg.bgColor} rounded-2xl p-8 hover:shadow-lg transition-shadow`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2F63AD] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
                    {t('performance.popular')}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#2F63AD] mb-2">
                  {t(`${pkg.key}.title`)}
                </h3>
                <div className="text-3xl font-bold text-[#2F63AD] mb-6">
                  {t(`${pkg.key}.percentage`)}
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="text-[#2F63AD] mt-0.5 font-bold text-lg">✓</span>
                      <span className="text-[#2F63AD]/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/list-property`}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${pkg.buttonColor}`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
