import { View, Text } from 'react-native';
import { PantallaAuth, Campo, Boton, Enlace, Encabezado, colores, Icono } from '../components';
export default function RecuperarPassScreen() {
  return (
    <PantallaAuth>
      <Encabezado texto="Recuperar Contraseña" style={{ textAlign: 'center', fontSize: 13, marginBottom: 30 }} />
      <Campo placeholder="Gmail..." keyboardType="email-address" autoCapitalize="none" />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Icono nombre="lapiz" tam={18} />
        <Text style={{ color: colores.marino, fontSize: 12, fontWeight: 'bold', marginLeft: 6, flex: 1 }}>Se te enviara un correo para recuperar tu contraseña :D</Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <Boton titulo="ENVIAR" />
        <Enlace texto="Regresar" />
      </View>
    </PantallaAuth>
  );
}
