/**
 * Shared brand icon set — consistent 24px stroke line icons so every
 * section speaks one visual language (replaces the mixed emoji icons).
 */
const PATHS: Record<string, string> = {
  building: 'M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15M11 21v-3h2v3',
  megaphone: 'M3 11l17-5v12L3 13v-2zM20 9.5a2.5 2.5 0 0 1 0 5M6.5 13.8V17a2 2 0 0 0 2 2h.6a2 2 0 0 0 2-2v-2.4',
  chart: 'M3 3v18h18M7.5 15v2.5M12 10.5V17.5M16.5 6.5v11',
  armchair: 'M6 11V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 0 1 4 0v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM6 19v2M18 19v2',
  sparkles: 'M12 3l1.8 5.5L19.3 10.3l-5.5 1.8L12 17.6l-1.8-5.5L4.7 10.3l5.5-1.8L12 3zM19 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2',
  palette: 'M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h6a3 3 0 0 0 3-3c0-4-4-7-9-7zM7.5 10.5h.01M11 6.5h.01M16 6.5h.01',
  camera: 'M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM12 10.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z',
  trendingUp: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  users: 'M16.5 21v-2a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v2M9.5 3.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zM21.5 21v-2a4 4 0 0 0-3-3.87M15.5 3.6a3.75 3.75 0 0 1 0 7.3',
  wrench: 'M14.5 6.5a4.5 4.5 0 0 0-6.1 5.6L3 17.5V21h3.5l5.4-5.4a4.5 4.5 0 0 0 5.6-6.1L14 13l-3-3 3.5-3.5z',
  fileText: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5M9 13h6M9 17h6',
  scale: 'M12 4v16M8 20h8M12 4H7M12 4h5M7 4l-3 7a3.2 3.2 0 0 0 6 0L7 4zM17 4l-3 7a3.2 3.2 0 0 0 6 0l-3-7z',
  shield: 'M12 3l8 3v6c0 4.4-3.2 7.7-8 9-4.8-1.3-8-4.6-8-9V6l8-3zM9 12l2 2 4-4',
  cpu: 'M9 9h6v6H9zM5 5h14v14H5zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z',
  leaf: 'M6 21c0-9 6-15 15-15 0 9-6 15-15 15zM6 21c0-6 3.5-10.5 9-13',
  award: 'M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM8.7 12.3 7 21l5-3 5 3-1.7-8.7',
  headphones: 'M4 14a8 8 0 0 1 16 0M4 14v5a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4zM20 14v5a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3',
  home: 'M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M9.5 21v-6h5v6',
  mapPin: 'M12 21s-7-5.4-7-11a7 7 0 0 1 14 0c0 5.6-7 11-7 11zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  lineChart: 'M3 3v18h18M7 14l3.5-3.5 3 2.5 5.5-6',
  wallet: 'M19 7V5a1 1 0 0 0-1-1H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5M16.5 13.5h.01',
  key: 'M15 3a6 6 0 0 0-5.7 7.9L3 17.2V21h3.8l6.3-6.3A6 6 0 1 0 15 3zM15.5 8.5h.01',
  calendarCheck: 'M8 2v4M16 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 14.5l2 2 4-4.5',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
};

export default function BrandIcon({
  name,
  className = 'h-6 w-6',
}: {
  name: keyof typeof PATHS | string;
  className?: string;
}) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
