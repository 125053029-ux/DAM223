import { View, Text } from 'react-native';
import { PantallaBase, Moneda, Dato, Seccion, colores } from '../components';
const movs = [['08 Oct 2026', 'Introduccion a HTML', '+2'], ['09 Oct 2026', 'Curso de PYTHON', '-2'], ['01 Oct 2026', 'Bono de bienvenida', '+10']];
export default function CreditosScreen() {
  return (
    <PantallaBase titulo="Mis creditos">
      <View style={{ backgroundColor: colores.azul, alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: colores.marino, letterSpacing: 2, marginBottom: 6 }}>SALDO ACTUAL</Text>
        <Moneda valor={10} tam={34} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 14 }}>
        <Dato etiqueta="CREDITOS OBTENIDOS:" valor="12 ↑" />
        <Dato etiqueta="CREDITOS GASTADOS:" valor="2 ↓" />
      </View>
      <Seccion titulo="Movimientos" />
      {movs.map(([f, t, c]) => (
        <View key={t} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colores.azul, padding: 10, marginBottom: 10 }}>
          <View>
            <Text style={{ fontSize: 11, fontWeight: 'bold', color: colores.marino, letterSpacing: 1 }}>{f}</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colores.marino, letterSpacing: 1 }}>{t}</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: '900', color: c.startsWith('+') ? '#0A7D3B' : colores.rojo }}>{c}</Text>
        </View>
      ))}
    </PantallaBase>
  );
}
