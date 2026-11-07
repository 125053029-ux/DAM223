import { View, Text, StyleSheet } from 'react-native';
import { PantallaBase, colores, Icono, Accion } from '../components';

export default function HabilidadesScreen({ otros = false }) {
  const lista = otros
    ? ['Manejo amplio de SKRATCH', 'Manejo amplio de PYTHON']
    : ['Manejo amplio de HTML', 'Manejo amplio de CSS'];
  return (
    <PantallaBase titulo={otros ? 'Habilidades' : 'Mis habilidades'}>
      {lista.map((h, i) => (
        <View key={i} style={s.card}>
          <Text style={s.n}>Habilidad {i + 1}</Text>
          <Text style={s.t}><Text style={{ color: colores.verde }}>● </Text>{h}</Text>
          {!otros && <Icono nombre="lapiz" tam={26} style={s.lapiz} />}
        </View>
      ))}
      {!otros && <Accion icono="mas" texto="Agregar Habilidad" style={{ marginTop: 6 }} />}
      {!otros && (
        <Text style={{ color: colores.boton, fontSize: 12, fontWeight: 'bold', marginTop: 12 }}>Aqui iran apareciendo tus habilidades :D</Text>
      )}
    </PantallaBase>
  );
}
const s = StyleSheet.create({
  card: { backgroundColor: colores.azul, padding: 8, marginBottom: 12 },
  n: { fontSize: 10, fontWeight: 'bold', color: colores.marino, letterSpacing: 1 },
  t: { fontSize: 12, fontWeight: 'bold', color: colores.marino, letterSpacing: 1, marginTop: 6 },
  lapiz: { position: 'absolute', right: -8, top: -12 },
});
