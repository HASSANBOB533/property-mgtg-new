'use client';

/**
 * Scroll-position dots for the mobile snap carousels (hidden on md+ where
 * the same content renders as a grid). Tapping a dot scrolls its card into view.
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
    <div className={`mt-4 flex justify-center gap-2 md:hidden ${className}`} role="tablist">
      {Array.from({length: count}, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          role="tab"
          aria-selected={i === active}
          aria-label={`Go to card ${i + 1}`}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === active ? 'w-6 bg-current opacity-100' : 'w-2 bg-current opacity-25'
          }`}
        />
      ))}
    </div>
  );
}
