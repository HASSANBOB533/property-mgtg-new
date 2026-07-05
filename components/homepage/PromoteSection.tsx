'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';

const PARTNERS = [
  {name: 'Airbnb', logo: '/partner-airbnb.png', width: 140, height: 40},
  {name: 'Booking.com', logo: '/partner-booking.png', width: 140, height: 40},
  {name: 'Vrbo', logo: '/partner-vrbo.png', width: 140, height: 40},
  {name: 'Expedia', logo: '/partner-expedia.png', width: 180, height: 50},
  {name: 'Agoda', logo: '/partner-agoda.jpg', width: 140, height: 40},
  {name: 'Trip.com', logo: '/partner-trip.png', width: 140, height: 40},
];

export default function PromoteSection() {
  const t = useTranslations('promoteSection');
  const ts = useTranslations('services');

  return (
    <section id="promote" className="scroll-mt-24 bg-gradient-to-br from-[#2861AD] to-[#1D4A85] py-14 text-white md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#F7DD6E]">
            BOB Promote
          </p>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="mb-2 text-lg italic text-[#F7DD6E]">{ts('promote.slogan')}</p>
          <p className="mb-10 max-w-2xl leading-relaxed text-white/85">{t('description')}</p>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t('partnersLabel')}
          </p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex h-16 items-center rounded-xl bg-white px-6 shadow-sm transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                  style={{width: 'auto', maxHeight: '34px'}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
