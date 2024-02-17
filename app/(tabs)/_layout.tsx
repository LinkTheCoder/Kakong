import React from 'react';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: any) {
  // Check if FontAwesome6 icon is provided, if not, fallback to FontAwesome
  const IconComponent = props.isFontAwesome6 ? FontAwesome6 : FontAwesome;

  return <IconComponent size={28} style={{ marginTop: 10 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          backgroundColor: 'transparent', // Set tab bar background color to transparent
        },
        headerStyle: {
          backgroundColor: 'transparent', // Set header background color to transparent
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />, // Assuming you are using FontAwesome icons here
          headerRight: () => (
            <Link href="/info" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="study"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} isFontAwesome size={24}/>, // Using FontAwesome6 icon here
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="pen-nib" color={color} isFontAwesome6 size={24}/>, // Using FontAwesome6 icon here
        }}
      />
    </Tabs>
  );
}
