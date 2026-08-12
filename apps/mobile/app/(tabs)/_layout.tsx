import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Icon } from '@/components/Icon';
import { theme } from '@/theme';

/**
 * Bottom tabs, the native equivalent of the web nav bar.
 *
 * Five destinations is the practical ceiling for a tab bar, so "Our Work"
 * and "Legal" live in the parent stack and are reached from Home and About
 * rather than getting their own tabs.
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: theme.color.paper },
        headerTitleStyle: { fontFamily: theme.font.displaySemi, fontSize: 17 },
        headerShadowVisible: false,
        headerTintColor: theme.color.ink,
        tabBarActiveTintColor: theme.color.teal,
        tabBarInactiveTintColor: theme.color.muted2,
        tabBarStyle: {
          backgroundColor: theme.color.paper,
          borderTopColor: theme.color.line,
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingTop: 6,
        },
        tabBarLabelStyle: { fontFamily: theme.font.bodyMedium, fontSize: 11 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size - 3} />,
        }}
      />
      <Tabs.Screen
        name="habits"
        options={{
          title: 'Habits',
          headerTitle: 'Your Habits',
          tabBarIcon: ({ color, size }) => <Icon name="chart" color={color} size={size - 3} />,
        }}
      />
      <Tabs.Screen
        name="assistance"
        options={{
          title: 'Assistance',
          headerTitle: 'Get Assistance',
          tabBarIcon: ({ color, size }) => <Icon name="handshake" color={color} size={size - 3} />,
        }}
      />
      <Tabs.Screen
        name="involved"
        options={{
          title: 'Involved',
          headerTitle: 'Get Involved',
          tabBarIcon: ({ color, size }) => <Icon name="users" color={color} size={size - 3} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerTitle: 'About Us',
          tabBarIcon: ({ color, size }) => <Icon name="eye" color={color} size={size - 3} />,
        }}
      />
    </Tabs>
  );
}
