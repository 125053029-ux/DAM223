import { View, Text, StyleSheet } from 'react-native';
import { PantallaBase, Avatar, colores, Icono } from '../components';
export default function GestionUsuariosScreen() {
  return (
    <PantallaBase titulo="Gestion de usuarios">
      {[1, 2, 3, 4].map((n) => (
        <View key={n} style={s.fila}>
          <Text style={s.nombre}>USUARIO {n}</Text>
          <Avatar ancho={40} alto={40} />
          <Icono nombre="lapiz" tam={26} style={s.lapiz} />
        </View>
      ))}
    </PantallaBase>
  );
}
const s = StyleSheet.create({
  fila: { backgroundColor: colores.azul, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 12, marginBottom: 22 },
  nombre: { color: '#fff', fontSize: 18, fontWeight: '900', letterSpacing: 2 },
  lapiz: { position: 'absolute', right: -6, top: -14 },
});
