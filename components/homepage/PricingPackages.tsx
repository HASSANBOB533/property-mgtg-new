'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function PricingPackages() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  const packages = [
    {
      key: 'marketing',
      borderColor: 'border-[#2F63AD]',
      headerBg: 'bg-[#2F63AD]',
      cardBg: 'bg-white',
      buttonColor: 'bg-[#2F63AD] text-white hover:bg-[#2F63AD]/90',
    },
    {
      key: 'performance',
      borderColor: 'border-[#2F63AD]',
      headerBg: 'bg-[#2F63AD]',
      cardBg: 'bg-gradient-to-br from-[#2F63AD]/10 to-[#2F63AD]/5',
      popular: true,
      buttonColor: 'bg-[#2F63AD] text-white hover:bg-[#2F63AD]/90',
    },
    {
      key: 'allInclusive',
      borderColor: 'border-[#F9DE6A]',
      headerBg: 'bg-[#F9DE6A]',
      cardBg: 'bg-white',
      buttonColor: 'bg-[#2F63AD] text-white hover:bg-[#2F63AD]/90',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-gray-50">
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
                className={`relative border-3 ${pkg.borderColor} ${pkg.cardBg} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F9DE6A] text-[#2F63AD] px-6 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-[#2F63AD] z-10">
                    {t('performance.popular')}
                  </div>
                )}

                {/* Header Section with Brand Color */}
                <div className={`${pkg.headerBg} px-8 py-6 text-center`}>
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.key === 'allInclusive' ? 'text-[#2F63AD]' : 'text-white'}`}>
                    {t(`${pkg.key}.title`)}
                  </h3>
                  <div className={`text-4xl font-bold ${pkg.key === 'allInclusive' ? 'text-[#2F63AD]' : 'text-white'}`}>
                    {t(`${pkg.key}.percentage`)}
                  </div>
                </div>

                {/* Features Section */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#2F63AD] mt-0.5 font-bold text-xl flex-shrink-0">✓</span>
                        <span className="text-[#2F63AD] text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${locale}/list-property`}
                    className={`block w-full text-center px-6 py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-xl ${pkg.buttonColor}`}
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
