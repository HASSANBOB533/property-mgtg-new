'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

/**
 * Best of Bedz Owners — the five locked owner services.
 * Names are brand-locked and never translated: BOB Manage, BOB Promote,
 * BOB Research, BOB Designs, BOB Home Care. Slogans verbatim from
 * Brand-Identity (2026-06-27).
 */
const OWNER_SERVICES = [
  {key: 'manage', name: 'BOB Manage', slogan: 'Hands-off management, hands-on returns.'},
  {key: 'promote', name: 'BOB Promote', slogan: 'We fill your calendar.'},
  {key: 'research', name: 'BOB Research', slogan: 'The numbers behind every winning property.'},
  {key: 'designs', name: 'BOB Designs', slogan: 'Designed to be booked.'},
  {key: 'homeCare', name: 'BOB Home Care', slogan: 'Where quality meets hospitality.'},
] as const;

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  /** BOB Designs opens the design page; BOB Home Care its own site. */
  const hrefFor = (key: string) => {
    if (key === 'designs') return `/${locale}/design`;
    if (key === 'homeCare') return 'https://bobhomecare.com';
    return `/${locale}/list-property`;
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD] mb-2">
          Best of Bedz Owners
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2D26] mb-3">
          {t('title')}
        </h2>
        <p className="text-center text-lg text-[#2861AD] italic mb-10 max-w-2xl mx-auto">
          {t('umbrella')}
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
          {OWNER_SERVICES.map((s) => {
            const href = hrefFor(s.key);
            const external = href.startsWith('http');
            const card = (
              <div className="group flex h-full flex-col rounded-2xl border border-[#EBECE2] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2861AD]/30 hover:shadow-xl">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#2861AD] text-lg font-bold text-white">
                  {s.name.replace('BOB ', '').charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-[#1F2D26]">{s.name}</h3>
                <p className="mt-1 text-sm italic text-[#2861AD]">{s.slogan}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {t(`${s.key}.description`)}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#2861AD] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {t('learnMore')} →
                </span>
              </div>
            );
            return external ? (
              <a key={s.key} href={href} target="_blank" rel="noopener noreferrer" className="h-full">
                {card}
              </a>
            ) : (
              <Link key={s.key} href={href} className="h-full">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
