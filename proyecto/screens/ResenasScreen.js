import { View, Text } from 'react-native';
import { PantallaBase, Avatar, colores } from '../components';
export default function ResenasScreen() {
  return (
    <PantallaBase titulo="Reseñas">
      <View style={{ borderWidth: 2, borderColor: '#555', padding: 6 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar ancho={28} alto={28} />
          <Text style={{ backgroundColor: colores.gris, fontSize: 10, fontWeight: 'bold', color: colores.marino, marginLeft: 6, paddingHorizontal: 4 }}>Introduccion a HTML</Text>
        </View>
        <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 8 }}>Un muy buen curso para conocer lo que es HTML y sus conceptos basicos, con un agradable ambiente</Text>
      </View>
      <Text style={{ color: colores.boton, fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
        Aqui iran apareciendo las Reseñas que te deja la comunidad :D
      </Text>
    </PantallaBase>
  );
}
