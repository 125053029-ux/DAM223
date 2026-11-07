import { View } from 'react-native';
import { PantallaAuth, Campo, Boton, Enlace } from '../components';
export default function RegistroScreen() {
  return (
    <PantallaAuth>
      <Campo placeholder="Nombre..." />
      <Campo placeholder="Edad..." keyboardType="numeric" />
      <Campo placeholder="Carrera..." />
      <Campo placeholder="Gmail..." keyboardType="email-address" autoCapitalize="none" />
      <Campo placeholder="Contraseña..." secure />
      <View style={{ marginTop: 20 }}>
        <Boton titulo="SIGN UP" />
        <Enlace texto="Regresar" />
      </View>
    </PantallaAuth>
  );
}
