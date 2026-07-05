'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';

/** Official wordmark SVGs, optically balanced per logo (x-heights differ). */
const PARTNERS = [
  {name: 'Airbnb', logo: '/partners/airbnb.svg', width: 320, height: 100, maxH: 30},
  {name: 'Booking.com', logo: '/partners/booking.svg', width: 119, height: 20, maxH: 22},
  {name: 'Vrbo', logo: '/partners/vrbo.svg', width: 125, height: 40, maxH: 28},
  {name: 'Expedia', logo: '/partners/expedia.svg', width: 265, height: 53, maxH: 26},
  {name: 'Agoda', logo: '/partners/agoda.svg', width: 74, height: 30, maxH: 30},
  {name: 'Trip.com', logo: '/partners/tripcom.svg', width: 135, height: 33, maxH: 26},
];

export default function PromoteSection() {
  const t = useTranslations('promoteSection');
  const ts = useTranslations('services');

  return (
    <section id="promote" className="scroll-mt-24 bg-gradient-to-br from-[#2861AD] to-[#1D4A85] py-10 text-white md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#F7DD6E]">
            BOB Promote
          </p>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="mb-2 text-lg italic text-[#F7DD6E]">{ts('promote.slogan')}</p>
          <p className="mb-8 max-w-2xl leading-relaxed text-white/85 md:mb-10">{t('description')}</p>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t('partnersLabel')}
          </p>
        </div>
      </div>

      {/* Full-bleed logo marquee, edge-faded */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="marquee-track">
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="me-4 flex h-14 w-40 shrink-0 items-center justify-center rounded-xl bg-white px-5 shadow-sm md:h-16 md:w-48"
              aria-hidden={i >= PARTNERS.length}
            >
              <Image
                src={partner.logo}
                alt={i < PARTNERS.length ? `${partner.name} logo` : ''}
                width={partner.width}
                height={partner.height}
                className="object-contain"
                style={{width: 'auto', maxWidth: '100%', maxHeight: `${partner.maxH}px`}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
