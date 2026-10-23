import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing } from '@/constants/theme';

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  message: string;
};

// Pantalla provisional para las pestañas que construiremos en los próximos pasos.
export function ComingSoon({ title, icon, message }: Props) {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.center}>
        <Ionicons name={icon} size={64} color={colors.accent} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    padding: spacing.md,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  message: {
    color: colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
  },
});
