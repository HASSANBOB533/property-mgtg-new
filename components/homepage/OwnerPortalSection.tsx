'use client';

import {useTranslations} from 'next-intl';
import OwnerDashboardCarousel from './OwnerDashboardCarousel';

export default function OwnerPortalSection() {
  const t = useTranslations('ownerPortal');

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-[#122F5A] to-[#2861AD] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl mb-6 text-white/85">{t('subtitle')}</p>

          {/* Owner Dashboard Carousel */}
          <div className="mb-6">
            <OwnerDashboardCarousel />
          </div>

          <a
            href="https://bestofbedz.guestyowners.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#2861AD] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#EEF0DC] transition-colors shadow-lg"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
