import { color, radius, space, type } from '@vfc/shared';

/**
 * Mobile theme. Colours, spacing, and the type scale come from the shared
 * token package; the font family names below are the loaded font assets.
 */
export const theme = {
  color,
  radius,
  space,
  type,
  font: {
    display: 'Fraunces_500Medium',
    displaySemi: 'Fraunces_600SemiBold',
    displayItalic: 'Fraunces_400Regular_Italic',
    body: 'DMSans_400Regular',
    bodyMedium: 'DMSans_500Medium',
    bodySemi: 'DMSans_600SemiBold',
    bodyBold: 'DMSans_700Bold',
    bodyLight: 'DMSans_300Light',
  },
} as const;

export type Theme = typeof theme;
