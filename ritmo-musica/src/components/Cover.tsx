import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

type Props = {
  colors: [string, string];
  size: number;
  radius?: number; // el ? significa que es opcional
};

export function Cover({ colors, size, radius = 8 }: Props) {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }} // esquina superior izquierda
      end={{ x: 1, y: 1 }} // esquina inferior derecha
      style={[
        styles.cover,
        { width: size, height: size, borderRadius: radius },
      ]}
    >
      <Ionicons
        name="musical-notes"
        size={size * 0.4}
        color="rgba(255,255,255,0.85)"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cover: { alignItems: "center", justifyContent: "center" },
});
