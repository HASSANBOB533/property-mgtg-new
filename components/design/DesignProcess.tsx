'use client';

import {useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import BrandIcon from '../BrandIcon';
import CarouselDots from '../CarouselDots';

const STEPS = [
  {key: 'step1', icon: 'mapPin'},
  {key: 'step2', icon: 'palette'},
  {key: 'step3', icon: 'armchair'},
  {key: 'step4', icon: 'wrench'},
  {key: 'step5', icon: 'camera'},
  {key: 'step6', icon: 'megaphone'},
] as const;

export default function DesignProcess() {
  const t = useTranslations('design.process');
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const onTrackScroll = () => {
    const el = trackRef.current;
    if (!el?.children.length) return;
    const step = (el.children[0] as HTMLElement).offsetWidth + 16;
    setActiveCard(Math.min(STEPS.length - 1, Math.round(Math.abs(el.scrollLeft) / step)));
  };

  const scrollToCard = (i: number) => {
    (trackRef.current?.children[i] as HTMLElement | undefined)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section className="bg-[#EEF0DC]/50 py-10 md:py-20">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center text-[13px] font-semibold uppercase tracking-[0.24em] text-[#2861AD]">
          BOB Designs
        </p>
        <h2 className="mb-8 text-center text-3xl font-bold text-[#1F2D26] md:mb-12 md:text-4xl">
          {t('title')}
        </h2>

        {/* Mobile: swipeable snap carousel · Desktop: 3-up grid */}
        <div
          ref={trackRef}
          onScroll={onTrackScroll}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-auto md:grid md:max-w-6xl md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        >
          {STEPS.map((step, idx) => (
            <div
              key={step.key}
              className="group relative flex h-auto min-w-[72%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-[#EBECE2] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2861AD] hover:bg-[#2861AD] hover:shadow-xl sm:min-w-[46%] md:min-w-0 md:shrink"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#2861AD] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#2861AD]">
                  <BrandIcon name={step.icon} className="h-6 w-6" />
                </span>
                <span
                  aria-hidden
                  data-num={String(idx + 1).padStart(2, '0')}
                  className="text-4xl font-bold leading-none text-[#2861AD]/10 transition-colors duration-300 after:content-[attr(data-num)] group-hover:text-white/15"
                />
              </div>
              <h3 className="mb-1.5 text-lg font-bold text-[#1F2D26] transition-colors duration-300 group-hover:text-white">
                {t(`${step.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/85">
                {t(`${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <CarouselDots
          count={STEPS.length}
          active={activeCard}
          onSelect={scrollToCard}
          className="text-[#2861AD]"
        />
      </div>
    </section>
  );
}
