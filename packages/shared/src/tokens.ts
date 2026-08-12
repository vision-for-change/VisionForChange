/**
 * Design tokens. Single source of truth for both apps.
 *
 * The web app turns these into CSS custom properties at build time
 * (see `cssVariables` below); the mobile app imports them directly.
 * Change a value here and both platforms move together.
 */

export const color = {
  paper: '#FBFAF7',
  paper2: '#F3F1EB',
  paper3: '#EBE8E0',
  white: '#FFFFFF',

  ink: '#16201F',
  ink2: '#37474A',
  muted: '#6B7A79',
  muted2: '#93A0A0',

  line: '#E4E0D7',
  line2: '#D3CEC2',

  teal: '#0E6E62',
  tealDark: '#0A574E',
  tealLight: '#7FCFC1',
  tealWash: '#EDF4F2',
  tealLine: '#BFD9D3',

  clay: '#B4552F',
  clayWash: '#FAF0EA',
  clayInk: '#6E3418',
} as const;

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  pill: 100,
} as const;

/** 4pt spacing scale. */
export const space = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
} as const;

export const font = {
  display: 'Fraunces',
  body: 'DM Sans',
} as const;

/** Mobile type scale. Web uses fluid clamp() sizes in globals.css. */
export const type = {
  h1: { size: 34, lineHeight: 40, letterSpacing: -1.2 },
  h2: { size: 27, lineHeight: 33, letterSpacing: -0.9 },
  h3: { size: 20, lineHeight: 26, letterSpacing: -0.5 },
  lead: { size: 17, lineHeight: 27 },
  body: { size: 15.5, lineHeight: 25 },
  small: { size: 13.5, lineHeight: 20 },
  eyebrow: { size: 11.5, lineHeight: 16, letterSpacing: 1.5 },
} as const;

const CSS_VAR_MAP: Record<string, string> = {
  '--paper': color.paper,
  '--paper-2': color.paper2,
  '--paper-3': color.paper3,
  '--white': color.white,
  '--ink': color.ink,
  '--ink-2': color.ink2,
  '--muted': color.muted,
  '--muted-2': color.muted2,
  '--line': color.line,
  '--line-2': color.line2,
  '--teal': color.teal,
  '--teal-dk': color.tealDark,
  '--teal-lt': color.tealLight,
  '--teal-wash': color.tealWash,
  '--teal-line': color.tealLine,
  '--clay': color.clay,
  '--clay-wash': color.clayWash,
  '--clay-ink': color.clayInk,
  '--r-sm': `${radius.sm}px`,
  '--r-md': `${radius.md}px`,
  '--r-lg': `${radius.lg}px`,
};

/** Emits the token block injected into the web app's <head>. */
export function cssVariables(): string {
  const body = Object.entries(CSS_VAR_MAP)
    .map(([key, value]) => `${key}:${value}`)
    .join(';');
  return `:root{${body}}`;
}
