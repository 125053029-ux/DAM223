import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Dato, colores, EditarEliminar } from '../components';
export default function CalificacionesScreen() {
  return (
    <PantallaBase titulo="Calificaciones">
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: colores.azul, padding: 14 }}>
        <Dato etiqueta="PROMEDIO:" valor="★ 4.0" grande />
        <Dato etiqueta="TOTAL:" valor="2 calificaciones" />
      </View>
      {[['Introduccion a HTML', 'PEDRO LOPEZ', '★ 4/5', 'Un muy buen curso, con un agradable ambiente'], ['Curso de PYTHON', 'ANA RUIZ', '★ 4/5', 'El curso me parecio de gran utilidad']].map(([c, q, n, r]) => (
        <View key={q} style={{ borderWidth: 2, borderColor: '#555', padding: 6, marginTop: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar ancho={28} alto={28} />
            <Text style={{ backgroundColor: colores.gris, fontSize: 10, fontWeight: 'bold', color: colores.marino, marginLeft: 6, paddingHorizontal: 4 }}>{c} · {q}</Text>
            <Text style={{ marginLeft: 'auto', fontWeight: 'bold', fontSize: 14 }}>{n}</Text>
          </View>
          <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 8 }}>{r}</Text>
          <EditarEliminar />
        </View>
      ))}
    </PantallaBase>
  );
}
