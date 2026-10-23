import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/constants/theme';

// Layout raíz: envuelve toda la app.
// Usamos un Stack (pantallas apiladas) porque más adelante abriremos
// pantallas encima de las pestañas, como el reproductor a pantalla completa.
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </>
  );
}
