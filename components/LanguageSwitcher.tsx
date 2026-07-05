'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Store preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    // Replace current locale in pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center rounded-full border border-white/25 bg-white/10 p-0.5">
      <button
        onClick={() => switchLocale('en')}
        aria-pressed={locale === 'en'}
        className={`rounded-full px-3 py-1 text-sm font-bold transition-colors ${
          locale === 'en'
            ? 'bg-white text-[#2861AD] shadow-sm'
            : 'text-white/80 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('ar')}
        aria-pressed={locale === 'ar'}
        className={`rounded-full px-3 py-1 text-sm font-bold transition-colors ${
          locale === 'ar'
            ? 'bg-white text-[#2861AD] shadow-sm'
            : 'text-white/80 hover:text-white'
        }`}
      >
        ع
      </button>
    </div>
  );
}
