import { View } from 'react-native';
import { PantallaBase, Avatar, Campo, Boton, colores } from '../components';
export default function EditarUsuarioScreen() {
  return (
    <PantallaBase titulo="Editar usuario" iconos={['home', 'volver']}>
      <View style={{ backgroundColor: colores.azul, alignItems: 'center', paddingVertical: 10, marginBottom: 16 }}>
        <Avatar ancho={90} alto={80} />
      </View>
      <Campo placeholder="Nombre..." />
      <Campo placeholder="Edad..." keyboardType="numeric" />
      <Campo placeholder="Carrera..." />
      <Campo placeholder="Gmail..." />
      <Boton titulo="GUARDAR" color={colores.verde} pill={false} />
      <Boton titulo="Eliminar Cuenta" color={colores.rojo} pill={false} />
    </PantallaBase>
  );
}
