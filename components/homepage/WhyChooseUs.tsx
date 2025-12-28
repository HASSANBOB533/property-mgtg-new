'use client';

import {useTranslations} from 'next-intl';

export default function WhyChooseUs() {
  const t = useTranslations('whyChoose');

  const reasons = [
    {key: 'maximize', icon: '📈', color: 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200'},
    {key: 'zeroStress', icon: '😌', color: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200'},
    {key: 'technology', icon: '💻', color: 'bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200'},
    {key: 'superhost', icon: '⭐', color: 'bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200'},
    {key: 'datadriven', icon: '📊', color: 'bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200'},
    {key: 'sustainable', icon: '🌱', color: 'bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200'},
  ];

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.key}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center text-3xl`}>
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">
                {t(`${reason.key}.title`)}
              </h3>
              <p className="text-dark-text/70">
                {t(`${reason.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
