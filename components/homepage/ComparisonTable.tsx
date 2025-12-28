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
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F63AD] mb-12">
          {t('title')}
        </h2>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#2F63AD]">
                <th className="text-left py-2 px-4 font-semibold text-white">Feature</th>
                <th className="text-center py-2 px-4 font-semibold text-white">
                  {t('bob')}
                </th>
                <th className="text-center py-2 px-4 font-semibold text-white">
                  {t('typical')}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr 
                  key={feature} 
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="py-2 px-4 text-[#2F63AD]">
                    {t(`features.${feature}`)}
                  </td>
                  <td className="text-center py-2 px-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F9DE6A] text-[#2F63AD] text-lg font-bold">
                      ✓
                    </span>
                  </td>
                  <td className="text-center py-2 px-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-lg font-bold">
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
