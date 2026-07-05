'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

/** Owner services column — brand-locked names, never translated. */
const SERVICE_LINKS = [
  {label: 'BOB Manage', href: '#manage'},
  {label: 'BOB Promote', href: '#promote'},
  {label: 'BOB Research', href: '#research'},
  {label: 'BOB Designs', href: '/design'},
  {label: 'BOB Home Care', href: 'https://bobhomecare.com', external: true},
] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const socialLinks = [
    {name: 'Facebook', url: 'https://www.facebook.com/BestofBedz/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'},
    {name: 'Instagram', url: 'https://www.instagram.com/bestofbedz', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'},
    {name: 'LinkedIn', url: 'https://www.linkedin.com/company/best-of-bedz/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'},
    {name: 'YouTube', url: 'https://www.youtube.com/@BestofBedz-LLC', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'},
    {name: 'TikTok', url: 'https://www.tiktok.com/@bestofbedzofficial', icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'},
    {name: 'Snapchat', url: 'https://snapchat.com/t/EWTMkLhy', icon: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-.732-.271-1.336-.735-1.232-1.218.062-.254.27-.508.673-.629.135-.045.27-.061.42-.061.12 0 .283.015.435.074.375.164.704.27 1.048.27.18 0 .313-.029.405-.074-.007-.18-.018-.344-.03-.524l-.004-.06c-.104-1.628-.229-3.654.3-4.848 1.583-3.545 4.94-3.821 5.93-3.821h.424z'},
  ];

  const resolve = (href: string) =>
    href.startsWith('#') || href.startsWith('/') ? `/${locale}${href}` : href;

  return (
    <footer className="bg-[#2861AD] text-white mt-20" role="contentinfo">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/logo/bob-logo-6-white.svg"
              alt="Best of Bedz"
              width={95}
              height={52}
              className="mb-4 h-12 w-auto"
            />
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F7DD6E]">
              Best of Bedz Owners
            </p>
            <p className="max-w-xs text-sm italic text-white/85">{t('company.tagline')}</p>
            <div className="mt-5 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-[#F7DD6E]"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Owner services */}
          <nav aria-label="Owner services">
            <h3 className="mb-3 text-base font-bold">{t('servicesTitle')}</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_LINKS.map((s) =>
                'external' in s && s.external ? (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 transition-colors hover:text-[#F7DD6E]"
                    >
                      {s.label}
                    </a>
                  </li>
                ) : (
                  <li key={s.label}>
                    <Link href={resolve(s.href)} className="text-white/80 transition-colors hover:text-[#F7DD6E]">
                      {s.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-3 text-base font-bold">{t('quickLinks.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}#services`} className="text-white/80 transition-colors hover:text-[#F7DD6E]">
                  {t('quickLinks.services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#pricing`} className="text-white/80 transition-colors hover:text-[#F7DD6E]">
                  {t('quickLinks.pricing')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/list-property`} className="text-white/80 transition-colors hover:text-[#F7DD6E]">
                  {t('quickLinks.listProperty')}
                </Link>
              </li>
              <li>
                <a
                  href="https://bestofbedz.guestyowners.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-[#F7DD6E]"
                >
                  {t('quickLinks.ownerPortal')}
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-base font-bold">{t('contactTitle')}</h3>
            <address className="space-y-2 text-sm not-italic text-white/80">
              <p>
                <a href="mailto:cs@bestofbedz.com" className="transition-colors hover:text-[#F7DD6E]">
                  {t('company.email')}
                </a>
              </p>
              <p>
                <a href="tel:+201227580022" dir="ltr" className="inline-block transition-colors hover:text-[#F7DD6E]">
                  {t('company.phone')}
                </a>
              </p>
              <p>{t('company.address')}</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-5">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-sm text-white/80 md:flex-row">
            <p>
              © {new Date().getFullYear()} Best of Bedz. {t('rights')}
            </p>
            <p className="font-semibold text-[#F7DD6E]">{t('houseLine')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
