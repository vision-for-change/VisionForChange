import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { site, updates, updatesPage } from '@vfc/shared';
import { Body, Button, Chip, Eyebrow, Heading, IconBadge, Lead, Section } from '@/components/ui';
import { theme } from '@/theme';

const { color, space, font } = theme;

export default function UpdatesScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: color.paper }}
      contentContainerStyle={{ paddingBottom: space['2xl'] }}
      showsVerticalScrollIndicator={false}
    >
      <View style={s.head}>
        <Eyebrow>{updatesPage.eyebrow}</Eyebrow>
        <Heading top={updatesPage.titleTop} accent={updatesPage.titleAccent} level={1} />
        <View style={{ marginTop: space.md }}>
          <Lead>{updatesPage.body}</Lead>
        </View>
      </View>

      <Section>
        {updates.map((update) => (
          <View key={update.title} style={s.row}>
            <IconBadge name={update.icon} size={44} tone="paper" />
            <View style={{ flex: 1, gap: 6 }}>
              <Text style={s.title}>{update.title}</Text>
              <Body>{update.body}</Body>
              <Chip
                label={update.statusLabel}
                tone={
                  update.status === 'active'
                    ? 'active'
                    : update.status === 'planned'
                      ? 'planned'
                      : 'neutral'
                }
              />
            </View>
          </View>
        ))}

        <Button
          label="Follow Our Work"
          href={site.instagram}
          icon="arrowUpRight"
          style={{ marginTop: space.lg }}
        />
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
  row: {
    flexDirection: 'row',
    gap: space.md,
    alignItems: 'flex-start',
    paddingVertical: space.md + 4,
    borderBottomWidth: 1,
    borderBottomColor: color.line,
  },
  title: { fontFamily: font.display, fontSize: 18, letterSpacing: -0.4, color: color.ink },
});
