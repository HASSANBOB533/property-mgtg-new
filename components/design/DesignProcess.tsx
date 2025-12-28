'use client';

import {useTranslations} from 'next-intl';

export default function DesignProcess() {
  const t = useTranslations('design.process');

  const steps = [
    {key: 'step1', icon: '🔍', bgColor: 'bg-blue-100', iconColor: 'text-blue-600'},
    {key: 'step2', icon: '✏️', bgColor: 'bg-teal-100', iconColor: 'text-teal-600'},
    {key: 'step3', icon: '🛋️', bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600'},
    {key: 'step4', icon: '🔨', bgColor: 'bg-red-100', iconColor: 'text-red-600'},
    {key: 'step5', icon: '📸', bgColor: 'bg-blue-100', iconColor: 'text-blue-600'},
    {key: 'step6', icon: '🚀', bgColor: 'bg-teal-100', iconColor: 'text-teal-600'},
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F63AD] mb-10">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={step.key} className="relative">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${step.bgColor} rounded-full flex items-center justify-center text-2xl flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-200">{idx + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-[#2F63AD] mb-2">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-[#2F63AD]/70 text-sm leading-relaxed">
                  {t(`${step.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
