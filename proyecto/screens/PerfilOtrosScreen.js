import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Moneda, Dato, CajaTexto, Seccion, TarjetaServicio, colores, Icono } from '../components';
export default function PerfilOtrosScreen() {
  return (
    <PantallaBase titulo="Perfil de Juan Perez">
      <View style={{ backgroundColor: colores.azul, alignItems: 'center', paddingVertical: 10 }}>
        <Avatar ancho={90} alto={80} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 }}>
        <Text style={{ fontSize: 13, fontWeight: '900' }}>JUAN PEREZ{'\n'}23 AÑOS</Text>
        <Moneda valor={4} tam={16} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Dato etiqueta="CALIFICACION:" valor="★ 4" />
        <Dato etiqueta="VER HABILIDADES:" valor={<Icono nombre="lista" tam={26} />} />
      </View>
      <CajaTexto etiqueta="SOBRE MI:" texto="Joven con gusto por enseñar y compartir conocimientos acerca de la programacion" />
      <Seccion titulo="Mis Servicios" />
      <TarjetaServicio fecha="09 Oct 2026" titulo="Curso de PYTHON" />
    </PantallaBase>
  );
}
