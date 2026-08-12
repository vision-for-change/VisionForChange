import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { about, impactIntro, metrics, roadmap, team } from '@vfc/shared';
import { Body, Button, Card, Eyebrow, Heading, Lead, Section, Small } from '@/components/ui';
import { theme } from '@/theme';

const { color, space, font, radius } = theme;

export default function AboutScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={{ backgroundColor: color.paper }}
      contentContainerStyle={{ paddingBottom: space['2xl'] }}
      showsVerticalScrollIndicator={false}
    >
      <View style={s.head}>
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <Heading top={about.titleTop} accent={about.titleAccent} level={1} />
        <View style={{ marginTop: space.md }}>
          <Lead>{about.body}</Lead>
        </View>
      </View>

      <Section>
        <Eyebrow index="01">Why we started</Eyebrow>
        <Heading top={about.storyTitleTop} accent={about.storyTitleAccent} />
        <View style={{ gap: space.md, marginTop: space.md }}>
          {about.story.map((paragraph) => (
            <Text key={paragraph.slice(0, 32)} style={s.prose}>
              {paragraph}
            </Text>
          ))}
        </View>

        <View style={s.quote}>
          <Text style={s.quoteText}>{about.quote}</Text>
        </View>

        <Text style={s.prose}>{about.storyClose}</Text>
      </Section>

      <Section tone>
        <Eyebrow index="02">Where we&apos;re going</Eyebrow>
        <View style={s.timeline}>
          {roadmap.map((item) => (
            <View key={item.title} style={s.tl}>
              <View style={[s.tlDot, item.done && s.tlDotDone]} />
              <View style={{ flex: 1 }}>
                <Text style={s.tlTitle}>{item.title}</Text>
                <Body>{item.body}</Body>
              </View>
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <Eyebrow index="03">Our team</Eyebrow>
        <Heading top="The people" accent="behind it" />
        <View style={{ gap: space.sm + 4, marginTop: space.lg }}>
          {team.map((member) => (
            <Card key={member.name} style={s.member}>
              <View style={s.avatar}>
                <Text style={s.avatarText}>{member.initials}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.memberName}>{member.name}</Text>
                <Text style={s.memberRole}>{member.role.toUpperCase()}</Text>
                <View style={{ marginTop: 8 }}>
                  <Body>{member.body}</Body>
                </View>
              </View>
            </Card>
          ))}
        </View>
        <Button
          label="Join the Team"
          variant="outline"
          onPress={() => router.push('/involved')}
          style={{ marginTop: space.lg }}
        />
      </Section>

      <Section tone>
        <Eyebrow index="04">{impactIntro.eyebrow}</Eyebrow>
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

        <View style={{ marginTop: space.md }}>
          <Small>{impactIntro.footnote}</Small>
        </View>
      </Section>

      <Section>
        <View style={{ gap: space.sm + 2 }}>
          <Button label="Our Work" variant="outline" onPress={() => router.push('/updates')} />
          <Button label="Privacy, Terms and Accessibility" variant="outline" onPress={() => router.push('/legal')} />
        </View>
      </Section>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  head: {
    paddingHorizontal: space.lg,
    paddingTop: space.lg,
    paddingBottom: space.xl,
    backgroundColor: color.white,
  },
  prose: { fontFamily: font.body, fontSize: 16, lineHeight: 28, color: color.ink2 },

  quote: {
    marginVertical: space.lg,
    padding: space.md + 2,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.line,
    borderLeftWidth: 3,
    borderLeftColor: color.teal,
    borderRadius: radius.md,
  },
  quoteText: { fontFamily: font.displayItalic, fontSize: 18, lineHeight: 28, color: color.ink },

  timeline: { marginTop: space.md, gap: space.lg },
  tl: { flexDirection: 'row', gap: space.md, alignItems: 'flex-start' },
  tlDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: color.teal,
    backgroundColor: color.paper2,
    marginTop: 5,
  },
  tlDotDone: { backgroundColor: color.teal },
  tlTitle: { fontFamily: font.bodySemi, fontSize: 15.5, color: color.ink, marginBottom: 2 },

  member: { flexDirection: 'row', gap: space.md, alignItems: 'flex-start' },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.ink,
  },
  avatarText: { fontFamily: font.displaySemi, fontSize: 16, color: color.paper, letterSpacing: 0.5 },
  memberName: { fontFamily: font.display, fontSize: 18, letterSpacing: -0.3, color: color.ink },
  memberRole: {
    fontFamily: font.bodySemi,
    fontSize: 10.5,
    letterSpacing: 1.1,
    color: color.teal,
    marginTop: 3,
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
});
