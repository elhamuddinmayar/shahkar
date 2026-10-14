// Custom project logos, drawn to match lucide icon props (size, strokeWidth).

// Blue shield with connected network nodes and a green heartbeat line.
export function NetworkShieldLogo({ size = 24, strokeWidth = 1.7 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.5 4 5.5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10v-6z" stroke="#1268d9" />
    <path d="M8 8.2 12 6.5l4 1.7" stroke="#1268d9" strokeWidth={strokeWidth * 0.8} />
    <circle cx="8" cy="8.2" r="1.1" fill="#1268d9" stroke="none" />
    <circle cx="12" cy="6.5" r="1.1" fill="#1268d9" stroke="none" />
    <circle cx="16" cy="8.2" r="1.1" fill="#1268d9" stroke="none" />
    <path d="M6.5 13h2.6l1.3-2.6 2.2 5.2 1.4-2.6h3.5" stroke="#16a34a" />
  </svg>
}
