import { View } from 'react-native';
import { PantallaAuth, Campo, Boton, Encabezado } from '../components';
export default function NuevaPassScreen() {
  return (
    <PantallaAuth>
      <Encabezado texto="Recuperar Contraseña" style={{ textAlign: 'center', fontSize: 13, marginBottom: 30 }} />
      <Campo placeholder="Contraseña Nueva..." secure />
      <Campo placeholder="Verificar Contraseña..." secure />
      <View style={{ marginTop: 30 }}>
        <Boton titulo="RECUPERAR" />
      </View>
    </PantallaAuth>
  );
}
