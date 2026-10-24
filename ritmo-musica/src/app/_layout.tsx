import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Layout raíz: envuelve toda la app.
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
