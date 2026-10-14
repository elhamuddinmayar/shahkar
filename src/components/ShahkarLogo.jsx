import { useId } from 'react'

// The Shahkar mark drawn as SVG. The loading screen in index.html has an
// inline copy of these shapes — keep the two in sync when editing.
export const LOGO_VIEWBOX = '0 0 950 936'

export const logoShapes = {
  pixels: [[2, 14, 34], [190, 2, 52], [66, 56, 72], [270, 70, 34], [15, 148, 34], [145, 158, 58], [78, 237, 52]],
  slash: 'M735 107H945L655 395 485 358Z',
  s: 'M430 107H637L515 235H430C370 235 325 272 325 320 325 370 360 400 430 412L590 440C720 463 812 545 812 690 812 830 720 925 600 925H300L440 795H585C635 795 662 760 662 712 662 665 630 620 560 608L400 580C290 560 205 500 185 390H172V345H212V315H182V263H235V185C285 135 355 107 430 107Z',
  base: 'M190 488C230 570 300 630 380 655V760L190 930Z',
  // dark fold where the S band turns under itself
  fold: 'M600 612C700 640 748 720 748 792 748 862 702 914 640 925H300L440 795H585C635 795 662 760 662 712 662 665 636 626 600 612Z',
}

// tone="light" swaps the navy parts for white, for use on dark backgrounds.
export default function ShahkarLogo({ size = 42, tone = 'dark', className = '', title }) {
  const id = useId().replace(/:/g, '')
  const navy = tone === 'light' ? '#ffffff' : '#070c3d'
  const blue = tone === 'light' ? '#5b9bff' : '#1a5fd0'

  return <svg className={className} width={size} height={size} viewBox={LOGO_VIEWBOX} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
    <defs>
      <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="0.35"><stop offset="0.25" stopColor={navy} /><stop offset="1" stopColor={blue} /></linearGradient>
      <linearGradient id={`${id}-slash`} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor={navy} /><stop offset="0.75" stopColor={blue} /></linearGradient>
    </defs>
    {logoShapes.pixels.map(([x, y, w]) => <rect key={`${x}-${y}`} x={x} y={y} width={w} height={w} fill={blue} />)}
    <path d={logoShapes.slash} fill={`url(#${id}-slash)`} />
    <path d={logoShapes.s} fill={`url(#${id}-s)`} />
    <path d={logoShapes.fold} fill={navy} />
    <path d={logoShapes.base} fill={navy} />
  </svg>
}
