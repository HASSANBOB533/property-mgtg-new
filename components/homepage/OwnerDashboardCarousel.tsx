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
    <div className="relative w-full max-w-md mx-auto">
      {/* Carousel Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[9/16] max-h-[500px] bg-gray-100">
          <Image
            src={currentFeature.image}
            alt={t(currentFeature.titleKey)}
            fill
            className="object-contain"
            priority={currentIndex === 0}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2F63AD] rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2F63AD] rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Feature Info */}
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          {t(currentFeature.titleKey)}
        </h3>
        <p className="text-lg text-white/90">
          {t(currentFeature.descriptionKey)}
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
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
  );
}
