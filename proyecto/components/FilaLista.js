import { View, Text, StyleSheet } from 'react-native';
import { colores } from './tema';
import { Icono } from './Icono';

export const FilaLista = ({ titulo, detalle, acciones = ['lapiz', 'basura'] }) => (
  <View style={s.fila}>
    <View style={{ flex: 1 }}>
      <Text style={s.titulo}>{titulo}</Text>
      {detalle ? <Text style={s.detalle}>{detalle}</Text> : null}
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {acciones.map((a, i) => <Icono key={i} nombre={a} tam={26} style={{ marginLeft: 14 }} />)}
    </View>
  </View>
);
const s = StyleSheet.create({
  fila: { backgroundColor: colores.azul, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 14, marginBottom: 14 },
  titulo: { color: '#fff', fontSize: 16, fontWeight: '900', letterSpacing: 2 },
  detalle: { color: colores.marino, fontSize: 11, fontWeight: 'bold', letterSpacing: 1, marginTop: 4 },
});
