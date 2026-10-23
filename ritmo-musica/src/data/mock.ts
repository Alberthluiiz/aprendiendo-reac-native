// Datos de ejemplo. Más adelante los reemplazaremos por datos reales
// que vendrán de una API, pero así podemos construir la interfaz primero.

export type Playlist = {
  id: string;
  title: string;
  subtitle: string;
  // Dos colores para pintar la "portada" con un degradado.
  // Así no dependemos de imágenes con derechos de autor.
  colors: [string, string];
};

export const quickPicks: Playlist[] = [
  { id: 'q1', title: 'Tus favoritas', subtitle: '128 canciones', colors: ['#8B5CF6', '#FF6B8B'] },
  { id: 'q2', title: 'Enfoque profundo', subtitle: 'Lo-fi', colors: ['#0EA5E9', '#22D3EE'] },
  { id: 'q3', title: 'Salsa clásica', subtitle: 'Latina', colors: ['#F97316', '#FACC15'] },
  { id: 'q4', title: 'Rock en español', subtitle: 'Rock', colors: ['#EF4444', '#7F1D1D'] },
  { id: 'q5', title: 'Para entrenar', subtitle: 'Energía', colors: ['#22C55E', '#14B8A6'] },
  { id: 'q6', title: 'Noche tranquila', subtitle: 'Relax', colors: ['#6366F1', '#1E1B4B'] },
];

export const recommended: Playlist[] = [
  { id: 'r1', title: 'Descubrimiento semanal', subtitle: 'Música nueva para ti', colors: ['#A855F7', '#EC4899'] },
  { id: 'r2', title: 'Éxitos del momento', subtitle: 'Lo más escuchado', colors: ['#F43F5E', '#FB923C'] },
  { id: 'r3', title: 'Acústico', subtitle: 'Guitarras y voces', colors: ['#84CC16', '#065F46'] },
  { id: 'r4', title: 'Programando', subtitle: 'Concentración total', colors: ['#06B6D4', '#3B82F6'] },
];

export const recentlyPlayed: Playlist[] = [
  { id: 'p1', title: 'Viaje en carretera', subtitle: 'Playlist', colors: ['#EAB308', '#DC2626'] },
  { id: 'p2', title: 'Clásicos 80s', subtitle: 'Playlist', colors: ['#D946EF', '#4C1D95'] },
  { id: 'p3', title: 'Café de la mañana', subtitle: 'Playlist', colors: ['#A16207', '#FDE68A'] },
  { id: 'p4', title: 'Reggaetón', subtitle: 'Playlist', colors: ['#10B981', '#1D4ED8'] },
];
