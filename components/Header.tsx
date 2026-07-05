'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * Service classification nav — the five locked Best of Bedz Owners
 * services. Names are brand-locked Latin and never translated.
 */
const SERVICE_NAV = [
  {label: 'Manage', href: '#manage'},
  {label: 'Promote', href: '#promote'},
  {label: 'Research', href: '#research'},
  {label: 'Design', href: '/design'},
  {label: 'Home Care', href: 'https://bobhomecare.com', external: true},
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resolve = (href: string) =>
    href.startsWith('#') ? `/${locale}${href}` : href.startsWith('/') ? `/${locale}${href}` : href;

  return (
    <header className="sticky top-0 z-50 bg-[#2861AD] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo + section marker */}
          <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0" aria-label="Best of Bedz Home">
            <Image
              src="/logo/bob-logo-6-white.svg"
              alt="Best of Bedz"
              width={76}
              height={42}
              className="h-9 w-auto md:h-10 lg:h-11"
              priority
            />
            <span className="hidden sm:block border-s border-white/25 ps-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F7DD6E]">
              Owners
            </span>
          </Link>

          {/* Desktop navigation — the five owner services */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Owner services">
            {SERVICE_NAV.map((item) =>
              'external' in item && item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 start-0 h-0.5 w-0 bg-[#F7DD6E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={resolve(item.href)}
                  className="group relative whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 start-0 h-0.5 w-0 bg-[#F7DD6E] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </nav>

          {/* Right side: portal, CTA, language */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://bestofbedz.guestyowners.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:block whitespace-nowrap text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              {t('ownerPortal')}
            </a>
            <Link
              href={`/${locale}/list-property`}
              className="hidden lg:block whitespace-nowrap rounded-full bg-white px-5 py-2 text-sm font-bold text-[#2861AD] shadow-sm transition-colors hover:bg-[#EEF0DC]"
            >
              {t('listProperty')}
            </Link>
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#F7DD6E] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-white/20 bg-[#2861AD] py-4" aria-label="Owner services">
            <p className="px-4 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F7DD6E]">
              Best of Bedz Owners
            </p>
            {SERVICE_NAV.map((item) =>
              'external' in item && item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 my-1 block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={resolve(item.href)}
                  className="mx-2 my-1 block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mx-2 mt-3 flex flex-col gap-2 border-t border-white/15 px-2 pt-4">
              <Link
                href={`/${locale}/list-property`}
                className="block rounded-full bg-white px-5 py-2.5 text-center text-sm font-bold text-[#2861AD]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('listProperty')}
              </Link>
              <a
                href="https://bestofbedz.guestyowners.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-white/30 px-5 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('ownerPortal')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
