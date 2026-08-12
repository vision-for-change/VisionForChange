/**
 * Icon geometry, expressed as renderer-agnostic primitives.
 *
 * Web renders these with <svg>; mobile renders them with react-native-svg.
 * Keeping the geometry as data (rather than JSX) is what lets one icon
 * definition serve both platforms.
 *
 * All icons are drawn on a 24x24 grid with a 1.6 stroke, no fill.
 */

export type Shape =
  | { t: 'path'; d: string }
  | { t: 'circle'; cx: number; cy: number; r: number }
  | { t: 'rect'; x: number; y: number; w: number; h: number; rx: number };

const p = (d: string): Shape => ({ t: 'path', d });
const c = (cx: number, cy: number, r: number): Shape => ({ t: 'circle', cx, cy, r });
const r = (x: number, y: number, w: number, h: number, rx: number): Shape => ({
  t: 'rect', x, y, w, h, rx,
});

export const icons = {
  arrow: [p('M5 12h14M13 6l6 6-6 6')],
  arrowUpRight: [p('M7 17 17 7M8 7h9v9')],
  cost: [r(2, 6, 20, 12, 2), c(12, 12, 2.6), p('M6 12h.01M18 12h.01')],
  device: [r(6, 2, 12, 20, 2.5), p('M11 18.5h2')],
  search: [c(11, 11, 7), p('m20 20-3.6-3.6')],
  handshake: [
    p('m11 17 2 2a1.4 1.4 0 0 0 2 0 1.4 1.4 0 0 0 0-2'),
    p('m15 17 1.6 1.6a1.4 1.4 0 0 0 2-2L14 12'),
    p('M3 9.5 7 6l3 2.4a2 2 0 0 0 2.4 0L14 7l7 6.5'),
    p('M3 14.5 6.5 18'),
  ],
  book: [
    p('M3 4h5.5A3.5 3.5 0 0 1 12 7.5V20a3 3 0 0 0-3-3H3z'),
    p('M21 4h-5.5A3.5 3.5 0 0 0 12 7.5V20a3 3 0 0 1 3-3h6z'),
  ],
  chart: [
    p('M3 20h18'),
    r(5, 11, 3.6, 6, 1),
    r(10.2, 6, 3.6, 11, 1),
    r(15.4, 13, 3.6, 4, 1),
  ],
  bell: [
    p('M18 9a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16S18 14 18 9'),
    p('M13.7 19a2 2 0 0 1-3.4 0'),
  ],
  pin: [p('M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0'), c(12, 10, 2.8)],
  scan: [
    p('M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8M21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H16M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16'),
    c(12, 12, 3),
  ],
  glasses: [
    c(5.5, 14, 3.5),
    c(18.5, 14, 3.5),
    p('M9 14c0-1.2 1.3-2 3-2s3 .8 3 2M2 12l2-5.5M22 12l-2-5.5'),
  ],
  building: [
    p('M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M15 10h3a2 2 0 0 1 2 2v9'),
    p('M9 7h2M9 11h2M9 15h2'),
  ],
  heart: [p('M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 1 0-7.1 7.1L12 21l8.4-8.3a5 5 0 0 0 0-7.1')],
  users: [
    p('M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20'),
    c(9, 7, 3.6),
    p('M22 20v-1.5a4 4 0 0 0-3-3.8M16.5 3.6a4 4 0 0 1 0 7'),
  ],
  mail: [r(2.5, 5, 19, 14, 2.5), p('m3.5 7 7.4 5.4a2 2 0 0 0 2.2 0L20.5 7')],
  phone: [p('M21 16.5v2.6a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3 18.7 18.7 0 0 1-5.7-5.7 19 19 0 0 1-3-8.4A2 2 0 0 1 3.8 2h2.6a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.5 9.7a15 15 0 0 0 5.7 5.7l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2')],
  instagram: [r(3, 3, 18, 18, 5), c(12, 12, 3.8), p('M17.5 6.5h.01')],
  info: [c(12, 12, 9.2), p('M12 11v5M12 8h.01')],
  alert: [
    p('M10.3 3.6 1.9 17.5A2 2 0 0 0 3.6 20.5h16.8a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0'),
    p('M12 9v4M12 17h.01'),
  ],
  eye: [p('M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7'), c(12, 12, 3)],
  clock: [c(12, 12, 9.2), p('M12 7v5.2l3.2 1.9')],
  drop: [p('M12 3s6 6.3 6 10.3a6 6 0 0 1-12 0C6 9.3 12 3 12 3')],
  moon: [p('M20 14.2A8.4 8.4 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2')],
  bulb: [
    p('M9.5 18h5M10.2 21h3.6'),
    p('M12 3a6 6 0 0 0-3.4 10.9c.5.4.9 1.1.9 1.8V16h5v-.3c0-.7.3-1.4.9-1.8A6 6 0 0 0 12 3'),
  ],
  home: [p('M3 10.5 12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20z')],
  user: [c(12, 8, 4), p('M20 21v-1a6 6 0 0 0-6-6h-4a6 6 0 0 0-6 6v1')],
  flag: [p('M5 21V4M5 4h11l-1.6 3.5L16 11H5')],
  check: [p('m4.5 12.5 5 5 10-11')],
} as const;

export type IconName = keyof typeof icons;
