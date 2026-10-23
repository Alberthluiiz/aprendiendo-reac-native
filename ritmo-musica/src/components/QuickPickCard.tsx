import { Pressable, StyleSheet, Text } from 'react-native';

import { Cover } from '@/components/Cover';
import { colors, spacing } from '@/constants/theme';
import type { Playlist } from '@/data/mock';

type Props = {
  playlist: Playlist;
};

// Tarjeta horizontal compacta (portada a la izquierda, título a la derecha).
// Se muestran en una cuadrícula de 2 columnas en la pantalla de Inicio.
export function QuickPickCard({ playlist }: Props) {
  return (
    <Pressable
      // "pressed" es true mientras el dedo está sobre la tarjeta:
      // así damos una respuesta visual al tocarla.
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <Cover colors={playlist.colors} size={56} radius={6} />
      <Text style={styles.title} numberOfLines={2}>
        {playlist.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 8,
    overflow: 'hidden',
    gap: spacing.sm,
    paddingRight: spacing.sm,
  },
  pressed: {
    backgroundColor: colors.surfaceHighlight,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
});
