'use client';

/**
 * Scroll-position dots for the mobile snap carousels (hidden on md+ where
 * the same content renders as a grid). Tapping a dot scrolls its card into
 * view. Buttons are 32px hit areas (WCAG target size); the visual dot is
 * the small inner span.
 */
export default function CarouselDots({
  count,
  active,
  onSelect,
  className = '',
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={`mt-2 flex justify-center md:hidden ${className}`} role="tablist">
      {Array.from({length: count}, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          role="tab"
          aria-selected={i === active}
          aria-label={`Go to card ${i + 1}`}
          className="flex h-8 min-w-8 items-center justify-center px-1"
        >
          <span
            className={`h-2 rounded-full bg-current transition-all duration-300 ${
              i === active ? 'w-6 opacity-100' : 'w-2 opacity-25'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
