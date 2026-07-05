'use client';

import {useTranslations} from 'next-intl';

/**
 * Transformations — before/after showcase films (design, renovation,
 * decoration, furnishing). Structure is live now; the rail renders the
 * moment VIDEOS has entries (same pattern as the Watch hub's
 * "Beyond the Stay" rail). Videos stream from Cloudinary when produced.
 */
interface TransformationVideo {
  key: string;
  title: string;
  videoUrl: string;
  posterUrl: string;
}

const VIDEOS: TransformationVideo[] = [];

export default function Transformations() {
  const t = useTranslations('design');

  return (
    <section id="transformations" className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD]">
          BOB Designs
        </p>
        <h2 className="mb-3 text-center text-3xl font-bold text-[#1F2D26] md:text-4xl">
          {t('transformationsTitle')}
        </h2>
        {VIDEOS.length === 0 ? (
          <p className="mx-auto max-w-xl text-center text-gray-600">
            {t('transformationsComingSoon')}
          </p>
        ) : (
          <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Transformation film cards render here as they are produced. */}
          </div>
        )}
      </div>
    </section>
  );
}
