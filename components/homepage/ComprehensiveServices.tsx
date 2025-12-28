'use client';

import {useTranslations} from 'next-intl';

export default function ComprehensiveServices() {
  const t = useTranslations('comprehensiveServices');

  const services = [
    {key: 'design', icon: '🎨', color: 'from-teal-400 to-teal-500'},
    {key: 'listing', icon: '📸', color: 'from-blue-400 to-blue-500'},
    {key: 'revenue', icon: '💰', color: 'from-yellow-400 to-yellow-500'},
    {key: 'guest', icon: '👥', color: 'from-rose-400 to-rose-500'},
    {key: 'property', icon: '🔧', color: 'from-sky-400 to-sky-500'},
    {key: 'financial', icon: '📊', color: 'from-emerald-400 to-emerald-500'},
    {key: 'legal', icon: '⚖️', color: 'from-slate-500 to-slate-600'},
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl shadow-lg`}>
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
