'use client';

import {useTranslations} from 'next-intl';
import BrandIcon from '../BrandIcon';

export default function DesignPricing() {
  const t = useTranslations('design.pricing');

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#1F2D26] md:mb-10 md:text-4xl">
          {t('title')}
        </h2>

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#EBECE2] bg-[#EEF0DC]/40 p-7 transition-shadow duration-300 hover:shadow-lg">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#2861AD] text-white">
                <BrandIcon name="palette" className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-lg font-bold text-[#1F2D26]">{t('designFee')}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{t('designFeeDesc')}</p>
            </div>

            <div className="rounded-2xl border border-[#EBECE2] bg-[#EEF0DC]/40 p-7 transition-shadow duration-300 hover:shadow-lg">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#2861AD] text-white">
                <BrandIcon name="armchair" className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-lg font-bold text-[#1F2D26]">{t('markup')}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{t('markupDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
