'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const dashboardFeatures = [
  {
    id: 'dashboard',
    image: '/owner-dashboard/dashboard-overview.png',
    titleKey: 'dashboard.title',
    descriptionKey: 'dashboard.description',
  },
  {
    id: 'calendar',
    image: '/owner-dashboard/calendar-view.png',
    titleKey: 'calendar.title',
    descriptionKey: 'calendar.description',
  },
  {
    id: 'reservation',
    image: '/owner-dashboard/create-reservation.png',
    titleKey: 'reservation.title',
    descriptionKey: 'reservation.description',
  },
  {
    id: 'reports',
    image: '/owner-dashboard/reservation-reports.png',
    titleKey: 'reports.title',
    descriptionKey: 'reports.description',
  },
  {
    id: 'help',
    image: '/owner-dashboard/help-center.png',
    titleKey: 'help.title',
    descriptionKey: 'help.description',
  },
];

export default function OwnerDashboardCarousel() {
  const t = useTranslations('ownerPortal.carousel');
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dashboardFeatures.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dashboardFeatures.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentFeature = dashboardFeatures[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Side-by-side Layout */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Mobile Screenshot */}
        <div className="relative flex-shrink-0">
          <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
            <Image
              src={currentFeature.image}
              alt={t(currentFeature.titleKey)}
              fill
              className="object-contain drop-shadow-2xl"
              priority={currentIndex === 0}
            />
          </div>

          {/* Navigation Arrows on Mobile */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#2F63AD] hover:bg-[#2557a0] text-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#2F63AD] hover:bg-[#2557a0] text-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Feature Info - Side by side */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t(currentFeature.titleKey)}
          </h3>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {t(currentFeature.descriptionKey)}
          </p>

          {/* Dots Navigation */}
          <div className="flex justify-center md:justify-start gap-2 mt-8">
            {dashboardFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-[#F9DE6A]'
                    : 'w-3 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
