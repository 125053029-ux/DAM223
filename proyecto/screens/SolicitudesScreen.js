import { View, Text } from 'react-native';
import { PantallaBase, Avatar, Boton, colores } from '../components';
export default function SolicitudesScreen() {
  return (
    <PantallaBase titulo="Solicitudes">
      <View style={{ borderWidth: 2, borderColor: '#555', padding: 6 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar ancho={28} alto={28} />
          <Text style={{ backgroundColor: colores.gris, fontSize: 10, fontWeight: 'bold', color: colores.marino, marginLeft: 6, paddingHorizontal: 4 }}>PEDRO LOPEZ</Text>
        </View>
        <Text style={{ fontSize: 13, letterSpacing: 1, fontWeight: 'bold', marginTop: 8 }}>Pedro Lopez, esta solicitando tu curso de "Introduccion a HTML"</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Boton titulo="Aceptar" color={colores.verde} pill={false} style={{ paddingHorizontal: 18 }} />
          <Boton titulo="Rechazar" color={colores.rojo} pill={false} style={{ paddingHorizontal: 18 }} />
        </View>
      </View>
      <Text style={{ color: colores.boton, fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
        Aqui iran apareciendo las solicitudes a los cursos que ofrezcas :D
      </Text>
    </PantallaBase>
  );
}
