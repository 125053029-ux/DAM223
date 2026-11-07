import { View, Text, StyleSheet } from 'react-native';
import { colores } from './tema';
import { Icono } from './Icono';

export const Ficha = ({ texto, icono, grande }) => (
  <View style={[s.ficha, grande && { width: 90, height: 64 }]}>
    {icono ? <Icono nombre={icono} tam={34} /> : null}
    {texto ? <Text style={[s.texto, icono && { marginTop: 3 }]}>{texto}</Text> : null}
  </View>
);
const s = StyleSheet.create({
  ficha: { width: 72, height: 64, backgroundColor: colores.azul, alignItems: 'center', justifyContent: 'center', marginHorizontal: 6 },
  texto: { color: '#fff', fontWeight: 'bold', fontSize: 11, letterSpacing: 1 },
});
