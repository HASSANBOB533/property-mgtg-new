'use client';

import {useTranslations} from 'next-intl';
import BrandIcon from '../BrandIcon';

const STEPS = [
  {key: 'step1', icon: 'mapPin'},
  {key: 'step2', icon: 'palette'},
  {key: 'step3', icon: 'armchair'},
  {key: 'step4', icon: 'wrench'},
  {key: 'step5', icon: 'camera'},
  {key: 'step6', icon: 'megaphone'},
] as const;

export default function DesignProcess() {
  const t = useTranslations('design.process');

  return (
    <section className="bg-[#EEF0DC]/50 py-14 md:py-20">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD]">
          BOB Designs
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1F2D26] md:text-4xl">
          {t('title')}
        </h2>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div
              key={step.key}
              className="flex h-full flex-col rounded-2xl border border-[#EBECE2] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2861AD]/30 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#2861AD] text-white">
                  <BrandIcon name={step.icon} className="h-6 w-6" />
                </span>
                <span className="text-4xl font-bold text-[#2861AD]/10">{idx + 1}</span>
              </div>
              <h3 className="mb-1.5 text-lg font-bold text-[#1F2D26]">
                {t(`${step.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t(`${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
