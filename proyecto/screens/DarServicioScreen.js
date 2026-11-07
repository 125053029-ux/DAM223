import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Campo, Dato, CajaTexto, Boton, Moneda, colores } from '../components';
export default function DarServicioScreen() {
  return (
    <PantallaBase titulo="Proveer servicio">
      <View style={{ flexDirection: 'row' }}>
        <Avatar ancho={80} alto={80} />
        <View style={{ flex: 1, marginLeft: 6 }}>
          <Campo placeholder="Nombre del Servicio..." style={{ marginBottom: 6 }} />
          <Campo placeholder="Descripcion..." style={{ marginBottom: 0 }} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
        <View><Dato etiqueta="COSTO:" valor="" /><Moneda valor="1=HORA" tam={14} /></View>
        <Dato etiqueta="LUGAR:" valor="" style={{ width: 90 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 }}>
        <Dato etiqueta="FECHA:" valor="DD | MM | AA" />
        <Dato etiqueta="HORA:" valor="00:00" style={{ width: 90 }} />
      </View>
      <CajaTexto etiqueta="SOBRE MI:" texto="Soy programador, con un TSU en Desarrollo de Software, amplio conocimiento de varios lenguajes de coding" style={{ marginTop: 20 }} />
      <Boton titulo="PUBLICAR" color={colores.verde} textoColor="#fff" pill={false} style={{ alignSelf: 'flex-end' }} />
    </PantallaBase>
  );
}
