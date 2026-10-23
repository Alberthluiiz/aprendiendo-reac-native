import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PlaylistRow } from '@/components/PlaylistRow';
import { QuickPickCard } from '@/components/QuickPickCard';
import { colors, spacing } from '@/constants/theme';
import { quickPicks, recentlyPlayed, recommended } from '@/data/mock';

// Devuelve un saludo según la hora del día.
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Buenos días';
  if (hour < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

export default function HomeScreen() {
  // Agrupamos las tarjetas de 2 en 2 para formar una cuadrícula de 2 columnas.
  const pairs = [];
  for (let i = 0; i < quickPicks.length; i += 2) {
    pairs.push(quickPicks.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      {/* Degradado suave detrás del encabezado: le da personalidad a la app. */}
      <LinearGradient
        colors={['rgba(139,92,246,0.45)', colors.background]}
        style={styles.glow}
      />
      {/* SafeAreaView evita que el contenido quede debajo del notch o la barra de estado. */}
      <SafeAreaView edges={['top']} style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.greeting}>{getGreeting()}</Text>

          <View style={styles.grid}>
            {pairs.map((pair) => (
              <View key={pair[0].id} style={styles.gridRow}>
                {pair.map((playlist) => (
                  <QuickPickCard key={playlist.id} playlist={playlist} />
                ))}
              </View>
            ))}
          </View>

          <PlaylistRow title="Hecho para ti" data={recommended} />
          <PlaylistRow title="Escuchado recientemente" data={recentlyPlayed} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 280,
  },
  content: {
    paddingBottom: spacing.xl,
  },
  greeting: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    marginBottom: spacing.md,
  },
  grid: {
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  gridRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
});
