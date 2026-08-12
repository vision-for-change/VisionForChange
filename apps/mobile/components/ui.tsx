import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import type { ReactNode } from 'react';
import { Icon } from './Icon';
import { theme } from '@/theme';

const { color, space, radius, font, type } = theme;

/* ── Text primitives ── */

export function Eyebrow({ index, children }: { index?: string; children: string }) {
  return (
    <View style={s.eyebrowRow}>
      {index ? <Text style={s.eyebrowIndex}>{index}</Text> : null}
      <Text style={s.eyebrow}>{children.toUpperCase()}</Text>
      <View style={s.eyebrowRule} />
    </View>
  );
}

/**
 * Heading with an italic accent clause, matching the web treatment.
 * `inverse` swaps in the light palette for use on the dark band.
 */
export function Heading({
  top,
  accent,
  level = 2,
  inverse = false,
  style,
}: {
  top: string;
  accent?: string;
  level?: 1 | 2 | 3;
  inverse?: boolean;
  style?: StyleProp<TextStyle>;
}) {
  const base = level === 1 ? s.h1 : level === 2 ? s.h2 : s.h3;
  return (
    <Text style={[base, inverse && { color: color.paper }, style]} accessibilityRole="header">
      {top}
      {accent ? (
        <Text style={[base, s.accent, inverse && { color: color.tealLight }]}> {accent}</Text>
      ) : null}
    </Text>
  );
}

export const Lead = ({ children }: { children: ReactNode }) => (
  <Text style={s.lead}>{children}</Text>
);

export const Body = ({ children }: { children: ReactNode }) => (
  <Text style={s.body}>{children}</Text>
);

export const Small = ({ children }: { children: ReactNode }) => (
  <Text style={s.small}>{children}</Text>
);

/* ── Layout ── */

export function Section({
  children,
  tone = false,
  style,
}: {
  children: ReactNode;
  tone?: boolean;
  style?: ViewStyle;
}) {
  return <View style={[s.section, tone && s.sectionTone, style]}>{children}</View>;
}

export function Divider() {
  return <View style={s.divider} />;
}

/* ── Buttons ── */

type ButtonVariant = 'primary' | 'outline' | 'inverse';

export function Button({
  label,
  onPress,
  href,
  variant = 'primary',
  icon = 'arrow',
  style,
}: {
  label: string;
  onPress?: () => void;
  href?: string;
  variant?: ButtonVariant;
  icon?: 'arrow' | 'arrowUpRight' | 'mail' | 'phone' | null;
  style?: ViewStyle;
}) {
  const handlePress = () => {
    if (onPress) return onPress();
    // openURL rejects when no handler exists (no mail app, for instance).
    if (href) void Linking.openURL(href).catch(() => undefined);
  };

  const labelColor =
    variant === 'primary' ? color.white : variant === 'inverse' ? color.ink : color.ink;

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        s.btn,
        variant === 'primary' && s.btnPrimary,
        variant === 'outline' && s.btnOutline,
        variant === 'inverse' && s.btnInverse,
        pressed && s.btnPressed,
        style,
      ]}
    >
      <Text style={[s.btnLabel, { color: labelColor }]}>{label}</Text>
      {icon ? <Icon name={icon} size={15} color={labelColor} strokeWidth={1.9} /> : null}
    </Pressable>
  );
}

/* ── Surfaces ── */

export function Card({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return <View style={[s.card, style]}>{children}</View>;
}

export function IconBadge({
  name,
  size = 48,
  tone = 'wash',
}: {
  name: Parameters<typeof Icon>[0]['name'];
  size?: number;
  tone?: 'wash' | 'paper';
}) {
  return (
    <View
      style={[
        s.iconBadge,
        {
          width: size,
          height: size,
          borderRadius: size * 0.28,
          backgroundColor: tone === 'wash' ? color.tealWash : color.paper2,
          borderColor: tone === 'wash' ? color.tealLine : color.line,
        },
      ]}
    >
      <Icon name={name} size={size * 0.46} />
    </View>
  );
}

/** Tappable row used for links out of the app (mail, phone, Instagram). */
export function LinkRow({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: Parameters<typeof Icon>[0]['name'];
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={`${label}: ${value}`}
      onPress={() => void Linking.openURL(href).catch(() => undefined)}
      style={({ pressed }) => [s.linkRow, pressed && s.linkRowPressed]}
    >
      <IconBadge name={icon} size={42} />
      <View style={s.linkRowText}>
        <Text style={s.linkRowLabel}>{label.toUpperCase()}</Text>
        <Text style={s.linkRowValue}>{value}</Text>
      </View>
      <Icon name={external ? 'arrowUpRight' : 'arrow'} size={16} color={color.muted2} />
    </Pressable>
  );
}

export function Notice({
  children,
  tone = 'clay',
}: {
  children: ReactNode;
  tone?: 'clay' | 'teal';
}) {
  return (
    <View style={[s.notice, tone === 'teal' && s.noticeTeal]}>
      <Icon
        name={tone === 'clay' ? 'alert' : 'info'}
        size={18}
        color={tone === 'clay' ? color.clay : color.teal}
      />
      <Text style={[s.noticeText, tone === 'teal' && { color: color.ink2 }]}>{children}</Text>
    </View>
  );
}

export function Chip({ label, tone = 'neutral' }: { label: string; tone?: 'neutral' | 'active' | 'planned' }) {
  const toneStyle =
    tone === 'active' ? s.chipActive : tone === 'planned' ? s.chipPlanned : undefined;
  const textTone =
    tone === 'active' ? color.teal : tone === 'planned' ? color.clay : color.muted;
  return (
    <View style={[s.chip, toneStyle]}>
      <View style={[s.chipDot, { backgroundColor: textTone }]} />
      <Text style={[s.chipText, { color: textTone }]}>{label.toUpperCase()}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  /* Text */
  eyebrowRow: { flexDirection: 'row', alignItems: 'center', gap: space.sm, marginBottom: space.md },
  eyebrowIndex: {
    fontFamily: font.displaySemi,
    fontSize: 13,
    color: color.teal,
    letterSpacing: 0.5,
  },
  eyebrow: {
    fontFamily: font.bodySemi,
    fontSize: type.eyebrow.size,
    letterSpacing: type.eyebrow.letterSpacing,
    color: color.muted,
  },
  eyebrowRule: { flex: 1, height: 1, backgroundColor: color.line },

  h1: {
    fontFamily: font.display,
    fontSize: type.h1.size,
    lineHeight: type.h1.lineHeight,
    letterSpacing: type.h1.letterSpacing,
    color: color.ink,
  },
  h2: {
    fontFamily: font.display,
    fontSize: type.h2.size,
    lineHeight: type.h2.lineHeight,
    letterSpacing: type.h2.letterSpacing,
    color: color.ink,
  },
  h3: {
    fontFamily: font.display,
    fontSize: type.h3.size,
    lineHeight: type.h3.lineHeight,
    letterSpacing: type.h3.letterSpacing,
    color: color.ink,
  },
  accent: { fontFamily: font.displayItalic, color: color.teal },

  lead: {
    fontFamily: font.bodyLight,
    fontSize: type.lead.size,
    lineHeight: type.lead.lineHeight,
    color: color.ink2,
  },
  body: {
    fontFamily: font.body,
    fontSize: type.body.size,
    lineHeight: type.body.lineHeight,
    color: color.muted,
  },
  small: {
    fontFamily: font.body,
    fontSize: type.small.size,
    lineHeight: type.small.lineHeight,
    color: color.muted,
  },

  /* Layout */
  section: { paddingHorizontal: space.lg, paddingVertical: space.xl },
  sectionTone: { backgroundColor: color.paper2 },
  divider: { height: 1, backgroundColor: color.line },

  /* Buttons: 48pt min height keeps every control inside the tap-target guideline. */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.sm,
    minHeight: 50,
    paddingHorizontal: space.lg,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  btnPrimary: { backgroundColor: color.teal },
  btnOutline: { backgroundColor: 'transparent', borderColor: color.line2 },
  btnInverse: { backgroundColor: color.paper },
  btnPressed: { opacity: 0.82, transform: [{ scale: 0.985 }] },
  btnLabel: { fontFamily: font.bodySemi, fontSize: 15 },

  /* Surfaces */
  card: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.line,
    borderRadius: radius.lg,
    padding: space.lg,
  },
  iconBadge: { alignItems: 'center', justifyContent: 'center', borderWidth: 1 },

  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: 68,
    paddingHorizontal: space.md,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.line,
    borderRadius: radius.md,
  },
  linkRowPressed: { backgroundColor: color.tealWash, borderColor: color.tealLine },
  linkRowText: { flex: 1 },
  linkRowLabel: {
    fontFamily: font.bodyBold,
    fontSize: 10.5,
    letterSpacing: 1.2,
    color: color.muted,
    marginBottom: 2,
  },
  linkRowValue: { fontFamily: font.bodySemi, fontSize: 15, color: color.ink },

  notice: {
    flexDirection: 'row',
    gap: space.sm + 2,
    padding: space.md,
    borderRadius: radius.md,
    backgroundColor: color.clayWash,
    borderWidth: 1,
    borderColor: 'rgba(180,85,47,0.2)',
  },
  noticeTeal: { backgroundColor: color.tealWash, borderColor: color.tealLine },
  noticeText: {
    flex: 1,
    fontFamily: font.body,
    fontSize: 14,
    lineHeight: 21,
    color: color.clayInk,
  },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: radius.pill,
    backgroundColor: color.paper2,
    borderWidth: 1,
    borderColor: color.line,
  },
  chipActive: { backgroundColor: color.tealWash, borderColor: color.tealLine },
  chipPlanned: { backgroundColor: color.clayWash, borderColor: 'rgba(180,85,47,0.22)' },
  chipDot: { width: 5, height: 5, borderRadius: 3 },
  chipText: { fontFamily: font.bodyBold, fontSize: 10, letterSpacing: 1.1 },
});
