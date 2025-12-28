'use client';

import {useTranslations} from 'next-intl';

export default function ComprehensiveServices() {
  const t = useTranslations('comprehensiveServices');

  const services = [
    {key: 'design', icon: '🎨', color: 'from-blue-50 to-blue-100 border border-blue-200'},
    {key: 'listing', icon: '📸', color: 'from-indigo-50 to-indigo-100 border border-indigo-200'},
    {key: 'revenue', icon: '💰', color: 'from-amber-50 to-amber-100 border border-amber-200'},
    {key: 'guest', icon: '👥', color: 'from-rose-50 to-rose-100 border border-rose-200'},
    {key: 'property', icon: '🔧', color: 'from-cyan-50 to-cyan-100 border border-cyan-200'},
    {key: 'financial', icon: '📊', color: 'from-emerald-50 to-emerald-100 border border-emerald-200'},
    {key: 'legal', icon: '⚖️', color: 'from-slate-50 to-slate-100 border border-slate-200'},
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">
          {t('title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-dark-text mb-2">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-sm text-dark-text/70">
                {t(`${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
