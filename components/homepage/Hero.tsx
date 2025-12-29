'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image with Very Light Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-background.jpg)',
            backgroundPosition: 'center center',
          }}
        />
        {/* Very subtle overlay - barely visible, just for slight text contrast */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_8px_rgb(0_0_0_/_70%),_0px_0px_15px_rgb(0_0_0_/_50%)]">
            {t('headline')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 [text-shadow:_1px_1px_6px_rgb(0_0_0_/_65%),_0px_0px_12px_rgb(0_0_0_/_45%)]">
            {t('subheadline')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href={`/${locale}/list-property`}
              className="bg-blue-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-blue-primary/50 hover:scale-105 transform"
            >
              {t('ctaPrimary')}
            </Link>
            <a
              href="https://cal.com/hassan-ahmed-27rg6z/property-owner-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-white shadow-2xl hover:scale-105 transform"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <svg 
          className="w-6 h-6 text-white [filter:_drop-shadow(0_2px_8px_rgb(0_0_0_/_80%))]" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
