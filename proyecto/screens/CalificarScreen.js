import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Dato, CajaTexto, Moneda, Boton, colores } from '../components';
export default function CalificarScreen() {
  return (
    <PantallaBase titulo="Calificar a" iconos={['volver']}>
      <View style={{ backgroundColor: colores.azul, alignItems: 'center', paddingVertical: 10 }}>
        <Avatar ancho={90} alto={80} />
      </View>
      <Text style={{ fontSize: 15, fontWeight: '900', marginTop: 12 }}>CURSO DE PYTHON</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
        <Dato etiqueta="IMPARTIDO POR:" valor={'JUAN PEREZ\n23 AÑOS'} grande />
        <View><Dato etiqueta="COSTO:" valor="" /><Moneda valor={2} /></View>
      </View>
      <Dato etiqueta="CALIFICACION:" valor="★ 4/5" grande style={{ marginTop: 8 }} />
      <CajaTexto etiqueta="RESEÑA:" texto="El curso me parecio de gran utilidad" style={{ height: 90 }} />
      <Boton titulo="CALIFICAR" color={colores.verde} pill={false} />
    </PantallaBase>
  );
}
