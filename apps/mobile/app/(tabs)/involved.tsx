import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { involveOptions, involvePage, site } from '@vfc/shared';
import {
  Body,
  Button,
  Card,
  Eyebrow,
  Heading,
  IconBadge,
  Lead,
  LinkRow,
  Section,
} from '@/components/ui';
import { theme } from '@/theme';

const { color, space, font } = theme;

export default function InvolvedScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: color.paper }}
      contentContainerStyle={{ paddingBottom: space['2xl'] }}
      showsVerticalScrollIndicator={false}
    >
      <View style={s.head}>
        <Eyebrow>{involvePage.eyebrow}</Eyebrow>
        <Heading top={involvePage.titleTop} accent={involvePage.titleAccent} level={1} />
        <View style={{ marginTop: space.md }}>
          <Lead>{involvePage.body}</Lead>
        </View>
      </View>

      <Section>
        <View style={{ gap: space.sm + 4 }}>
          {involveOptions.map((option) => (
            <Card key={option.title}>
              <IconBadge name={option.icon} size={48} />
              <Text style={s.cardTitle}>{option.title}</Text>
              <Body>{option.body}</Body>
              <Button
                label={option.linkLabel}
                href={option.href}
                variant="outline"
                icon={option.external ? 'arrowUpRight' : 'mail'}
                style={{ marginTop: space.md }}
              />
            </Card>
          ))}
        </View>
      </Section>

      <Section tone>
        <Eyebrow>Contact</Eyebrow>
        <Heading top="Not sure where you" accent="fit in?" />
        <View style={{ marginTop: space.md, marginBottom: space.lg }}>
          <Body>Reach out and tell us what you&apos;d like to do. We&apos;ll figure it out together.</Body>
        </View>

        <View style={{ gap: space.sm + 2 }}>
          <LinkRow icon="mail" label="Email" value={site.email} href={`mailto:${site.email}`} />
          <LinkRow icon="phone" label="Phone" value={site.phone} href={`tel:${site.phoneHref}`} />
          <LinkRow
            icon="instagram"
            label="Instagram"
            value={site.instagramHandle}
            href={site.instagram}
            external
          />
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
  cardTitle: {
    fontFamily: font.display,
    fontSize: 21,
    letterSpacing: -0.5,
    color: color.ink,
    marginTop: space.md,
    marginBottom: 7,
  },
});
