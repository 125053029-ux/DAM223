import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Moneda, Dato, CajaTexto, Seccion, TarjetaServicio, colores, Icono, Accion } from '../components';

export default function PerfilScreen() {
  return (
    <PantallaBase titulo="Mi perfil" derecha={<Icono nombre="lista" tam={28} />} iconos={['puerta', 'lista', 'volver']}>
      <View style={{ backgroundColor: colores.azul, alignItems: 'center', paddingVertical: 10 }}>
        <Avatar ancho={90} alto={80} />
        <Icono nombre="lapiz" tam={26} style={{ position: 'absolute', right: 6, top: 4 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 13, fontWeight: '900' }}>JOHN DUE{'\n'}34 AÑOS</Text>
          <Icono nombre="lapiz" tam={20} style={{ marginLeft: 8 }} />
        </View>
        <Moneda valor={10} tam={16} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Dato etiqueta="CALIFICACION:" valor="★ 4" />
        <Dato etiqueta="VER RESEÑAS:" valor={<Icono nombre="ojo" tam={26} />} />
      </View>
      <CajaTexto etiqueta="SOBRE MI:" texto="Joven apasionado por la programacion y los video-juegos, con interes de aprededer y compartir conocimiento." />
      <Seccion titulo="Mis Servicios" />
      <TarjetaServicio fecha="08 Oct 2026" titulo="Introduccion a HTML" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Accion icono="mas" texto="Agregar Servicio" />
        <Accion icono="menos" texto="Eliminar Servicio" />
      </View>
    </PantallaBase>
  );
}
