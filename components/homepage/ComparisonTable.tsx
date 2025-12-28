'use client';

import {useTranslations} from 'next-intl';

export default function ComparisonTable() {
  const t = useTranslations('comparison');

  const features = [
    'technology',
    'pricing',
    'support',
    'transparency',
    'multiOTA',
    'superhost',
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-dark-text/60 mb-12 max-w-2xl mx-auto">
          See how we compare to traditional property management agencies
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b-2 border-blue-200">
              <div className="text-left">
                <h3 className="text-lg font-bold text-dark-text">Feature</h3>
              </div>
              <div className="text-center">
                <div className="inline-block bg-blue-primary text-white px-6 py-2 rounded-full shadow-md">
                  <h3 className="text-lg font-bold">{t('bob')}</h3>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-dark-text/50">{t('typical')}</h3>
              </div>
            </div>

            {/* Body */}
            <div className="divide-y divide-gray-100">
              {features.map((feature, idx) => (
                <div 
                  key={feature} 
                  className={`grid grid-cols-3 gap-4 p-6 transition-all duration-200 hover:bg-blue-50/30 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-base font-medium text-dark-text">
                      {t(`features.${feature}`)}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md">
                      <span className="text-2xl text-white font-bold">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center shadow-md">
                      <span className="text-2xl text-white font-bold">✗</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-blue-primary to-indigo-600 p-6 text-center">
              <p className="text-white text-lg font-semibold">
                Experience the Best of Bedz difference today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
