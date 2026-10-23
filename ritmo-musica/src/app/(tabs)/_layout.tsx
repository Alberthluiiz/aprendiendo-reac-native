import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router/js-tabs';

import { colors } from '@/constants/theme';

type TabIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: unknown;
};

// Ícono de cada pestaña. La barra nos pasa el color (activo o inactivo).
function TabIcon({ name, size, color }: TabIconProps) {
  return <Ionicons name={name} size={size} color={String(color)} />;
}

// Las carpetas entre paréntesis, como (tabs), son "grupos": organizan
// archivos sin cambiar la URL. Cada archivo de esta carpeta es una pestaña.
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        sceneStyle: { backgroundColor: colors.background },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="buscar"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon name={focused ? 'search' : 'search-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="biblioteca"
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon name={focused ? 'library' : 'library-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
