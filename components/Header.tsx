'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {label: t('services'), href: `/${locale}#services`},
    {label: t('design'), href: `/${locale}/design`},
    {label: t('listProperty'), href: `/${locale}/list-property`},
    {label: t('ownerPortal'), href: 'https://bestofbedz.guestyowners.com/login', external: true},
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#F9DE6A] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group" aria-label="Best of Bedz Home">
            <Image 
              src="/full-logo.png" 
              alt="Best of Bedz for Owners" 
              width={200} 
              height={200}
              className="h-14 w-auto md:h-16 lg:h-20 transition-transform group-hover:scale-105"
              priority
            />
            <span className="text-base md:text-lg lg:text-xl font-bold text-[#2F63AD] transition-colors group-hover:text-[#F9DE6A]">
              Best of Bedz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-[#2F63AD] font-semibold text-base hover:text-[#F9DE6A] transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F9DE6A] group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[#2F63AD] font-semibold text-base hover:text-[#F9DE6A] transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F9DE6A] group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2F63AD] hover:text-[#F9DE6A] transition-colors"
              aria-label="Toggle menu"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t-2 border-[#F9DE6A] bg-gradient-to-b from-white to-gray-50">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 px-4 text-[#2F63AD] font-semibold hover:bg-[#F9DE6A] hover:text-white transition-all duration-300 rounded-lg mx-2 my-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-4 text-[#2F63AD] font-semibold hover:bg-[#F9DE6A] hover:text-white transition-all duration-300 rounded-lg mx-2 my-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
