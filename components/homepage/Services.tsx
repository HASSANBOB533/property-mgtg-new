'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import BrandIcon from '../BrandIcon';

/**
 * Best of Bedz Owners — the five locked owner services.
 * Names are brand-locked and never translated: BOB Manage, BOB Promote,
 * BOB Research, BOB Designs, BOB Home Care.
 */
const OWNER_SERVICES = [
  {key: 'manage', name: 'BOB Manage', icon: 'key', href: '#manage'},
  {key: 'promote', name: 'BOB Promote', icon: 'megaphone', href: '#promote'},
  {key: 'research', name: 'BOB Research', icon: 'chart', href: '#research'},
  {key: 'designs', name: 'BOB Designs', icon: 'armchair', href: '/design'},
  {key: 'homeCare', name: 'BOB Home Care', icon: 'sparkles', href: 'https://bobhomecare.com', external: true},
] as const;

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section id="services" className="scroll-mt-24 bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD]">
          Best of Bedz Owners
        </p>
        <h2 className="mb-3 text-center text-3xl font-bold text-[#1F2D26] md:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg italic text-[#2861AD] md:mb-12">
          {t('umbrella')}
        </p>

        {/* Mobile: swipeable snap carousel · Desktop: 5-up grid */}
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-auto lg:grid lg:max-w-6xl lg:snap-none lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {OWNER_SERVICES.map((s, idx) => {
            const href = s.href.startsWith('#')
              ? `/${locale}${s.href}`
              : s.href.startsWith('/')
                ? `/${locale}${s.href}`
                : s.href;
            const external = 'external' in s && s.external;
            const card = (
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#EBECE2] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2861AD] hover:bg-[#2861AD] hover:shadow-xl">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-2 end-3 text-6xl font-bold leading-none text-[#2861AD]/[0.07] transition-colors duration-300 group-hover:text-white/10"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#2861AD] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#2861AD]">
                  <BrandIcon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2D26] transition-colors duration-300 group-hover:text-white">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm italic text-[#2861AD] transition-colors duration-300 group-hover:text-[#F7DD6E]">
                  {t(`${s.key}.slogan`)}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/85">
                  {t(`${s.key}.description`)}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#2861AD] opacity-0 transition-all duration-200 group-hover:text-[#F7DD6E] group-hover:opacity-100">
                  {t('learnMore')} →
                </span>
              </div>
            );
            const itemClass = 'h-auto min-w-[72%] shrink-0 snap-center sm:min-w-[46%] lg:min-w-0 lg:shrink';
            return external ? (
              <a key={s.key} href={href} target="_blank" rel="noopener noreferrer" className={itemClass}>
                {card}
              </a>
            ) : (
              <Link key={s.key} href={href} className={itemClass}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
