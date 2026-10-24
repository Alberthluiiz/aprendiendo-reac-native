import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/theme";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buscar: lo construimos en el paso 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { color: colors.textMuted, fontSize: 16 },
});
