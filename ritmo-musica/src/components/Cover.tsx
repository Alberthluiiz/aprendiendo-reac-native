import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

type Props = {
  colors: [string, string];
  size: number;
  radius?: number;
};

// "Portada" de una playlist: un degradado con una nota musical en el centro.
// Es un componente pequeño y reutilizable: lo usamos en varias tarjetas.
export function Cover({ colors, size, radius = 8 }: Props) {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.cover, { width: size, height: size, borderRadius: radius }]}>
      <Ionicons name="musical-notes" size={size * 0.4} color="rgba(255,255,255,0.85)" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cover: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
