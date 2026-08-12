import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hero, impactIntro, metrics, pillars, problemIntro, problems } from '@vfc/shared';
import { BrandMark } from '@/components/Icon';
import {
  Body,
  Button,
  Card,
  Eyebrow,
  Heading,
  IconBadge,
  Lead,
  Section,
} from '@/components/ui';
import { theme } from '@/theme';

const { color, space, font, radius } = theme;

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: color.paper }}
      contentContainerStyle={{ paddingBottom: space['2xl'] }}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={[s.hero, { paddingTop: insets.top + space.xl }]}>
        <BrandMark size={44} />

        <View style={s.badge}>
          <Text style={s.badgeTag}>{hero.badge.toUpperCase()}</Text>
          <Text style={s.badgeNote}>{hero.badgeNote}</Text>
        </View>

        <Text style={s.heroTitle}>
          {hero.titleTop}
          {'\n'}
          <Text style={s.heroTitleAccent}>{hero.titleAccent}</Text>
        </Text>

        <Lead>{hero.body}</Lead>

        <View style={s.heroButtons}>
          <Button label="Get Assistance" onPress={() => router.push('/assistance')} />
          <Button label="Explore the App" variant="outline" onPress={() => router.push('/habits')} />
        </View>

        <View style={s.heroNoteWrap}>
          <Text style={s.heroNote}>{hero.note}</Text>
        </View>
      </View>

      {/* The problem */}
      <Section tone>
        <Eyebrow index="01">{problemIntro.eyebrow}</Eyebrow>
        <Heading top={problemIntro.titleTop} accent={problemIntro.titleAccent} />
        <View style={{ marginTop: space.md, marginBottom: space.lg }}>
          <Body>{problemIntro.body}</Body>
        </View>

        <View style={{ gap: space.sm + 4 }}>
          {problems.map((problem) => (
            <Card key={problem.title} style={s.problemCard}>
              <IconBadge name={problem.icon} size={44} />
              <View style={s.problemText}>
                <Text style={s.cardTitle}>{problem.title}</Text>
                <Body>{problem.body}</Body>
              </View>
            </Card>
          ))}
        </View>
      </Section>

      {/* What we do */}
      <Section>
        <Eyebrow index="02">What We Do</Eyebrow>
        <Heading top="Three ways we're creating" accent="change" />
        <View style={{ gap: space.sm + 4, marginTop: space.lg }}>
          {pillars.map((pillar, i) => (
            <Card key={pillar.title}>
              <View style={s.pillarHead}>
                <IconBadge name={pillar.icon} size={46} />
                <Text style={s.pillarIndex}>{String(i + 1).padStart(2, '0')}</Text>
              </View>
              <Text style={s.cardTitle}>{pillar.title}</Text>
              <Text style={s.pillarKicker}>{pillar.kicker}</Text>
              <Body>{pillar.body}</Body>
            </Card>
          ))}
        </View>
      </Section>

      {/* Impact */}
      <Section tone>
        <Eyebrow index="03">{impactIntro.eyebrow}</Eyebrow>
        <Heading top={impactIntro.titleTop} accent={impactIntro.titleAccent} />
        <View style={{ marginTop: space.md, marginBottom: space.lg }}>
          <Body>{impactIntro.body}</Body>
        </View>

        <View style={s.metricGrid}>
          {metrics.map((metric) => (
            <View key={metric.label} style={s.metric}>
              <Text style={s.metricValue}>{metric.value}</Text>
              <Text style={s.metricLabel}>{metric.label.toUpperCase()}</Text>
            </View>
          ))}
        </View>

        <Button
          label="See Our Latest Updates"
          variant="outline"
          onPress={() => router.push('/updates')}
          style={{ marginTop: space.lg }}
        />
      </Section>

      {/* Closing CTA */}
      <View style={s.band}>
        <Heading top="Need help accessing" accent="eye care?" inverse />
        <Text style={s.bandBody}>
          If cost or another barrier is standing in the way, tell us about your situation and
          we&apos;ll do our best to connect you with available assistance.
        </Text>
        <Button
          label="Request Assistance"
          variant="inverse"
          onPress={() => router.push('/assistance')}
        />
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  hero: { paddingHorizontal: space.lg, paddingBottom: space.xl, backgroundColor: color.white },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: space.sm,
    marginTop: space.lg,
    marginBottom: space.md,
    paddingVertical: 5,
    paddingHorizontal: 6,
    paddingRight: 13,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: color.line,
    backgroundColor: color.paper,
  },
  badgeTag: {
    fontFamily: font.bodyBold,
    fontSize: 9.5,
    letterSpacing: 1.2,
    color: color.teal,
    backgroundColor: color.tealWash,
    borderRadius: radius.pill,
    paddingHorizontal: 9,
    paddingVertical: 3,
    overflow: 'hidden',
  },
  badgeNote: { fontFamily: font.body, fontSize: 12.5, color: color.ink2 },

  heroTitle: {
    fontFamily: font.display,
    fontSize: 42,
    lineHeight: 46,
    letterSpacing: -1.8,
    color: color.ink,
    marginBottom: space.md,
  },
  heroTitleAccent: { fontFamily: font.displayItalic, color: color.teal },
  heroButtons: { gap: space.sm + 2, marginTop: space.lg },
  heroNoteWrap: { marginTop: space.lg, paddingTop: space.md, borderTopWidth: 1, borderTopColor: color.line },
  heroNote: {
    fontFamily: font.displayItalic,
    fontSize: 17,
    lineHeight: 26,
    color: color.ink2,
  },

  problemCard: { flexDirection: 'row', gap: space.md, alignItems: 'flex-start' },
  problemText: { flex: 1 },
  cardTitle: {
    fontFamily: font.display,
    fontSize: 19,
    letterSpacing: -0.4,
    color: color.ink,
    marginBottom: 6,
  },

  pillarHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: space.md,
  },
  pillarIndex: { fontFamily: font.display, fontSize: 34, color: color.line2, letterSpacing: -1.5 },
  pillarKicker: {
    fontFamily: font.bodyMedium,
    fontSize: 14.5,
    color: color.teal,
    marginBottom: space.sm,
  },

  metricGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm + 4 },
  metric: {
    flexGrow: 1,
    flexBasis: '46%',
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.line,
    borderRadius: radius.lg,
    paddingVertical: space.lg,
    alignItems: 'center',
  },
  metricValue: { fontFamily: font.display, fontSize: 36, color: color.line2, letterSpacing: -1.4 },
  metricLabel: {
    fontFamily: font.bodySemi,
    fontSize: 10,
    letterSpacing: 1.1,
    color: color.muted,
    marginTop: 8,
    textAlign: 'center',
  },

  band: {
    backgroundColor: color.ink,
    padding: space.xl,
    gap: space.md,
  },
  bandBody: {
    fontFamily: font.bodyLight,
    fontSize: 15.5,
    lineHeight: 25,
    color: 'rgba(251,250,247,0.62)',
    marginBottom: space.xs,
  },
});
