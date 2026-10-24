import { FlatList, StyleSheet, Text, View } from "react-native";

import { PlaylistCard } from "@/components/PlaylistCard";
import { colors, spacing } from "@/constants/theme";
import type { Playlist } from "@/data/mock";

type Props = {
  title: string;
  data: Playlist[];
};

export function PlaylistRow({ title, data }: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id} // identificador único de cada elemento
        renderItem={({ item }) => <PlaylistCard playlist={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: spacing.lg },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  list: { paddingHorizontal: spacing.md, gap: spacing.md },
});
