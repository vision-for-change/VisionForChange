import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { legal, site } from '@vfc/shared';
import { Body, Card, Eyebrow, Heading, LinkRow, Section } from '@/components/ui';
import { theme } from '@/theme';

const { color, space, font } = theme;

export default function LegalScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: color.paper }}
      contentContainerStyle={{ paddingBottom: space['2xl'] }}
      showsVerticalScrollIndicator={false}
    >
      <View style={s.head}>
        <Eyebrow>Legal</Eyebrow>
        <Heading top="Privacy, terms and" accent="accessibility" level={1} />
      </View>

      <Section>
        <View style={{ gap: space.sm + 4 }}>
          {legal.map((item) => (
            <Card key={item.title}>
              <Text style={s.title}>{item.title}</Text>
              <Body>{item.body}</Body>
            </Card>
          ))}
        </View>

        <View style={{ marginTop: space.lg }}>
          <LinkRow icon="mail" label="Questions" value={site.email} href={`mailto:${site.email}`} />
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
  title: {
    fontFamily: font.display,
    fontSize: 19,
    letterSpacing: -0.4,
    color: color.ink,
    marginBottom: 7,
  },
});
