'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

const FEATURES = [
  {id: 'dashboard', image: '/owner-dashboard/dashboard-overview.png'},
  {id: 'calendar', image: '/owner-dashboard/calendar-view.png'},
  {id: 'reservation', image: '/owner-dashboard/create-reservation.png'},
  {id: 'reports', image: '/owner-dashboard/reservation-reports.png'},
  {id: 'help', image: '/owner-dashboard/help-center.png'},
] as const;

export default function OwnerPortalSection() {
  const t = useTranslations('ownerPortal');
  const tn = useTranslations('nav');
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gradient-to-br from-[#122F5A] to-[#2861AD] py-10 text-white md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Copy + feature selector */}
          <div className="min-w-0">
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#F7DD6E]">
              {tn('ownerPortal')}
            </p>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t('title')}</h2>
            <p className="mb-6 text-lg text-white/85 md:mb-8">{t('subtitle')}</p>

            {/* Mobile: horizontal chip tabs */}
            <div className="no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 lg:hidden">
              {FEATURES.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    i === active
                      ? 'bg-white text-[#2861AD]'
                      : 'bg-white/10 text-white/80 hover:bg-white/15'
                  }`}
                >
                  {t(`carousel.${f.id}.title`)}
                </button>
              ))}
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/80 lg:hidden">
              {t(`carousel.${FEATURES[active].id}.description`)}
            </p>

            {/* Desktop: vertical feature list */}
            <div className="hidden flex-col gap-1.5 lg:flex">
              {FEATURES.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActive(i)}
                  className={`rounded-xl px-4 py-3 text-start transition-all duration-200 ${
                    i === active
                      ? 'bg-white/10 ring-1 ring-white/25'
                      : 'hover:bg-white/5'
                  }`}
                  aria-pressed={i === active}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`text-sm font-bold tabular-nums ${
                        i === active ? 'text-[#F7DD6E]' : 'text-white/40'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-bold ${i === active ? 'text-white' : 'text-white/70'}`}>
                      {t(`carousel.${f.id}.title`)}
                    </span>
                  </span>
                  {i === active && (
                    <span className="mt-1 block ps-8 text-sm leading-relaxed text-white/75">
                      {t(`carousel.${f.id}.description`)}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <a
              href="https://bestofbedz.guestyowners.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-[#2861AD] shadow-lg transition-colors hover:bg-[#EEF0DC]"
            >
              {t('cta')}
            </a>
          </div>

          {/* Phone preview */}
          <div className="relative mx-auto">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7DD6E]/10 blur-3xl"
            />
            <div className="relative h-[420px] w-[210px] md:h-[520px] md:w-[260px]">
              <Image
                key={FEATURES[active].image}
                src={FEATURES[active].image}
                alt={t(`carousel.${FEATURES[active].id}.title`)}
                fill
                className="object-contain drop-shadow-2xl"
                priority={active === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
