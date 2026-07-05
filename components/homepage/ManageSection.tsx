'use client';

import {useTranslations} from 'next-intl';
import BrandIcon from '../BrandIcon';

/** BOB Manage — everything included in full management, as icon rows (no card grid). */
const INCLUSIONS = [
  {key: 'design', icon: 'palette'},
  {key: 'listing', icon: 'camera'},
  {key: 'revenue', icon: 'trendingUp'},
  {key: 'guest', icon: 'users'},
  {key: 'property', icon: 'wrench'},
  {key: 'financial', icon: 'fileText'},
  {key: 'legal', icon: 'scale'},
] as const;

export default function ManageSection() {
  const t = useTranslations('manageSection');
  const ts = useTranslations('services');

  return (
    <section id="manage" className="scroll-mt-24 bg-[#EEF0DC]/50 py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD]">
            BOB Manage
          </p>
          <h2 className="mb-3 text-3xl font-bold text-[#1F2D26] md:text-4xl">
            {t('title')}
          </h2>
          <p className="mb-2 text-lg italic text-[#2861AD]">{ts('manage.slogan')}</p>
          <p className="mb-10 max-w-2xl text-gray-600">{t('intro')}</p>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {INCLUSIONS.map((item) => (
              <div key={item.key} className="flex items-start gap-4">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#2861AD] shadow-sm ring-1 ring-[#EBECE2]">
                  <BrandIcon name={item.icon} className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1F2D26]">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {t(`${item.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
