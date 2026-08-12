import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { assistance, assistanceFaq, assistanceSteps, mailto } from '@vfc/shared';
import { Body, Button, Card, Eyebrow, Heading, Lead, Notice, Section } from '@/components/ui';
import { theme } from '@/theme';

const { color, space, font, radius } = theme;

export default function AssistanceScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: color.paper }}
      contentContainerStyle={{ paddingBottom: space['2xl'] }}
      showsVerticalScrollIndicator={false}
    >
      <View style={s.head}>
        <Eyebrow>{assistance.eyebrow}</Eyebrow>
        <Heading top={assistance.titleTop} accent={assistance.titleAccent} level={1} />
        <View style={{ marginTop: space.md }}>
          <Lead>{assistance.body}</Lead>
        </View>
        <View style={{ marginTop: space.lg }}>
          <Notice tone="teal">{assistance.aside}</Notice>
        </View>
      </View>

      <Section>
        <Eyebrow index="01">How it works</Eyebrow>
        <Heading top="Three steps," accent="no cost to you." />

        <View style={{ marginTop: space.lg }}>
          {assistanceSteps.map((step, i) => (
            <View key={step.title} style={s.step}>
              <View style={s.stepNum}>
                <Text style={s.stepNumText}>{i + 1}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.stepTitle}>{step.title}</Text>
                <Body>{step.body}</Body>
              </View>
            </View>
          ))}
        </View>

        <Button
          label={assistance.cta}
          href={mailto('Eye-Care Assistance Request')}
          icon="mail"
          style={{ marginTop: space.lg }}
        />

        <View style={{ marginTop: space.md }}>
          <Notice>{assistance.disclaimer}</Notice>
        </View>
      </Section>

      <Section tone>
        <Eyebrow index="02">Common questions</Eyebrow>
        <Heading top="Before you" accent="reach out" />
        <View style={{ gap: space.sm + 4, marginTop: space.lg }}>
          {assistanceFaq.map((item) => (
            <Card key={item.q}>
              <Text style={s.faqQ}>{item.q}</Text>
              <Body>{item.a}</Body>
            </Card>
          ))}
        </View>
      </Section>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  head: { paddingHorizontal: space.lg, paddingTop: space.lg, paddingBottom: space.xl, backgroundColor: color.white },

  step: {
    flexDirection: 'row',
    gap: space.md,
    alignItems: 'flex-start',
    paddingVertical: space.md + 2,
    borderTopWidth: 1,
    borderTopColor: color.line,
  },
  stepNum: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.tealWash,
    borderWidth: 1,
    borderColor: color.tealLine,
  },
  stepNumText: { fontFamily: font.displaySemi, fontSize: 17, color: color.teal },
  stepTitle: {
    fontFamily: font.display,
    fontSize: 18,
    letterSpacing: -0.4,
    color: color.ink,
    marginBottom: 5,
  },

  faqQ: {
    fontFamily: font.display,
    fontSize: 18,
    letterSpacing: -0.4,
    color: color.ink,
    marginBottom: 7,
  },
});
