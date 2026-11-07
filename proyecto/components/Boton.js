import { Pressable, Text, StyleSheet } from 'react-native';
import { colores } from './tema';
export const Boton = ({ titulo, color = colores.boton, textoColor = '#fff', pill = true, style, onPress }) => (
  <Pressable onPress={onPress} style={({ pressed }) => [s.b, { backgroundColor: color, borderRadius: pill ? 20 : 4, opacity: pressed ? 0.8 : 1 }, style]}>
    <Text style={[s.t, { color: textoColor }]}>{titulo}</Text>
  </Pressable>
);
const s = StyleSheet.create({
  b: { paddingVertical: 10, 
    paddingHorizontal: 30, 
    alignSelf: 'center', 
    marginVertical: 8 },
  t: { fontWeight: 'bold', 
    fontSize: 13 },
});
