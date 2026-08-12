import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { appFeatures, appPage, mailto } from '@vfc/shared';
import { Icon } from '@/components/Icon';
import { Body, Button, Card, Eyebrow, Heading, IconBadge, Notice, Section } from '@/components/ui';
import { theme } from '@/theme';

const { color, space, font, radius } = theme;

/**
 * The habits tab is the mobile counterpart of the web "Our App" page.
 *
 * On web that page describes the app; here we are inside it, so the same
 * content is presented as the actual tools, with the summary card up top.
 */
export default function HabitsScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: color.paper }}
      contentContainerStyle={{ paddingBottom: space['2xl'] }}
      showsVerticalScrollIndicator={false}
    >
      {/* Today summary */}
      <View style={s.summary}>
        <Text style={s.summaryLabel}>TODAY&apos;S SCREEN TIME</Text>
        <Text style={s.summaryValue}>6h 42m</Text>
        <Text style={s.summaryNote}>2h 10m above your goal</Text>

        <View style={s.summaryRows}>
          <View style={s.summaryRow}>
            <View style={s.summaryRowIcon}>
              <Icon name="clock" size={15} color={color.white} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.summaryRowTitle}>Break reminder</Text>
              <Text style={s.summaryRowNote}>Next in 12 minutes</Text>
              <View style={s.bar}>
                <View style={[s.barFill, { width: '62%' }]} />
              </View>
            </View>
          </View>

          <View style={s.summaryRow}>
            <View style={s.summaryRowIcon}>
              <Icon name="eye" size={15} color={color.white} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.summaryRowTitle}>20-20-20 streak</Text>
              <Text style={s.summaryRowNote}>4 days in a row</Text>
            </View>
          </View>
        </View>
      </View>

      <Section>
        <Eyebrow index="01">Why we built it</Eyebrow>
        <Heading top={appPage.whyTitleTop} accent={appPage.whyTitleAccent} />
        <View style={{ marginTop: space.md }}>
          <Body>{appPage.whyBody}</Body>
        </View>
      </Section>

      <Section tone>
        <Eyebrow index="02">Features</Eyebrow>
        <Heading top="Five things the app" accent="helps you do" />

        <View style={{ gap: space.sm + 4, marginTop: space.lg }}>
          {appFeatures.map((feature) => (
            <Card key={feature.title} style={s.featureCard}>
              <IconBadge name={feature.icon} size={44} tone="paper" />
              <View style={{ flex: 1 }}>
                <Text style={s.featureTitle}>{feature.title}</Text>
                <Body>{feature.body}</Body>
              </View>
            </Card>
          ))}
        </View>

        <View style={{ marginTop: space.lg }}>
          <Notice>{appPage.disclaimer}</Notice>
        </View>
      </Section>

      <Section>
        <Heading top="Be one of our" accent="first users." />
        <View style={{ marginTop: space.md, marginBottom: space.lg }}>
          <Body>
            We&apos;re preparing the app for early testers. Join the beta list and we&apos;ll reach
            out when it&apos;s ready.
          </Body>
        </View>
        <Button label={appPage.betaCta} href={mailto('App Beta Signup')} icon="mail" />
      </Section>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  summary: {
    backgroundColor: color.teal,
    paddingHorizontal: space.lg,
    paddingTop: space.lg,
    paddingBottom: space.xl,
  },
  summaryLabel: {
    fontFamily: font.bodySemi,
    fontSize: 10,
    letterSpacing: 1.4,
    color: 'rgba(255,255,255,0.72)',
  },
  summaryValue: {
    fontFamily: font.display,
    fontSize: 46,
    letterSpacing: -1.6,
    color: color.white,
    marginTop: 4,
  },
  summaryNote: { fontFamily: font.body, fontSize: 13, color: 'rgba(255,255,255,0.75)' },

  summaryRows: { gap: space.sm + 2, marginTop: space.lg },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm + 2,
    padding: space.sm + 4,
    borderRadius: radius.md,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  summaryRowIcon: {
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  summaryRowTitle: { fontFamily: font.bodySemi, fontSize: 13.5, color: color.white },
  summaryRowNote: { fontFamily: font.body, fontSize: 11.5, color: 'rgba(255,255,255,0.72)' },
  bar: {
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.22)',
    marginTop: 7,
    overflow: 'hidden',
  },
  barFill: { height: '100%', borderRadius: 3, backgroundColor: color.white },

  featureCard: { flexDirection: 'row', gap: space.md, alignItems: 'flex-start' },
  featureTitle: {
    fontFamily: font.display,
    fontSize: 18,
    letterSpacing: -0.4,
    color: color.ink,
    marginBottom: 5,
  },
});
