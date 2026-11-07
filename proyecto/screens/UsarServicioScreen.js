import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Dato, CajaTexto, Moneda, Boton, colores, Icono } from '../components';
export default function UsarServicioScreen() {
  return (
    <PantallaBase titulo="Curso de Python" derecha={<Icono nombre="corazon" tam={28} />} iconos={['volver']}>
      <View style={{ backgroundColor: colores.azul, alignItems: 'center', paddingVertical: 10 }}>
        <Avatar ancho={90} alto={80} />
        <Icono nombre="ojo" tam={26} style={{ position: 'absolute', right: 8, top: 6 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Dato etiqueta="IMPARTIDO POR:" valor={'JUAN PEREZ\n23 AÑOS'} grande />
        <View><Dato etiqueta="COSTO:" valor="" /><Moneda valor={2} /></View>
      </View>
      <CajaTexto etiqueta="DESCRIPCION:" texto="En este curso aprenderas las bases del lenguaje Python, para asi expandir tus conocimientos." style={{ marginTop: 14 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Dato etiqueta="FECHA:" valor="09 Oct 2026" />
        <Dato etiqueta="HORA:" valor="15:00" />
      </View>
      <Dato etiqueta="LUGAR:" valor="Edificio X" style={{ marginTop: 10 }} />
      <Boton titulo="TOMAR SERVICIO" color={colores.verde} pill={false} />
    </PantallaBase>
  );
}
