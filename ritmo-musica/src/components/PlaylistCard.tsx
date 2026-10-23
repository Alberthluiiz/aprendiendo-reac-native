import { Pressable, StyleSheet, Text } from 'react-native';

import { Cover } from '@/components/Cover';
import { colors, spacing } from '@/constants/theme';
import type { Playlist } from '@/data/mock';

const SIZE = 150;

type Props = {
  playlist: Playlist;
};

// Tarjeta vertical (portada grande arriba, texto abajo).
// Se usan en los carruseles horizontales.
export function PlaylistCard({ playlist }: Props) {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <Cover colors={playlist.colors} size={SIZE} radius={12} />
      <Text style={styles.title} numberOfLines={1}>
        {playlist.title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        {playlist.subtitle}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: SIZE,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginTop: spacing.sm,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
});
