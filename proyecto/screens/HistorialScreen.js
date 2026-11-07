import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Moneda, Dato, TarjetaServicio, colores } from '../components';
export default function HistorialScreen() {
  return (
    <PantallaBase titulo="Historial de usuario">
      <View style={{ flexDirection: 'row', backgroundColor: colores.azul, padding: 8 }}>
        <Avatar ancho={60} alto={60} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: '900', fontSize: 14 }}>JOHN DUE{'\n'}34 AÑOS</Text>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <Dato etiqueta="CREDITOS OBTENIDOS:" valor="10 ↑" style={{ marginRight: 10 }} />
            <Dato etiqueta="CREDITOS GASTADOS:" valor="2 ↓" />
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 11, fontWeight: 'bold', letterSpacing: 1, marginTop: 20, backgroundColor: colores.gris, alignSelf: 'flex-start' }}>SERVICIOS OFRECIDOS:</Text>
      <TarjetaServicio fecha="08 Oct 2026" titulo="Introduccion a HTML" />
      <Text style={{ fontSize: 11, fontWeight: 'bold', letterSpacing: 1, marginTop: 60, backgroundColor: colores.gris, alignSelf: 'flex-start' }}>SERVICIOS TOMADOS:</Text>
      <TarjetaServicio fecha="09 Oct 2026" titulo="Curso de PYTHON" />
    </PantallaBase>
  );
}
