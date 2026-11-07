import { View, Text, StyleSheet } from 'react-native';
import { colores } from './tema';
export const TarjetaServicio = ({ fecha, titulo, creditos = 2, style }) => (
  <View style={[s.tarjeta, style]}>
    <Text style={s.fecha}>{fecha} <Text style={{ color: colores.amarillo }}>●</Text></Text>
    <Text style={s.titulo}>{titulo}</Text>
    <Text style={s.creditos}>{creditos} creditos</Text>
  </View>
);
const s = StyleSheet.create({
  tarjeta: { backgroundColor: colores.azul, padding: 12, marginVertical: 8 },
  fecha: { fontSize: 11, color: colores.marino, fontWeight: 'bold', letterSpacing: 1 },
  titulo: { fontSize: 14, color: colores.marino, fontWeight: 'bold', letterSpacing: 1, marginTop: 4 },
  creditos: { fontSize: 11, color: colores.marino, alignSelf: 'flex-end', letterSpacing: 1 },
});
