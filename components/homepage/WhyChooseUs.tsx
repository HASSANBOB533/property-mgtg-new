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
    <section className="bg-[#EEF0DC]/50 py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#1F2D26] md:mb-12 md:text-4xl">
          {t('title')}
        </h2>

        {/* Editorial hairline grid — 2-up on mobile, 3-up on desktop */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#1F2D26]/10 bg-[#1F2D26]/10 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.key} className="bg-white p-4 sm:p-6 md:p-8">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#2861AD]/[0.07] text-[#2861AD] md:h-11 md:w-11">
                <BrandIcon name={reason.icon} className="h-5.5 w-5.5" />
              </div>
              <h3 className="mb-1 text-[15px] font-bold text-[#1F2D26] md:text-lg">
                {t(`${reason.key}.title`)}
              </h3>
              <p className="text-[13px] leading-snug text-gray-600 md:text-sm md:leading-relaxed">
                {t(`${reason.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
