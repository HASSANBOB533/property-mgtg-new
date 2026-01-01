'use client';

import {useTranslations} from 'next-intl';
import OwnerDashboardCarousel from './OwnerDashboardCarousel';

export default function OwnerPortalSection() {
  const t = useTranslations('ownerPortal');

  const features = Array.from({length: 6}, (_, i) => t(`features.${i}`));

  return (
    <section className="py-10 md:py-12 bg-gradient-to-br from-dark-text to-blue-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl mb-6 opacity-90">{t('subtitle')}</p>

          {/* Owner Dashboard Carousel */}
          <div className="mb-6">
            <OwnerDashboardCarousel />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-primary text-xl">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="https://bestofbedz.guestyowners.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-dark-text px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
