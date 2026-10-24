import { Pressable, StyleSheet, Text } from "react-native";

import { Cover } from "@/components/Cover";
import { colors, spacing } from "@/constants/theme";
import type { Playlist } from "@/data/mock";

type Props = {
  playlist: Playlist;
};

export function QuickPickCard({ playlist }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
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
    flexDirection: "row", // portada y título uno al lado del otro
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 8,
    overflow: "hidden",
    gap: spacing.sm,
    paddingRight: spacing.sm,
  },
  pressed: { backgroundColor: colors.surfaceHighlight },
  title: { flex: 1, color: colors.text, fontSize: 13, fontWeight: "700" },
});
