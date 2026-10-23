import { FlatList, StyleSheet, Text, View } from 'react-native';

import { PlaylistCard } from '@/components/PlaylistCard';
import { colors, spacing } from '@/constants/theme';
import type { Playlist } from '@/data/mock';

type Props = {
  title: string;
  data: Playlist[];
};

// Una sección con título y un carrusel horizontal de playlists.
export function PlaylistRow({ title, data }: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {/* FlatList solo dibuja los elementos visibles: es la forma
          recomendada de mostrar listas en React Native. */}
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaylistCard playlist={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: spacing.lg,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  list: {
    paddingHorizontal: spacing.md,
    gap: spacing.md,
  },
});
