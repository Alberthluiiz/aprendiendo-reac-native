import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors } from "@/constants/theme";

type TabIconProps = {
  name: keyof typeof Ionicons.glyphMap; // solo acepta nombres de íconos que existen
  size: number;
  color: unknown;
};

// Ícono de cada pestaña. La barra nos pasa el color (activo o inactivo).
function TabIcon({ name, size, color }: TabIconProps) {
  return <Ionicons name={name} size={size} color={String(color)} />;
}

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
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          // focused es true cuando esta pestaña está seleccionada
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="buscar"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="biblioteca"
        options={{
          title: "Biblioteca",
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon
              name={focused ? "library" : "library-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
