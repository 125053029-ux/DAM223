import { View, Text } from 'react-native';
import { PantallaBase, Moneda, Boton, colores } from '../components';
const datos = [
  ['08 Oct 2026', 'Introduccion a HTML', 'JOHN DUE ⇄ PEDRO LOPEZ', 2, 'PENDIENTE', colores.amarillo],
  ['09 Oct 2026', 'Curso de PYTHON', 'JOHN DUE ⇄ JUAN PEREZ', 2, 'COMPLETADO', colores.verde],
];
export default function IntercambiosScreen() {
  return (
    <PantallaBase titulo="Intercambios">
      {datos.map(([f, t, quien, c, estado, color]) => (
        <View key={t} style={{ backgroundColor: colores.azul, padding: 10, marginBottom: 16 }}>
          <Text style={{ fontSize: 11, fontWeight: 'bold', color: colores.marino, letterSpacing: 1 }}>{f} <Text style={{ color }}>● </Text>{estado}</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: colores.marino, letterSpacing: 1, marginTop: 4 }}>{t}</Text>
          <Text style={{ fontSize: 11, color: '#fff', fontWeight: 'bold', letterSpacing: 1, marginTop: 4 }}>{quien}</Text>
          <View style={{ alignSelf: 'flex-end' }}><Moneda valor={c} tam={14} /></View>
          {estado === 'PENDIENTE' && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Boton titulo="Confirmar" color={colores.verde} pill={false} style={{ paddingHorizontal: 14 }} />
              <Boton titulo="Cancelar" color={colores.rojo} pill={false} style={{ paddingHorizontal: 14 }} />
            </View>
          )}
        </View>
      ))}
      <Text style={{ color: colores.boton, fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>
        Aqui iran apareciendo tus intercambios :D
      </Text>
    </PantallaBase>
  );
}
