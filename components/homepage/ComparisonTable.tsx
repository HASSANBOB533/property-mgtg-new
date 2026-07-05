'use client';

import {useTranslations} from 'next-intl';

export default function ComparisonTable() {
  const t = useTranslations('comparison');

  const features = [
    'technology',
    'pricing',
    'support',
    'transparency',
    'multiOTA',
    'superhost',
  ];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#1F2D26] md:text-4xl">
          {t('title')}
        </h2>

        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-[#EBECE2]">
            <thead>
              <tr className="bg-[#2861AD]">
                <th className="px-5 py-3.5 text-start font-semibold text-white">
                  {t('feature')}
                </th>
                <th className="px-5 py-3.5 text-center font-semibold text-white">
                  {t('bob')}
                </th>
                <th className="px-5 py-3.5 text-center font-semibold text-white/80">
                  {t('typical')}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={feature}
                  className={`border-b border-[#EBECE2] transition-colors hover:bg-[#EEF0DC]/40 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#EEF0DC]/25'
                  }`}
                >
                  <td className="px-5 py-3 font-medium text-[#1F2D26]">
                    {t(`features.${feature}`)}
                  </td>
                  <td className="px-5 py-3 text-center">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F7DD6E] font-bold text-[#122F5A]">
                      ✓
                    </span>
                  </td>
                  <td className="px-5 py-3 text-center">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 font-bold text-gray-400">
                      ✗
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
