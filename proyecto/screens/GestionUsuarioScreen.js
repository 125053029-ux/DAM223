import { View, Text } from 'react-native';
import { PantallaBase, Avatar, TarjetaServicio, Boton, CajaTexto, colores, Icono } from '../components';
export default function GestionUsuarioScreen() {
  return (
    <PantallaBase titulo="Gestion de usuario">
      <View style={{ backgroundColor: colores.azul, alignItems: 'center', paddingVertical: 14 }}>
        <Avatar ancho={80} alto={80} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 18, paddingHorizontal: 40 }}>
        <View style={{ alignItems: 'center' }}><Icono nombre="lista" tam={44} /><Text style={{ fontSize: 11, fontWeight: 'bold' }}>SERVICIOS</Text></View>
        <View style={{ alignItems: 'center' }}><Icono nombre="reloj" tam={44} /><Text style={{ fontSize: 11, fontWeight: 'bold' }}>HISTORIAL</Text></View>
      </View>
      <TarjetaServicio fecha="08 Oct 2026" titulo="Introduccion a HTML" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Boton titulo="Suspender Servicio" color={colores.amarillo} textoColor="#000" pill={false} style={{ paddingHorizontal: 10 }} />
        <Boton titulo="Eliminar Servicio" color={colores.rojo} pill={false} style={{ paddingHorizontal: 10 }} />
      </View>
      <CajaTexto etiqueta="INFORMACION:" texto={'Nombre: John Due\nEdad: 34 años\nCarrera: TIID\nCreditos: 10'} />
      <Boton titulo="Eliminar Cuenta" color={colores.rojo} pill={false} />
    </PantallaBase>
  );
}
