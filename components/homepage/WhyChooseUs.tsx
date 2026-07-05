'use client';

import {useTranslations} from 'next-intl';
import BrandIcon from '../BrandIcon';

const REASONS = [
  {key: 'maximize', icon: 'trendingUp'},
  {key: 'zeroStress', icon: 'shield'},
  {key: 'technology', icon: 'cpu'},
  {key: 'superhost', icon: 'star'},
  {key: 'datadriven', icon: 'lineChart'},
  {key: 'sustainable', icon: 'leaf'},
] as const;

export default function WhyChooseUs() {
  const t = useTranslations('whyChoose');

  return (
    <section className="bg-[#EEF0DC]/50 py-14 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1F2D26] md:text-4xl">
          {t('title')}
        </h2>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.key}
              className="rounded-2xl border border-[#EBECE2] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#2861AD]/[0.07] text-[#2861AD]">
                <BrandIcon name={reason.icon} className="h-6 w-6" />
              </div>
              <h3 className="mb-1.5 text-lg font-bold text-[#1F2D26]">
                {t(`${reason.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t(`${reason.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
