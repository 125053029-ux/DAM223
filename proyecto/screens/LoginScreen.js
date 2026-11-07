import { View } from 'react-native';
import { PantallaAuth, Campo, Boton, Enlace } from '../components';
export default function LoginScreen() {
  return (
    <PantallaAuth>
      <Campo placeholder="Nombre..." />
      <Campo placeholder="Gmail..." keyboardType="email-address" autoCapitalize="none" />
      <Campo placeholder="Contraseña..." secure />
      <Enlace texto="Recuperar Contraseña" style={{ textAlign: 'left', fontSize: 12 }} />
      <View style={{ marginTop: 20 }}>
        <Boton titulo="LOG IN" />
        <Enlace texto="Regístrate" />
      </View>
    </PantallaAuth>
  );
}
