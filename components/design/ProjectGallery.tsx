'use client';

import {useState, useRef, useEffect} from 'react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import BrandIcon from '../BrandIcon';

interface RoomImage {
  roomKey: string;
  before: string;
  after: string;
}

interface Project {
  key: 'marina' | 'stella2' | 'marina7';
  rooms: RoomImage[];
}

/** Before/after photo sets per project. Files live in /public/images/<project>. */
const PROJECTS: Project[] = [
  {
    key: 'marina',
    rooms: [
      {roomKey: 'living', before: '/images/marina5/living-before.jpeg', after: '/images/marina5/living-after.png'},
      {roomKey: 'bedroom', before: '/images/marina5/bedroom-before.jpeg', after: '/images/marina5/bedroom-after.png'},
      {roomKey: 'bathroom', before: '/images/marina5/bathroom-before.jpeg', after: '/images/marina5/bathroom-after.jpeg'},
      {roomKey: 'kitchen', before: '/images/marina5/kitchen-before.jpeg', after: '/images/marina5/kitchen-after.png'},
    ],
  },
  {
    key: 'stella2',
    rooms: [
      {roomKey: 'kitchen', before: '/images/stella2/kitchen-before.jpg', after: '/images/stella2/kitchen-after.jpg'},
      {roomKey: 'reception', before: '/images/stella2/reception-before.jpg', after: '/images/stella2/reception-after.jpg'},
      {roomKey: 'bedroom', before: '/images/stella2/bedroom-before.jpg', after: '/images/stella2/bedroom-after.jpg'},
      {roomKey: 'bathroom', before: '/images/stella2/bathroom-before.jpg', after: '/images/stella2/bathroom-after.jpg'},
    ],
  },
  {
    key: 'marina7',
    rooms: [
      {roomKey: 'dining', before: '/images/marina7/dining-before.jpg', after: '/images/marina7/dining-after.jpg'},
      {roomKey: 'reception', before: '/images/marina7/reception-before.jpg', after: '/images/marina7/reception-after.jpg'},
      {roomKey: 'bedroom', before: '/images/marina7/bedroom-before.jpg', after: '/images/marina7/bedroom-after.jpg'},
      {roomKey: 'bathroom', before: '/images/marina7/bathroom-before.jpg', after: '/images/marina7/bathroom-after.jpg'},
    ],
  },
];

function BeforeAfterSlider({
  before,
  after,
  alt,
  labels,
}: {
  before: string;
  after: string;
  alt: string;
  labels: {before: string; after: string; comingSoon: string};
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !e.touches.length) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl ring-1 ring-[#EBECE2]"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      {/* After image (background) */}
      <div className="absolute inset-0 bg-gray-200">
        {after ? (
          <Image
            src={after}
            alt={`${alt} — ${labels.after}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-[#2861AD]/10">
            <div className="text-lg font-semibold text-[#2861AD]">{labels.after}</div>
            <div className="mt-1 text-sm text-[#2861AD]/70">{labels.comingSoon}</div>
          </div>
        )}
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 bg-gray-300"
        style={{clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}
      >
        {before ? (
          <Image
            src={before}
            alt={`${alt} — ${labels.before}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-gray-400/20">
            <div className="text-lg font-semibold text-[#1F2D26]">{labels.before}</div>
            <div className="mt-1 text-sm text-gray-500">{labels.comingSoon}</div>
          </div>
        )}
      </div>

      {/* Slider handle */}
      <div
        className="absolute bottom-0 top-0 w-1 cursor-ew-resize bg-white"
        style={{left: `${sliderPosition}%`}}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg md:h-10 md:w-10">
          <svg
            className="h-5 w-5 rotate-90 text-[#2861AD] md:h-6 md:w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute left-2 top-2 rounded-full bg-[#122F5A]/80 px-2 py-0.5 text-[11px] font-semibold text-white md:left-4 md:top-4 md:px-3 md:py-1 md:text-sm">
        {labels.before}
      </div>
      <div className="absolute right-2 top-2 rounded-full bg-[#F7DD6E] px-2 py-0.5 text-[11px] font-semibold text-[#122F5A] md:right-4 md:top-4 md:px-3 md:py-1 md:text-sm">
        {labels.after}
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const t = useTranslations('design.gallery');
  const labels = {
    before: t('before'),
    after: t('after'),
    comingSoon: t('imageComingSoon'),
  };

  return (
    <section className="bg-[#EEF0DC]/50 py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center text-3xl font-bold text-[#1F2D26] md:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600 md:mb-12">
          {t('dragHint')}
        </p>

        {PROJECTS.map((project) => (
          <div key={project.key} className="mx-auto mb-10 max-w-6xl last:mb-0 md:mb-14">
            {/* Project header — compact chips on mobile, labeled row on desktop */}
            <div className="mb-4 rounded-2xl border border-[#EBECE2] bg-white p-4 md:mb-6 md:p-6">
              <h3 className="mb-3 text-xl font-bold text-[#1F2D26] md:text-2xl">
                {t(`${project.key}.title`)}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {(
                  [
                    {icon: 'mapPin', label: t('location'), value: t(`${project.key}.location`)},
                    {icon: 'home', label: t('type'), value: t(`${project.key}.type`)},
                    {icon: 'palette', label: t('style'), value: t(`${project.key}.style`)},
                  ] as const
                ).map((meta) => (
                  <span
                    key={meta.icon}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF0DC]/70 px-3 py-1 text-xs text-[#1F2D26] md:text-sm"
                  >
                    <BrandIcon name={meta.icon} className="h-4 w-4 shrink-0 text-[#2861AD]" />
                    <span className="hidden font-semibold md:inline">{meta.label}:</span>
                    {meta.value}
                  </span>
                ))}
              </div>
            </div>

            {/* Before/after sliders — 2-up on mobile to halve the scroll */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {project.rooms.map((room) => {
                const roomLabel = t(`${project.key}.rooms.${room.roomKey}`);
                return (
                  <div key={room.roomKey}>
                    <BeforeAfterSlider
                      before={room.before}
                      after={room.after}
                      alt={`${t(`${project.key}.title`)} — ${roomLabel}`}
                      labels={labels}
                    />
                    <p className="mt-1.5 text-center text-xs font-medium text-[#1F2D26] md:mt-3 md:text-base">
                      {roomLabel}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
