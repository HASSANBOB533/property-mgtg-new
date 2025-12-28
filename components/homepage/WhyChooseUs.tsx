'use client';

import {useTranslations} from 'next-intl';

export default function WhyChooseUs() {
  const t = useTranslations('whyChoose');

  const reasons = [
    {key: 'maximize', icon: '📈', color: 'bg-gradient-to-br from-teal-400 to-teal-500'},
    {key: 'zeroStress', icon: '😌', color: 'bg-gradient-to-br from-blue-400 to-blue-500'},
    {key: 'technology', icon: '💻', color: 'bg-gradient-to-br from-amber-400 to-amber-500'},
    {key: 'superhost', icon: '⭐', color: 'bg-gradient-to-br from-rose-400 to-rose-500'},
    {key: 'datadriven', icon: '📊', color: 'bg-gradient-to-br from-emerald-400 to-emerald-500'},
    {key: 'sustainable', icon: '🌱', color: 'bg-gradient-to-br from-cyan-400 to-cyan-500'},
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
                <div className={`w-20 h-20 ${reason.color} rounded-full flex items-center justify-center text-4xl shadow-lg`}>
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
