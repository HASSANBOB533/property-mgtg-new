'use client';

import {useTranslations} from 'next-intl';
import BrandIcon from './BrandIcon';

export default function MobileBottomBar() {
  const t = useTranslations('nav');
  const tm = useTranslations('mobileBar');

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-[#EBECE2] bg-white shadow-[0_-4px_16px_rgba(18,47,90,0.08)]">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href="https://cal.com/hassan-ahmed-27rg6z/property-owner-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#2861AD] px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#1D4A85]"
        >
          {t('getEvaluation')}
        </a>
        <a
          href="tel:+201227580022"
          className="flex items-center justify-center gap-2 rounded-full bg-[#00A569] px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#008a57]"
        >
          <BrandIcon name="phone" className="h-4 w-4" />
          {tm('callUs')}
        </a>
      </div>
    </div>
  );
}
