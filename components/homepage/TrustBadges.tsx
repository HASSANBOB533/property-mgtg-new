'use client';

import {useTranslations} from 'next-intl';
import BrandIcon from '../BrandIcon';

export default function TrustBadges() {
  const t = useTranslations('trustBadges');

  const badges = [
    {label: t('superhost'), icon: 'award'},
    {label: t('rating'), icon: 'star'},
    {label: t('properties'), icon: 'home'},
    {label: t('support'), icon: 'headphones'},
  ];

  return (
    <section className="border-b border-[#EBECE2] bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center justify-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#2861AD]/[0.07] text-[#2861AD]">
                <BrandIcon name={badge.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-[#1F2D26] md:text-base">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
